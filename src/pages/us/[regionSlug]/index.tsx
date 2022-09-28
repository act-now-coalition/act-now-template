import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { regions } from "src/utils/regions";
import { getRegionFromSlugStrict, getRegionSlug } from "src/utils/routing";
import { Location } from "src/screens/Location";
import { cms, Page, PageJSON } from "src/cms";

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
