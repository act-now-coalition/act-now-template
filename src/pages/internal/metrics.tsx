import type { NextPage } from "next";
import { useMetricCatalog } from "@actnowcoalition/ui-components";
import { Metric } from "@actnowcoalition/metrics";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Container,
  List,
  ListItem,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { MetricId } from "src/utils/metrics";

const MetricsDirectory: NextPage = () => {
  const metricCatalog = useMetricCatalog();

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h1">Metrics</Typography>
      <List>
        {metricCatalog.metrics.map(
          (metricItem: Metric | MetricId, i: number) => {
            const metric = metricCatalog.getMetric(metricItem);
            return (
              <ListItem divider={true} key={i}>
                <Stack>
                  <Typography variant="h3" component="h2" my={1.25}>
                    {metric.name}
                  </Typography>
                  <Typography>ID: {metric.id}</Typography>
                  <Typography>Name: {metric.name}</Typography>
                  <Typography>Extended name: {metric.extendedName}</Typography>
                  <Typography>
                    Thresholds:{" "}
                    {!metric.thresholds ? "N/A" : metric.thresholds.join(", ")}
                  </Typography>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{ backgroundColor: "#eee" }}
                    >
                      JSON
                    </AccordionSummary>
                    <AccordionDetails>
                      {JSON.stringify(metric)}
                    </AccordionDetails>
                  </Accordion>
                </Stack>
              </ListItem>
            );
          }
        )}
      </List>
    </Container>
  );
};

export default MetricsDirectory;
