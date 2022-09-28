import { Container, Typography } from "@mui/material";
import { Region } from "@actnowcoalition/regions";
import { Page } from "src/cms";

export const Location: React.FC<{ region: Region; page: Page }> = ({
  region,
  page,
}) => {
  const { microcopy } = page;
  return (
    <Container>
      <Typography variant="h1">{region.shortName}</Typography>
      <Typography>{`${microcopy.get("location.updated")} DATE`}</Typography>
    </Container>
  );
};
