"use client";

import { useReducedMotion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import type { PropsWithChildren } from "react";

const lenisOptions = {
  autoRaf: true,
  anchors: {
    duration: 0.7,
  },
  lerp: 0.18,
  smoothWheel: true,
  syncTouch: false,
  wheelMultiplier: 1,
  touchMultiplier: 1,
  stopInertiaOnNavigate: true,
  prevent: (node: HTMLElement) => {
    if (
      node.closest(
        "textarea, select, dialog, [data-lenis-prevent], [data-lenis-prevent-wheel]",
      )
    ) {
      return true;
    }

    const { overflowY } = window.getComputedStyle(node);
    return (
      (overflowY === "auto" || overflowY === "scroll") &&
      node.scrollHeight > node.clientHeight
    );
  },
} as const;

export default function SmoothScroll({ children }: PropsWithChildren) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
