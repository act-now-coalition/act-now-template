import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

import { themeConfig as defaultThemeConfig } from "@actnowcoalition/ui-components";

import components from "./components";
import palette from "./palette";
import typography from "./typography";

// Can we "import" this module augmentation from @actnowcoalition/ui-components?
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    paragraphSmall: true;
    paragraphLarge: true;
    labelSmall: true;
    labelLarge: true;
    dataEmphasizedSmall: true;
    dataEmphasizedLarge: true;
    dataTabular: true;
  }
}

/**
 * Theme configuration variables
 * https://mui.com/customization/theming/#theme-configuration-variables
 */

const internalThemeConfig = {
  palette,
  typography,
  components,
};

/**
 * We take the theme config object containing the default
 * Act Now design system (defaultThemeConfig), and we deep merge
 * it with any project-specific theme variables in this repo's
 * theme (internalThemeConfig).
 */

const theme = createTheme(deepmerge(defaultThemeConfig, internalThemeConfig));

export default theme;
