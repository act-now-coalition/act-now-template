import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

import { RegionSearch } from "@actnowcoalition/ui-components";

import { PageSection } from "components/PageSection";
import { Placeholder } from "components/Placeholder";
import { PageMetaTags } from "components/SocialMetaTags";
import { Page, cms } from "src/cms";
import { regions } from "src/utils/regions";

const Homepage: React.FC<{ page: Page }> = ({ page }) => {
  const { microcopy, metaTags } = page;
  return (
    <>
      <PageMetaTags
        siteName={cms.settings.siteName}
        url={cms.settings.siteUrl}
        title={metaTags.title}
        description={metaTags.description}
        socialImg={metaTags.socialImg}
        socialImgWidth={metaTags.socialImgWidth}
        socialImgHeight={metaTags.socialImgHeight}
      />
      <Container maxWidth="md" sx={{ my: { xs: 5, md: 7 } }}>
        <PageSection>
          <Typography variant="h1" align="center">
            {microcopy.get("title")}
          </Typography>
          <Typography variant="h2" align="center">
            {microcopy.get("heading.title")}
          </Typography>
          <Typography
            variant="paragraphLarge"
            align="center"
            sx={{ display: "block", my: 2 }}
          >
            {microcopy.get("heading.intro")}
          </Typography>
        </PageSection>
        <PageSection>
          <RegionSearch options={regions.all} regionDB={regions} />
        </PageSection>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Container>
    </>
  );
};

export default Homepage;
