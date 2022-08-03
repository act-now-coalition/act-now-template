import { assert } from '@actnowcoalition/assert';
import { counties, states, Region } from '@actnowcoalition/regions';
import keyBy from 'lodash/keyBy';
import concat from 'lodash/concat';

export function getRegionSlug(region: Region): string[] {
  return region.parent
    ? [region.parent.slug, 'county', region.slug]
    : [region.slug];
}

function relativeUrlFromRegionSlug(slug: string[]): string {
  return `/us/${slug.join('/')}`;
}

export function getRegionRelativeUrl(region: Region): string {
  return relativeUrlFromRegionSlug(getRegionSlug(region));
}

const allRegions = concat(counties.all, states.all);
const regionsByRelativeUrl = keyBy(allRegions, getRegionRelativeUrl);

export function findRegionBySlugStrict(slug: string[]): Region {
  const relativeUrl = relativeUrlFromRegionSlug(slug);
  const region = regionsByRelativeUrl[relativeUrl];
  assert(region, `Region not found for slug [${slug.join(', ')}]`);
  return region;
}
