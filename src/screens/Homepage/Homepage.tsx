import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PageMetaTags } from "components/SocialMetaTags";

const Homepage: React.FC = () => {
  return (
    <>
      <PageMetaTags
        siteName="Act Now Site"
        url="/"
        title="Homepage"
        description="Homepage description"
      />
      <Container>
        <Typography variant="h1">Homepage</Typography>
      </Container>
    </>
  );
};

export default Homepage;
