import { ThemeOptions, createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

import { themeConfig as defaultThemeConfig } from "@actnowcoalition/ui-components";

import components from "./components";
import palette from "./palette";
import typography from "./typography";

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
// TODO (Pablo): It seems that the ThemeOptions and createTheme are not
// compatible without 'as ThemeOptions'
const themeOptions = deepmerge(
  defaultThemeConfig,
  internalThemeConfig
) as ThemeOptions;

const theme = createTheme(themeOptions);

export default theme;
