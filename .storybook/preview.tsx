import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { MetricCatalogProvider } from "@actnowcoalition/ui-components";

import theme from "../src/styles/theme";
import { metricCatalog } from "../src/utils/metrics";

// Wraps stories with the MUI Theme provider
const themeDecorator = (Story) => (
  <MetricCatalogProvider metricCatalog={metricCatalog}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  </MetricCatalogProvider>
);

export const decorators = [themeDecorator];
