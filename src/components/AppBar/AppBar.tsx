import {
  Box,
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Toolbar,
} from "@mui/material";

import Logo from "../Logo";

const AppBar: React.FC<MuiAppBarProps> = (props) => {
  // NOTE: If you change the height of the AppBar you should adjust the scroll
  // padding set in src/styles/globalStyles.ts to make sure that anchor links
  // are still scrolled into view.
  return (
    <MuiAppBar position="sticky" {...props}>
      <Toolbar disableGutters>
        <Box p={2} width={100}>
          <Logo imgUrl="/cms/media/placeholderlogo.png" />
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
