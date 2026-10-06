"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface FooterProps {
  isHover?: boolean;
}

export default function Footer({ isHover = false }: FooterProps) {
  const [currentTime, setCurrentTime] = useState("··:··");

  useEffect(() => {
    const formatTime = () =>
      setCurrentTime(
        new Date().toLocaleTimeString("en-SG", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Singapore",
        }),
      );

    formatTime();
    const ticker = setInterval(formatTime, 1_000);
    return () => clearInterval(ticker);
  }, []);

  return (
    <footer className="page-gutter pb-[max(2rem,env(safe-area-inset-bottom))] pt-3 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 border-t border-custom-blue/10 pt-5 text-sm text-custom-blue/70 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-6">
        <div className="flex flex-col gap-1.5 sm:contents">
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} Marcell Varga
          </p>
          <span className="text-xs text-custom-blue/70 sm:order-2 sm:ml-auto sm:text-xs">
            🇸🇬 Local Time: {currentTime}
          </span>
        </div>
        <div className="sm:order-3">
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-4">
            <Link
              href="/about"
              className={`flex min-h-11 items-center justify-start px-0 py-2.5 text-left text-sm transition duration-300 hover:border-custom-blue/20 hover:text-custom-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-blue sm:min-h-0 sm:rounded-none sm:border-0 sm:p-0 sm:text-sm ${
                isHover ? "text-custom-blue/85" : "text-custom-blue/70"
              }`}
            >
              About me
            </Link>
            <Link
              href="/privacy"
              className={`flex min-h-11 items-center justify-start px-0 py-2.5 text-left text-sm transition duration-300 hover:border-custom-blue/20 hover:text-custom-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-blue sm:min-h-0 sm:rounded-none sm:border-0 sm:p-0 sm:text-sm ${
                isHover ? "text-custom-blue/85" : "text-custom-blue/70"
              }`}
            >
              Privacy
            </Link>
            <a
              href="https://www.linkedin.com/in/marcellvarga/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex min-h-11 items-center justify-start px-0 py-2.5 text-left text-sm transition duration-300 hover:border-custom-blue/20 hover:text-custom-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-blue sm:min-h-0 sm:rounded-none sm:border-0 sm:p-0 sm:text-sm ${
                isHover ? "text-custom-blue/85" : "text-custom-blue/70"
              }`}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/TheMarcellVarga"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex min-h-11 items-center justify-start px-0 py-2.5 text-left text-sm transition duration-300 hover:border-custom-blue/20 hover:text-custom-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-blue sm:min-h-0 sm:rounded-none sm:border-0 sm:p-0 sm:text-sm ${
                isHover ? "text-custom-blue/85" : "text-custom-blue/70"
              }`}
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
