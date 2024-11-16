"use client";

import { useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function useLocomotive(
  onScroll?: (scrollPositionLocomotive: number) => void
) {
  const [scrollPositionLocomotive, setscrollPositionLocomotive] =
    useState<number>(0);

  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll | null = null;

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

        locomotiveScroll = new LocomotiveScroll({
          lenisOptions: {
            wrapper: window,
            content: scrollEl,
            lerp: 0.1,
            duration: 1.2,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
          }
        });

        // Create a scroll event listener on the window
        const handleScroll = () => {
          const scrollY = window.scrollY;
          setscrollPositionLocomotive(scrollY);
          if (onScroll) {
            onScroll(scrollY);
          }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Also listen to Locomotive's scroll event for smooth scrolling updates
        (locomotiveScroll as any).on('scroll', ({ scroll }: { scroll: { y: number } }) => {
          setscrollPositionLocomotive(scroll.y);
          if (onScroll) {
            onScroll(scroll.y);
          }
        });

        // Initial position
        handleScroll();

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

      } catch (error) {
        console.error("Error initializing LocomotiveScroll:", error);
      }
    };

    initLocomotiveScroll();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, [onScroll]);

  return { scrollPositionLocomotive };
}