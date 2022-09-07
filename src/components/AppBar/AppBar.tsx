import {
  Toolbar,
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Box,
} from "@mui/material";

const AppBar: React.FC<MuiAppBarProps> = (props) => {
  return (
    <MuiAppBar position="sticky" {...props}>
      <Toolbar disableGutters>
        <Box p={2}>Logo</Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
