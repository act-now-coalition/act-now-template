/**
 *  MUI theme components.
 * */

import palette from "./palette";
import { shape } from "./constants";
import { createTheme } from "@mui/material";

// Reference theme:
const referenceTheme = createTheme({});

const components = {
    MuiAppBar: {
        styleOverrides: {
            root: {
                boxShadow: "none",
                borderBottom: `1px solid ${palette.common.black}`,
            },
        },
    },
}

export default components
