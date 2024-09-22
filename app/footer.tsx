"use client";

import GitHubIcon from "@/public/icons/github";
import LinkedInIcon from "@/public/icons/linkedin";
import Link from "next/link";

interface FooterProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isHover: boolean;
  setIsHover: (isHover: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ isHover }) => {
  return (
    <div className="flex w-full justify-center">
      
      <div className="flex w-full flex-row justify-between items-center px-4 pt-8">
        <div className="flex w-full text-sm">
          © 2024 Marcell Varga
        </div>
        <div className="flex space-x-4">
          <Link href="https://www.linkedin.com/in/marcellvarga/">
            <LinkedInIcon isHover={isHover} />
          </Link>
          <Link href="https://github.com/TheMarcellVarga">
            <GitHubIcon isHover={isHover} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
