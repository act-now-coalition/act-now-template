import { CacheProvider, EmotionCache, Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import Head from "next/head";

import { MetricCatalogProvider } from "@actnowcoalition/actnow.js";

import AppBar from "components/AppBar";
import Footer from "components/Footer";
import { globalStyles } from "src/styles";
import createEmotionCache from "src/styles/createEmotionCache";
import theme from "src/styles/theme";
import { AnalyticsSetup } from "src/utils/analytics";
import { metricCatalog } from "src/utils/metrics";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Global styles={globalStyles} />
      <Head>
        <title>Page title</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <AnalyticsSetup />
        <CssBaseline />
        <MetricCatalogProvider metricCatalog={metricCatalog}>
          <AppBar />
          <Component {...pageProps} />
          <Footer />
        </MetricCatalogProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
