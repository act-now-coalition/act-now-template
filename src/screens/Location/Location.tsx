import { Container, Typography } from "@mui/material";
import { PageMetaTags } from "components/SocialMetaTags";
import { Page } from "src/cms";

import { Region } from "@actnowcoalition/regions";

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
      <Container>
        <Typography variant="h1">{region.shortName}</Typography>
        <Typography>{microcopy.get("heading.updated")}</Typography>
      </Container>
    </>
  );
};
