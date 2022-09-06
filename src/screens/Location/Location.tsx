import { Container, Typography } from "@mui/material";
import { Region } from "@actnowcoalition/regions";

export const Location: React.FC<{ region: Region }> = ({ region }) => {
  return (
    <Container>
      <Typography variant="h1">{region.shortName}</Typography>
    </Container>
  );
};
