"use client";

import { useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function useLocomotive(
  onScroll?: (scrollPositionLocomotive: number) => void
) {
  const [scrollPositionLocomotive, setscrollPositionLocomotive] =
    useState<number>(0);
  const [locomotiveScroll, setLocomotiveScroll] =
    useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    let instance: LocomotiveScroll | null = null;

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

        // Store the current scroll position before initialization
        const currentScroll = window.scrollY;

        instance = new LocomotiveScroll({
          lenisOptions: {
            wrapper: window,
            content: scrollEl,
            lerp: 0.1,
            duration: 1.2,
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
          },
        });

        setLocomotiveScroll(instance);

        // Immediately scroll to the current position
        setTimeout(() => {
          window.scrollTo(0, currentScroll);
          (instance as any).scrollTo(currentScroll, {
            duration: 0,
            disableLerp: true,
          });
        }, 50);

        // Handle scroll events
        const handleScroll = () => {
          const scrollY = window.scrollY;
          setscrollPositionLocomotive(scrollY);
          if (onScroll) {
            onScroll(scrollY);
          }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Enhanced scroll event handling
        (instance as any).on(
          "scroll",
          ({
            scroll,
            direction,
            velocity,
          }: {
            scroll: { x: number; y: number };
            direction: "up" | "down";
            velocity: number;
          }) => {
            setscrollPositionLocomotive(scroll.y);
            if (onScroll) {
              onScroll(scroll.y);
            }

            // Update velocity classes
            const velocityClass =
              velocity > 1.5 ? "is-scrolling-fast" : "is-scrolling-slow";
            document.documentElement.classList.remove(
              "is-scrolling-fast",
              "is-scrolling-slow"
            );
            document.documentElement.classList.add(velocityClass);

            // Update scroll direction classes
            const scrollingClass =
              direction === "up" ? "is-scrolling-up" : "is-scrolling-down";
            document.documentElement.classList.remove(
              "is-scrolling-up",
              "is-scrolling-down"
            );
            document.documentElement.classList.add(scrollingClass);
          }
        );

        // Handle resize
        const handleResize = () => {
          if (instance) {
            (instance as any).update();
            const currentPosition = window.scrollY;
            (instance as any).scrollTo(currentPosition, {
              duration: 0,
              disableLerp: true,
            });
          }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("load", handleResize);

        // Handle page visibility changes
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible") {
            handleResize();
          }
        });

        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("resize", handleResize);
          window.removeEventListener("load", handleResize);
        };
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

  // Expose a method to manually update scroll position
  const updateScroll = () => {
    if (locomotiveScroll) {
      const currentPosition = window.scrollY;
      (locomotiveScroll as any).scrollTo(currentPosition, {
        duration: 0,
        disableLerp: true,
      });
    }
  };

  return { scrollPositionLocomotive, updateScroll };
}
