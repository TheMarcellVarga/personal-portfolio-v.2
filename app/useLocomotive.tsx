"use client";

import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLocomotive(
  onScroll?: (scrollPositionLocomotive: number) => void
) {
  const [scrollPositionLocomotive, setscrollPositionLocomotive] = useState<number>(0);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    let instance: Lenis | null = null;

    const initLenis = async () => {
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

        instance = new Lenis({
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
        });

        setLenis(instance);

        // Immediately scroll to the current position
        setTimeout(() => {
          window.scrollTo(0, currentScroll);
          instance?.scrollTo(currentScroll, {
            immediate: true,
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

        // Raf loop using arrow function
        const raf = (time: number): void => {
          instance?.raf(time);
          requestAnimationFrame(raf);
        };
        
        requestAnimationFrame(raf);

        // Handle scroll events with Lenis
        instance.on('scroll', ({ scroll, velocity, direction, progress }: any) => {
          setscrollPositionLocomotive(scroll);
          if (onScroll) {
            onScroll(scroll);
          }

          // Update velocity classes
          const velocityClass = velocity > 1.5 ? "is-scrolling-fast" : "is-scrolling-slow";
          document.documentElement.classList.remove(
            "is-scrolling-fast",
            "is-scrolling-slow"
          );
          document.documentElement.classList.add(velocityClass);

          // Update scroll direction classes
          const scrollingClass =
            direction === 1 ? "is-scrolling-down" : "is-scrolling-up";
          document.documentElement.classList.remove(
            "is-scrolling-up",
            "is-scrolling-down"
          );
          document.documentElement.classList.add(scrollingClass);
        });

        // Handle resize
        const handleResize = () => {
          if (instance) {
            instance.resize();
            const currentPosition = window.scrollY;
            instance.scrollTo(currentPosition, {
              immediate: true,
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
        console.error("Error initializing Lenis:", error);
      }
    };

    initLenis();

    return () => {
      if (instance) {
        instance.destroy();
      }
    };
  }, [onScroll]);

  // Expose a method to manually update scroll position
  const updateScroll = () => {
    if (lenis) {
      const currentPosition = window.scrollY;
      lenis.scrollTo(currentPosition, {
        immediate: true,
      });
    }
  };

  return { scrollPositionLocomotive, updateScroll };
}