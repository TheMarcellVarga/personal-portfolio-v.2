"use client";

import DarkModeIcon from "@/public/icons/darkMode";
import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import Link from "next/link";
import { useState, useEffect } from "react";

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

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
          <div className="w-6 h-0.5 bg-slate-800 dark:bg-slate-400 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-800 dark:bg-slate-400 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-800 dark:bg-slate-400"></div>
        </div>
        {/* Navigation Links */}
        <div className={`nav-overlay ${isOpen ? "open" : ""}`}>
          <div
            className={`${
              isOpen ? "block lg:text-3xl" : "hidden"
            } md:flex space-x-4 h-full mt-16`}
          >
            <Link href="/about">
              <div
                className={`text:3xl md:text-sm font-medium ${isOpen ? "text-3xl" : ""}`}
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                About
              </div>
            </Link>
            <Link href="/work">
              <div
                className={`text-xl md:text-sm font-medium ${isOpen ? "text-3xl" : ""}`}
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                Work
              </div>
            </Link>
            <Link href="/contact">
              <div
                className={`text-xl md:text-sm font-medium ${isOpen ? "text-3xl" : ""}`}
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                Contact
              </div>
            </Link>
          </div>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 text-white md:text-slate-900 md:dark:text-slate-50 rounded"
          >
            <DarkModeIcon isDarkMode={isDarkMode} isOpen={isOpen} />
            {showTooltip && (
              <div className="relative">
                <div className="bg-slate-800 text-white px-2 py-1 rounded text-xs absolute top-2 left-1/2 transform -translate-x-1/2">
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
                className="text-sm font-medium text-slate-900 dark:text-slate-50"
                style={{ color: isOpen ? "#eeeeee" : "" }}
              >
                About
              </div>
            </Link>
            <Link href="/work">
              <div
                className="text-sm font-medium text-slate-900 dark:text-slate-50"
                style={{ color: isOpen ? "#eeeeee" : "" }}
              >
                Work
              </div>
            </Link>
            <Link href="/contact">
              <div
                className="text-sm font-medium text-slate-900 dark:text-slate-50"
                style={{ color: isOpen ? "#eeeeee" : "" }}
              >
                Contact
              </div>
            </Link>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 text-slate-900 dark:text-slate-50 rounded"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <DarkModeIcon isDarkMode={isDarkMode} isOpen={false} />
              {showTooltip && (
                <div className="relative">
                  <div className="bg-slate-800 text-white px-2 py-1 rounded text-xs absolute top-2 left-1/2 transform -translate-x-1/2">
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

export default Header;
