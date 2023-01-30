import {
  Metric,
  MetricData,
  Region,
  TransformedMetricDataProvider,
} from "@actnowcoalition/actnow.js";

/** Calculates a "new Xyz" metric from a "cumulative Xyz" source metric. */
export class IncidenceFromCumulativesMetricDataProvider extends TransformedMetricDataProvider {
  readonly id = "incidence-from-cumulatives";

  transformData(
    sourceData: MetricData<unknown>,
    newMetric: Metric,
    region: Region
  ): MetricData<unknown> {
    const ts = sourceData.timeseries;
    const newTs = ts.computeDeltas({
      keepInitialValue: false,
      minDeltaToKeep: 1,
    });
    return new MetricData(newMetric, region, newTs.last?.value ?? null, newTs);
  }
}

/** Calculates a 7-day rolling average metric from a source metric. */
export class RollingAverageMetricDataProvider extends TransformedMetricDataProvider {
  readonly id = "rolling-average";

  transformData(
    sourceData: MetricData<unknown>,
    newMetric: Metric,
    region: Region
  ): MetricData<unknown> {
    const ts = sourceData.timeseries;
    const newTs = ts.rollingAverage({
      days: 7,
      // Note: For "incidence" metrics (e.g. new cases / day), treating missing
      // values as zeros usually makes sense.  For "current" metrics (e.g.
      // patients in hospital beds), treating missing values as zeros is usually
      // not appropriate.
      treatMissingDatesAsZero: true,
    });
    return new MetricData(newMetric, region, newTs.last?.value ?? null, newTs);
  }
}

/** Calculates a "per 100k" metric from a source metric. */
export class PopulationNormalizedDataProvider extends TransformedMetricDataProvider {
  readonly id = "population-normalized";

  transformData(
    sourceData: MetricData<unknown>,
    newMetric: Metric,
    region: Region
  ): MetricData<unknown> {
    const ts = sourceData.timeseries;
    const popScale = region.population / 100000;
    const newTs = ts.assertFiniteNumbers().mapValues((v) => v / popScale);
    return new MetricData(newMetric, region, newTs.last?.value ?? null, newTs);
  }
}
