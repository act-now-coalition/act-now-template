import { GoogleAnalyticsSetup } from "./google-analytics";
import { cms } from "src/cms";

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
