"use client";

import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

interface ScrollInstance extends LocomotiveScroll {
  scroll: {
    x: number;
    y: number;
  };
  direction: number;
  speed: number;
  destroy: () => void;
}

interface ILocomotiveScrollOptions {
  el: HTMLElement;
  lerp?: number;
  duration?: number;
  orientation?: "vertical" | "horizontal";
  gestureOrientation?: "vertical" | "horizontal";
  smoothWheel?: boolean;
  wheelMultiplier?: number;
  smoothMobile?: boolean;
  inertia?: number;
  class?: string;
  getSpeed?: boolean;
  getDirection?: boolean;
  multiplier?: number;
  touchMultiplier?: number;
  resetNativeScroll?: boolean;
  tablet?: {
    smooth?: boolean;
    breakpoint?: number;
  };
  smartphone?: {
    smooth?: boolean;
  };
}

export default function useLocomotive(
  onScroll?: (scrollPositionLocomotive: number) => void
) {
  const [scrollPositionLocomotive, setscrollPositionLocomotive] =
    useState<number>(0);
  const [locomotiveScroll, setLocomotiveScroll] =
    useState<ScrollInstance | null>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    let instance: ScrollInstance | null = null;
    let scrollEl: HTMLElement | null = null;

    const initLocomotiveScroll = async () => {
      if (typeof window === "undefined") return;

      try {
        scrollEl = document.querySelector(
          "[data-scroll-container]"
        ) as HTMLElement;

        if (!scrollEl) {
          console.error("Scroll container not found");
          return;
        }

        window.history.scrollRestoration = "manual";

        const options: ILocomotiveScrollOptions = {
          el: scrollEl,
          lerp: 0.1,
          duration: 1.2,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          smoothMobile: true,
          inertia: 0.5,
          class: "is-revealed",
          getDirection: true,
          getSpeed: true,
          multiplier: 1,
          resetNativeScroll: true,
          tablet: {
            smooth: true,
            breakpoint: 768,
          },
          smartphone: {
            smooth: true,
          },
        };

        const locomotiveInstance = new LocomotiveScroll(options as any);
        instance = locomotiveInstance as unknown as ScrollInstance;
        setLocomotiveScroll(instance);

        setTimeout(() => {
          window.scrollTo(0, 0);
          if (instance) {
            instance.scrollTo(0, {
              duration: 0,
              immediate: true,
            });
          }
        }, 50);

        const handleScroll = () => {
          const scrollY = window.scrollY;
          scrollPositionRef.current = scrollY;
          setscrollPositionLocomotive(scrollY);
          if (onScroll) {
            onScroll(scrollY);
          }
        };

        const handleLocomotiveScroll = () => {
          const scroll = {
            y: window.scrollY,
            x: window.scrollX,
          };

          const previous = scrollPositionRef.current;
          const speed = Math.abs(scroll.y - previous) > 30 ? 2 : 1;
          const direction = scroll.y > previous ? 1 : -1;

          scrollPositionRef.current = scroll.y;
          setscrollPositionLocomotive(scroll.y);
          if (onScroll) {
            onScroll(scroll.y);
          }

          const velocityClass =
            speed > 1.5 ? "is-scrolling-fast" : "is-scrolling-slow";
          document.documentElement.classList.remove(
            "is-scrolling-fast",
            "is-scrolling-slow"
          );
          document.documentElement.classList.add(velocityClass);

          const scrollingClass =
            direction > 0 ? "is-scrolling-down" : "is-scrolling-up";
          document.documentElement.classList.remove(
            "is-scrolling-up",
            "is-scrolling-down"
          );
          document.documentElement.classList.add(scrollingClass);
        };

        const handleResize = () => {
          if (instance) {
            const currentPosition = window.scrollY;
            instance.scrollTo(currentPosition, {
              duration: 0,
              immediate: true,
            });
          }
        };

        const handleVisibilityChange = () => {
          if (document.visibilityState === "visible") {
            handleResize();
          }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        scrollEl.addEventListener("scroll", handleLocomotiveScroll);
        window.addEventListener("resize", handleResize);
        window.addEventListener("load", handleResize);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
          window.removeEventListener("scroll", handleScroll);
          scrollEl?.removeEventListener("scroll", handleLocomotiveScroll);
          window.removeEventListener("resize", handleResize);
          window.removeEventListener("load", handleResize);
          document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
      } catch (error) {
        console.error("Error initializing LocomotiveScroll:", error);
      }
    };

    let cleanup: (() => void) | undefined;

    initLocomotiveScroll().then((teardown) => {
      cleanup = teardown;
    });

    return () => {
      cleanup?.();
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
