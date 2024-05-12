"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import IndexSigAnimatedIcon from "../public/icons/indexSigAnimated";
import IndexSig from "../public/icons/indexSig.svg";
import DarkModeIcon from "../public/icons/darkMode";
import LinkedInIcon from "../public/icons/linkedin";
import GitHubIcon from "../public/icons/github";
import MouseScrollIcon from "@/public/icons/mouseScroll";
import { Canvas } from "react-three-fiber";
import Globe from "react-globe.gl";
import ThreeGlobe from "three-globe";
import useWindowSize from "./useWindowSize";
import { SizeMe } from "react-sizeme";
import * as d3 from "d3"; // Import D3 library

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

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => setShowTooltip(true), 1000); // Show tooltip after 1 second
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
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

const projects = [
  {
    title:
      "Informative website developed for a start-up to help American students with application process towards European programs and prepare the for life abroad. The platform is to served to develop their business, get and keep in touch with their students.",
    description: "",
    skills: ["HTML", "CSS", "JavaScript", "SEO"],
    link: "/ess", // Example link to the project details page
    image: "/images/ess-index.png", // Add the path to the image
  },
  {
    title:
      "SaaS dashboard for an automated copyright protection platform in order to protect content creators intellectual works. User-friendly interface to utilise their in-house algorithm the fullest.",
    description: "",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Atomic Design",
      "Design System",
    ],
    link: "/catchscan", // Example link to the project details page
    image: "/images/catchscan-index.png", // Add the path to the image
  },
  {
    title:
      "Flexible office resource management for hybrid work environments, To optimise space resources and automate ad-hoc tasks to enhance employee productivity developed as a Microsoft Teams Integration.",
    description: "",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React-Bootstrap",
      "Fluent UI",
    ],
    link: "/askcody", // Example link to the project details page
    image: "/images/askcody-index.png", // Add the path to the image
  },
  // Add more projects here
];

const history = [
  {
    company: "AXON Networks",
    jobTitle: "UX & Frontend Engineer",
    time: {
      start: "Oct 2022",
      end: "",
    },
    description: [
      "Contributed to AXON Orchestrator development, focusing on UX/UI design and frontend development within cross-functional teams.",
      "Created interactive prototypes and established design system for in-house development.",
      "Collaborated with Analytics team to integrate AI/ML solutions into products, enhancing product functionality.",
      "Participated in the full product development cycle from UX/UI design, through Frontend Development to successful deployments.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React-Bootstrap",
      "Fluent UI",
    ],
  },
  {
    company: "MapsPeople",
    jobTitle: "UX Designer Intern",
    time: {
      start: "Jan 2022",
      end: "Apr 2022",
    },
    description: [
      "Enhanced Maps Indoors CMS through research and development of interactive, animated prototypes.",
      "Executed tasks via Jira, including project management and documentation.",
      "Leveraged the company Design System, contributing to its evolution",
      "Designed cross-platform solutions for both desktop and mobile, with a focus on accessibility.",
      "Acquired interdisciplinary skills working within a SaaS company team.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React-Bootstrap",
      "Fluent UI",
    ],
  },
  {
    company: "University College of Northen Denmark",
    jobTitle: "Multimedia Design",
    time: {
      start: "Sept 2020",
      end: "Jun 2022",
    },
    description: [
      "UX/UI Design and Elective Specialization: Focused on enhancing UI/UX design skills through practical projects, aligning with the importance of a well-crafted website or app for user satisfaction.",
      "Front-End Web Development: Engaged in hands-on experience building applications, emphasizing the design to code process and the importance of creating visually appealing and easy-to-use interfaces.",
      "Content Production: Involved in creating content that not only meets user needs but also ensures a positive user experience, reflecting the ongoing process of UX design.",
      "Reflective Practice-based Learning: Throughout the study, executed projects in collaboration with real companies, applying UX/UI design principles to real-world challenges and enhancing the design to code process.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React-Bootstrap",
      "Fluent UI",
    ],
  },
  // Add more projects here
];

const N = 300;
const copenhagen = {
  lat: 55.6761, // Latitude for Copenhagen
  lng: 12.5683, // Longitude for Copenhagen
  size: 1, // Size can be adjusted as needed
  color: "red", // Color set to red
  label: "Copenhagen", // Label for the point
};

export default function Page() {
  // const prefersDarkMode = window.matchMedia(
  //   "(prefers-color-scheme: dark)"
  // ).matches;

  // console.log(prefersDarkMode);

  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode
  const [isOpen, setIsOpen] = useState(false); // State for other purposes (e.g., menu open)

  useEffect(() => {
    // Function to set isDarkMode based on user preference
    const setDarkModeBasedOnPreference = () => {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDarkMode);
    };

    // Call the function to set isDarkMode
    setDarkModeBasedOnPreference();

    // Optionally, you can also lis3ten for changes to the user's preference
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsDarkMode(e.matches);
    };

    mediaQueryList.addListener(listener);

    // Cleanup function to remove the listener
    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const size = useWindowSize(); // Get the window size

  const colorScale = d3.scaleOrdinal([
    "orangered",
    "mediumblue",
    "darkgreen",
    "yellow",
  ]);

  return (
    <div className="px-4 pb-4 bg-custom-light dark:bg-custom-dark transition-colors duration-200 ease-in-out">
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <main className="flex flex-col items-center justify-between h-screen m-4 gap-1 w-full">
        <div className="flex-grow pb-12 w-full flex flex-col items-center justify-center gap-">
          <div className="flex flex-row w-full text-7xl font-medium items-center justify-start text-black dark:text-white ">
            Hey, I'm&nbsp;
            <span className="text-custom-blue font-bold">Marcell Varga</span>
          </div>
          <div className="flex w-full text-4xl font-light items-center justify-start my-2 text-black dark:text-white ">
            UX & Frontend engineer
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
      {/* Drive Section */}
      <section className="flex flex-col items-center justify-between h-screen m-4 gap-1 w-full">
        <div className="flex w-full h-screen text-5xl font-medium items-center justify-start">
          <h2 className="text-2xl font-light text-justify m-6 leading-relaxed text-black dark:text-white ">
            An adventurous UX & Frontend engineer with an enthusiasm for
            crafting delightful digital experiences. I thrive on solving complex
            problems through efficient design and love turning challenges into
            opportunities. Overcoming challenges through efficient design is
            what fuelling my everyday drive.
          </h2>
        </div>
      </section>
      <section className="flex flex-col items-center justify-between my-4 gap-24 w-full">
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
        <article className="w-full">
          <h2 className="text-custom-blue text-sm font-bold mb-4 tracking-wider uppercase">
            Projects
          </h2>
          <div className="flex flex-col gap-12">
            {projects.map((project) => (
              <div key={project.title} className="flex gap-2">
                <div className="w-full h-full relative rounded-lg overflow-hidden y-5">
                  <Link href={project.link} className="block h-48">
                    <Image
                      src={project.image} // Use the image path from the project object
                      alt={project.title} // Use the project title as the alt text
                      layout="fill" // Make the image fill its container
                      objectFit="contain" // Adjust the image's aspect ratio to cover the container
                    />
                  </Link>
                </div>
                <div className="flex flex-col m-6 gap-2">
                  <div className="text-md font-light text-justify text-black dark:text-white ">
                    <div>{project.title}</div>
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
                </div>
              </div>
            ))}
          </div>
        </article>
        <article className="w-full">
          <h2 className="text-custom-blue text-sm font-bold mb-4 tracking-wider uppercase">
            History
          </h2>
          <div className="flex flex-col gap-12">
            {history.map((item, index) => (
              <div key={index} className="flex">
                <div className="w-1/2">
                  <h3 className="text-xl text-black dark:text-white">
                    {item.company}
                  </h3>
                </div>
                <div className="w-1/2">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg text-black dark:text-white">
                      {item.jobTitle}
                    </h3>
                    <h4 className="text-base font-light text-black dark:text-white">
                      {item.time.start} -{" "}
                      {item.time.end ? item.time.end : "Present"}
                    </h4>
                    <div className="text-sm text-black dark:text-white ">
                      {item.description.map((desc, index) => (
                        <p key={index} className="py-2">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
      <section>
        <div className="flex w-full text-5xl font-medium items-center justify-start">
          <h2 className="text-2xl font-light text-justify m-6 leading-relaxed text-black dark:text-white ">
            An adventurous UX & Frontend engineer with an enthusiasm for
            crafting delightful digital experiences. I thrive on solving complex
            problems through efficient design and love turning challenges into
            opportunities. Overcoming challenges through efficient design is
            what fuelling my everyday drive.
          </h2>
        </div>
        <div className="flex items-center justify-center w-full">
          <Globe
            globeImageUrl={
              isDarkMode
                ? "//unpkg.com/three-globe/example/img/earth-night.jpg"
                : "//unpkg.com/three-globe/example/img/earth-day.jpg"
            }
            pointsData={[copenhagen]}
            pointColor="color"
            backgroundColor="rgba(0,0,0,0)"
            width={size.width} // Use the width of the window as the width of the Globe
            height={size.height} // Use the height of the window as the height of the Globe
            labelLabel={(d) => `
              <div><b>pepe</b></div>
              <div>Program</div>
            `}
          />
        </div>
      </section>
      <Footer isDarkMode={isDarkMode} isOpen={isOpen} />
    </div>
  );
}
