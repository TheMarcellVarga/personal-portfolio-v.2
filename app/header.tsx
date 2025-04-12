"use client";

import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import MobileNav from "./components/MobileNav";

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
  scrollToHome: externalScrollToHome,
  scrollToAbout: externalScrollToAbout,
  scrollToWork: externalScrollToWork,
  scrollToContact: externalScrollToContact
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

  // Use external scroll functions if provided, otherwise use internal ones
  const handleHomeScroll = externalScrollToHome || (() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const handleAboutScroll = externalScrollToAbout || (() => {
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
  });

  const handleWorkScroll = externalScrollToWork || (() => {
    const workSection = document.querySelector(
      '[data-scroll-section-id="projectsContent"]'
    );
    if (workSection) {
      const offset = workSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offset - 50,
        behavior: "smooth",
      });
    }
  });

  const handleContactScroll = externalScrollToContact || (() => {
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
  });

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
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            scrollToHome={handleHomeScroll}
            scrollToAbout={handleAboutScroll}
            scrollToWork={handleWorkScroll}
            scrollToContact={handleContactScroll}
          />
        </div>

        {/* Desktop navigation */}
        <div className={`hidden md:flex items-center space-x-4 transition-all duration-300 ease-in-out`}>
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/", handleAboutScroll);
            }}
          >
            <div className={`relative inline-block text-md font-medium tracking-wider group text-text-primary`}>
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-text-primary transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </div>
          </Link>

          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/", handleWorkScroll);
            }}
          >
            <div className={`relative inline-block text-md font-medium tracking-wider group text-text-primary`}>
              Work
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-text-primary transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </div>
          </Link>

          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/", handleContactScroll);
            }}
          >
            <div className={`relative inline-block text-md font-medium tracking-wider group text-text-primary`}>
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-text-primary transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
