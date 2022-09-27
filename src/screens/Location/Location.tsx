import { Container, Typography } from "@mui/material";
import { Region } from "@actnowcoalition/regions";
import { PageMetaTags } from "components/SocialMetaTags";

export const Location: React.FC<{ region: Region }> = ({ region }) => {
  return (
    <>
      <PageMetaTags
        siteName="Act Now Location Page"
        url={`/us/${region.shortName}`}
        title={`${region.shortName} Page`}
        description={`${region.shortName} Description`}
      />
      <Container>
        <Typography variant="h1">{region.shortName}</Typography>
      </Container>
    </>
  );
};
