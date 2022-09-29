import { Container, Typography } from "@mui/material";
import { Region } from "@actnowcoalition/regions";
import { PageMetaTags } from "components/SocialMetaTags";
import { useState, useEffect } from "react";

export const Location: React.FC<{ region: Region }> = ({ region }) => {
  const screenshotApiUrl =
    "https://us-central1-test-url-api.cloudfunctions.net/api/dynamic-image";
  // const hostName = "act-now-template-95ktri6vr-covidactnow.vercel.app"; // FIX hardcoded url
  const hostName = useHostName();
  console.log("host: ", hostName);
  return (
    <>
      <PageMetaTags
        siteName="Act Now Location Page"
        url={`/us/${region.slug}`}
        title={`${region.shortName} Page`}
        description={`${region.shortName} Description`}
        img={`${screenshotApiUrl}/https://${hostName}/internal/share-image/${region.slug}`}
        imgWidth="1200"
        imgHeight="630"
      />
      <Container>
        <Typography variant="h1">{region.shortName}</Typography>
      </Container>
    </>
  );
};

function useHostName(): string {
  const [host, setHost] = useState<string>("still-loading");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      setHost(hostname);
    }
  }, []);
  return host;
}
