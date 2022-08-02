import { assert } from '@actnowcoalition/assert';
import { counties, RegionJSON, Region } from '@actnowcoalition/regions';
import type { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Typography } from '@mui/material';

const LocationPage: NextPage<{ regionJSON: RegionJSON }> = ({ regionJSON }) => {
  // https://nextjs.org/docs/basic-features/data-fetching/get-static-props#statically-generates-both-html-and-json
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
    county =>
      county.slug === countySlug &&
      county.parent &&
      county.parent.slug === stateSlug,
  );

  assert(
    county,
    `County not found by slugs: stateSlug=${stateSlug}, countySlug=${countySlug}`,
  );
  return { props: { regionJSON: county.toJSON() } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = counties.all.map(county => ({
    params: { stateSlug: county?.parent?.slug, countySlug: county.slug },
  }));
  return { paths, fallback: false };
};

export default LocationPage;
