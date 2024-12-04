"use client";

import { useState, useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css";

// Define types for Locomotive Scroll v5
type EasingFunction = (t: number) => number;

interface ILenisScrollToOptions {
  offset?: number;
  immediate?: boolean;
  duration?: number;
  easing?: EasingFunction;
}

type ScrollTarget = number | string | HTMLElement;

interface ScrollInstance {
  on: (event: string, callback: (args: any) => void) => void;
  update: () => void;
  scrollTo: (target: ScrollTarget, options?: ILenisScrollToOptions) => void;
  destroy: () => void;
}

interface ScrollEvent {
  scroll: {
    x: number;
    y: number;
  };
  direction: "up" | "down";
  velocity: number;
}

// Renamed interface to avoid conflict
interface LocomotiveScrollOptions {
  lerp?: number;
  duration?: number;
  orientation?: 'vertical' | 'horizontal';
  gestureOrientation?: 'vertical' | 'horizontal';
  smoothWheel?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  smooth?: boolean;
  smoothMobile?: boolean;
  multiplier?: number;
  class?: string;
  getDirection?: boolean;
  getSpeed?: boolean;
  inertia?: number;
  reloadOnContextChange?: boolean;
}

export default function useLocomotive(
  onScroll?: (scrollPositionLocomotive: number) => void
) {
  const [scrollPositionLocomotive, setscrollPositionLocomotive] =
    useState<number>(0);
  const [locomotiveScroll, setLocomotiveScroll] =
    useState<ScrollInstance | null>(null);

  useEffect(() => {
    let instance: ScrollInstance | null = null;

    const initLocomotiveScroll = async () => {
      if (typeof window === "undefined") return;

      try {
        const scrollEl = document.querySelector(
          "[data-scroll-container]"
        ) as HTMLElement;

        if (!scrollEl) {
          console.error("Scroll container not found");
          return;
        }

        const currentScroll = window.scrollY;

        const options: LocomotiveScrollOptions = {
          lerp: 0.1,
          duration: 1.2,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          smooth: true,
          smoothMobile: true,
          multiplier: 1,
          class: "is-revealed",
          getDirection: true,
          getSpeed: true,
          inertia: 0.5,
          reloadOnContextChange: true,
        };

        // Create instance with constructor type assertion
        instance = new (LocomotiveScroll as any)(options) as ScrollInstance;
        setLocomotiveScroll(instance);

        setTimeout(() => {
          window.scrollTo(0, currentScroll);
          instance?.scrollTo(currentScroll, {
            duration: 0,
            immediate: true,
          });
        }, 50);

        const handleScroll = () => {
          const scrollY = window.scrollY;
          setscrollPositionLocomotive(scrollY);
          if (onScroll) {
            onScroll(scrollY);
          }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        instance.on("scroll", ({ scroll, direction, velocity }: ScrollEvent) => {
          setscrollPositionLocomotive(scroll.y);
          if (onScroll) {
            onScroll(scroll.y);
          }

          const velocityClass =
            velocity > 1.5 ? "is-scrolling-fast" : "is-scrolling-slow";
          document.documentElement.classList.remove(
            "is-scrolling-fast",
            "is-scrolling-slow"
          );
          document.documentElement.classList.add(velocityClass);

          const scrollingClass =
            direction === "up" ? "is-scrolling-up" : "is-scrolling-down";
          document.documentElement.classList.remove(
            "is-scrolling-up",
            "is-scrolling-down"
          );
          document.documentElement.classList.add(scrollingClass);
        });

        const handleResize = () => {
          if (instance) {
            instance.update();
            const currentPosition = window.scrollY;
            instance.scrollTo(currentPosition, {
              duration: 0,
              immediate: true,
            });
          }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("load", handleResize);

        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible") {
            handleResize();
          }
        });

      } catch (error) {
        console.error("Error initializing LocomotiveScroll:", error);
      }
    };

    initLocomotiveScroll();

    return () => {
      if (instance) {
        instance.destroy();
      }
    };
  }, [onScroll]);

  const updateScroll = () => {
    if (locomotiveScroll) {
      const currentPosition = window.scrollY;
      locomotiveScroll.scrollTo(currentPosition, {
        duration: 0,
        immediate: true,
      });
    }
  };

  return { scrollPositionLocomotive, updateScroll };
}