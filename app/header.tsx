"use client";

import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  scrollToContact: propScrollToContact,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingUp = currentY < lastY;

      if (currentY < 60 || scrollingUp || isOpen) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  const fallbackScroll = (id: string, offset = 0) => {
    const section = document.getElementById(id);
    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToHome = () => {
    if (propScrollToHome) {
      propScrollToHome();
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAbout = () => {
    if (propScrollToAbout) {
      propScrollToAbout();
      return;
    }

    fallbackScroll("about", -80);
  };

  const scrollToWork = () => {
    if (propScrollToWork) {
      propScrollToWork();
      return;
    }

    fallbackScroll("work", -80);
  };

  const scrollToContact = () => {
    if (propScrollToContact) {
      propScrollToContact();
      return;
    }

    fallbackScroll("contact", -80);
  };

  const navigateHomeAndRun = (action: () => void) => {
    if (pathname !== "/") {
      router.push("/");
      window.setTimeout(action, 220);
    } else {
      action();
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "About", onClick: () => navigateHomeAndRun(scrollToAbout) },
    { label: "Work", onClick: () => navigateHomeAndRun(scrollToWork) },
    { label: "Contact", onClick: () => navigateHomeAndRun(scrollToContact) },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isVisible || isOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flow-panel mx-auto mt-3 w-[min(96%,1200px)] px-4 py-3">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            onClick={(event) => {
              event.preventDefault();
              navigateHomeAndRun(scrollToHome);
            }}
            className="hover:opacity-70 transition-opacity"
            aria-label="Go to homepage"
          >
            <IndexSigAnimatedIcon isOpen={isOpen} />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className="text-sm font-semibold tracking-wide text-custom-blue/78 transition-all duration-300 hover:-translate-y-0.5 hover:text-custom-blue"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group inline-flex h-10 w-10 items-center justify-center rounded-md border border-custom-blue/20 bg-white/90 text-custom-blue md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className="relative h-3.5 w-4.5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full rounded bg-current transition-transform duration-300 ${
                  isOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-0.5 w-full rounded bg-current transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-0.5 w-full rounded bg-current transition-transform duration-300 ${
                  isOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`flow-panel mx-auto mt-3 w-[min(96%,1200px)] overflow-hidden transition-all duration-400 md:hidden ${
          isOpen ? "max-h-64 p-4 opacity-100" : "max-h-0 p-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className="rounded-md px-3 py-3 text-left text-base font-semibold text-custom-blue/85 transition-all duration-300 hover:bg-custom-blue/8"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
