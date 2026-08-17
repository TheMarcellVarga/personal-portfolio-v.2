"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

const CONSENT_COOKIE = "mv-analytics-consent";
const CONSENT_EVENT = "mv-analytics-consent-changed";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;

function readConsent() {
  const value = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${CONSENT_COOKIE}=`))
    ?.split("=")[1];

  return value === "accepted" || value === "declined" ? value : null;
}

function saveConsent(value: "accepted" | "declined") {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${CONSENT_MAX_AGE}; SameSite=Lax${secure}`;
}

export default function AnalyticsConsent() {
  const consent = useSyncExternalStore(
    (onChange) => {
      window.addEventListener(CONSENT_EVENT, onChange);
      return () => window.removeEventListener(CONSENT_EVENT, onChange);
    },
    readConsent,
    () => null,
  );
  const [open, setOpen] = useState(false);
  const showPanel = consent === null || open;

  function choose(value: "accepted" | "declined") {
    saveConsent(value);
    window.dispatchEvent(new Event(CONSENT_EVENT));
    window.location.reload();
  }

  return (
    <>
      {showPanel && (
        <aside
          aria-label="Privacy choices"
          className="fixed inset-x-4 bottom-4 z-[120] mx-auto max-w-md rounded-[1.25rem] border border-white/12 bg-[#08131f]/95 p-4 text-white shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:inset-x-auto sm:right-6 sm:bottom-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-label text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#67d9ff]">
                Privacy choices
              </p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                Optional analytics are off unless you choose to allow them. If enabled, this site
                uses PostHog, Vercel Analytics, and Speed Insights to understand visits,
                interactions, session playback, performance, and errors.
              </p>
            </div>
            {consent && (
              <button
                type="button"
                aria-label="Close privacy choices"
                onClick={() => setOpen(false)}
                className="shrink-0 text-lg leading-none text-white/48 transition hover:text-white"
              >
                ×
              </button>
            )}
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <Link
              href="/privacy"
              className="text-xs font-medium text-white/56 underline decoration-white/24 underline-offset-4 transition hover:text-white"
            >
              Privacy details
            </Link>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => choose("declined")}
                className="rounded-full border border-white/16 px-3.5 py-2 text-xs font-semibold text-white/72 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#67d9ff]"
              >
                {consent === "accepted" ? "Turn off" : "Not now"}
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="rounded-full bg-[#67d9ff] px-3.5 py-2 text-xs font-semibold text-[#06111c] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#67d9ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08131f]"
              >
                Allow analytics
              </button>
            </div>
          </div>
        </aside>
      )}
      {consent && !open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 z-[119] rounded-full border border-white/16 bg-[#08131f]/88 px-3.5 py-2 text-xs font-semibold text-white/68 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition hover:border-white/30 hover:text-white sm:bottom-6 sm:right-6"
        >
          Privacy
        </button>
      )}
    </>
  );
}
