import {
  MetricCatalog,
  MetricDefinition,
  MockDataProvider,
  StaticValueDataProvider,
  CovidActNowDataProvider,
} from "@actnowcoalition/metrics";
import {
  IncidenceFromCumulativesMetricDataProvider,
  PopulationNormalizedDataProvider,
  RollingAverageMetricDataProvider,
} from "./metric-calculations";
import DataSnapshotJSON from "../assets/data/data-snapshot.json";
// import theme from "../styles/theme";

export enum MetricId {
  PI = "pi",
  METRIC1 = "metric1",
  METRIC2 = "metric2",

  BEDS_WITH_COVID_PATIENTS_RATIO = "weekly_new_cases_per_100k",
}

export const dataProviders = [
  new MockDataProvider(),
  new StaticValueDataProvider(),
  new IncidenceFromCumulativesMetricDataProvider(),
  new RollingAverageMetricDataProvider(),
  new PopulationNormalizedDataProvider(),

  new CovidActNowDataProvider("ed76437aca7344359200d333e1a9de80"),

  // To import CSV data, copy it to public/data and uncomment / modify the
  // following lines:
  //
  // new CsvDataProvider("xyz-csv", {
  //   url: "/data/xyz.csv",
  //   regionColumn: "location",
  //   dateColumn: "date",
  // }),
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
    },
  },
  {
    id: MetricId.METRIC2,
    name: "Mock Metric 2",
    dataReference: {
      providerId: "mock",
    },
  },

  {
    id: MetricId.BEDS_WITH_COVID_PATIENTS_RATIO,
    levelSetId: "risk-levels-3-colors",
    thresholds: [0.1, 0.15],
    name: "Patients w/ COVID (% of all beds)",
    dataReference: {
      providerId: "covid-act-now-api",
      column: "metrics.bedsWithCovidPatientsRatio",
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

export const metricLevelSets = [
  // To create a metric level set(s), uncomment / modify the following lines, then set
  // the levelSetId property of the metric(s) to the id of the desired level set (e.g. 'cases').
  //
  // {
  //   id: "cases",
  //   levels: [
  //     { id: "low", name: "Low", color: "green" },
  //     { id: "medium", name: "Medium", color: "orange" },
  //     { id: "high", name: "High", color: "red" },
  //   ],
  //   defaultLevel: {
  //     color: "grey",
  //     id: "unknown",
  //     name: "Unknown",
  //   },
  // },

  {
    id: "risk-levels-3-colors",
    levels: [
      { id: "low", name: "Low", color: "red" },
      { id: "medium", name: "Medium", color: "orange" },
      { id: "high", name: "High", color: "yellow" },
    ],
    defaultLevel: {
      color: "grey",
      id: "unknown",
      name: "Unknown",
    },
  },
];

export const metricCatalog = new MetricCatalog(metrics, dataProviders, {
  metricLevelSets,
  snapshot: DataSnapshotJSON,
});
