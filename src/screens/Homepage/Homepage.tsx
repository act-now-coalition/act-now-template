import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PageMetaTags } from "components/SocialMetaTags";

const Homepage: React.FC = () => {
  const screenshotApiUrl =
    "https://us-central1-test-url-api.cloudfunctions.net/api/dynamic-image";
  const hostName = "act-now-template-95ktri6vr-covidactnow.vercel.app"; // FIX hardcoded url
  return (
    <>
      <PageMetaTags
        siteName="Act Now Site"
        url="/"
        title="Homepage"
        description="Homepage description"
        img={`${screenshotApiUrl}/https://${hostName}/internal/share-image/home`}
        imgWidth="1200" // random heights/widths to render the image
        imgHeight="630"
      />
      <Container>
        <Typography variant="h1">Homepage</Typography>
      </Container>
    </>
  );
};

export default Homepage;
