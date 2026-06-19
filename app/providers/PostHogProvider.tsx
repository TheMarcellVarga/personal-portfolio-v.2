'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState, type PropsWithChildren } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as OriginalPostHogProvider } from 'posthog-js/react';

function PostHogInitializer() {
  const [isPostHogLoaded, setIsPostHogLoaded] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize PostHog once on client
  useEffect(() => {
    if (typeof window !== 'undefined' && !posthog.__loaded) {
      const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
      const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

      if (!apiKey) {
        return;
      }

      posthog.init(apiKey, {
        api_host: apiHost || 'https://eu.i.posthog.com',
        loaded: (ph) => {
          if (process.env.NODE_ENV === 'development') {
            ph.debug();
          }
          ph.startSessionRecording(true);
          setIsPostHogLoaded(true);
        },
        capture_pageview: false,
        capture_pageleave: true,
        autocapture: true,
        persistence: 'localStorage',
        request_batching: false,
        person_profiles: 'always',
        disable_session_recording: false,
        enable_recording_console_log: true,
        capture_performance: true,
        capture_exceptions: true,
        session_recording: {
          maskAllInputs: false,
          maskInputOptions: {
            color: false,
            date: false,
            'datetime-local': false,
            email: false,
            month: false,
            number: false,
            range: false,
            search: false,
            tel: false,
            text: false,
            time: false,
            url: false,
            week: false,
            textarea: false,
            select: false,
            password: false,
          },
          recordCrossOriginIframes: true,
          collectFonts: true,
        },
      });
    }
  }, []);

  // Track page views
  useEffect(() => {
    if (posthog.__loaded && pathname) {
      const url = window.origin + pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      posthog.capture('$pageview', { $current_url: url }, { send_instantly: true });
    }
  }, [pathname, searchParams, isPostHogLoaded]);

  return null;
}

export default function PostHogProvider({ children }: PropsWithChildren) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Return children without PostHog during SSR
    return <>{children}</>;
  }

  // On client-side, wrap with the proper PostHog provider
  return (
    <OriginalPostHogProvider client={posthog}>
      {children}
      <PostHogInitializer />
    </OriginalPostHogProvider>
  );
} 
