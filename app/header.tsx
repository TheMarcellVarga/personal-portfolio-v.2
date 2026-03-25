"use client";

import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
    if (propScrollToHome) propScrollToHome();
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAboutScroll = () => {
    if (propScrollToAbout) propScrollToAbout();
    else {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        window.scrollTo({
          top: aboutSection.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  const handleWorkScroll = () => {
    if (propScrollToWork) propScrollToWork();
    else {
      const projectsContent = document.getElementById('projects-content');
      if (projectsContent) {
        const offset = projectsContent.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offset - 100,
          behavior: "smooth",
        });
      }
    }
  };

  const handleContactScroll = () => {
    if (propScrollToContact) propScrollToContact();
    else window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-5 transition-all duration-500 z-50 ${
        isVisible && !isOpen
          ? "opacity-100 translate-y-0 backdrop-blur-xl bg-black/40 border-b border-white/5"
          : isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="flex items-center">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/", handleHomeScroll);
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <IndexSigAnimatedIcon isOpen={isOpen} />
        </Link>
      </div>

      <nav className="flex items-center">
        {/* Mobile menu button */}
        <div
          className={`md:hidden ${isOpen ? "open" : ""} relative z-50`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-px bg-white mb-2 transition-all"></div>
          <div className="w-6 h-px bg-white mb-2 transition-all"></div>
          <div className="w-6 h-px bg-white transition-all"></div>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, clipPath: "circle(0% at right top)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at right top)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at right top)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 w-full h-screen bg-[#0a0a0a]/95 flex flex-col justify-center items-center z-40 backdrop-blur-2xl"
            >
              <div className="flex flex-col space-y-10 items-center justify-center w-full px-6">
                {[
                  { name: "About", action: handleAboutScroll },
                  { name: "Work", action: handleWorkScroll },
                  { name: "Contact", action: handleContactScroll }
                ].map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + (i * 0.1), ease: "easeOut" }}
                  >
                    <Link href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation("/", item.action);
                      }}
                      className="group relative text-2xl font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
                    >
                      {item.name}
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide relative z-50">
          {[
            { name: "About", action: handleAboutScroll },
            { name: "Work", action: handleWorkScroll },
            { name: "Contact", action: handleContactScroll }
          ].map((item) => (
            <Link
              key={item.name}
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/", item.action);
              }}
            >
              <div className="relative inline-block text-gray-400 hover:text-white transition-colors duration-300 group">
                {item.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
