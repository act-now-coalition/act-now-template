import {
  Breadcrumbs,
  Container,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { NextPage } from "next";

import { cms } from "../../cms";
import { PageMetaTags } from "../../components/SocialMetaTags";

const InternalHome: NextPage = () => {
  return (
    <>
      <PageMetaTags
        siteName={cms.settings.siteName}
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
          <ListItem>
            <Link href="/internal/regions">Regions</Link>
          </ListItem>
        </List>
        <Typography variant="h3">Share Image Pages</Typography>
        <List>
          <ListItem>
            <Link href="/internal/share-image/TemplateSharePage?name=Template">
              Template Page
            </Link>
          </ListItem>
          {/* ADD SHARE PAGES HERE */}
          {/* Do not remove above comment. Plop uses it as a target 
          to know where to insert new share pages */}
        </List>
      </Container>
    </>
  );
};

export default InternalHome;
