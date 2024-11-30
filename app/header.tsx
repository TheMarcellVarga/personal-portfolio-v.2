"use client";

import DarkModeIcon from "@/public/icons/darkMode";
import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  scrollToHome?: () => void;
  scrollToAbout?: () => void;
  scrollToWork?: () => void;
  scrollToContact?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isOpen,
  setIsOpen,
  scrollToHome,
  scrollToAbout,
  scrollToWork,
  scrollToContact,
}) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [pendingScrollAction, setPendingScrollAction] = useState<(() => void) | null>(null);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollTop(scrollTop);
  }, [lastScrollTop]);

  useEffect(() => {
    if (pendingScrollAction) {
      pendingScrollAction();
      setPendingScrollAction(null);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, handleScroll, pendingScrollAction]);

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => setShowTooltip(true), 1000); // Show tooltip after 1 second
  };

  const handleMouseLeave = () => {
    setShowTooltip(false); // Hide tooltip on mouse leave
  };

  useEffect(() => {
    if (pendingScrollAction) {
      pendingScrollAction();
      setPendingScrollAction(null);
    }
  }, [pendingScrollAction]);

  const handleNavigation = async (
    path: string,
    scrollAction: (() => void) | undefined
  ) => {
    if (window.location.pathname !== path) {
      await router.push(path);

      // Wait for the navigation to complete
      await new Promise((resolve) => setTimeout(resolve, 100));

      if (scrollAction) {
        scrollAction();
      }
    } else if (scrollAction) {
      scrollAction();
    }
  };

  return (
    <header
      className={`sticky-header flex justify-between items-center w-full p-4 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center">
        {/* Icon */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/", () => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            });
          }}
        >
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
              isOpen ? "flex flex-col space-y-8 items-start" : "hidden"
            } md:flex md:flex-row md:space-x-4 md:space-y-0 h-full mt-16`}
          >
            <Link href="/about">
              <div
                className={`relative inline-block font-medium tracking-wider group ${
                  isOpen
                    ? "text-5xl md:text-6xl lg:text-7xl text-gray-100"
                    : "text-lg md:text-xl lg:text-2xl text-custom-blue"
                }`}
              >
                About
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${
                    isOpen ? "bg-gray-100" : "bg-custom-blue"
                  }`}
                ></span>
              </div>
            </Link>
            <Link href="/work">
              <div
                className={`relative inline-block font-medium tracking-wider group ${
                  isOpen
                    ? "text-5xl md:text-6xl lg:text-7xl text-gray-100"
                    : "text-lg md:text-xl lg:text-2xl text-custom-blue"
                }`}
              >
                Work
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${
                    isOpen ? "bg-gray-100" : "bg-custom-blue"
                  }`}
                ></span>
              </div>
            </Link>
            <Link href="/contact">
              <div
                className={`relative inline-block font-medium tracking-wider group ${
                  isOpen
                    ? "text-5xl md:text-6xl lg:text-7xl text-gray-100"
                    : "text-lg md:text-xl lg:text-2xl text-custom-blue"
                }`}
              >
                Contact
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${
                    isOpen ? "bg-gray-100" : "bg-custom-blue"
                  }`}
                ></span>
              </div>
            </Link>
          </div>
        </div>{" "}
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
            {/* <Link
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/about", scrollToAbout);
              }}
            > */}
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/", () => {
                  window.scrollTo({
                    top: 2800 - 1,
                    behavior: "smooth",
                  });
                });
              }}
            >
              <div
                className="relative inline-block text-sm font-medium text-custom-blue tracking-wider  group"
                style={{ color: isOpen ? "#eeeeee" : "" }}
              >
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-custom-blue transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </div>
            </Link>
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/", () => {
                  window.scrollTo({
                    top: 4350 - 1,
                    behavior: "smooth",
                  });
                });
              }}
            >
              <div
                className="relative inline-block text-sm font-medium text-custom-blue tracking-wider  group"
                style={{ color: isOpen ? "#eeeeee" : "" }}
              >
                Work
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-custom-blue transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </div>
            </Link>
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/", () => {
                  window.scrollTo({
                    top: 6380 - 1,
                    behavior: "smooth",
                  });
                });
              }}
            >
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
