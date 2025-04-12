import { useState, useEffect } from 'react';

interface AboutProps {
  scrollPositionLocomotive: number | undefined;
}

const textToType =
  "An adventurous UX & Frontend engineer dedicated to crafting delightful, business-focused, and user-centred digital experiences. I excel at solving complex problems through efficient design, turning challenges into opportunities. Overcoming challenges through efficient design is what fuelling my everyday drive.";

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
      <div className="flex md:w-4/5 h-screen text-5xl font-medium items-center justify-start">
        <h2 
          className="text-2xl font-light text-left md:text-justify m-8 leading-relaxed text-custom-blue transition-opacity duration-300"
          aria-live="polite"
        >
          {typedText}
        </h2>
      </div>
    </section>
  );
} 