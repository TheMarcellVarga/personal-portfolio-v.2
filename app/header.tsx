"use client";

import DarkModeIcon from "@/public/icons/darkMode";
import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import Link from "next/link";
import { useState, useEffect } from "react";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isOpen, setIsOpen }) => {
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
          <IndexSigAnimatedIcon isOpen={isOpen} />
        </Link>
      </div>
      <nav className="flex items-center">
        {/* Hamburger Menu */}
        <div
          className={`md:hidden z-2 ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-slate-400 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-400 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-400"></div>
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
                className={`text-xl md:text-sm font-medium ${
                  isOpen ? "lg:text-3xl" : ""
                }`}
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                About
              </div>
            </Link>
            <Link href="/work">
              <div
                className={`text-xl md:text-sm font-medium ${
                  isOpen ? "lg:text-3xl" : ""
                }`}
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                Work
              </div>
            </Link>
            <Link href="/contact">
              <div
                className={`text-xl md:text-sm font-medium ${
                  isOpen ? "lg:text-3xl" : ""
                }`}
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                Contact
              </div>
            </Link>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "hidden" : "block"
          } transition-all duration-300 ease-in-out`}
        >
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex items-center space-x-4 transition-all duration-300 ease-in-out`}
          >
            <Link href="/about">
              <div
                className="relative inline-block text-sm font-medium text-custom-blue tracking-wider  group"
                style={{ color: isOpen ? "#eeeeee" : "" }}
              >
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-custom-blue transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </div>
            </Link>
            <Link href="/work">
              <div
                className="relative inline-block text-sm font-medium text-custom-blue tracking-wider  group"
                style={{ color: isOpen ? "#eeeeee" : "" }}
              >
                Work
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-custom-blue transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </div>
            </Link>
            <Link href="/contact">
              <div
                className="relative inline-block text-sm font-medium text-custom-blue tracking-wider  group"
                style={{ color: isOpen ? "#eeeeee" : "" }}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-custom-blue transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
