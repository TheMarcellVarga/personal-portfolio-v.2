import posthog from "posthog-js";

const posthogKey =
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ??
  process.env.NEXT_PUBLIC_POSTHOG_KEY;

const posthogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";

const isPostHogEnabled =
  Boolean(posthogKey) &&
  (process.env.NODE_ENV === "production" ||
    process.env.NEXT_PUBLIC_POSTHOG_ENABLE_IN_DEV === "true");

if (posthogKey && isPostHogEnabled && !posthog.__loaded) {
  posthog.init(posthogKey, {
    api_host: posthogHost,
    defaults: "2026-01-30",
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
    persistence: "localStorage",
    request_batching: false,
    person_profiles: "always",
    disable_session_recording: false,
    enable_recording_console_log: true,
    session_recording: {
      maskAllInputs: true,
      collectFonts: false,
    },
    capture_performance: true,
    capture_exceptions: true,
    loaded: (ph) => {
      if (process.env.NODE_ENV === "development") {
        ph.debug();
      }
    },
  });
}
