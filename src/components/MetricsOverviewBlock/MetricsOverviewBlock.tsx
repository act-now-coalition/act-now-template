import { Grid, Theme, useMediaQuery } from "@mui/material";

import { Metric } from "@actnowcoalition/metrics";
import { Region } from "@actnowcoalition/regions";
import {
  AutoWidth,
  MetricOverview,
  MetricSparklines,
  useMetricCatalog,
} from "@actnowcoalition/ui-components";

export interface MetricsOverviewBlockProps {
  /**
   * Region represented by the overview block.
   */
  region: Region;
  /**
   * Array of metrics represented by the overview block. The order in which
   * the metrics are displayed will match the order of the array.
   */
  metrics: (string | Metric)[];
}

export const MetricsOverviewBlock = ({
  metrics: metricsOrIds,
  region,
}: MetricsOverviewBlockProps) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

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
