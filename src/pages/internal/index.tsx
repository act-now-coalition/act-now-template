import {
  Box,
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
        <Typography variant="paragraphLarge">
          This internal page serves as a directory to other internal pages. Each
          internal page is connected to an internal directory.
        </Typography>
        <List>
          <ListItem>
            <Box>
              <Link href="/internal/metrics">Metrics</Link>
              <br />
              The <code>internal/metrics</code> page displays all defined
              metrics included in your metric catalog. These metrics are located
              in <code>src/utils/metrics.ts</code>.
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Link href="/internal/regions">Regions</Link>
              <br />
              The <code>internal/regions</code> page displays all links to your
              region-specific pages. These regions are the ones in your region
              database, defined in <code>src/utils/regions.ts</code>. As a
              starting point, our <code>@actnowcoalition/regions</code> package
              (included in this template) comes with some predefined regions.
            </Box>
          </ListItem>
        </List>
        <Typography variant="h3">Share Image Pages</Typography>
        <List>
          <ListItem>
            <Box>
              <Link href="/internal/share-image/TemplateSharePage?name=Template">
                Template Page
              </Link>
              <br />
              This is an example of a share page.
            </Box>
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
