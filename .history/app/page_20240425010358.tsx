"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IndexSigAnimated from "../public/icons/indexSigAnimated";

// Header component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center w-full">
      <div className="flex items-center">
        {/* Icon */}
        <Link href="/">
          <IndexSigAnimated />
        </Link>
      </div>
      <nav className="flex items-center">
        {/* Hamburger Menu */}
        <div
          className={`md:hidden z-2 ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </div>
        {/* Navigation Links */}
        <div className={`nav-overlay ${isOpen ? "open" : ""}`}>
          <div className={`${isOpen ? "block" : "hidden"} md:flex space-x-4`}>
            <Link href="/about">
              <div
                className="text-sm font-medium"
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                About
              </div>
            </Link>
            <Link href="/work">
              <div
                className="text-sm font-medium"
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                Work
              </div>
            </Link>
            <Link href="/contact">
              <div
                className="text-sm font-medium"
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                Contact
              </div>
            </Link>
          </div>
        </div>
        <div className={`${isOpen ? "hidden" : "block"}`}>
          <div className={`${isOpen ? "block" : "hidden"} md:flex space-x-4`}>
            <Link href="/about">
              <div
                className="text-sm font-medium"
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                About
              </div>
            </Link>
            <Link href="/work">
              <div
                className="text-sm font-medium"
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                Work
              </div>
            </Link>
            <Link href="/contact">
              <div
                className="text-sm font-medium"
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                Contact
              </div>
            </Link>
          </div>
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

const projects = [
  {
    title:
      "Flexible office resource management for hybrid work environments, To optimise space resources and automate ad-hoc tasks to enhance employee productivity developed as a Microsoft Teams Integration",
    description: "",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React-Bootstrap",
      "Fluent UI",
    ],
    link: "/", // Example link to the project details page
    image: "/images/ess-index.png", // Add the path to the image
  },
  {
    title:
      "Flexible office resource management for hybrid work environments, To optimise space resources and automate ad-hoc tasks to enhance employee productivity developed as a Microsoft Teams Integration",
    description: "",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React-Bootstrap",
      "Fluent UI",
    ],
    link: "/", // Example link to the project details page
    image: "/images/catchscan-index.png", // Add the path to the image
  },
  {
    title:
      "Flexible office resource management for hybrid work environments, To optimise space resources and automate ad-hoc tasks to enhance employee productivity developed as a Microsoft Teams Integration",
    description: "",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React-Bootstrap",
      "Fluent UI",
    ],
    link: "/", // Example link to the project details page
    image: "/images/askcody-index.png", // Add the path to the image
  },
  // Add more projects here
];

export default function Page() {
  return (
    <div className="m-4">
      <Header />
      <main className="flex flex-col items-center justify-between h-screen m-4 gap-1 w-full">
        <div className="flex-grow pb-12 w-full flex flex-col items-center justify-center gap-">
          <div className="flex flex-row w-full text-7xl font-medium items-center justify-start">
            Hey, I'm&nbsp;
            <span className="text-custom-blue font-bold">Marcell Varga</span>
          </div>
          <div className="flex w-full text-4xl font-light items-center justify-start my-2">
            UX & Frontend engineer
          </div>
        </div>
        <div className="pb-32 flex flex-col items-center justify-start">
          <Image
            className="animate-moveDown"
            src="/icons/mouseScroll.svg"
            alt="Scroll your mouse down Icon"
            width={30}
            height={30}
          />
        </div>
      </main>
      {/* Drive Section */}
      <section className="flex flex-col items-center justify-between h-screen m-4 gap-1 w-full">
        <div className="flex w-full h-screen text-5xl font-medium items-center justify-start">
          <h2 className="text-2xl font-light text-justify m-6">
            An adventurous UX & Frontend engineer with an enthusiasm for
            crafting delightful digital experiences. I thrive on solving complex
            problems through efficient design and love turning challenges into
            opportunities. Overcoming challenges through efficient design is
            what fuelling my everyday drive.
          </h2>
        </div>
      </section>
      <section className="flex flex-col items-center justify-between my-4 gap-1 w-full">
        {/* New Experience Section */}
        <article className="mt-8 w-full">
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
              <div
                key={skill}
                className="bg-custom-blue text-custom-teal px-2.5 py-1 rounded-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </article>
        <article className="my-8 w-full">
          <h2 className="text-custom-blue text-sm font-bold mb-4 tracking-wider uppercase">
            Projects
          </h2>
          <div className="flex flex-col gap-8">
            {projects.map((project) => (
              <div key={project.title} className="flex gap-2">
                <div className="w-full h-full relative rounded-lg overflow-hidden y-5 my-8">
                  <div className="bg-pink-100 h-48">
                    <Image
                      src={project.image} // Use the image path from the project object
                      alt={project.title} // Use the project title as the alt text
                      layout="fill" // Make the image fill its container
                      objectFit="cover" // Adjust the image's aspect ratio to cover the container
                    />
                  </div>
                </div>
                <div className="flex flex-col m-6 gap-2">
                  <Link
                    href={project.link}
                    className="text-lg font-light text-justify"
                  >
                    <div>{project.title}</div>
                    <div>{project.description}</div>
                  </Link>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-custom-blue text-custom-teal px-2.5 py-1 rounded-lg"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}
