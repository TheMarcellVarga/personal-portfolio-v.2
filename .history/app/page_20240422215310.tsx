"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IndexSig from "../public/icons/indexSig";

// Header component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center w-full max-w-5xl">
      <div className="flex items-center">
        {/* Icon */}
        <Link href="/">
          <IndexSig />
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
        <div className="flex-grow py-12 w-full flex flex-col items-center justify-center gap-">
          <div className="flex w-full text-5xl font-medium items-center justify-start">
            Hey, I'm&nbsp;
            <span className="text-custom-blue font-bold">Marcell Varga</span>
          </div>
          <div className="flex w-full text-3xl font-light items-center justify-start">
            UX & Frontend engineer
          </div>
        </div>
        <div className="flex-grow py-12 flex flex-col items-center justify-center">
          <Image
            className="animate-moveDown"
            src="/icons/mouseScroll.svg"
            alt="Scroll your mouse down Icon"
            width={24}
            height={24}
          />
        </div>
      </main>
      {/* New Experience Section */}
      <section className="mt-8">
        <h2 className="text-custom-blue text-sm font-bold mb-4 tracking-wider uppercase">
          Experience
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Figma",
            "Sketch",
            "JavaScript",
            "TypeScript",
            "Next.js",
            "Node.js",
            "Express.js",
            "HTML",
            "CSS",
            "UX Design",
            "UX Research",
            "RESTful APIs",
            "Git (Gitlab & Github)",
            "Svelte & SvelteKit",
            "Tailwind CSS",
            "Adobe CC Suite",
          ].map((skill) => (
            <div key={skill} className="bg-gray-200 p-2 rounded-full">
              {skill}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-custom-blue text-sm font-bold mb-4 tracking-wider uppercase">
          Projects
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React-Bootstrap",
            "Fluent UI",
          ].map((skill) => (
            <div key={skill} className="bg-gray-200 p-2 rounded-full">
              {skill}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
