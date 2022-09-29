import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { RegionJSON, Region } from "@actnowcoalition/regions";
import { getRegionSlug } from "src/utils/routing";
import { MetricValue } from "@actnowcoalition/ui-components";
import { MetricId } from "src/utils/metrics";
import { Box } from "@mui/material";
import { regions } from "src/utils/regions";
import keyBy from "lodash/keyBy";
import { assert } from "@actnowcoalition/assert";

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

const regionsBySlug = keyBy(regions.all, getRegionSlug);

export function getRegionFromSlugStrict(slug: string): Region {
  const region = regionsBySlug[slug];
  assert(region, `Region not found for slug ${slug}`);
  return region;
}

export default ShareImagePage;
