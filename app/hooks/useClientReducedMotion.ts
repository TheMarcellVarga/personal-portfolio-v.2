"use client";

import { useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

const subscribeToHydration = () => () => {};
const hydratedSnapshot = () => true;
const serverSnapshot = () => false;

/**
 * Keep the server render and the first client render identical, then apply the
 * user's motion preference once the page has hydrated. CSS still supplies the
 * immediate reduced-motion fallback before this hook resolves.
 */
export function useClientReducedMotion() {
  const prefersReducedMotion = useReducedMotion();
  const hasMounted = useSyncExternalStore(
    subscribeToHydration,
    hydratedSnapshot,
    serverSnapshot,
  );

  return hasMounted && Boolean(prefersReducedMotion);
}
