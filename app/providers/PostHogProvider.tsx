'use client';

import type { PropsWithChildren } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as OriginalPostHogProvider } from 'posthog-js/react';

const posthogKey =
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ??
  process.env.NEXT_PUBLIC_POSTHOG_KEY;

const isPostHogEnabled =
  Boolean(posthogKey) &&
  (process.env.NODE_ENV === 'production' ||
    process.env.NEXT_PUBLIC_POSTHOG_ENABLE_IN_DEV === 'true');

export default function PostHogProvider({ children }: PropsWithChildren) {
  if (!isPostHogEnabled) {
    return <>{children}</>;
  }

  return (
    <OriginalPostHogProvider client={posthog}>
      {children}
    </OriginalPostHogProvider>
  );
}
