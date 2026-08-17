"use client";

import { useSyncExternalStore } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const CONSENT_COOKIE = "mv-analytics-consent";

function readConsent() {
  const value = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${CONSENT_COOKIE}=`))
    ?.split("=")[1];

  return value === "accepted" ? value : null;
}

export default function AnalyticsIntegrations() {
  return (
    <AnalyticsConsentGate />
  );
}

function AnalyticsConsentGate() {
  const consent = useSyncExternalStore(
    (onChange) => {
      window.addEventListener("mv-analytics-consent-changed", onChange);
      return () => window.removeEventListener("mv-analytics-consent-changed", onChange);
    },
    readConsent,
    () => null,
  );

  if (consent !== "accepted") return null;

  return (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
