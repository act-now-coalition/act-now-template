import concat from "lodash/concat";

import { RegionDB, counties, states } from "@actnowcoalition/regions";

import { getRegionRelativeUrl } from "./routing";

// TODO: Customize the set of regions your Act Now site supports here.
// You can import additional predefined regions from @actnowcoalition/regions above.
export const regions = new RegionDB(concat(states.all, counties.all), {
  getRegionUrl: getRegionRelativeUrl,
});
