"use client";

import { useCallback, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

type ScrollTarget = number | string | HTMLElement;

interface ScrollOptions {
  offset?: number;
}

export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    if (reduceMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1,
      wheelMultiplier: 0.92,
      gestureOrientation: "vertical",
    });

    lenisRef.current = lenis;
    document.documentElement.classList.add("lenis-ready");

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
      document.documentElement.classList.remove("lenis-ready");
    };
  }, []);

  const scrollTo = useCallback((target: ScrollTarget, options?: ScrollOptions) => {
    const offset = options?.offset ?? 0;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(target as never, {
        offset,
        duration: 1.1,
      });
      return;
    }

    if (typeof target === "number") {
      window.scrollTo({ top: target + offset, behavior: "smooth" });
      return;
    }

    const element =
      typeof target === "string"
        ? document.querySelector<HTMLElement>(target)
        : target;

    if (!element) {
      return;
    }

    const top =
      element.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return { scrollTo };
}
