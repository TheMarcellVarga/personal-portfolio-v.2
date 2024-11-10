"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import IndexSigAnimatedIcon from "../public/icons/indexSigAnimated";
import IndexSig from "../public/icons/indexSig.svg";
import DarkModeIcon from "../public/icons/darkMode";
import LinkedInIcon from "../public/icons/linkedin";
import OpenResumeIcon from "../public/icons/openResume";
import MouseScrollIcon from "@/public/icons/mouseScroll";
import useWindowSize from "./useWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Header from "./header";
import Footer from "./footer";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
// import Globe from "react-globe.gl";

export const projects = [
  {
    title: "European Study Solution",
    subTitle: "Student Agency",
    description:
      "Informative website developed for a start-up to help American students with application process towards European programs and prepare the for life abroad. The platform is to served to develop their business, get and keep in touch with their students.",
    skills: ["HTML", "CSS", "JavaScript", "SEO"],
    link: "/ess", // Example link to the project details page
    image: "/images/ess-index.png", // Add the path to the image
  },
  {
    title: "CatchScan",
    subTitle: "Copyright Protection SaaS",
    description:
      "SaaS dashboard for an automated copyright protection platform in order to protect content creators intellectual works. User-friendly interface to utilise their in-house algorithm the fullest.",
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
    title: "AskCody",
    subTitle: "Hybrid Office Manager",
    description:
      "Flexible office resource management for hybrid work environments, To optimise space resources and automate ad-hoc tasks to enhance employee productivity developed as a Microsoft Teams Integration.",
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
      "Prioritized delivery efficiency using Auto-Layout.",
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
      "UX/UI Design and Elective Specialization: Focused on enhancing UI/UX design skills through practical projects. This aligns with the importance of a well-crafted website or app for user satisfaction.",
      "Front-End Web Development: Engaged in hands-on experience building applications. Emphasis was placed on the design-to-code process and creating visually appealing, easy-to-use interfaces.",
      "Content Production: Involved in creating content that meets user needs and ensures a positive user experience. This reflects the ongoing process of UX design.",
      "Collaboration and Project Management: Worked collaboratively with real companies within Reflective Practice-based Learning (RPL). Applied user research methodologies and usability testing to improve product functionality.",
      "Reflective Practice-based Learning: Executed projects in collaboration with real companies. Applied UX/UI design principles to real-world challenges, enhancing the design-to-code process.",
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

const copenhagen = {
  lat: 55.6761, // Latitude for Copenhagen
  lng: 12.5683, // Longitude for Copenhagen
  size: 1, // Size can be adjusted as needed
  color: "red", // Color set to red
  name: "Copenhagen, Denmark", // Label for the point
};

const textToType =
  "An adventurous UX & Frontend engineer dedicated to crafting delightful, business-focused, and user-centred digital experiences. I excel at solving complex problems through efficient design, turning challenges into opportunities. Overcoming challenges through efficient design is what fuelling my everyday drive.";

export default function Page() {
  const globeRef = useRef<any>();

  const stickySectionRef = useRef<HTMLDivElement>(null);

  const [typedText, setTypedText] = useState("");
  const [typingCompleted, setTypingCompleted] = useState(false);

  useEffect(() => {
    let initialScrollPosition: number | null = null;
    let typingProgress = 0;
    let previousScrollPosition = 0;

    const handleScroll = () => {
      if (stickySectionRef.current && initialScrollPosition !== null) {
        const currentScrollPosition = window.scrollY;
        const scrollDistance = currentScrollPosition;

        console.log(scrollDistance);

        const typingStart = 550; // Start typing at this scroll distance
        const maxScrollForTyping = 2250; // Complete typing at this scroll distance
        const fadeStart = 2800; // Start fading at this scroll distance
        const fadeDuration = 400; // Duration of the fade effect
        const zIndexThreshold = 3600; // Threshold above which zIndex becomes -99

        // Apply zIndex based on scroll distance
        if (stickySectionRef.current) {
          if (scrollDistance > zIndexThreshold) {
            stickySectionRef.current.style.zIndex = "-99";
          } else {
            stickySectionRef.current.style.zIndex = "";
          }
        }

        if (scrollDistance >= fadeStart) {
          const opacity = Math.max(
            0,
            1 - (scrollDistance - fadeStart) / fadeDuration
          );

          if (stickySectionRef.current) {
            stickySectionRef.current.style.opacity = opacity.toString();
          }
        } else {
          if (stickySectionRef.current) {
            stickySectionRef.current.style.opacity = "1";
          }
        }

        // Handle typing animation
        if (scrollDistance < typingStart) {
          // Reset text when scrolling above the typing start position
          setTypedText("");
          setTypingCompleted(false);
        } else if (!typingCompleted) {
          if (scrollDistance >= maxScrollForTyping) {
            setTypedText(textToType); // Ensure full text is displayed
            setTypingCompleted(true);
          } else {
            // Calculate typing progress based on scroll distance
            const typingProgress = Math.min(
              1,
              (scrollDistance - typingStart) /
                (maxScrollForTyping - typingStart)
            );

            // Update typed text based on progress
            const newText = textToType.slice(
              0,
              Math.floor(typingProgress * textToType.length)
            );
            setTypedText(newText);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Set the initial scroll position when the component mounts
    initialScrollPosition = window.scrollY;

    setTimeout(() => {
      handleScroll();
    }, 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false); // State for other purposes (e.g., menu open)
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true; // Enable auto rotation
      controls.enabled = true; // Disable user interaction
    }
  }, []);

  const size = useWindowSize();

  const scrollToHome = useCallback(() => {
    if (stickySectionRef.current) {
      const aboutLocation = 0;

      window.scrollTo({
        top: aboutLocation,
        behavior: "smooth",
      });
    }
  }, []);

  const scrollToAbout = useCallback(() => {
    if (stickySectionRef.current) {
      const aboutLocation = 2800 - 1;

      window.scrollTo({
        top: aboutLocation,
        behavior: "smooth",
      });
    }
  }, []);

  const scrollToWork = useCallback(() => {
    if (stickySectionRef.current) {
      const workLocation = 4350 - 1;

      window.scrollTo({
        top: workLocation,
        behavior: "smooth",
      });
    }
  }, []);

  const scrollToContact = useCallback(() => {
    if (stickySectionRef.current) {
      const contactLocation = 6380 - 1;

      window.scrollTo({
        top: contactLocation,
        behavior: "smooth",
      });
    }
  }, []);
  
  return (
    <div
      className={`px-4 pb-4 transition-colors duration-200 ease-in-out bg-gray-200`}
    >
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        scrollToWork={scrollToWork}
        scrollToContact={scrollToContact}
      />

      <main className="flex flex-col items-center justify-between h-screen mt-2 m-4 gap-1 ">
        <div className="flex-grow pb-8 w-full flex flex-row items-center justify-strech gap-2 fade-top-bottom">
          <div className="absolute mt-4 w-fit h-screen z-20 pl-12 pt-4 flex flex-col items-start justify-center">
            <div className="flex flex-row w-full lg:text-8xl bg-clip-text font-b items-baseline justify-start">
              <span className="text-gray-700 text-6xl">Hey, I'm&nbsp;</span>
              <span className="text-custom-blue font-bold text-7xl">
                Marcell Varga
              </span>
            </div>
            <div className="flex w-full text-4xl font-light items-center justify-start my-2 text-custom-blue">
              UX & Frontend engineer
            </div>
            <div className="flex w-full text-lg font-light items-center justify-start mt-34 italic text-custom-blue/40">
              I craft digital journeys that captivate and engage.
            </div>

            {/* Button positioned at the bottom */}
            <div className="absolute bottom-36 left-0 pl-10">

              <button 
                onClick={scrollToWork}
                className="relative px-5 py-2 text-custom-blue rounded-full group overflow-hidden min-w-36 flex items-center justify-center"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-50 mr-2">
                  Projects
                </span>
                <ArrowRightIcon className="w-5 h-5 relative z-10 transition-colors duration-300 group-hover:text-gray-50" />
                <div className="absolute inset-0 border-2 border-custom-blue rounded-full"></div>
                <div className="absolute inset-0 bg-custom-blue rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
          <div className="relative w-full h-full flex justify-end">
            <div className="relative w-full h-full flex justify-end main-container">
              <svg
                className={`triangle-bg-svg ${"dark-mode rounded-[36px] bg-gray-100"}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1750 -2009L335 786H0V-109Z" />
                <path
                  d="M1750 -2009L335 786H0V-109Z"
                  fill="url(#paint0_linear_364_239)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_364_239"
                    x1="665"
                    y1="-109"
                    x2="-184.317"
                    y2="250.252"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#02425C" />
                    <stop offset="0.475" stop-color="#0F172A" />
                    <stop offset="1" stop-color="#001822" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute md:w-80 lg:w-96 bottom-0 right-16 transform z-10">
              <Image
                src="/images/personalpageprofilealt.png"
                alt="Profile Picture"
                layout="responsive"
                width={300}
                height={300}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="pb-32 flex flex-col items-center justify-start">
          <MouseScrollIcon isOpen={isOpen} />
        </div>
      </main>
      {/* Drive Section */}
      <section
        ref={stickySectionRef}
        className="sticky h-[400vh] top-0 flex flex-col items-center justify-between gap-1 w-full transition-opacity duration-300"
      >
        <div className="flex w-4/5 h-screen text-5xl font-medium items-center justify-start">
          <h2 className="text-2xl font-light text-justify m-8 leading-relaxed text-custom-blue ">
            {typedText}
          </h2>
        </div>
      </section>
      <div className="flex justify-center items-center ">
        <section className="flex flex-col items-center justify-between mt-4 mb-4 gap-24 w-4/5 ">
          {/* New Experience Section */}
          <article className="mt-8 w-full p-4 ">
            <h2 className="text-custom-blue text-sm font-bold mb-4 tracking-wider uppercase">
              Experience
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
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
                  <div key={project.title} className="w-full transform-gpu">
                    <Link
                      href={project.link}
                      className={`
                        w-full 
                        flex flex-col md:flex-row 
                        px-4 md:px-8 py-6 md:py-4 lg:py-4.5 2xl:py-8 
                        rounded-2xl 
                        transition-all duration-300 ease-out 
                        bg-gray-100/90
                        hover:bg-neutral-100/95
                        hover:scale-[1.02] 
                        hover:-translate-y-1
                        hover:shadow-[0_8px_30px_rgba(2,66,92,0.12)]
                        relative
                        overflow-hidden
                        border border-transparent
                        group
                      `}
                    >
                      {/* Image container */}
                      <div className="w-full md:w-fit relative overflow-hidden flex justify-center md:justify-start items-center group-hover:scale-[1.01] transition-transform duration-300">
                        <div className="w-[275px] sm:w-[250px] md:w-[300px] relative rounded-lg overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            layout="responsive"
                            width={300}
                            height={200}
                            objectFit="cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col p-4 md:p-6 pb-0 md:pb-6 gap-2 md:gap-2 w-full">
                        <div className="w-fit">
                          <div className="text-xl md:text-2xl text-custom-blue font-bold">
                            {project.title}
                          </div>
                          <div className="text-sm md:text-base text-custom-blue">
                            {project.subTitle}
                          </div>
                        </div>
                        <div className="text-base font-light text-justify text-custom-blue">
                          <div className="text-sm md:text-base">
                            {project.description}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 md:gap-1.5 mt-1 md:mt-0">
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
                      <div className="w-32 relative overflow-hidden">
                        <div className="flex justify-center items-center absolute inset-0 bg-transparent pointer-events-none transition-transform duration-300 ease-in-out origin-left group-hover:translate-x-5">
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="w-6 h-6 text-custom-blue group-hover:text-custom-blue transition-colors duration-700 ease-in-out"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </article>
          <article className="w-full p-4">
            <h2 className="text-custom-blue text-sm font-bold mb-4 tracking-wider uppercase">
              History
            </h2>
            <div className="flex flex-col gap-12 ">
              {history.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-bold text-custom-blue">
                      {item.company}
                    </h3>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-custom-blue">
                          {item.jobTitle}
                        </h3>
                        <h4 className="text-base font-normal italic text-custom-blue">
                          {item.time.start} -{" "}
                          {item.time.end ? item.time.end : "Present"}
                        </h4>
                      </div>
                      <div>
                        <div className="text-sm text-left md:text-left text-custom-blue ">
                          {item.description.map((desc, index) => (
                            <p key={index} className="py-2">
                              {desc}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="flex justify-start items-center gap-2"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <a
                  href="/Marcell-Varga-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex justify-start items-center gap-2 text-custom-blue hover:text-custom-blue transition-all duration-300 ease-in-out ${
                    isHover ? "transform scale-105" : ""
                  }`}
                >
                  <span className="relative inline-block overflow-hidden">
                    View Full Resume
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-custom-blue transform ${
                        isHover ? "translate-x-0" : "translate-x-[-100%]"
                      } transition-transform duration-300 ease-in-out`}
                    ></span>
                  </span>
                  <div
                    style={{
                      transition: "transform 0.3s",
                      transform: isHover ? "translate(2px, -2px)" : "none",
                    }}
                  >
                    <OpenResumeIcon isHover={isHover} />
                  </div>
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
      <Footer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isHover={isHover}
        setIsHover={setIsHover}
      />
    </div>
  );
}
