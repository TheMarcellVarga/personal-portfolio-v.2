"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Header component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center w-full max-w-5xl">
      <div className="flex items-center">
        {/* Icon */}
        <Link href="/">
          <Image src="/icons/indexSig.svg" alt="Icon" width={72} height={36} />
        </Link>
      </div>
      <nav className="flex items-center">
        {/* Hamburger Menu */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </div>
        {/* Navigation Links */}
        <div className={`${isOpen ? "block" : "hidden"} md:flex space-x-4`}>
          <Link href="/about">
            <div className="text-sm font-medium text-custom-blue">About</div>
          </Link>
          <Link href="/work">
            <div className="text-sm font-medium text-custom-blue">Work</div>
          </Link>
          <Link href="/contact">
            <div className="text-sm font-medium text-custom-blue">Contact</div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

// Footer component
const Footer = () => {
  return (
    <div className="flex w-full flex-row justify-between items-center">
      <div className="flex w-full">© 2024 Marcell Varga</div>
      <div className="flex space-x-4">
        <Image
          src="/icons/linkedin.svg"
          alt="Linkedin Icon"
          width={24}
          height={24}
        />
        <Image
          src="/icons/github.svg"
          alt="GitHub Icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="m-4">
      <Header />
      <main className="flex flex-col items-center justify-between h-screen m-4 gap-1 w-full">
        <div className="flex-grow py-12 w-full flex flex-col items-center justify-center">
          <div className="flex w-full text-4xl font-medium items-center justify-start">
            Hey, I'm&nbsp;
            <span className="text-custom-blue font-bold">Marcell Varga</span>
          </div>
          <div className="flex w-full text-2xl font-light items-center justify-start">
            UX & Frontend engineer
          </div>
        </div>
        <div className="flex-grow py-12 w-full flex flex-col items-center justify-center">
          <Image
            className="animate-moveDown"
            src="/icons/mouseScroll.svg"
            alt="Scroll your mouse down Icon"
            width={24}
            height={24}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
