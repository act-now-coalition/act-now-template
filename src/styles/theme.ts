import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import components from "./components";

/**
 * Theme configuration variables
 * https://mui.com/customization/theming/#theme-configuration-variables
 */
const theme = createTheme({
    palette,
    typography,
    components,
});

export default theme
