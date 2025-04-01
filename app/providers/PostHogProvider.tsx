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
        console.error('PostHog API key is not defined');
        return;
      }

      posthog.init(apiKey, {
        api_host: apiHost || 'https://eu.i.posthog.com',
        loaded: (ph) => {
          if (process.env.NODE_ENV === 'development') {
            ph.debug();
          }
          console.log('PostHog initialized successfully');
          setIsPostHogLoaded(true);
        },
        capture_pageview: false, // We'll handle this manually
        autocapture: true,
        persistence: 'localStorage',
        disable_session_recording: false, // Enable session recording
        session_recording: {
          maskAllInputs: false, // Set to true to mask all input values by default
          maskTextSelector: '[data-ph-mask]', // Add this attribute to elements that contain sensitive data
          recordCrossOriginIframes: false,
        },
      });
    }
  }, []);

  // Track page views
  useEffect(() => {
    if (posthog.__loaded && pathname) {
      const url = window.origin + pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      console.log('Tracking pageview:', url);
      posthog.capture('$pageview', { $current_url: url });
    }
  }, [pathname, searchParams, isPostHogLoaded]);

  return null;
}

export default function PostHogProvider({ children }: PropsWithChildren) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
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