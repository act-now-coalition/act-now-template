import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "src/styles/createEmotionCache";
import AppBar from "components/AppBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "src/styles/theme";
import { MetricCatalogProvider } from "@actnowcoalition/ui-components";
import { metricCatalog } from "src/utils/metrics";
import "./global.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Page title</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MetricCatalogProvider metricCatalog={metricCatalog}>
          <AppBar />
          <Component {...pageProps} />
        </MetricCatalogProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
