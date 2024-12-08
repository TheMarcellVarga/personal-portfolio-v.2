"use client";

import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isOpen, 
  setIsOpen, 
}) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavigation = async (
    path: string,
    scrollAction: () => void
  ) => {
    if (window.location.pathname !== path) {
      await router.push(path);
      await new Promise((resolve) => setTimeout(resolve, 100));
      scrollAction();
    } else {
      scrollAction();
    }
    setIsOpen(false);
  };

  const handleHomeScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    const aboutSection = document.querySelector(
      '[data-scroll-section-id="about"]'
    );
    if (aboutSection) {
      const targetOffset = 2250;
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  };

  const handleWorkScroll = () => {
    const workSection = document.querySelector(
      '[data-scroll-section-id="projects"]'
    );
    if (workSection) {
      const offset = workSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offset + 20,
        behavior: "smooth",
      });
    }
  };

  const handleContactScroll = () => {
    const contactSection = document.querySelector(
      '[data-scroll-section-id="contact"]'
    );
    if (contactSection) {
      const offset = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offset + 20,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`sticky-header flex justify-between items-center w-full p-4 transition-opacity duration-500 ${
        isVisible && !isOpen
          ? "opacity-100"
          : isOpen
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/", handleHomeScroll);
          }}
        >
          <IndexSigAnimatedIcon isOpen={isOpen} />
        </Link>
      </div>
      <nav className="flex items-center">
        {/* Mobile menu button */}
        <div
          className={`md:hidden z-2 ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-slate-400 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-400 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-400"></div>
        </div>

        {/* Mobile menu overlay */}
        <div className={`nav-overlay ${isOpen ? "open" : ""}`}>
          <div
            className={`${
              isOpen
                ? "flex flex-col space-y-12 items-center justify-center w-full px-6"
                : "hidden"
            } md:flex md:flex-row md:space-x-4 md:space-y-0`}
          >
            <Link href="/about">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/", handleAboutScroll);
                }}
                className={`relative inline-block group w-full text-center ${
                  isOpen
                    ? "text-3xl font-semibold text-custom-blue/90 active:text-custom-blue"
                    : "text-lg md:text-xl lg:text-2xl text-custom-blue"
                }`}
              >
                About
                <span className="absolute -bottom-2 left-0 w-full h-[2px] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 bg-custom-blue"></span>
              </div>
            </Link>
            <Link href="/work">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/", handleWorkScroll);
                }}
                className={`relative inline-block group w-full text-center ${
                  isOpen
                    ? "text-3xl font-semibold text-custom-blue/90 active:text-custom-blue"
                    : "text-lg md:text-xl lg:text-2xl text-custom-blue"
                }`}
              >
                Work
                <span className="absolute -bottom-2 left-0 w-full h-[2px] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 bg-custom-blue"></span>
              </div>
            </Link>
            <Link href="/contact">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/", handleContactScroll);
                }}
                className={`relative inline-block group w-full text-center ${
                  isOpen
                    ? "text-3xl font-semibold text-custom-blue/90 active:text-custom-blue"
                    : "text-lg md:text-xl lg:text-2xl text-custom-blue"
                }`}
              >
                Contact
                <span className="absolute -bottom-2 left-0 w-full h-[2px] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 bg-custom-blue"></span>
              </div>
            </Link>
          </div>
        </div>

        {/* Desktop navigation */}
        <div className={`${isOpen ? 'hidden' : 'block'} md:flex items-center space-x-4 transition-all duration-300 ease-in-out`}>
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/", handleAboutScroll);
            }}
          >
            <div className={`relative inline-block text-md font-medium tracking-wider group ${
              isOpen ? 'text-[#eeeeee]' : 'text-custom-blue'
            }`}>
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-custom-blue transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </div>
          </Link>

          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/", handleWorkScroll);
            }}
          >
            <div className={`relative inline-block text-md font-medium tracking-wider group ${
              isOpen ? 'text-[#eeeeee]' : 'text-custom-blue'
            }`}>
              Work
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-custom-blue transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </div>
          </Link>

          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/", handleContactScroll);
            }}
          >
            <div className={`relative inline-block text-md font-medium tracking-wider group ${
              isOpen ? 'text-[#eeeeee]' : 'text-custom-blue'
            }`}>
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-custom-blue transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
