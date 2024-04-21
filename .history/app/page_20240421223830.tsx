import { useState } from 'react';
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
      <nav className={`${isOpen ? 'block' : 'hidden'} md:flex space-x-4`}>
        {/* Hamburger Menu */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </div>
        {/* Links */}
        <Link href="/about">
          <div className="text-sm font-medium text-custom-blue">About</div>
        </Link>
        <Link href="/work">
          <div className="text-sm font-medium text-custom-blue">Work</div>
        </Link>
        <Link href="/contact">
          <div className="text-sm font-medium text-custom-blue">Contact</div>
        </Link>
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
      <main className="flex min-h-screen flex-col p-6">main</main>
      <Footer />
    </div>
  );
}
