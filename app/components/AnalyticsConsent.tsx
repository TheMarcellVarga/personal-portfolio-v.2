"use client";

import { useSyncExternalStore } from "react";

const CONSENT_COOKIE = "mv-analytics-consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;

function readConsent() {
  const value = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${CONSENT_COOKIE}=`))
    ?.split("=")[1];

  return value === "accepted" || value === "declined" ? value : null;
}

function writeConsent(value: "accepted" | "declined") {
  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${CONSENT_MAX_AGE}; SameSite=Lax`;
}

export default function AnalyticsConsent() {
  const consent = useSyncExternalStore(
    (onChange) => {
      window.addEventListener("mv-analytics-consent-changed", onChange);
      return () => window.removeEventListener("mv-analytics-consent-changed", onChange);
    },
    readConsent,
    () => null,
  );

  if (consent) return null;

  return (
    <aside
      aria-label="Optional analytics"
      className="fixed inset-x-4 bottom-4 z-[120] mx-auto max-w-xl rounded-[1.4rem] border border-white/12 bg-[#08131f]/95 p-5 text-white shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:inset-x-auto sm:right-6 sm:bottom-6"
    >
      <p className="font-label text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#67d9ff]">
        Optional analytics
      </p>
      <p className="mt-2 max-w-lg text-sm leading-6 text-white/72">
        Allow anonymous page-performance and error measurements to help improve
        this portfolio. Analytics stays off unless you choose to allow it.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => {
            writeConsent("declined");
            window.dispatchEvent(new Event("mv-analytics-consent-changed"));
          }}
          className="rounded-full border border-white/16 px-4 py-2.5 text-sm font-semibold text-white/76 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#67d9ff]"
        >
          Not now
        </button>
        <button
          type="button"
          onClick={() => {
            writeConsent("accepted");
            window.location.reload();
          }}
          className="rounded-full bg-[#67d9ff] px-4 py-2.5 text-sm font-semibold text-[#06111c] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#67d9ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08131f]"
        >
          Allow analytics
        </button>
      </div>
    </aside>
  );
}
