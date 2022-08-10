import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { themeConfig as defaultThemeConfig } from '@actnowcoalition/ui-components';
import palette from './palette';
import typography from './typography';
import components from './components';

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
