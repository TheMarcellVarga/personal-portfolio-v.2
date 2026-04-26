"use client";

import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { type RefObject, useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  scrollToHome?: () => void;
  scrollToAbout?: () => void;
  scrollToWork?: () => void;
  scrollToContact?: () => void;
  activeSection?: string;
  logoRef?: RefObject<HTMLSpanElement | null>;
  revealBrand?: boolean;
}

type NavItem = {
  label: string;
  path: string;
  action?: () => void;
};

export default function Header({
  isOpen,
  setIsOpen,
  scrollToHome,
  scrollToAbout,
  scrollToWork,
  scrollToContact,
  activeSection,
  logoRef,
  revealBrand = true,
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [logoAnimationKey, setLogoAnimationKey] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const isHomePage = pathname === "/";
  const isHeroSection = isHomePage && activeSection === "Intro";
  const useLightOnDark = isHeroSection && !isOpen;
  const highlightedItem = hoveredItem ?? activeSection ?? null;
  const lastScrollYRef = useRef(0);
  const isHeaderVisibleRef = useRef(true);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    setLogoAnimationKey((current) => current + 1);
  }, [pathname, prefersReducedMotion, revealBrand]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    lastScrollYRef.current = window.scrollY;
    isHeaderVisibleRef.current = true;

    if (isOpen) return;

    const revealThreshold = 24;
    const deltaThreshold = 6;

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollYRef.current;

      let nextVisible = isHeaderVisibleRef.current;

      if (currentScrollY <= revealThreshold) {
        nextVisible = true;
      } else if (delta > deltaThreshold) {
        nextVisible = false;
      } else if (delta < -deltaThreshold) {
        nextVisible = true;
      }

      lastScrollYRef.current = currentScrollY;
      animationFrameRef.current = null;

      if (nextVisible !== isHeaderVisibleRef.current) {
        isHeaderVisibleRef.current = nextVisible;
        setIsHeaderVisible(nextVisible);
      }
    };

    const handleScroll = () => {
      if (animationFrameRef.current !== null) return;
      animationFrameRef.current = window.requestAnimationFrame(updateVisibility);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isOpen]);

  const navigate = useCallback(
    async (item: NavItem) => {
      if (pathname !== item.path) {
        await router.push(item.path);
        window.setTimeout(() => {
          item.action?.();
        }, 120);
      } else {
        item.action?.();
      }

      setIsOpen(false);
    },
    [pathname, router, setIsOpen]
  );

  const items: NavItem[] = [
    { label: "Intro", path: "/", action: scrollToHome },
    { label: "Skills", path: "/", action: scrollToAbout },
    { label: "Work", path: "/", action: scrollToWork },
    { label: "Contact", path: "/", action: scrollToContact },
  ];

  return (
    <header
      className={`sticky-header px-4 py-4 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 lg:px-10 ${
        isHeaderVisible || isOpen
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`mx-auto grid min-h-[4.5rem] w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center rounded-full px-4 py-2 transition duration-300 sm:px-5 lg:grid-cols-[1fr_auto_1fr] ${
          useLightOnDark
            ? "bg-[#0a1521]/46 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_18px_48px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
            : "bg-white/72 shadow-[0_16px_50px_rgba(7,20,38,0.12),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-2xl"
        }`}
      >
        <Link
          href="/"
          onClick={(event) => {
            event.preventDefault();
            void navigate(items[0]);
          }}
          className="flex items-center gap-3 justify-self-start"
          aria-label="Go to homepage"
        >
          <span ref={logoRef} className="block w-[5.3125rem] shrink-0">
            <IndexSigAnimatedIcon
              key={logoAnimationKey}
              isOpen={isOpen}
              tone={useLightOnDark ? "light" : "dark"}
              animateStroke={!prefersReducedMotion}
              className={`h-auto w-full transition-opacity duration-500 ${
                revealBrand ? "opacity-100" : "opacity-0"
              }`}
            />
          </span>
          <span
            className={`font-label hidden text-[0.66rem] font-medium uppercase tracking-[0.3em] transition-opacity duration-500 sm:inline ${
              revealBrand ? "opacity-100" : "opacity-0"
            } ${
              useLightOnDark ? "text-white/44" : "text-custom-blue/48"
            }`}
          >
            Marcell Varga
          </span>
        </Link>

        <nav
          className="hidden items-center gap-2 justify-self-center lg:flex"
          onMouseLeave={() => setHoveredItem(null)}
        >
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => void navigate(item)}
              onMouseEnter={() => setHoveredItem(item.label)}
              onFocus={() => setHoveredItem(item.label)}
              onBlur={() => setHoveredItem(null)}
              className={`font-label relative rounded-full px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] transition duration-300 ${
                highlightedItem === item.label
                  ? useLightOnDark
                    ? "text-white"
                    : "text-custom-blue"
                  : useLightOnDark
                    ? "text-white/42 hover:text-white/78"
                    : "text-custom-blue/68 hover:text-custom-blue"
              }`}
            >
              {highlightedItem === item.label ? (
                <motion.span
                  layoutId="header-nav-highlight"
                  className={`absolute inset-0 rounded-full ${
                    useLightOnDark
                      ? "bg-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"
                      : "bg-custom-blue/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.48)]"
                  }`}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : {
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                          mass: 0.55,
                        }
                  }
                />
              ) : null}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 justify-self-end lg:flex">
          <Link
            href="/resume"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
              useLightOnDark
                ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] hover:bg-white/14"
                : "bg-custom-blue/8 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.58),0_8px_24px_rgba(17,27,40,0.06)] hover:bg-custom-blue/12"
            }`}
          >
            Resume
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full justify-self-end lg:hidden ${
            useLightOnDark
              ? "bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"
              : "bg-custom-blue/6 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.58)]"
          }`}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 w-full max-w-7xl rounded-[2rem] bg-white/82 p-4 shadow-[0_28px_90px_rgba(7,20,38,0.12),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-2xl lg:hidden">
          <div className="grid gap-2">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => void navigate(item)}
                className={`font-label flex items-center justify-between rounded-[1.4rem] px-4 py-3 text-left text-[0.72rem] font-medium uppercase tracking-[0.16em] shadow-[inset_0_1px_0_rgba(255,255,255,0.44)] ${
                  activeSection === item.label
                    ? "bg-custom-blue/8 text-custom-blue"
                    : "bg-custom-blue/4 text-custom-blue/78"
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            ))}
            <Link
              href="/resume"
              className="font-label mt-2 flex items-center justify-between rounded-[1.4rem] bg-custom-blue px-4 py-3 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(17,27,40,0.18)]"
            >
              <span>Open Resume</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
