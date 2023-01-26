import {
  CsvDataProvider,
  MetricCatalog,
  MetricDefinition,
  MockDataProvider,
  StaticValueDataProvider,
} from "@actnowcoalition/metrics";

import DataSnapshotJSON from "../assets/data/data-snapshot.json";
import {
  IncidenceFromCumulativesMetricDataProvider,
  PopulationNormalizedDataProvider,
  RollingAverageMetricDataProvider,
} from "./metric-calculations";
import { regions } from "./regions";
import { theme } from "src/styles";

export enum MetricId {
  PI = "pi",
  METRIC1 = "metric1",
  METRIC2 = "metric2",
  CSV_METRIC = "csv_metric",
}

export const dataProviders = [
  new MockDataProvider("mock"),
  new StaticValueDataProvider("static"),
  new IncidenceFromCumulativesMetricDataProvider(),
  new RollingAverageMetricDataProvider(),
  new PopulationNormalizedDataProvider(),

  // To import CSV data, copy the CSV file to `public/data`, modify the
  // following lines, and uncomment / modify the example MetricId.CSV_METRIC
  // definition below.
  new CsvDataProvider(/*id=*/ "xyz-csv", {
    url: "/data/xyz.csv",
    regionDb: regions,
    regionColumn: "location",
    dateColumn: "date",
  }),
];

export const metrics: MetricDefinition[] = [
  {
    id: MetricId.PI,
    name: "Pi",
    dataReference: {
      providerId: "static",
      value: Math.PI,
    },
  },
  {
    id: MetricId.METRIC1,
    name: "Mock Metric 1",
    dataReference: {
      providerId: "mock",
      delayMs: 5000,
    },
    categorySetId: "example-3-levels",
    categoryThresholds: [1, 20],
  },

  // To create a metric using data from a CSV, uncomment / modify the following
  // lines:
  //
  // {
  //   id: MetricId.CSV_METRIC,
  //   name: "Example CSV Metric",
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

export const categorySets = [
  // To create one or more metric category sets, modify the following lines,
  // then set the categorySetId property of the metrics to the id of the
  // desired category set (e.g. 'example-3-levels').
  {
    id: "example-3-levels",
    categories: [
      { id: "low", name: "Low", color: theme.palette.severity[100] },
      { id: "medium", name: "Medium", color: theme.palette.severity[300] },
      { id: "high", name: "High", color: theme.palette.severity[500] },
    ],
    defaultCategory: {
      color: theme.palette.grey[200],
      id: "unknown",
      name: "Unknown",
    },
  },
];

export const metricCatalog = new MetricCatalog(metrics, dataProviders, {
  categorySets,
  snapshot: DataSnapshotJSON,
});
