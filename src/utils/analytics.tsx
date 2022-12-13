import { cms } from "src/cms";

import { GoogleAnalyticsSetup } from "./google-analytics";

/**
 * Imports any analytics scripts and configures them.
 */
export function AnalyticsSetup() {
  const gaTrackingId = cms.settings.gaTrackingId;
  return (
    <>
      {gaTrackingId && <GoogleAnalyticsSetup trackingId={gaTrackingId} />}
      {/* add other analytics setup here ... */}
    </>
  );
}
