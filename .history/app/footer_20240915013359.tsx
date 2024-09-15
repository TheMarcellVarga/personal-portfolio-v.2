"use client";

import GitHubIcon from "@/public/icons/github";
import LinkedInIcon from "@/public/icons/linkedin";
import Link from "next/link";

interface FooterProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, isOpen }) => {
  return (
    <div className="flex w-full flex-row justify-between items-center px-4 pt-7">
      <div className="flex w-full opacity-50 text-sm">© 2024 Marcell Varga</div>
      <div className="flex space-x-4">
        <Link href="https://www.linkedin.com/in/marcellvarga/">
          {/* <Image
            src="/icons/linkedin.svg"
            alt="Linkedin Icon"
            width={24}
            height={24}
          /> */}
          <LinkedInIcon isDarkMode={isDarkMode} isOpen={isOpen} />
        </Link>
        <Link href="https://github.com/TheMarcellVarga">
          {/* <Image
            src="/icons/github.svg"
            alt="GitHub Icon"
            width={24}
            height={24}
          /> */}
          <GitHubIcon isDarkMode={isDarkMode} isOpen={isOpen} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
