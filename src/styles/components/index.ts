import { ThemeOptions, LinkProps as MuiLinkProps } from "@mui/material";
import { Link } from "./Link";

/**
 * Custom MUI Components
 *
 * https://mui.com/material-ui/customization/theme-components/
 */
const components: ThemeOptions["components"] = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: "none",
      },
    },
  },
  // The custom Link component uses Next.js Link, which includes several
  // performance optimizations, preserving the styles defined in the theme.
  MuiButtonBase: {
    defaultProps: {
      LinkComponent: Link,
    },
  },
  MuiLink: {
    defaultProps: {
      defaultComponent: Link,
    } as MuiLinkProps,
  },
};

export default components;
