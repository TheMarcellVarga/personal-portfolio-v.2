import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useIsMobile } from "../isMobile";
import useWindowSize from "../useWindowSize";

interface HeroProps {
  scrollToWork: () => void;
}

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  if (hour >= 17 && hour < 22) return "Good evening";
  return "Hey there";
};

export default function Hero({ scrollToWork }: HeroProps) {
  const [greeting, setGreeting] = useState(getGreeting());
  const [hasScrolled, setHasScrolled] = useState(false);
  const isMobile = useIsMobile();
  const size = useWindowSize();

  useEffect(() => {
    const timer = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      data-scroll-section
      data-scroll-section-id="hero"
      className="relative flex flex-col items-center justify-between h-screen mt-2 mx-2 sm:m-4 gap-1"
    >
      <div
        data-scroll
        data-scroll-speed="1.2"
        data-scroll-delay="0.1"
        className="grow pb-8 w-full flex flex-row items-center justify-strech gap-2 fade-top-bottom"
      >
        <div
          className={`
          absolute 
          mt-8 sm:mt-12 
          w-full
          h-screen 
          z-20 
          flex 
          flex-col 
          items-start 
          justify-center 
          overflow-x-hidden
          ml-2 sm:ml-4
          md:pl-12 
          pl-2 sm:pl-4 
          pb-24 sm:pb-32 
          md:pb-24 
          md:pt-4
        `}
        >
          <span
            className={`
          text-gray-700
          text-start
          font-light 
          whitespace-nowrap
          animate-fade-in-up 
          transition-opacity 
          duration-300
          text-sm sm:text-base md:text-xl lg:text-2xl
          pb-1 sm:pb-4
        `}
            style={{ animationDelay: "0.2s" }}
            aria-live="polite"
          >
            {greeting}, I&apos;m&nbsp;
          </span>
          <span
            className={`
          font-bold
          text-start
          text-custom-blue 
          whitespace-nowrap
          animate-fade-in-up
          text-3xl leading-8 sm:text-4xl sm:leading-[50px] md:text-6xl lg:text-7xl
        `}
            style={{ animationDelay: "0.4s" }}
          >
            Marcell Varga
          </span>
          <div
            className={`
          flex 
          text-start
          max-w-full 
          font-light 
          items-center 
          whitespace-nowrap
          animate-fade-in-up
          text-custom-blue
          text-lg sm:text-xl md:text-3xl lg:text-4xl
          justify-start
          mt-1 mb-2 md:mb-0 md:my-4
        `}
            style={{ animationDelay: "0.6s" }}
          >
            UX & Frontend engineer
          </div>
          <div
            className={`
          flex flex-col sm:flex-row 
          w-full
          text-xs sm:text-sm md:text-base lg:text-lg
          font-light 
          items-start 
          justify-start 
          mt-2 md:mt-8
          text-custom-blue/60
          transform 
          animate-fade-in-up
          group
          transition-all duration-300
          hover:text-custom-blue/80
          pr-4 sm:pr-0
        `}
            style={{ animationDelay: "0.8s" }}
          >
            {/* Mobile version (split into two lines) */}
            <span className="sm:hidden text-left group-hover:translate-x-1 transition-transform duration-300">
              Crafting intuitive digital experiences where
            </span>
            <span className="sm:hidden text-left font-medium text-custom-blue/70 group-hover:translate-x-1 transition-transform duration-300">
              design meets engineering excellence
            </span>

            {/* Desktop version (single line) */}
            <span className="hidden text-left sm:block italic group-hover:translate-x-1 transition-transform duration-300">
              Crafting intuitive digital experiences where
              <br />
              <span className="font-medium text-custom-blue/70">
                design meets engineering excellence
              </span>
            </span>
          </div>
          <div
            className="absolute bottom-24 sm:bottom-40 md:bottom-44 left-0 pl-2 sm:pl-6 md:pl-10
            animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <button
              onClick={scrollToWork}
              className="relative flex px-4 sm:px-5 py-2 text-custom-blue rounded-full group 
              overflow-hidden min-w-24 sm:min-w-28 md:min-w-36 items-center justify-center
              cursor-pointer text-sm sm:text-base"
              aria-label="View projects"
            >
              <div className="relative z-10 flex items-center justify-center transition-all duration-300 ease-out">
                <span className="relative z-10 transition-all duration-300 ease-out group-hover:text-gray-50 mr-2">
                  View Projects
                </span>
                <ArrowRightIcon
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 relative z-10 transition-all duration-300 ease-out group-hover:text-gray-50
                  transform group-hover:translate-x-1"
                />
              </div>
              <div className="absolute inset-0 border-2 border-custom-blue rounded-full"></div>
              <div
                className="absolute inset-0 bg-custom-blue rounded-full transform scale-x-0 group-hover:scale-x-100 
                transition-transform duration-300 ease-out origin-left"
              ></div>
            </button>
          </div>
        </div>

        <div className="relative w-full h-full flex justify-end">
          <div
            className="relative w-full h-full md:h-full flex justify-end main-container
            animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <svg
              className="rounded-[36px] bg-gray-100 transition-transform duration-700 ease-out hover:scale-105 hover:rotate-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: 0,
                left: "auto",
                right: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
                transform: "scale(-1, -1)",
              }}
              aria-hidden="true"
            >
              <path
                className="hidden 2xl:block"
                d="M2500 -2800L470 1100H0V-150Z"
              />
              <path
                className="hidden 2xl:block gradient-path"
                d="M2500 -2800L470 1100H0V-150Z"
                fill="url(#paint0_linear_364_239)"
              />
              <path
                className="hidden md:block 2xl:hidden"
                d="M1750 -2009L335 786H0V-109Z"
              />
              <path
                className="hidden md:block 2xl:hidden gradient-path"
                d="M1750 -2009L335 786H0V-109Z"
                fill="url(#paint0_linear_364_239)"
              />
              <path
                className="hidden sm:block md:hidden"
                d="M875 -1004.5L167.5 393H0V-54.5Z"
              />
              <path
                className="hidden sm:block md:hidden gradient-path"
                d="M875 -1004.5L167.5 693H0V-54.5Z"
                fill="url(#paint0_linear_364_239)"
              />
              <path
                className="block sm:hidden"
                d="M437.5 -502.25L83.75 696.5H0V-27.25Z"
              />
              <path
                className="block sm:hidden gradient-path"
                d="M177.5 0L-13.75 592.5H0V-27.25Z"
                fill="url(#paint0_linear_364_239)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_364_239"
                  x1="665"
                  y1="-109"
                  x2="-184.317"
                  y2="250.252"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#02425C" />
                  <stop offset="0.475" stopColor="#0F172A" />
                  <stop offset="1" stopColor="#001822" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div
            className={`
            absolute 
            transform 
            z-10
            animate-fade-in-up
            w-40 sm:w-48 md:w-80 lg:w-96 
            bottom-0 
            right-3 md:right-16
          `}
          >
            <img
              src="/images/personalpageprofilealt.png"
              alt="Marcell Varga - UX & Frontend Engineer"
              width={300}
              height={300}
              style={{
                animationDelay: "0.8s",
                animationFillMode: "forwards",
              }}
              className="w-full h-full object-cover rounded-lg
              transform transition-all duration-500 ease-out"
            />
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-700 ease-out ${
          hasScrolled
            ? "opacity-0 transform translate-y-4"
            : "opacity-100 transform translate-y-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 pb-32 group">
          <span
            className="text-custom-blue/60 text-sm font-medium tracking-wider uppercase
            transform group-hover:translate-y-[-2px] 
            group-hover:text-custom-blue/90
            transition-all duration-300"
          >
            {isMobile ? "Swipe" : "Scroll"} to explore
          </span>
          <div className="relative">
            <svg
              className="w-6 h-6 animate-bounce text-custom-blue/60 
              group-hover:text-custom-blue/90
              transform group-hover:scale-110 
              transition-all duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
} 