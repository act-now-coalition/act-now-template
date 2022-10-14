import { NextPage } from "next";
import {
  Breadcrumbs,
  Container,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { PageMetaTags } from "../../components/SocialMetaTags";

const InternalHome: NextPage = () => {
  return (
    <>
      <PageMetaTags
        siteName="Act Now Template"
        title="Internal Home"
        description="Directory of internal pages"
        url="/internal"
      />
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ my: 2 }}>
          <Link color="inherit" underline="hover" href="/">
            Home
          </Link>
          <Link color="inherit" underline="hover" href="/internal">
            Internal
          </Link>
        </Breadcrumbs>
        <Typography variant="h1">Internal</Typography>
        <List>
          <ListItem>
            <Link href="/internal/metrics">Metrics</Link>
          </ListItem>
        </List>
      </Container>
    </>
  );
};

export default InternalHome;
