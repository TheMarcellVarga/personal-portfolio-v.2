"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import DarkModeIcon from "@/public/icons/darkMode";
import GitHubIcon from "@/public/icons/github";
import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import LinkedInIcon from "@/public/icons/linkedin";
import MouseScrollIcon from "@/public/icons/mouseScroll";

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface FooterProps {
  isDarkMode: boolean;
  isOpen: boolean;
}

// Header component
const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  setIsDarkMode,
  isOpen,
  setIsOpen,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // downscroll code
        setIsVisible(false);
      } else {
        // upscroll code
        setIsVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const body = document.body;
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      body.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.altKey && event.code === "KeyC") {
        toggleDarkMode();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleDarkMode]);

  // const [showTooltip, setShowTooltip] = useState(false);

  // const handleMouseEnter = () => {
  //   setTimeout(() => setShowTooltip(true), 1000); // Show tooltip after 1 second
  // };

  // const handleMouseLeave = () => {
  //   setShowTooltip(false);
  // };

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => setShowTooltip(true), 1000); // Show tooltip after 1 second
  };

  const handleMouseLeave = () => {
    setShowTooltip(false); // Hide tooltip on mouse leave
  };

  return (
    <header
      className={`sticky-header flex justify-between items-center w-full p-4 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center">
        {/* Icon */}
        <Link href="/ ">
          <IndexSigAnimatedIcon isDarkMode={isDarkMode} isOpen={isOpen} />
        </Link>
      </div>
      <nav className="flex items-center">
        {/* Hamburger Menu */}
        <div
          className={`md:hidden z-2 ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-gray-800 dark:bg-gray-400 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 dark:bg-gray-400 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 dark:bg-gray-400"></div>
        </div>
        {/* Navigation Links */}
        <div className={`nav-overlay ${isOpen ? "open" : ""}`}>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex space-x-4 h-full mt-16`}
          >
            <Link href="/about">
              <div
                className="text-xl md:text-sm font-medium"
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                About
              </div>
            </Link>
            <Link href="/work">
              <div
                className="text-xl md:text-sm font-medium"
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                Work
              </div>
            </Link>
            <Link href="/contact">
              <div
                className="text-xl md:text-sm font-medium"
                style={{ color: isOpen ? "#eeeeee" : "inherit" }}
              >
                Contact
              </div>
            </Link>
          </div>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 text-white md:text-black md:dark:text-white rounded"
          >
            <DarkModeIcon isDarkMode={isDarkMode} isOpen={isOpen} />
            {showTooltip && (
              <div className="relative">
                <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs absolute top-2 left-1/2 transform -translate-x-1/2">
                  Alt&nbsp;+&nbsp;C
                </div>
              </div>
            )}
          </button>
        </div>
        <div className={`${isOpen ? "hidden" : "block"}`}>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex items-center space-x-4`}
          >
            <Link href="/about">
              <div
                className="text-sm font-medium text-black dark:text-white"
                style={{ color: isOpen ? "#eeeeee" : "" }}
              >
                About
              </div>
            </Link>
            <Link href="/work">
              <div
                className="text-sm font-medium text-black dark:text-white"
                style={{ color: isOpen ? "#eeeeee" : "" }}
              >
                Work
              </div>
            </Link>
            <Link href="/contact">
              <div
                className="text-sm font-medium text-black dark:text-white"
                style={{ color: isOpen ? "#eeeeee" : "" }}
              >
                Contact
              </div>
            </Link>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 text-black dark:text-white rounded"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <DarkModeIcon isDarkMode={isDarkMode} isOpen={false} />
              {showTooltip && (
                <div className="relative">
                  <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs absolute top-2 left-1/2 transform -translate-x-1/2">
                    Alt&nbsp;+&nbsp;C
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Footer component
const Footer: React.FC<FooterProps> = ({ isDarkMode, isOpen }) => {
  return (
    <div className="flex w-full flex-row justify-between items-center">
      <div className="flex w-full">© 2024 Marcell Varga</div>
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

const ESS = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode
  const [isOpen, setIsOpen] = useState(false); // State for other purposes (e.g., menu open)
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="px-4 pb-4 bg-custom-light dark:bg-custom-dark transition-colors duration-200 ease-in-out">
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <main className="flex flex-col items-center justify-between h-screen m-4 gap-1 w-full">
        <div className="flex-grow pb-12 w-full flex flex-row items-center justify-strech gap-2">
          <div>
            <div className="flex flex-row w-full text-7xl font-medium items-center justify-start text-black dark:text-white ">
              Hey, I'm&nbsp;
              <span className="text-custom-blue font-bold">Marcell Varga</span>
            </div>
            <div className="flex w-full text-4xl font-light items-center justify-start my-2 text-black dark:text-white ">
              UX & Frontend engineer
            </div>
          </div>
          <div className="flex justify-center items-center">
            <section className="flex flex-col items-center justify-between my-4 gap-24 w-4/5">
              {/* New Experience Section */}
              <article className="mt-8 w-full p-4">
                <h2 className="text-custom-blue text-sm font-bold mb-4 tracking-wider uppercase">
                  Experience
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    // "React",
                    // "Figma",
                    // "Sketch",
                    // "JavaScript",
                    // "TypeScript",
                    // "Next.js",
                    // "Node.js",
                    // "Express.js",
                    // "HTML",
                    // "CSS",
                    // "UX Design",
                    // "UX Research",
                    // "RESTful APIs",
                    // "Git (Gitlab & Github)",
                    // "Svelte & SvelteKit",
                    // "Tailwind CSS",
                    // "Adobe CC Suite",
                    "User Interface (UI) Design",
                    "User Experience (UX) Design",
                    "User Research",
                    "Usability Testing",
                    "HTML / CSS",
                    "JavaScript / TypeScript",
                    "Tailwind CSS",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express",
                    "Git (Gitlab & Github)",
                    "Svelte",
                    "SvelteKit",
                    "Vue",
                    "Adobe CC Suite",
                    "Figma",
                    "Sketch",
                    "Vercel",
                    "Docker",
                    "PostgreSQL",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-custom-blue text-custom-teal text-sm px-2.5 py-1 rounded-lg"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </article>
              <article className="w-full flex flex-col p-4">
                <div>
                  <h2 className="text-custom-blue text-sm font-bold mb-6 tracking-wider uppercase">
                    Projects
                  </h2>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <div className="w-full flex flex-col gap-12">
                    {projects.map((project) => (
                      <div key={project.title} className="w-full flex">
                        {/* <div className="w-1/2">
                    <div className="text-2xl">{project.title}</div>
                    <div className="text-md">{project.subTitle}</div>
                  </div> */}
                        <Link
                          href={project.link}
                          className={`w-full flex flex-row px-8 py-3.5 md:py-4 lg:py-4.5 2xl:py-8 rounded-lg transition-colors duration-200 ease-in-out ${
                            isDarkMode
                              ? "bg-gray-800 hover:bg-gray-700 border-transparent hover:border-gray-600 border"
                              : "bg-gray-50 hover:bg-gray-100 border-transparent hover:border-gray-300 border"
                          }`}
                        >
                          <div className="w-fit relative overflow-hidden flex justify-start items-center">
                            <div className=" w-[300px] relative rounded-lg overflow-hidden">
                              <Image
                                src={project.image} // Use the image path from the project object
                                alt={project.title} // Use the project title as the alt text
                                layout="responsive" // Adjusted to responsive to maintain aspect ratio
                                width={300} // Set width explicitly
                                height={200} // Set height explicitly
                                objectFit="cover" // Changed to cover to ensure the image covers the area without distortion
                              />
                            </div>
                          </div>
                          <div className="flex flex-col m-6 gap-2 w-full">
                            <div className="w-fit">
                              <div className="text-2xl">{project.title}</div>
                              <div className="text-md">{project.subTitle}</div>
                            </div>
                            <div className="text-md font-light text-justify text-black dark:text-white">
                              <div>{project.description}</div>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {project.skills.map((skill) => (
                                <div
                                  key={skill}
                                  className="bg-custom-blue text-custom-teal text-xs px-2 py-1 rounded-md"
                                >
                                  {skill}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* <div className="flex flex-col m-6 gap-2 w-full h-full">
                      <div className="text-md font-light text-justify text-black dark:text-white ">
                        <div>{project.description}</div>
                      </div>
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
                    </div> */}
                        </Link>
                        {/* <div className="flex flex-col m-6 gap-2 w-full h-full">
                    <div className="text-md font-light text-justify text-black dark:text-white ">
                      <div>{project.description}</div>
                    </div>
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
                  </div> */}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
              <article className="w-full p-4">
                <h2 className="text-custom-blue text-sm font-bold mb-4 tracking-wider uppercase">
                  History
                </h2>
                <div className="flex flex-col gap-12">
                  kurav
                  <div
                    className="flex justify-start items-center gap-2"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                  >
                    <span>View Full Resume</span>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
        <div className="pb-32 flex flex-col items-center justify-start">
          <MouseScrollIcon isDarkMode={isDarkMode} isOpen={isOpen} />
          {/* <Image
            className="animate-moveDown"
            src="/icons/mouseScroll.svg"
            alt="Scroll your mouse down Icon"
            width={30}
            height={30}
          /> */}
        </div>
      </main>
      <section></section>
      <Footer isDarkMode={isDarkMode} isOpen={isOpen} />
    </div>
  );
};

export default ESS;
