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
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const onScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 12);

      if (current < 48) {
        setIsVisible(true);
      } else if (current > lastScroll) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScroll = current;
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
      className={`sticky-header px-4 py-4 sm:px-6 lg:px-10 ${
        isVisible || isOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-5 ${
          isScrolled || isOpen
            ? "border-white/60 bg-white/74 shadow-[0_16px_50px_rgba(7,20,38,0.12)] backdrop-blur-2xl"
            : "border-white/36 bg-white/52 backdrop-blur-xl"
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

        <nav className="hidden items-center gap-2 md:flex">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => void navigate(item)}
              className="rounded-full px-4 py-2 text-sm font-semibold text-custom-blue/68 transition duration-300 hover:bg-custom-blue/6 hover:text-custom-blue"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-custom-blue/10 bg-custom-blue/4 text-custom-blue md:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 w-full max-w-7xl rounded-[2rem] border border-white/60 bg-white/82 p-4 shadow-[0_28px_90px_rgba(7,20,38,0.12)] backdrop-blur-2xl md:hidden">
          <div className="grid gap-2">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => void navigate(item)}
                className="flex items-center justify-between rounded-[1.4rem] border border-custom-blue/8 bg-custom-blue/3 px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.16em] text-custom-blue/78"
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
