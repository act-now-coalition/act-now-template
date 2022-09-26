import type { GetServerSideProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { RegionJSON, Region } from "@actnowcoalition/regions";
import { getRegionFromSlugStrict } from "src/utils/routing";

const ShareImagePage: NextPage<{ regionJSON: RegionJSON }> = ({
  regionJSON,
}) => {
  const region = Region.fromJSON(regionJSON);
  return <div>{region.regionId}</div>;
};

interface RegionPageSlug extends ParsedUrlQuery {
  regionSlug: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { regionSlug } = params as RegionPageSlug;
  const region = getRegionFromSlugStrict(regionSlug);
  return { props: { regionJSON: region.toJSON() } };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = regions.all.map((region) => ({
//     params: { regionSlug: getRegionSlug(region) },
//   }));
//   return { paths, fallback: false };
// };

export default ShareImagePage;
