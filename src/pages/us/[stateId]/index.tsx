import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Container, Typography } from "@mui/material";
import { states, Region, RegionJSON } from "@actnowcoalition/regions";
import { assert } from "@actnowcoalition/assert";
import { formatInteger } from "@actnowcoalition/number-format";

const RegionPage: React.FC<{ regionJSON: RegionJSON }> = ({ regionJSON }) => {
  if (!regionJSON) {
    return null;
  }

  const region = Region.fromJSON(regionJSON);
  return (
    <Container>
      <Typography variant="h1">{region.fullName}</Typography>
      <Typography variant="body2">
        Population: {formatInteger(region.population)}
      </Typography>
    </Container>
  );
};

export default RegionPage;

interface StatePageProps extends ParsedUrlQuery {
  stateId: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { stateId } = params as StatePageProps;
  /**
   * TODO (region): We need a better way to represent urlSegments on
   * a region so we can use the `params` here to find the region.
   *
   * In this case, the URL structure is given by the folder structure:
   *
   *  us
   *   └── [stateId]
   *       └── index.tsx
   *
   * which represents the URL `/us/${stateId}`. The URL segment of
   * a state is just a string like "us/washington-wa", so we don't
   * have a good way to match the `stateId` ("washington-wa") with
   * the `urlSegment`.
   *
   * Here, I'm just hacking it by checking if the `urlFragment` includes
   * the `stateId` (instead of finding it).
   *
   * For counties, the problem is slightly worse, we will have `stateId`
   * and `countyId` as URL params, so we need a way to find the county
   * using these 2 parameters.
   */

  const state = states.all.find((state) => state.urlFragment.includes(stateId));
  assert(state, `State by urlSegment not found: ${stateId}`);
  return { props: { regionJSON: state.toJSON() } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = states.all.map((state) => ({
    params: { stateId: state.urlFragment },
  }));
  return { paths, fallback: true };
};
