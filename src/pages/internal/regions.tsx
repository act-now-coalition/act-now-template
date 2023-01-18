import { Breadcrumbs, Container, Link, Typography } from "@mui/material";
import type { NextPage } from "next";

import { cms } from "../../cms";
import { PageMetaTags } from "../../components/SocialMetaTags";
import { regions } from "src/utils/regions";

const RegionsDirectory: NextPage = () => {
  return (
    <>
      <PageMetaTags
        siteName={cms.settings.siteName}
        title="Regions"
        description="Directory of regions"
        url="/internal/regions"
      />
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ my: 2 }}>
          <Link color="inherit" underline="hover" href="/">
            Home
          </Link>
          <Link color="inherit" underline="hover" href="/internal">
            Internal
          </Link>
          <Link color="text.primary" underline="hover" href="/internal/regions">
            Regions
          </Link>
        </Breadcrumbs>
        <Typography variant="h1">Regions</Typography>
        {regions.all.map((region) => {
          return (
            <Link href={region.relativeUrl} key={region.regionId}>
              <Typography color="black" variant="body1" key={region.regionId}>
                {region.fullName}
              </Typography>
            </Link>
          );
        })}
      </Container>
    </>
  );
};

export default RegionsDirectory;
