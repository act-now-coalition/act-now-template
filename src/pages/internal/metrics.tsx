import { useState } from "react";

import {
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";

import { Metric } from "@actnowcoalition/metrics";
import { useMetricCatalog } from "@actnowcoalition/ui-components";

import { cms } from "../../cms";
import { PageMetaTags } from "../../components/SocialMetaTags";
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
            <MetricCard key={`metric-card-${metric.id}`} metric={metric} />
          );
        })}
      </Container>
    </>
  );
};

const MetricCard = ({ metric }: { metric: Metric }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Card sx={{ my: 4 }}>
      <CardContent>
        <Stack>
          <Typography variant="h3" component="h2" my={1.25}>
            {metric.name}
          </Typography>
          <Typography>ID: {metric.id}</Typography>
          <Typography>Name: {metric.name}</Typography>
          <Typography>Extended name: {metric.extendedName}</Typography>
          <Typography>
            Categories:{" "}
            {!metric.categoryValues ? "N/A" : metric.categoryValues.join(", ")}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button onClick={() => setModalOpen(true)}>See Definition</Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Paper
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "100%", sm: 600 },
              p: 4,
            }}
          >
            <Typography variant="h2">{metric.name}</Typography>
            <pre>{JSON.stringify(metric, null, 2)}</pre>
          </Paper>
        </Modal>
      </CardActions>
    </Card>
  );
};

export default MetricsDirectory;
