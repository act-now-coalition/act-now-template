import { css, Global } from "@emotion/react";
import {
  Toolbar,
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Box,
} from "@mui/material";

const AppBar: React.FC<MuiAppBarProps> = (props) => {
  // NOTE: The AppBar component (src/components/AppBar/AppBar.tsx) uses sticky
  // positioning to always be at the top of the screen. To make sure that anchor
  // links scroll into view appropriately we need to add extra scroll padding
  // with scroll-padding-offset to compensate for the AppBar height.  You may
  // need to adjust this padding if you make changes to the AppBar.
  return (
    <MuiAppBar position="sticky" {...props}>
      <Global
        styles={css`
          html {
            scroll-padding-top: 64px;
          }
        `}
      />
      <Toolbar disableGutters>
        <Box p={2}>Logo</Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
