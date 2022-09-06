import {
  MetricCatalog,
  MetricDefinition,
  MockDataProvider,
} from "@actnowcoalition/metrics";
import {
  IncidenceFromCumulativesMetricDataProvider,
  PopulationNormalizedDataProvider,
  RollingAverageMetricDataProvider,
} from "./metric-calculations";

export enum MetricId {
  METRIC1 = "metric1",
  METRIC2 = "metric2",
}

const dataProviders = [
  new MockDataProvider(),
  new IncidenceFromCumulativesMetricDataProvider(),
  new RollingAverageMetricDataProvider(),
  new PopulationNormalizedDataProvider(),

  // To import CSV data, copy it to public/data and uncomment / modify the
  // following lines:
  //
  // new CsvDataProvider("xyz-csv", {
  //   url: "/data/xyz.csv",
  //   regionColumn: "location",
  //   dateColumn: "date",
  // }),
];

const metrics: MetricDefinition[] = [
  {
    id: MetricId.METRIC1,
    name: "Mock Metric 1",
    dataReference: {
      providerId: "mock",
    },
  },
  {
    id: MetricId.METRIC2,
    name: "Mock Metric 2",
    dataReference: {
      providerId: "mock",
    },
  },

  // To create a metric using data from a CSV, uncomment / modify the following
  // lines:
  //
  // {
  //   id: MetricId.ABC,
  //   name: "ABC Metric",
  //   dataReference: {
  //     providerId: "xyz-csv",
  //     column: "column-name",
  //   },
  // },

  // To use one of the metric calculations in metric-calculations.ts, uncomment
  // / modify the following lines:
  //
  // {
  //   id: MetricId.NEW_ABC
  //   name: "New abc per day",
  //   dataReference: {
  //     providerId: "incidence-from-cumulatives",
  //     sourceMetric: MetricId.ABC,
  //   },
  // },
  // {
  //   id: MetricId.AVERAGE_ABC,
  //   name: "Average new abc per day",
  //   dataReference: {
  //     providerId: "rolling-average",
  //     sourceMetric: MetricId.NEW_ABC
  //   },
  // },
  // {
  //   id: MetricId.AVERAGE_ABC_PER_100K,
  //   name: "Average new abc per day per 100k population",
  //   dataReference: {
  //     providerId: "population-normalized",
  //     sourceMetric: MetricId.AVERAGE_ABC,
  //   },
  // },
];

export const metricCatalog = new MetricCatalog(metrics, dataProviders);
