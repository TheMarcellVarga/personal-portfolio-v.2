'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, type PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';

// Create a wrapper component for client-side only code
function ClientOnly({ children }: PropsWithChildren) {
  return <>{children}</>;
}

// Wrap the client-side only code in a dynamic import
const PostHogWrapper = dynamic(() => Promise.resolve(ClientOnly), { ssr: false });

function PostHogPageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initPostHog = async () => {
      if (typeof window === 'undefined') return;

      const posthog = (await import('posthog-js')).default;
      const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
      const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

      if (!posthog.__loaded && apiKey) {
        posthog.init(apiKey, {
          api_host: apiHost || 'https://eu.i.posthog.com',
          loaded: (posthog) => {
            if (process.env.NODE_ENV === 'development') {
              posthog.debug();
            }
          },
          capture_pageview: false,
          autocapture: true,
          persistence: 'localStorage',
          disable_session_recording: true,
          bootstrap: {
            distinctID: undefined,
            isIdentifiedID: false,
            featureFlags: {},
          },
        });
      }

      if (pathname) {
        const url = window.origin + pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
        posthog.capture('$pageview', { $current_url: url });
      }
    };

    initPostHog();
  }, [pathname, searchParams]);

  return null;
}

export default function PostHogProvider({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <PostHogWrapper>
        <PostHogPageTracker />
      </PostHogWrapper>
    </>
  );
} 