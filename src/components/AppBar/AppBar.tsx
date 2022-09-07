import { Toolbar, AppBar as MuiAppBar, Box } from "@mui/material";

const AppBar: React.FC = () => {
  return (
    <MuiAppBar position="sticky">
      <Toolbar disableGutters>
        <Box p={2}>Logo</Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
