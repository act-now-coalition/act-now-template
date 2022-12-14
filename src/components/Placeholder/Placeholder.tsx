import { Box, Typography } from "@mui/material";

import { PageSection } from "components/PageSection";

export const Placeholder = () => (
  <Box
    sx={{
      display: "grid",
      placeItems: "center",
      border: "dashed 2px",
      borderColor: "border.default",
      borderRadius: 1,
      minHeight: 350,
    }}
  >
    <Typography variant="overline" color="grey.600" component="div">
      placeholder
    </Typography>
  </Box>
);

export default PageSection;
