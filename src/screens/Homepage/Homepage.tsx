import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Page } from "src/cms";

const Homepage: React.FC<{ page: Page }> = ({ page }) => {
  const { microcopy } = page;
  return (
    <Container>
      <Typography variant="h1">{microcopy.get("title")}</Typography>
      <Typography variant="h2">{microcopy.get("heading.title")}</Typography>
      <Typography variant="paragraphLarge">
        {microcopy.get("heading.intro")}
      </Typography>
    </Container>
  );
};

export default Homepage;
