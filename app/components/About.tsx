import { useState, useEffect } from 'react';

interface AboutProps {
  scrollPositionLocomotive: number | undefined;
}

const textToType =
  "I design and build thoughtful digital products where clarity, usability, and business goals align. From discovery to delivery, I translate complex problems into elegant, measurable experiences that teams can ship with confidence.";

export default function About({ scrollPositionLocomotive }: AboutProps) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        if (scrollPositionLocomotive !== undefined) {
          const scrollDistance = scrollPositionLocomotive;

          const typingStart = 550;
          const maxScrollForTyping = 2250;
          const fadeStart = 2800;
          const fadeEnd = fadeStart + 400;
          const zIndexThreshold = 3600;

          const stickySection = document.querySelector(
            "[data-scroll-section].sticky"
          ) as HTMLElement;

          if (stickySection) {
            const newZIndex = scrollDistance > zIndexThreshold ? "-99" : "1";
            if (stickySection.style.zIndex !== newZIndex) {
              stickySection.style.zIndex = newZIndex;
            }

            let opacity = 1;
            if (scrollDistance >= fadeStart && scrollDistance <= fadeEnd) {
              const fadeProgress =
                (scrollDistance - fadeStart) / (fadeEnd - fadeStart);
              opacity = 1 - fadeProgress;
            } else if (scrollDistance > fadeEnd) {
              opacity = 0;
            }

            const opacityString = Math.max(0, Math.min(1, opacity)).toString();
            if (stickySection.style.opacity !== opacityString) {
              stickySection.style.opacity = opacityString;

              const typedTextElement = stickySection.querySelector(
                "h2"
              ) as HTMLElement;
              if (typedTextElement) {
                typedTextElement.style.opacity = opacityString;
              }
            }
          }

          let newTypedText = "";

          if (scrollDistance < typingStart) {
            newTypedText = "";
          } else if (scrollDistance > maxScrollForTyping) {
            newTypedText = textToType;
          } else {
            const progress =
              (scrollDistance - typingStart) /
              (maxScrollForTyping - typingStart);
            const clampedProgress = Math.max(0, Math.min(1, progress));
            const textLength = Math.floor(clampedProgress * textToType.length);
            newTypedText = textToType.slice(0, textLength);
          }

          setTypedText((prevText) => {
            if (prevText !== newTypedText) {
              return newTypedText;
            }
            return prevText;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [scrollPositionLocomotive]);

  return (
    <section
      data-scroll-section
      data-scroll-section-id="about"
      data-scroll-offset="50"
      className="sticky h-[400vh] top-0 flex flex-col items-center justify-between gap-1 w-full transition-all duration-300"
    >
      <div className="flex w-full sm:w-5/6 md:w-4/5 h-screen items-center justify-start px-4 sm:px-8">
        <h2 
          className="text-base sm:text-xl md:text-2xl font-light text-left md:text-justify 
          leading-relaxed text-custom-blue transition-opacity duration-300
          mx-2 sm:mx-4 md:m-8"
          aria-live="polite"
        >
          {typedText}
        </h2>
      </div>
    </section>
  );
} 