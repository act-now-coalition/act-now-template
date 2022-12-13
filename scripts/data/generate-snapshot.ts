import { promises as fsp } from "fs";
import * as path from "path";
import {
  MetricId,
  categorySets,
  dataProviders,
  metrics,
} from "src/utils/metrics";
import { regions } from "src/utils/regions";

import {
  MetricCatalog,
  MultiRegionMultiMetricDataStore,
} from "@actnowcoalition/metrics";

const OUTPUT_FOLDER = path.join(__dirname, "../../src/assets/data");
const DEST_FILE = path.join(OUTPUT_FOLDER, "data-snapshot.json");

async function main() {
  // Note: Don't use the metricCatalog from `src/utils/metrics.ts` since it uses
  // the generated snapshot by default, and we want to fetch fresh data.
  const metricCatalog = new MetricCatalog(metrics, dataProviders, {
    categorySets,
  });

  // Fetch data that we want to include in the snapshot.  Can be arbitrary
  // region + metric combinations, optionally including timeseries data.
  console.log("Fetching data...");
  const fetchedData: MultiRegionMultiMetricDataStore[] = [
    await metricCatalog.fetchDataForRegionsAndMetrics(
      [regions.findByRegionIdStrict("53")],
      [MetricId.PI],
      /*includeTimeseries=*/ false
    ),
    // await metricCatalog.fetchDataForRegionsAndMetrics(
    //   [regions.findByRegionIdStrict("53")],
    //   [MetricId.METRIC2],
    //   /*includeTimeseries=*/ true
    // ),
  ];

  // Merge the data.
  const mergedData = fetchedData.reduce((mergedDataStore, data) => {
    return mergedDataStore.merge(data);
  }, new MultiRegionMultiMetricDataStore({}));

  // Write the data snapshot to a file.
  const snapshot = mergedData.toSnapshot();
  await fsp.writeFile(DEST_FILE, JSON.stringify(snapshot, null, 2));

  console.log(`Snapshot written to ${DEST_FILE} `);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
