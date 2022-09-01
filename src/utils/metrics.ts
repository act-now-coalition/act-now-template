import {
  MetricCatalog,
  MetricDefinition,
  MockDataProvider,
} from "@actnowcoalition/metrics";

export enum MetricId {
  MOCK_METRIC1 = "mock_metric1",
  MOCK_METRIC2 = "mock_metric1",
}

const dataProviders = [
  new MockDataProvider(),

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
    id: MetricId.MOCK_METRIC1,
    name: "Mock Metric 1",
    dataReference: {
      providerId: "mock",
    },
  },
  {
    id: MetricId.MOCK_METRIC2,
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
  //     column: "colunmn-name",
  //   },
  // },
];

export const metricCatalog = new MetricCatalog(metrics, dataProviders);
