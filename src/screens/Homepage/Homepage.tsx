import { counties } from '@actnowcoalition/regions';
import { Container, Typography } from '@mui/material';
import Link from 'next/link';

const Homepage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1">Homepage</Typography>

      <ul>
        {counties.all.map(county => (
          <li key={`${county?.parent?.slug}--${county.slug}`}>
            <Link href={`/us/${county?.parent?.slug}/county/${county.slug}`}>
              {county.shortName}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Homepage;
