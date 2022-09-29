import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { RegionJSON, Region } from "@actnowcoalition/regions";
import { getRegionFromSlugStrict } from "src/utils/routing";
import { MetricValue } from "@actnowcoalition/ui-components";
import { MetricId } from "src/utils/metrics";
import { Box } from "@mui/material";
import { regions } from "src/utils/regions";
import { getRegionSlug } from "src/utils/routing";

const ShareImagePage: NextPage<{ regionJSON: RegionJSON }> = ({
  regionJSON,
}) => {
  const region = Region.fromJSON(regionJSON);
  return (
    <Box className="screenshot">
      <div>{region.fullName}</div>
      <MetricValue
        className="screenshot-ready"
        metric={MetricId.METRIC1}
        region={region}
      />
    </Box>
  );
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

export default ShareImagePage;
