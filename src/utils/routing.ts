import type { Region } from "@actnowcoalition/actnow.js";

/**
 * The URL prefix for all location pages. This must match the directory used for
 * your location pages under src/pages.
 *
 * @example
 * LOCATION_PAGE_PREFIX = "us"
 * Location pages defined in src/pages/us/[regionSlug]/index.tsx
 * Location URL is /us/<regionSlug>
 */
const LOCATION_PAGE_PREFIX = "us";

/**
 * Gets the slug for a region, used with LOCATION_PAGE_PREFIX to generate the
 * full location page URL. This can be customized to change the URL structure
 * of location pages.
 *
 * @param region The region to get a slug for.
 * @returns The region slug.
 */
export function getRegionSlug(region: Region): string {
  return region.parent ? `${region.parent.slug}-${region.slug}` : region.slug;
}

/**
 * Returns the URL for a region, relative to the root of the site.
 *
 * @param region The region to get a slug for.
 * @returns The region URL.
 */
export function getRegionRelativeUrl(region: Region): string {
  return `/${LOCATION_PAGE_PREFIX}/${getRegionSlug(region)}`;
}
