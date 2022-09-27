import { Container, Typography } from "@mui/material";
import { Region } from "@actnowcoalition/regions";
import { ShareButton } from "@actnowcoalition/ui-components";
import { getLocationShareLink } from "src/utils/share-links";
import { useEffect, useState } from "react";

export const Location: React.FC<{ region: Region }> = ({ region }) => {
  // We will need social images for canonical location page URLS anyway
  // (in case someone copies the URL from the browser, instead of using the share button),
  // is it worth using share links for location page share buttons?
  const url = useLocationShareLink(region);
  return (
    <Container>
      <Typography variant="h1">{region.shortName}</Typography>
      <ShareButton
        url={url ?? ""} // Need way to handle url before it is fetched
        quote={`COVID-19 in ${region.shortName}`}
        onShareFacebook={() => {
          console.log("to avoid lint error");
        }}
        onShareTwitter={() => {
          console.log("to avoid lint error");
        }}
        onCopyLink={() => {
          console.log("to avoid lint error");
        }}
      />
    </Container>
  );
};

function useLocationShareLink(region: Region): string | undefined {
  const [url, setUrl] = useState<string | undefined>(undefined);
  useEffect(() => {
    async function getUrl(region: Region) {
      setUrl(await getLocationShareLink(region));
    }
    getUrl(region);
  }, [region]);
  return url;
}
