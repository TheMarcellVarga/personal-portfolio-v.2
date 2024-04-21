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
      <main className="flex min-h-screen flex-col p-9">
        <div className="flex w-full">
          I'm
          
          <span className="text-custom-blue font-bold">Marcell Varga</span>
        </div>
        <div className="flex w-full">UX Engineer</div>
      </main>
      <Footer />
    </div>
  );
}
