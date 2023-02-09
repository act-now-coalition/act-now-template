import {
  Breadcrumbs,
  Card,
  CardContent,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";

import { Metric, useMetricCatalog } from "@actnowcoalition/actnow.js";

import { cms } from "../../../cms";
import { PageMetaTags } from "../../../components/SocialMetaTags";
import { MetricId } from "src/utils/metrics";

const MetricsDirectory: NextPage = () => {
  const metricCatalog = useMetricCatalog();

  return (
    <>
      <PageMetaTags
        siteName={cms.settings.siteName}
        title="Metrics"
        description="Directory of available metrics"
        url="/internal/metrics"
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
        </Breadcrumbs>

        <Typography variant="h1">Metrics</Typography>
        {metricCatalog.metrics.map((metricItem: Metric | MetricId) => {
          const metric = metricCatalog.getMetric(metricItem);
          return (
            <MetricInfo key={`metric-card-${metric.id}`} metric={metric} />
          );
        })}
      </Container>
    </>
  );
};

const MetricInfo = ({ metric }: { metric: Metric }) => {
  return (
    <Card sx={{ my: 4 }}>
      <CardContent>
        <Stack>
          <Typography variant="h3" component="h2" my={1.25}>
            <Link href={`/internal/metrics/${metric.id}/`}>{metric.name}</Link>
          </Typography>
          <Typography>ID: {metric.id}</Typography>
          <Typography>Name: {metric.name}</Typography>
          <Typography>Extended name: {metric.extendedName}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MetricsDirectory;
