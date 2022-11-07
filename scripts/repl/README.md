# Act Now REPL

This script provides a Read-Eval-Print-Loop ([REPL](https://nodejs.org/docs/latest-v16.x/api/repl.html)) to quickly inspect regions, metrics and metrics data. It supports automatic completion of inputs, simple line editing, multi-line inputs, reverse-i-search and more.

## Usage

```ts
$ yarn repl
⚡️ washington = regions.findByRegionId('53')

// Region {
//   regionId: '53',
//   fullName: 'Washington',
//   shortName: 'Washington',
//   abbreviation: 'WA',
//   slug: 'washington-wa',
//   relativeUrl: '',
//   parent: null,
//   population: 7614893
// }
⚡️ data = await metricCatalog.fetchData(washington, weekly_new_cases_per_100k)

// MetricData {
//  metric: Metric {
//    id: 'weekly_new_cases_per_100k',
//    ...
//  },
//  region: Region {
//    regionId: '53',
//    ...
//  },
//  currentValue: 63.3,
//  _timeseries: undefined
//}
```

### Custom Commands

Type `.help` to see a list of all the available commands.

```txt
⚡️ .help
.break     Sometimes you get stuck, this gets you out
.builtin   List builtin variables
.clear     Break, and also clear the local context
.editor    Enter editor mode
.exit      Exit the REPL
.help      Print this help message
.load      Load JS from a file into the REPL session
.metrics   List available metrics
.save      Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
```

## Examples

### Fetching metric data for a single state

```ts
state = regions.findByRegionId("53");
data = await metricCatalog.fetchData(state, weekly_new_cases_per_100k, true);

// Fetching https://api.covidactnow.org/v2/state/CA.timeseries.json?apiKey=...
// MetricData {
//   metric: Metric {
//     id: 'weekly_new_cases_per_100k',
//     ...
//   },
//   region: Region {
//     ...
//   },
//   currentValue: 55.4,
//   _timeseries: Timeseries {
//     points: [
//        ...
//     ]
//   }
// }
```

### Sorting regions by population

```ts
const lodash = require("lodash);
top4 = lodash.chain(regions.all).sortBy("population").reverse().take(4).value();

console.table(top4, ["regionId", "shortName", "population"]);

// ┌─────────┬──────────┬──────────────┬────────────┐
// │ (index) │ regionId │  shortName   │ population │
// ├─────────┼──────────┼──────────────┼────────────┤
// │    0    │   '06'   │ 'California' │  39512223  │
// │    1    │   '48'   │   'Texas'    │  28995881  │
// │    2    │   '12'   │  'Florida'   │  21477737  │
// │    3    │   '36'   │  'New York'  │  19453561  │
// └─────────┴──────────┴──────────────┴────────────┘
```

### Using libraries

```ts
let { assert } = require("@actnowcoalition/assert");
assert(2 < 1, "Wrong math");

// Uncaught Error: INTERNAL ASSERTION FAILED: Wrong math
```
