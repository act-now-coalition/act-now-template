import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { RegionJSON, Region } from "@actnowcoalition/regions";
import { regions } from "src/utils/regions";
import { getRegionSlug } from "src/utils/routing";
import { Location } from "src/screens/Location";
import keyBy from "lodash/keyBy";
import { assert } from "@actnowcoalition/assert";

const regionsBySlug = keyBy(regions.all, getRegionSlug);
export function getRegionFromSlugStrict(slug: string): Region {
  const region = regionsBySlug[slug];
  assert(region, `Region not found for slug ${slug}`);
  return region;
}

const LocationPage: NextPage<{ regionJSON: RegionJSON }> = ({ regionJSON }) => {
  const region = Region.fromJSON(regionJSON);
  return <Location region={region} />;
};

interface RegionPageSlug extends ParsedUrlQuery {
  regionSlug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { regionSlug } = params as RegionPageSlug;
  const region = getRegionFromSlugStrict(regionSlug);
  return { props: { regionJSON: region.toJSON() } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = regions.all.map((region) => ({
    params: { regionSlug: getRegionSlug(region) },
  }));
  return { paths, fallback: false };
};

export default LocationPage;
