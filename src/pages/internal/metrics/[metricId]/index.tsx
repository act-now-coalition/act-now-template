import {
  Breadcrumbs,
  CircularProgress,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

import {
  Metric,
  MetricData,
  Region,
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
        {data && (
          <ul>
            {regions.all.map((region) => (
              <li key={region.regionId}>
                <RegionDataInfo
                  region={region}
                  metric={metric}
                  data={data.metricData(region, metric)}
                />
              </li>
            ))}
          </ul>
        )}
        {!data && !error && <CircularProgress />}
      </Container>
    </>
  );
};

const RegionDataInfo = ({
  metric,
  region,
  data,
}: {
  metric: Metric;
  region: Region;
  data: MetricData;
}) => {
  let dataInfo = "";
  if (data.currentValue) {
    dataInfo = " (value = " + data.formatValue();
    if (data.hasTimeseries() && data.timeseries.hasData()) {
      const ts = data.timeseries;
      dataInfo += `, minDate=${isoDateOnlyString(
        ts.minDate
      )}, maxDate=${isoDateOnlyString(ts.maxDate)}, length=${ts.length}`;
    }
    dataInfo += ")";
  } else {
    dataInfo = " (no data)";
  }

  return (
    <Stack direction="row" spacing={1}>
      <Link href={`/internal/metrics/${metric.id}/${getRegionSlug(region)}`}>
        {region.fullName}
      </Link>
      <Typography>{dataInfo}</Typography>
    </Stack>
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
