"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import IndexSigAnimated from "../public/icons/indexSigAnimated";
import IndexSig from "../public/icons/indexSig.svg";

// Header component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <header
      className={`sticky-header flex justify-between items-center w-full my-4 px-4 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
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
    link: "/ess", // Example link to the project details page
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
    link: "/catchscan", // Example link to the project details page
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

export default function Page() {
  return (
    <div className="mb-4 mx-4">
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
                  <div className="text-md font-light text-justify">
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
        <article className="my-8 w-full">
          <h2 className="text-custom-blue text-sm font-bold mb-4 tracking-wider uppercase">
            History
          </h2>
          <div className="flex flex-col gap-8">
            {history.map((item, index) => (
              <div key={index} className="flex">
                <div className="w-1/2">
                  <h3 className="text-xl">{item.company}</h3>
                </div>
                <div className="w-1/2">
                  <div className="flex flex-col">
                    <h3 className="text-xl">{item.jobTitle}</h3>
                    <h4 className="text-base font-light">
                      {item.time.start} -{" "}
                      {item.time.end ? item.time.end : "Present"}
                    </h4>
                    <div className="text-sm">
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
      <Footer />
    </div>
  );
}
