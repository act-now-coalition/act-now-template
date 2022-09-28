import { Container, Typography } from "@mui/material";
import { Region } from "@actnowcoalition/regions";
import { PageMetaTags } from "components/SocialMetaTags";

export const Location: React.FC<{ region: Region }> = ({ region }) => {
  const screenshotApiUrl =
    "https://us-central1-test-url-api.cloudfunctions.net/api/dynamic-image";
  const hostName = "act-now-template-95ktri6vr-covidactnow.vercel.app"; // FIX hardcoded url
  return (
    <>
      <PageMetaTags
        siteName="Act Now Location Page"
        url={`/us/${region.shortName}`}
        title={`${region.shortName} Page`}
        description={`${region.shortName} Description`}
        img={`${screenshotApiUrl}/https://${hostName}/internal/share-image/${region.slug}`}
      />
      <Container>
        <Typography variant="h1">{region.shortName}</Typography>
      </Container>
    </>
  );
};
