import { Grid, Typography } from "@mui/material";

import { Region } from "@actnowcoalition/actnow.js";

import {
  BorderedPageSection,
  PageContainer,
  PageSection,
  Placeholder,
} from "components/Containers";
import { PageMetaTags } from "components/SocialMetaTags";
import { Page } from "src/cms";

export const Location: React.FC<{ region: Region; page: Page }> = ({
  region,
  page,
}) => {
  const { microcopy, metaTags } = page;
  return (
    <>
      <PageMetaTags
        siteName="Act Now Location Page"
        url={`/us/${region.shortName}`}
        title={metaTags.title}
        description={metaTags.description}
        socialImg={metaTags.socialImg}
        socialImgWidth={metaTags.socialImgWidth}
        socialImgHeight={metaTags.socialImgHeight}
      />
      <PageContainer maxWidth="md">
        <PageSection>
          <Typography variant="h1">{region.shortName}</Typography>
          <Typography>{microcopy.get("heading.updated")}</Typography>
        </PageSection>
        <BorderedPageSection>
          {/* Example of a responsive layout */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Placeholder sx={{ minHeight: 180 }} />
            </Grid>
            <Grid item xs={12} md>
              <Placeholder sx={{ minHeight: 180 }} />
            </Grid>
          </Grid>
          <Placeholder sx={{ mt: 3, minHeight: 180 }} />
        </BorderedPageSection>
        {/* Replace the placeholder with real content */}
        <PageSection>
          <Placeholder />
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
