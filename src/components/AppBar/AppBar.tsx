import {
  Toolbar,
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Box,
} from "@mui/material";

const AppBar: React.FC = (props: MuiAppBarProps) => {
  return (
    <MuiAppBar color={props.color} position="sticky">
      <Toolbar disableGutters>
        <Box p={2}>Logo</Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
