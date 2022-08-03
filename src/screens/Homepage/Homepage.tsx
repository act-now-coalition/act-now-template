import { counties, states } from '@actnowcoalition/regions';
import { Container, Typography } from '@mui/material';
import Link from 'next/link';
import { getRegionRelativeUrl } from 'src/utils/routing';

const Homepage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1">Homepage</Typography>
      <ul>
        {states.all.map(state => (
          <li key={`li-${state.regionId}`}>
            <Link href={getRegionRelativeUrl(state)}>{state.fullName}</Link>
            <ul>
              {counties.all
                .filter(county => county?.parent?.regionId === state.regionId)
                .map(county => (
                  <li key={`li-${county.regionId}`}>
                    <Link href={getRegionRelativeUrl(county)}>
                      {county.shortName}
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Homepage;
