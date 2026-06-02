"use client";

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
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 border-t border-custom-blue/10 pt-5 text-sm text-custom-blue/50 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-6">
        <div className="flex items-center justify-between gap-3 sm:contents">
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} Marcell Varga
          </p>
          <span className="text-[0.68rem] text-custom-blue/48 sm:order-2 sm:ml-auto sm:text-xs">
            🇸🇬 Local Time: {currentTime}
          </span>
        </div>
        <div className="sm:order-3">
          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-4">
            <a
              href="https://www.linkedin.com/in/marcellvarga/"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full border border-custom-blue/10 px-4 py-2 text-center text-xs transition duration-300 hover:border-custom-blue/20 hover:text-custom-blue sm:rounded-none sm:border-0 sm:p-0 sm:text-sm ${
                isHover ? "text-custom-blue/70" : "text-custom-blue/50"
              }`}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/TheMarcellVarga"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full border border-custom-blue/10 px-4 py-2 text-center text-xs transition duration-300 hover:border-custom-blue/20 hover:text-custom-blue sm:rounded-none sm:border-0 sm:p-0 sm:text-sm ${
                isHover ? "text-custom-blue/70" : "text-custom-blue/50"
              }`}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
