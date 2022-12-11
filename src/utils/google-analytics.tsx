import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

/** Helper to track a page view with Google Analytics. */
const trackPageView = (trackingId: string, url: string) => {
  window.gtag("config", trackingId, {
    page_path: url,
  });
};

/**
 * Google Analytics setup component.
 *
 * Based on https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/
 */
export const GoogleAnalyticsSetup = ({
  trackingId,
}: {
  trackingId: string;
}) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      trackPageView(trackingId, url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [trackingId, router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${trackingId}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
    </>
  );
};
