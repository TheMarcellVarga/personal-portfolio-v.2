import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function AnalyticsIntegrations() {
  // Keep the full analytics stack active without interrupting the visitor with a popover.
  return (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
