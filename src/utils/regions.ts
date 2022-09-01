import concat from "lodash/concat";
import { states, counties, RegionDB } from "@actnowcoalition/regions";

// TODO: Customize the set of regions your Act Now site supports here.
// You can import additional predefined regions from @actnowcoalition/regions above.
export const regions = new RegionDB(concat(states.all, counties.all));
export { states, counties };
