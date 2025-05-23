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
    <div className="flex w-full justify-center" data-footer>
      <div className="flex w-full flex-col">
        <div className="w-full border-t border-gray-300 opacity-60"></div>
        <div className="flex w-full flex-row justify-between items-center px-4 pt-4">
          <div className="flex text-gray-400 w-full text-sm">© {new Date().getFullYear()} Marcell Varga</div>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/in/marcellvarga/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className={`transition-colors duration-300 ${isHover ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`} />
            </Link>
            <Link href="https://github.com/TheMarcellVarga" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className={`transition-colors duration-300 ${isHover ? "text-black" : "text-gray-500"} hover:text-black`} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
