import { Typography } from "@mui/material";

import { RegionSearch } from "@actnowcoalition/ui-components";

import { PageContainer, PageSection, Placeholder } from "components/Containers";
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
      <PageContainer maxWidth="md">
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
        <PageSection>
          <Placeholder />
        </PageSection>
        <PageSection>
          <Placeholder />
        </PageSection>
        <PageSection>
          <Placeholder />
        </PageSection>
      </PageContainer>
    </>
  );
};

export default Homepage;
