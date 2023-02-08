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
  MetricLineChart,
  MetricLineThresholdChart,
  isoDateOnlyString,
  useData,
} from "@actnowcoalition/actnow.js";

import { cms } from "../../../../../cms";
import { PageMetaTags } from "../../../../../components/SocialMetaTags";
import { getRegionFromSlugStrict } from "src/pages/us/[regionSlug]";
import { metricCatalog } from "src/utils/metrics";
import { regions } from "src/utils/regions";
import { getRegionSlug } from "src/utils/routing";

const MetricPage: NextPage<{ regionId?: string; metricId?: string }> = ({
  regionId,
  metricId,
}) => {
  metricId = metricId ?? metricCatalog.metrics[0].id;
  regionId = regionId ?? regions.all[0].regionId;

  const metric = metricCatalog.getMetric(metricId);
  const region = regions.findByRegionIdStrict(regionId);
  const metricFullName = metric.extendedName
    ? `${metric.name}: ${metric.extendedName}`
    : metric.name;

  // TODO(michael): Fetching timeseries for all regions could be expensive. We might want to make this optional.
  const { data, error } = useData(region, metric, /*includeTimeseries=*/ true);

  const thresholds = metric.categoryThresholds;
  const categories = metric.categorySet?.categories;

  const haveTimeseries = data?.hasTimeseries() && data?.timeseries?.hasData();
  const useThresholdChart = thresholds?.length && categories;

  return (
    <>
      <PageMetaTags
        siteName={cms.settings.siteName}
        title={`Metrics: ${metric.id}`}
        description={metricFullName}
        url={`/internal/metrics/${metric.id}/${getRegionSlug(region)}`}
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
          <Link
            color="text.primary"
            underline="hover"
            href={`/internal/metrics/${metricId}/${getRegionSlug(region)}`}
          >
            {region.fullName}
          </Link>
        </Breadcrumbs>

        <Typography>Metric ID: {metric.id}</Typography>
        <Typography>Metric Name: {metricFullName}</Typography>
        <Typography>Region: {region.fullName}</Typography>
        {error && (
          <Stack>
            <Typography>Failed to fetch data:</Typography>
            <pre>error</pre>
            <Typography>
              More details may be available in the console.
            </Typography>
          </Stack>
        )}

        {data && (
          <Stack>
            <Typography variant="h2">Data</Typography>
            <Typography>
              <>Current value: {data?.formatValue()}</>
              {haveTimeseries && (
                <Stack>
                  <Typography variant="h3" mt={1}>
                    Chart
                  </Typography>
                  {useThresholdChart ? (
                    <MetricLineThresholdChart
                      region={region}
                      metric={metric}
                      width={600}
                      height={300}
                    />
                  ) : (
                    <MetricLineChart
                      region={region}
                      metric={metric}
                      width={600}
                      height={300}
                    />
                  )}

                  <Typography variant="h3" mt={2} mb={1}>
                    Raw Data
                  </Typography>
                  <TableContainer component={Paper} sx={{ width: 300 }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell align="right">Value</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.timeseries.points.map((row) => (
                          <TableRow
                            key={row.date.toISOString()}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {isoDateOnlyString(row.date)}
                            </TableCell>
                            <TableCell align="right">
                              {metric.formatValue(row.value)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Stack>
              )}
            </Typography>
          </Stack>
        )}

        {!data && !error && <CircularProgress />}
      </Container>
    </>
  );
};

interface MetricRegionPageParams extends ParsedUrlQuery {
  regionSlug: string;
  metricId: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { metricId, regionSlug } = params as MetricRegionPageParams;
  const region = getRegionFromSlugStrict(regionSlug);
  return { props: { metricId, regionId: region.regionId } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Prerendering pages for all metric+region combinations is slow and can cause
  // failed builds. So we use fallback rendering.
  return { paths: [], fallback: true };

  // const paths = regions.all
  //   .map((region) =>
  //     metricCatalog.metrics.map((metric) => ({
  //       params: { regionSlug: getRegionSlug(region), metricId: metric.id },
  //     }))
  //   )
  //   .flat();
  // return { paths, fallback: false };
};

export default MetricPage;
