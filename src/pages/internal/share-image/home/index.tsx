import type { NextPage } from "next";
import { Box, Typography } from "@mui/material";

const ShareImageHomePage: NextPage = () => {
  return (
    <Box className="screenshot">
      <Box className="screenshot-ready">
        <Typography>Home Page Share Image Page</Typography>
        <Typography>This will be screenshot</Typography>
      </Box>
    </Box>
  );
};
export default ShareImageHomePage;
