import {
  Breadcrumbs,
  CircularProgress,
  Container,
  Link,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

import {
  Metric,
  MetricData,
  MultiRegionMultiMetricDataStore,
  isoDateOnlyString,
  useDataForRegionsAndMetrics,
} from "@actnowcoalition/actnow.js";

import { cms } from "../../../../cms";
import { PageMetaTags } from "../../../../components/SocialMetaTags";
import { metricCatalog } from "src/utils/metrics";
import { regions } from "src/utils/regions";
import { getRegionSlug } from "src/utils/routing";

const MetricPage: NextPage<{ metricId: string }> = ({ metricId }) => {
  const metric = metricCatalog.getMetric(metricId);
  const metricFullName = metric.extendedName
    ? `${metric.name}: ${metric.extendedName}`
    : metric.name;

  // TODO(michael): Fetching timeseries could be expensive. We might want to make this optional.
  const { data, error } = useDataForRegionsAndMetrics(
    regions.all,
    [metric],
    /*includeTimeseries=*/ true
  );

  return (
    <>
      <PageMetaTags
        siteName={cms.settings.siteName}
        title={`Metrics: ${metric.id}`}
        description={metricFullName}
        url={`/internal/metrics/${metric.id}`}
      />
      <Container maxWidth="md" sx={{ py: 5 }}>
        {/* TODO: Implement a basic version in the packages repo */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ my: 2 }}>
          <Link color="inherit" underline="hover" href="/">
            Home
          </Link>
          <Link color="inherit" underline="hover" href="/internal">
            Internal
          </Link>
          <Link color="text.primary" underline="hover" href="/internal/metrics">
            Metrics
          </Link>
          <Link
            color="text.primary"
            underline="hover"
            href={`/internal/metrics/${metricId}`}
          >
            {metricFullName}
          </Link>
        </Breadcrumbs>

        <Typography variant="h1">{metric.id}</Typography>
        <Typography>Name: {metric.name}</Typography>
        <Typography>Extended name: {metric.extendedName}</Typography>
        <Typography>
          Categories:{" "}
          {!metric.categoryValues ? "N/A" : metric.categoryValues.join(", ")}
        </Typography>

        <Typography variant="h2" mt={1}>
          Definition
        </Typography>
        <pre>{JSON.stringify(metric, null, 2)}</pre>

        <Typography variant="h2" mt={1}>
          Data Available
        </Typography>
        {error && (
          <Stack>
            <Typography>Failed to fetch data:</Typography>
            <pre>error</pre>
            <Typography>
              More details may be available in the console.
            </Typography>
          </Stack>
        )}
        {data ? (
          <RegionDataTable data={data} metric={metric} />
        ) : (
          <CircularProgress />
        )}
      </Container>
    </>
  );
};

const RegionDataTable = ({
  data,
  metric,
}: {
  data: MultiRegionMultiMetricDataStore;
  metric: Metric;
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Region</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="right">Min Date</TableCell>
            <TableCell align="right">Max Date</TableCell>
            <TableCell align="right">Length</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {regions.all.map((region) => (
            <RegionDataRow
              key={region.regionId}
              data={data.metricData(region, metric)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const RegionDataRow = ({ data }: { data: MetricData }) => {
  const ts = data.timeseries;
  return (
    <TableRow
      key={data.region.regionId}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell component="th" scope="row">
        <Link
          href={`/internal/metrics/${data.metric.id}/${getRegionSlug(
            data.region
          )}`}
        >
          {data.region.fullName}
        </Link>
      </TableCell>
      <TableCell align="right">
        {data.currentValue ? data.formatValue() : "no data"}
      </TableCell>
      {!ts.hasData() ? (
        <TableCell colSpan={3}>no timeseries</TableCell>
      ) : (
        <>
          <TableCell align="right">{isoDateOnlyString(ts.minDate)}</TableCell>
          <TableCell align="right">{isoDateOnlyString(ts.maxDate)}</TableCell>
          <TableCell align="right">{ts.length}</TableCell>
        </>
      )}
    </TableRow>
  );
};

interface MetricPageParams extends ParsedUrlQuery {
  metricId: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { metricId } = params as MetricPageParams;
  return { props: { metricId } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = metricCatalog.metrics.map((metric) => ({
    params: { metricId: metric.id },
  }));
  return { paths, fallback: false };
};

export default MetricPage;
