"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import DarkModeIcon from "@/public/icons/darkMode";
import GitHubIcon from "@/public/icons/github";
import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import LinkedInIcon from "@/public/icons/linkedin";
import MouseScrollIcon from "@/public/icons/mouseScroll";

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface FooterProps {
  isDarkMode: boolean;
  isOpen: boolean;
}

// Header component
const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  setIsDarkMode,
  isOpen,
  setIsOpen,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // downscroll code
        setIsVisible(false);
      } else {
        // upscroll code
        setIsVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const body = document.body;
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      body.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.altKey && event.code === "KeyC") {
        toggleDarkMode();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleDarkMode]);

  // const [showTooltip, setShowTooltip] = useState(false);

  // const handleMouseEnter = () => {
  //   setTimeout(() => setShowTooltip(true), 1000); // Show tooltip after 1 second
  // };

  // const handleMouseLeave = () => {
  //   setShowTooltip(false);
  // };

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => setShowTooltip(true), 1000); // Show tooltip after 1 second
  };

  const handleMouseLeave = () => {
    setShowTooltip(false); // Hide tooltip on mouse leave
  };

  return (
    <header
      className={`sticky-header flex justify-between items-center w-full p-4 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center">
        {/* Icon */}
        <Link href="/ ">
          <IndexSigAnimatedIcon isDarkMode={isDarkMode} isOpen={isOpen} />
        </Link>
      </div>
      <nav className="flex items-center">
        {/* Hamburger Menu */}
        <div
          className={`md:hidden z-2 ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-gray-800 dark:bg-gray-400 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 dark:bg-gray-400 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 dark:bg-gray-400"></div>
        </div>
        {/* Navigation Links */}
        <div className={`nav-overlay ${isOpen ? "open" : ""}`}>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex space-x-4 h-full mt-16`}
          >
            <Link href="/about">
              <div
                className="text-xl md:text-sm font-medium"
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                About
              </div>
            </Link>
            <Link href="/work">
              <div
                className="text-xl md:text-sm font-medium"
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                Work
              </div>
            </Link>
            <Link href="/contact">
              <div
                className="text-xl md:text-sm font-medium"
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                Contact
              </div>
            </Link>
          </div>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 text-white md:text-black md:dark:text-white rounded"
          >
            <DarkModeIcon isDarkMode={isDarkMode} isOpen={isOpen} />
            {showTooltip && (
              <div className="relative">
                <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs absolute top-2 left-1/2 transform -translate-x-1/2">
                  Alt&nbsp;+&nbsp;C
                </div>
              </div>
            )}
          </button>
        </div>
        <div className={`${isOpen ? "hidden" : "block"}`}>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex items-center space-x-4`}
          >
            <Link href="/about">
              <div
                className="text-sm font-medium text-black dark:text-white"
                style={{ color: isOpen ? "#eeeeee" : "" }}
              >
                About
              </div>
            </Link>
            <Link href="/work">
              <div
                className="text-sm font-medium text-black dark:text-white"
                style={{ color: isOpen ? "#eeeeee" : "" }}
              >
                Work
              </div>
            </Link>
            <Link href="/contact">
              <div
                className="text-sm font-medium text-black dark:text-white"
                style={{ color: isOpen ? "#eeeeee" : "" }}
              >
                Contact
              </div>
            </Link>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 text-black dark:text-white rounded"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <DarkModeIcon isDarkMode={isDarkMode} isOpen={false} />
              {showTooltip && (
                <div className="relative">
                  <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs absolute top-2 left-1/2 transform -translate-x-1/2">
                    Alt&nbsp;+&nbsp;C
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Footer component
const Footer: React.FC<FooterProps> = ({ isDarkMode, isOpen }) => {
  return (
    <div className="flex w-full flex-row justify-between items-center">
      <div className="flex w-full">© 2024 Marcell Varga</div>
      <div className="flex space-x-4">
        <Link href="https://www.linkedin.com/in/marcellvarga/">
          {/* <Image
            src="/icons/linkedin.svg"
            alt="Linkedin Icon"
            width={24}
            height={24}
          /> */}
          <LinkedInIcon isDarkMode={isDarkMode} isOpen={isOpen} />
        </Link>
        <Link href="https://github.com/TheMarcellVarga">
          {/* <Image
            src="/icons/github.svg"
            alt="GitHub Icon"
            width={24}
            height={24}
          /> */}
          <GitHubIcon isDarkMode={isDarkMode} isOpen={isOpen} />
        </Link>
      </div>
    </div>
  );
};

const history = [
  {
    title: "AXON Networks",
    subTitle: "UX & Frontend Engineer",
    content: {
      picture: "Oct 2022",
      text: "",
    },
    description: [
      "Contributed to AXON Orchestrator development, focusing on UX/UI design and frontend development within cross-functional teams.",
      "Created interactive prototypes and established design system for in-house development.",
      "Collaborated with Analytics team to integrate AI/ML solutions into products, enhancing product functionality.",
      "Participated in the full product development cycle from UX/UI design, through Frontend Development to successful deployments.",
    ],
  },
  {
    title: "AXON Networks",
    subTitle: "UX & Frontend Engineer",
    content: {
      picture: "Oct 2022",
      text: "",
    },
    description: [
      "Contributed to AXON Orchestrator development, focusing on UX/UI design and frontend development within cross-functional teams.",
      "Created interactive prototypes and established design system for in-house development.",
      "Collaborated with Analytics team to integrate AI/ML solutions into products, enhancing product functionality.",
      "Participated in the full product development cycle from UX/UI design, through Frontend Development to successful deployments.",
    ],
  },
  {
    title: "AXON Networks",
    subTitle: "UX & Frontend Engineer",
    content: {
      picture: "Oct 2022",
      text: "",
    },
    description: [
      "Contributed to AXON Orchestrator development, focusing on UX/UI design and frontend development within cross-functional teams.",
      "Created interactive prototypes and established design system for in-house development.",
      "Collaborated with Analytics team to integrate AI/ML solutions into products, enhancing product functionality.",
      "Participated in the full product development cycle from UX/UI design, through Frontend Development to successful deployments.",
    ],
  },
  // Add more projects here
];

const ESS = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode
  const [isOpen, setIsOpen] = useState(false); // State for other purposes (e.g., menu open)
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="px-4 pb-4 bg-custom-light dark:bg-custom-dark transition-colors duration-200 ease-in-out">
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <main className="flex flex-col items-center justify-between m-4 gap-1 w-full">
        <div className="flex-grow pb-12 w-full flex flex-row items-center justify-center gap-2">
          <section className="flex flex-col items-center justify-between my-4 gap-24 w-4/5">
            {/* New Experience Section */}
            <article className="mt-8 w-full p-4">
              <h2 className="text-custom-blue text-3xl font-bold mb-4">
                European Study Solution
              </h2>
              <h2 className="text-custom-blue text-md font-bold mb-4 tracking-wider uppercase">
                Student Agency
              </h2>
              <div className="flex flex-col gap-12">
                {history.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl text-black dark:text-white">
                        {item.title}
                      </h3>
                      <h3 className="text-lg text-black dark:text-white">
                        {item.subTitle}
                      </h3>
                      <h4 className="text-base font-light text-black dark:text-white">
                        {item.content.picture}
                        {item.content.text}
                      </h4>
                      <div className="text-sm text-black dark:text-white ">
                        {item.description.map((desc, index) => (
                          <p key={index} className="py-2">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </div>
        <div className="pb-32 flex flex-col items-center justify-start"></div>
      </main>
      <Footer isDarkMode={isDarkMode} isOpen={isOpen} />
    </div>
  );
};

export default ESS;
