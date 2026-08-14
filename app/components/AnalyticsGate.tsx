"use client";

import { useSyncExternalStore } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function readConsent() {
  const value = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith("mv-analytics-consent="))
    ?.split("=")[1];

  return value === "accepted" ? value : null;
}

export default function AnalyticsGate() {
  const consent = useSyncExternalStore(
    (onChange) => {
      window.addEventListener("mv-analytics-consent-changed", onChange);
      return () => window.removeEventListener("mv-analytics-consent-changed", onChange);
    },
    readConsent,
    () => null,
  );

  if (process.env.NODE_ENV !== "production" || consent !== "accepted") {
    return null;
  }

  return (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
