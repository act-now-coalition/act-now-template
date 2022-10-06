import { Container, Typography } from "@mui/material";
import { Region } from "@actnowcoalition/regions";
import { Page } from "src/cms";
import { PageMetaTags } from "components/SocialMetaTags";

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
        title={`${region.shortName.concat(" ", metaTags.title)}`}
        description={`${region.shortName.concat(" ", metaTags.description)}`}
      />
      <Container>
        <Typography variant="h1">{region.shortName}</Typography>
        <Typography>{microcopy.get("heading.updated")}</Typography>
      </Container>
    </>
  );
};
