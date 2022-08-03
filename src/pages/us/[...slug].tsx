import { assert } from '@actnowcoalition/assert';
import { counties, states, RegionJSON, Region } from '@actnowcoalition/regions';
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

interface LocationPageUrlParams extends ParsedUrlQuery {
  slug: string[];
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as LocationPageUrlParams;

  assert(slug.length == 1 || slug.length === 3, 'Invalid slug');

  if (slug.length === 1) {
    const [stateSlug] = slug;
    const state = states.all.find(state => state.slug === stateSlug);
    assert(state, `State not found for slug ${slug}`);
    return { props: { regionJSON: state.toJSON() } };
  }

  if (slug.length === 3) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [stateSlug, countyString, countySlug] = slug;
    const county = counties.all.find(
      county =>
        county.slug === countySlug &&
        county.parent &&
        county.parent.slug === stateSlug,
    );
    assert(county, `County not found for slug: [${slug.join(',')}]`);
    return { props: { regionJSON: county.toJSON() } };
  }

  // This shouldn't happen
  return { props: {} };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const countyPaths = counties.all.map(county => ({
    params: { slug: [`${county?.parent?.slug}`, 'county', county.slug] },
  }));
  const statePaths = states.all.map(state => ({
    params: { slug: [state.slug] },
  }));
  return { paths: [...countyPaths, ...statePaths], fallback: false };
};

export default LocationPage;
