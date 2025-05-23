"use client";

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
  scrollToHome: propScrollToHome,
  scrollToAbout: propScrollToAbout,
  scrollToWork: propScrollToWork,
  scrollToContact: propScrollToContact
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
    setTimeout(() => {
      setIsOpen(false);
    }, 50);
  };

  const handleHomeScroll = () => {
    if (propScrollToHome) {
      propScrollToHome();
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleAboutScroll = () => {
    if (propScrollToAbout) {
      propScrollToAbout();
    } else {
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
    }
  };

  const handleWorkScroll = () => {
    if (propScrollToWork) {
      propScrollToWork();
    } else {
      const projectsContent = document.getElementById('projects-content');
      if (projectsContent) {
        const offset = projectsContent.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offset - 50,
          behavior: "smooth",
        });
      }
    }
  };

  const handleContactScroll = () => {
    if (propScrollToContact) {
      propScrollToContact();
    } else {
        window.scrollTo({
        top: document.documentElement.scrollHeight,
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
      style={{ zIndex: isOpen ? 11 : 5 }}
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
          className={`md:hidden ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          style={{ zIndex: isOpen ? 11 : 2 }}
        >
          <div className="w-6"></div>
          <div className="w-6"></div>
          <div className="w-6"></div>
        </div>

        {/* Mobile menu overlay */}
        <div 
          className={`nav-overlay ${isOpen ? "open" : ""}`}
          style={{ 
            zIndex: isOpen ? 10 : -1,
            pointerEvents: isOpen ? 'auto' : 'none'
          }}
        >
          <div
            className={`${
              isOpen
                ? "flex flex-col space-y-12 items-center justify-center w-full px-6"
                : "hidden"
            } md:flex md:flex-row md:space-x-4 md:space-y-0`}
          >
            <Link href="/">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/", handleAboutScroll);
                }}
                className={`relative inline-block group w-full text-center ${
                  isOpen
                    ? "text-3xl font-semibold text-custom-blue/90 active:text-custom-blue animate-fade-in"
                    : "text-lg md:text-xl lg:text-2xl text-custom-blue"
                }`}
                style={isOpen ? { animationDelay: "0.1s" } : {}}
              >
                About
                <span className="absolute -bottom-2 left-0 w-full h-[2px] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 bg-custom-blue"></span>
              </div>
            </Link>
            <Link href="/">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/", handleWorkScroll);
                }}
                className={`relative inline-block group w-full text-center ${
                  isOpen
                    ? "text-3xl font-semibold text-custom-blue/90 active:text-custom-blue animate-fade-in"
                    : "text-lg md:text-xl lg:text-2xl text-custom-blue"
                }`}
                style={isOpen ? { animationDelay: "0.2s" } : {}}
              >
                Work
                <span className="absolute -bottom-2 left-0 w-full h-[2px] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 bg-custom-blue"></span>
              </div>
            </Link>
            <Link href="/">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/", handleContactScroll);
                }}
                className={`relative inline-block group w-full text-center ${
                  isOpen
                    ? "text-3xl font-semibold text-custom-blue/90 active:text-custom-blue animate-fade-in"
                    : "text-lg md:text-xl lg:text-2xl text-custom-blue"
                }`}
                style={isOpen ? { animationDelay: "0.3s" } : {}}
              >
                Contact
                <span className="absolute -bottom-2 left-0 w-full h-[2px] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 bg-custom-blue"></span>
              </div>
            </Link>
          </div>
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
