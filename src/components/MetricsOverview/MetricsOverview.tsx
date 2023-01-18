import { Grid, useMediaQuery, useTheme } from "@mui/material";

import { Metric } from "@actnowcoalition/metrics";
import { Region } from "@actnowcoalition/regions";
import {
  AutoWidth,
  MetricOverview,
  MetricSparklines,
  useMetricCatalog,
} from "@actnowcoalition/ui-components";

export interface MetricsOverviewProps {
  /**
   * Region to display the metrics for.
   */
  region: Region;
  /**
   * List of metrics or metric IDs to show in the overview.
   */
  metrics: (string | Metric)[];
}

export const MetricsOverview = ({
  metrics: metricsOrIds,
  region,
}: MetricsOverviewProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const metricCatalog = useMetricCatalog();
  const metrics = metricsOrIds.map((m) => metricCatalog.getMetric(m));

  return (
    <Grid container item spacing={2}>
      {metrics.map((metric, metricIndex) => (
        <Grid item key={`item-${metric.id}-${metricIndex}`} xs={12} sm={3}>
          <MetricOverview
            region={region}
            metric={metric}
            metricChart={
              isMobile ? undefined : (
                <AutoWidth>
                  <MetricSparklines
                    region={region}
                    metricBarChart={metric}
                    metricLineChart={metric}
                  />
                </AutoWidth>
              )
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};
