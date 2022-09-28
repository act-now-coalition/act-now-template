import type { GetServerSideProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { RegionJSON, Region } from "@actnowcoalition/regions";
import { getRegionFromSlugStrict } from "src/utils/routing";
import { MetricValue } from "@actnowcoalition/ui-components";
import { MetricId } from "src/utils/metrics";
import { Box } from "@mui/material";

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

// Use get static props so these are generated at build time s.t we dont use SSR
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { regionSlug } = params as RegionPageSlug;
  const region = getRegionFromSlugStrict(regionSlug);
  return { props: { regionJSON: region.toJSON() } };
};

export default ShareImagePage;
