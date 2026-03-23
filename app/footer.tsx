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
    <footer className="px-4 pb-8 pt-3 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 border-t border-custom-blue/10 pt-6 text-sm text-custom-blue/50 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Marcell Varga. UX, frontend, and product
          craft with motion discipline.
        </p>
        <div className="flex items-center gap-4">
          <span className="ml-auto mr-0 text-xs text-custom-blue/48 min-w-[135px]">
           🇸🇬 &nbsp;Local Time: {currentTime}
          </span>

          <Link
            href="https://www.linkedin.com/in/marcellvarga/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition duration-300 hover:text-custom-blue ${
              isHover ? "text-custom-blue/70" : "text-custom-blue/50"
            }`}
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/TheMarcellVarga"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition duration-300 hover:text-custom-blue ${
              isHover ? "text-custom-blue/70" : "text-custom-blue/50"
            }`}
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
