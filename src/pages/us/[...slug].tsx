import { Typography } from '@mui/material';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';
import type { NextPage } from 'next';
import { concat } from 'lodash';
import { counties, states, RegionJSON, Region } from '@actnowcoalition/regions';
import { findRegionBySlugStrict, getRegionSlug } from 'src/utils/routing';

const LocationPage: NextPage<{ regionJSON: RegionJSON }> = ({ regionJSON }) => {
  const region = Region.fromJSON(regionJSON);
  return (
    <>
      <Typography variant="h1">{region.fullName}</Typography>
    </>
  );
};

interface LocationPageUrlParams extends ParsedUrlQuery {
  slug: string[];
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as LocationPageUrlParams;
  const region = findRegionBySlugStrict(slug);
  return { props: { regionJSON: region.toJSON() } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allRegions = concat(counties.all, states.all);
  const paths = allRegions.map(region => ({
    params: { slug: getRegionSlug(region) },
  }));
  return { paths, fallback: false };
};

export default LocationPage;
