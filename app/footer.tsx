"use client";

import GitHubIcon from "@/public/icons/github";
import LinkedInIcon from "@/public/icons/linkedin";
import Link from "next/link";

interface FooterProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  isHover?: boolean;
  setIsHover?: (isHover: boolean) => void;
}

export default function Footer({ isOpen, setIsOpen, isHover, setIsHover }: FooterProps) {
  return (
    <footer className="w-full flex justify-center pb-10 pt-6 z-20 relative px-6 sm:px-12 bg-black">
      <div className="w-full flex flex-col items-center">
        <div className="flex w-full flex-col sm:flex-row justify-between items-center max-w-7xl">
          <div className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-0 font-medium">
            © {new Date().getFullYear()} Marcell Varga. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="https://www.linkedin.com/in/marcellvarga/" target="_blank" rel="noopener noreferrer" className="group p-2 -m-2">
              <LinkedInIcon className="text-gray-500 group-hover:text-white transition-colors duration-300 w-5 h-5" />
            </Link>
            <Link href="https://github.com/TheMarcellVarga" target="_blank" rel="noopener noreferrer" className="group p-2 -m-2">
              <GitHubIcon className="text-gray-500 group-hover:text-white transition-colors duration-300 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
