"use client";

import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  scrollToHome?: () => void;
  scrollToAbout?: () => void;
  scrollToWork?: () => void;
  scrollToContact?: () => void;
  activeSection?: string;
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
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === "/";
  const isAtTop = isHomePage && !isScrolled;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const onScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    { label: "Manifesto", path: "/", action: scrollToAbout },
    { label: "Work", path: "/", action: scrollToWork },
    { label: "Contact", path: "/", action: scrollToContact },
  ];

  return (
    <header
      className="sticky-header translate-y-0 px-4 py-4 opacity-100 transition-[transform,opacity] duration-300 ease-in-out sm:px-6 lg:px-10"
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-5 ${
          isScrolled || isOpen || !isHomePage
            ? "border-white/60 bg-white/74 shadow-[0_16px_50px_rgba(7,20,38,0.12)] backdrop-blur-2xl"
            : "border-transparent bg-white/10 shadow-none backdrop-blur-sm"
        }`}
      >
        <Link
          href="/"
          onClick={(event) => {
            event.preventDefault();
            void navigate(items[0]);
          }}
          className="flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <IndexSigAnimatedIcon isOpen={isOpen} />
          <span className="hidden text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-custom-blue/48 sm:inline">
            Marcell Varga
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => void navigate(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                activeSection === item.label
                  ? "bg-custom-blue/6 text-custom-blue"
                  : isAtTop
                    ? "text-custom-blue/58 hover:bg-white/38 hover:text-custom-blue"
                    : "text-custom-blue/68 hover:bg-custom-blue/6 hover:text-custom-blue"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-full border border-custom-blue/12 bg-custom-blue/4 px-4 py-2 text-sm font-semibold text-custom-blue transition duration-300 hover:border-custom-blue/24 hover:bg-custom-blue/7"
          >
            Resume
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-custom-blue lg:hidden ${
            isAtTop && !isOpen
              ? "border-white/15 bg-white/20"
              : "border-custom-blue/10 bg-custom-blue/4"
          }`}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 w-full max-w-7xl rounded-[2rem] border border-white/60 bg-white/82 p-4 shadow-[0_28px_90px_rgba(7,20,38,0.12)] backdrop-blur-2xl lg:hidden">
          <div className="grid gap-2">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => void navigate(item)}
                className={`flex items-center justify-between rounded-[1.4rem] border px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.16em] ${
                  activeSection === item.label
                    ? "border-custom-blue/18 bg-custom-blue/8 text-custom-blue"
                    : "border-custom-blue/8 bg-custom-blue/3 text-custom-blue/78"
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            ))}
            <Link
              href="/resume"
              className="mt-2 flex items-center justify-between rounded-[1.4rem] border border-custom-blue/8 bg-custom-blue px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white"
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
