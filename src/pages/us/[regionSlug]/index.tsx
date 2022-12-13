import keyBy from "lodash/keyBy";
import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import { assert } from "@actnowcoalition/assert";
import { Region } from "@actnowcoalition/regions";

import { Page, PageJSON, cms } from "src/cms";
import { Location } from "src/screens/Location";
import { regions } from "src/utils/regions";
import { getRegionSlug } from "src/utils/routing";

const regionsBySlug = keyBy(regions.all, getRegionSlug);

export function getRegionFromSlugStrict(slug: string): Region {
  const region = regionsBySlug[slug];
  assert(region, `Region not found for slug ${slug}`);
  return region;
}

const LocationPage: NextPage<{ regionId: string; pageJSON: PageJSON }> = ({
  regionId,
  pageJSON,
}) => {
  const region = regions.findByRegionIdStrict(regionId);
  return <Location region={region} page={Page.fromJSON(pageJSON)} />;
};

interface RegionPageSlug extends ParsedUrlQuery {
  regionSlug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { regionSlug } = params as RegionPageSlug;
  const region = getRegionFromSlugStrict(regionSlug);
  const page = cms.getPageById("location");
  return { props: { regionId: region.regionId, pageJSON: page.toJSON() } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = regions.all.map((region) => ({
    params: { regionSlug: getRegionSlug(region) },
  }));
  return { paths, fallback: false };
};

export default LocationPage;
