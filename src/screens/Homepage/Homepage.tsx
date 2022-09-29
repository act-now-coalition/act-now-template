import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { cms, Page } from "src/cms";
import { PageMetaTags } from "components/SocialMetaTags";

const Homepage: React.FC<{ page: Page }> = ({ page }) => {
  const { microcopy } = page;
  return (
    <>
      <PageMetaTags
        siteName={cms.settings.siteName}
        url={cms.settings.siteUrl}
        title="Homepage"
        description="Homepage description"
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
