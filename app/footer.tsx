"use client";

import GitHubIcon from "@/public/icons/github";
import LinkedInIcon from "@/public/icons/linkedin";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto mt-16 w-[min(96%,1200px)] pb-10" data-footer>
      <div className="flow-panel px-6 py-6 sm:px-8 sm:py-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-custom-blue/55">
              Built with care
            </p>
            <p className="mt-1 text-sm font-medium text-custom-blue/75">
              © {new Date().getFullYear()} Marcell Varga
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/marcellvarga/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-custom-blue/20 bg-white/92 text-custom-blue/75 transition-all duration-300 hover:-translate-y-0.5 hover:text-custom-blue"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/TheMarcellVarga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-custom-blue/20 bg-white/92 text-custom-blue/75 transition-all duration-300 hover:-translate-y-0.5 hover:text-custom-blue"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
