import { assert } from '@actnowcoalition/assert';
import { counties, RegionJSON, Region } from '@actnowcoalition/regions';
import type { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Typography } from '@mui/material';

const LocationPage: NextPage<{ regionJSON: RegionJSON }> = ({ regionJSON }) => {
  const region = Region.fromJSON(regionJSON);

  return (
    <>
      <Typography variant="h1">{region.fullName}</Typography>
    </>
  );
};

interface CountyPageProps extends ParsedUrlQuery {
  stateSlug: string;
  countySlug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { stateSlug, countySlug } = params as CountyPageProps;

  const county = counties.all.find(
    county => county?.parent?.slug === stateSlug && county.slug === countySlug,
  );

  assert(county, `County not found by slugs: ${stateSlug}, ${countySlug}`);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return { props: { regionJSON: county.toJSON() } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = counties.all.map(county => ({
    params: { stateSlug: county?.parent?.slug, countySlug: county.slug },
  }));
  return { paths, fallback: false };
};

export default LocationPage;
