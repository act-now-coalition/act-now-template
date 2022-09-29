import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { cms, Page } from "src/cms";
import { PageMetaTags } from "components/SocialMetaTags";

const Homepage: React.FC<{ page: Page }> = ({ page }) => {
  const screenshotApiUrl =
    "https://us-central1-test-url-api.cloudfunctions.net/api/dynamic-image";
  const hostName = "act-now-template-95ktri6vr-covidactnow.vercel.app"; // FIX hardcoded url
  const { microcopy } = page;
  return (
    <>
      <PageMetaTags
        siteName={cms.settings.siteName}
        url={cms.settings.siteUrl}
        title="Homepage"
        description="Homepage description"
        img={`${screenshotApiUrl}/https://${hostName}/internal/share-image/home`}
        imgWidth="1200" // random heights/widths to render the image
        imgHeight="630"
      />
      <Container>
        <Typography variant="h1">{microcopy.get("title")}</Typography>
        <Typography variant="h2">{microcopy.get("heading.title")}</Typography>
        <Typography variant="paragraphLarge">
          {microcopy.get("heading.intro")}
        </Typography>
      </Container>
    </>
  );
};

export default Homepage;
