import keyBy from "lodash/keyBy";
import { assert } from "@actnowcoalition/assert";
import type { Region } from "@actnowcoalition/regions";
import { regions } from "./regions";

const regionsBySlug = keyBy(regions.all, getRegionSlug);

export function getRegionSlug(region: Region): string {
  return region.parent ? `${region.parent.slug}-${region.slug}` : region.slug;
}

export function getRegionFromSlugStrict(slug: string): Region {
  const region = regionsBySlug[slug];
  assert(region, `Region not found for slug ${slug}`);
  return region;
}

const LOCATION_PAGE_PREFIX = "us";

/**
 * The relative URL returned by this function must match the path of the
 * [regionSlug]/index.tsx file.
 */
export function getRegionRelativeUrl(region: Region): string {
  return `/${LOCATION_PAGE_PREFIX}/${getRegionSlug(region)}`;
}
