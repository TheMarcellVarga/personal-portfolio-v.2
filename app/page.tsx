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

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  scrollToHome?: () => void;
  scrollToAbout?: () => void;
  scrollToWork?: () => void;
  scrollToContact?: () => void;
  className?: string;
  "data-scroll"?: boolean;
  "data-scroll-sticky"?: boolean;
  "data-scroll-target"?: string;
}
import Header from "./header";
import Footer from "./footer";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import useLocomotive from "./useLocomotive";
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
      // "HTML",
      // "CSS",
      // "JavaScript",
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
      // "HTML",
      // "CSS",
      // "JavaScript",
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

  const { scrollPositionLocomotive, updateScroll } = useLocomotive();

  const stickySectionRef = useRef<HTMLDivElement>(null);

  const [typedText, setTypedText] = useState("");
  const [typingCompleted, setTypingCompleted] = useState(false);

  useEffect(() => {
    const handlePageShow = () => {
      updateScroll();
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, [updateScroll]);

  // Visibility change handler
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        updateScroll();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [updateScroll]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      updateScroll();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateScroll]);

  // Visibility change and load handler
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setTimeout(() => {
          updateScroll();
        }, 50);
      }
    };

    const handlePageShow = () => {
      setTimeout(() => {
        updateScroll();
      }, 50);
    };

    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [updateScroll]);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      // Cancel any pending animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      // Schedule the next animation frame
      animationFrameId = requestAnimationFrame(() => {
        if (scrollPositionLocomotive !== undefined) {
          const scrollDistance = scrollPositionLocomotive;

          // Scroll distance constants
          const typingStart = 550;
          const maxScrollForTyping = 2250;
          const fadeStart = 2800;
          const fadeEnd = fadeStart + 400;
          const zIndexThreshold = 3600;

          // Cache the sticky section element
          const stickySection = document.querySelector(
            "[data-scroll-section].sticky"
          ) as HTMLElement;

          if (stickySection) {
            // Handle z-index with optimization
            const newZIndex = scrollDistance > zIndexThreshold ? "-99" : "1";
            if (stickySection.style.zIndex !== newZIndex) {
              stickySection.style.zIndex = newZIndex;
            }

            // Calculate opacity with optimization
            let opacity = 1;
            if (scrollDistance >= fadeStart && scrollDistance <= fadeEnd) {
              const fadeProgress =
                (scrollDistance - fadeStart) / (fadeEnd - fadeStart);
              opacity = 1 - fadeProgress;
            } else if (scrollDistance > fadeEnd) {
              opacity = 0;
            }

            // Apply opacity only if it has changed
            const opacityString = Math.max(0, Math.min(1, opacity)).toString();
            if (stickySection.style.opacity !== opacityString) {
              stickySection.style.opacity = opacityString;

              // Update typed text element opacity
              const typedTextElement = stickySection.querySelector(
                "h2"
              ) as HTMLElement;
              if (typedTextElement) {
                typedTextElement.style.opacity = opacityString;
              }
            }
          }

          // Handle typing animation with optimization
          let newTypedText = "";
          let newTypingCompleted = false;

          if (scrollDistance < typingStart) {
            newTypedText = "";
            newTypingCompleted = false;
          } else if (scrollDistance > maxScrollForTyping) {
            newTypedText = textToType;
            newTypingCompleted = true;
          } else {
            const progress =
              (scrollDistance - typingStart) /
              (maxScrollForTyping - typingStart);
            const clampedProgress = Math.max(0, Math.min(1, progress));
            const textLength = Math.floor(clampedProgress * textToType.length);
            newTypedText = textToType.slice(0, textLength);
            newTypingCompleted = false;
          }

          // Only update state if values have changed
          setTypedText((prevText) => {
            if (prevText !== newTypedText) {
              return newTypedText;
            }
            return prevText;
          });

          setTypingCompleted((prevCompleted) => {
            if (prevCompleted !== newTypingCompleted) {
              return newTypingCompleted;
            }
            return prevCompleted;
          });
        }
      });
    };

    // Add scroll event listener with passive flag for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial call to set up initial state
    handleScroll();

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [scrollPositionLocomotive, textToType]); // Added textToType to dependencies

  const [isOpen, setIsOpen] = useState(false); // State for other purposes (e.g., menu open)
  const [resumeHover, setResumeHover] = useState(false);
  const [footerHover, setFooterHover] = useState(false);

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
      id="main-container"
      data-scroll-container
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
      <main
        data-scroll-section
        data-scroll-section-id="hero"
        className="flex flex-col items-center justify-between h-screen mt-2 m-4 gap-1 "
      >
        <div
          data-scroll-section
          data-scroll-speed="1"
          data-scroll-delay="0.2"
          className="flex-grow pb-8 w-full flex flex-row items-center justify-strech gap-2 fade-top-bottom"
        >
          <div
            data-scroll
            data-scroll-speed="1"
            data-scroll-delay="0.2"
            className="absolute mt-4 w-fit h-screen z-20 ml-4 md:pl-12 pl-4 pb-32 md:pb-24 md:pt-4 flex flex-col items-start justify-center"
          >
            <div className="flex flex-col md:flex-row w-full lg:text-8xl bg-clip-text items-baseline justify-start">
              <span className="text-gray-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Hey, I'm&nbsp;
              </span>
              <span className="text-custom-blue font-bold text-[44px] leading-[50px] sm:text-5xl md:text-6xl lg:text-7xl">
                Marcell Varga
              </span>
            </div>
            <div className="flex w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light items-center justify-start mb-3 md:mb-0 md:my-2 text-custom-blue">
              UX & Frontend engineer
            </div>
            <div className="flex flex-col sm:flex-row w-full text-sm sm:text-sm md:text-base lg:text-lg font-light items-start justify-start mt-34 italic text-custom-blue/40">
              <span className="sm:hidden">I craft digital journeys that</span>
              <span className="sm:hidden font-semibold">
                captivate and engage.
              </span>
              <span className="hidden sm:block">
                I craft digital journeys that captivate and engage.
              </span>
            </div>

            {/* Button positioned at the bottom */}
            <div className="absolute bottom-36 md:bottom-36 left-0 pl-4 md:pl-10">
              <button className="relative px-5 py-2 text-custom-blue rounded-full group overflow-hidden min-w-36 flex items-center justify-center">
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
            <div className="relative w-full h-2/12 md:h-full flex justify-end main-container">
              <svg
                className={`triangle-bg-svg ${" rounded-[36px] bg-gray-100"} `}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="hidden md:block"
                  d="M1750 -2009L335 786H0V-109Z"
                />
                <path
                  className="hidden md:block gradient-path"
                  d="M1750 -2009L335 786H0V-109Z"
                  fill="url(#paint0_linear_364_239)"
                />

                {/* Tablet/medium mobile path (half size) */}
                <path
                  className="hidden sm:block md:hidden"
                  d="M875 -1004.5L167.5 393H0V-54.5Z"
                />
                <path
                  className="hidden sm:block md:hidden gradient-path"
                  d="M875 -1004.5L167.5 693H0V-54.5Z"
                  fill="url(#paint0_linear_364_239)"
                />

                {/* Small mobile path (quarter size) */}
                <path
                  className="block sm:hidden"
                  d="M437.5 -502.25L83.75 696.5H0V-27.25Z"
                />
                <path
                  className="block sm:hidden gradient-path"
                  d="M177.5 0L-13.75 592.5H0V-27.25Z"
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
            <div className="absolute w-48 sm:w-48 md:w-80 lg:w-96 bottom-0 right-3 md:right-16 transform z-10">
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
        data-scroll-section
        data-scroll-section-id="about"
        data-scroll-offset="50" // Add this for better trigger timing
        className="sticky h-[400vh] top-0 flex flex-col items-center justify-between gap-1 w-full transition-all duration-300"
      >
        <div className="flex w-4/5 h-screen text-5xl font-medium items-center justify-start">
          <h2 className="text-2xl font-light text-justify m-8 leading-relaxed text-custom-blue transition-opacity duration-300">
            {typedText}
          </h2>
        </div>
      </section>
      <section
        data-scroll-section
        data-scroll-section-id="about"
        data-scroll-offset="50" // Add this for better trigger timing
        className="flex justify-center items-center "
      >
        <div className="flex flex-col items-center justify-between mt-4 mb-4 gap-24 w-4/5 ">
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
            <h2 className="text-custom-blue text-sm font-bold mb-6 tracking-wider uppercase">
              Projects
            </h2>
            <div className="w-full h-full flex justify-center items-center">
              <div className="w-full flex flex-col gap-12">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="w-full max-w-[400px] sm:max-w-none mx-auto transform-gpu"
                  >
                    <Link
                      href={project.link}
                      className={`
            w-full 
            flex flex-col 
            sm:flex-row
            px-4 py-3
            sm:px-4 sm:py-3
            md:px-8 md:py-6 
            lg:py-8 2xl:py-10
            rounded-lg
            sm:rounded-xl 
            md:rounded-2xl
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
            items-center
          `}
                    >
                      {/* Image container */}
                      <div
                        className="
    w-full 
    sm:w-1/4 
    md:w-[300px]
    mb-4 sm:mb-0 
    relative 
    flex items-center justify-center
    group-hover:scale-[1.01] transition-transform duration-300
    px-8 sm:px-0  // Add this line for horizontal padding on mobile
  "
                      >
                        <div
                          className="
      w-full
      aspect-[3/2]
      sm:w-full sm:h-full
      md:aspect-[3/2]
      relative rounded-lg overflow-hidden
    "
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            layout={
                              size.width &&
                              size.width >= 640 &&
                              size.width < 768
                                ? "responsive"
                                : "fill"
                            }
                            width={
                              size.width &&
                              size.width >= 640 &&
                              size.width < 768
                                ? 80
                                : undefined
                            }
                            height={
                              size.width &&
                              size.width >= 640 &&
                              size.width < 768
                                ? 80
                                : undefined
                            }
                            objectFit="cover"
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                      <div
                        className="
            flex flex-col 
            p-2 
            sm:p-2 sm:pl-4
            md:p-6 md:pl-8
            gap-2 
            w-full 
            sm:w-2/3 
            md:w-full
            h-full
            justify-center
          "
                      >
                        <div className="w-fit">
                          <div className="text-lg sm:text-lg md:text-2xl text-custom-blue font-bold text-left">
                            {project.title}
                          </div>
                          <div className="text-sm md:text-base text-custom-blue text-left">
                            {project.subTitle}
                          </div>
                        </div>
                        <div className="text-base font-light text-justify text-custom-blue hidden md:block">
                          <div className="text-sm md:text-base">
                            {project.description}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-1 md:mt-2 justify-start">
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

                      {/* Arrow container - visible on sm screens and up */}
                      <div className="hidden sm:flex w-8 md:w-16 h-full items-center justify-center relative">
                        <div className="flex justify-center items-center transition-transform duration-300 ease-in-out origin-left group-hover:translate-x-2">
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="w-4 md:w-6 h-4 md:h-6 text-custom-blue group-hover:text-custom-blue transition-colors duration-700 ease-in-out"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>{" "}
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
                onMouseEnter={() => setResumeHover(true)}
                onMouseLeave={() => setResumeHover(false)}
              >
                <a
                  href="/Marcell-Varga-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex justify-start items-center gap-2 text-custom-blue hover:text-custom-blue transition-all duration-300 ease-in-out ${
                    resumeHover ? "transform scale-105" : ""
                  }`}
                >
                  <span className="relative inline-block overflow-hidden">
                    View Full Resume
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-custom-blue transform ${
                        resumeHover ? "translate-x-0" : "translate-x-[-100%]"
                      } transition-transform duration-300 ease-in-out`}
                    ></span>
                  </span>
                  <div
                    style={{
                      transition: "transform 0.3s",
                      transform: resumeHover ? "translate(2px, -2px)" : "none",
                    }}
                  >
                    <OpenResumeIcon isHover={resumeHover} />
                  </div>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* Contact Section */}
      <section
        data-scroll-section
        data-scroll-section-id="contact" // Add this
        data-scroll-offset="50" // Add this for smoother reveal
        className="flex justify-center items-center mb-24"
      >
        <div className="flex flex-col items-center justify-between gap-24 w-4/5">
          <article className="w-full p-4">
            <h2 className="text-custom-blue text-sm font-bold mb-4 tracking-wider uppercase">
              Contact
            </h2>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Email Contact */}
                <a
                  href="mailto:themarcellvarga@gmail.com"
                  className="group w-full md:w-1/2 bg-gray-100/90 rounded-lg p-6 
                  transition-all duration-300 ease-out
                  hover:bg-neutral-100/95 
                  hover:scale-[1.02] 
                  hover:-translate-y-1 
                  hover:shadow-[0_8px_30px_rgba(2,66,92,0.12)]
                  relative overflow-hidden border border-transparent"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-custom-blue mb-2">
                        Email
                      </h3>
                      <span className="text-custom-blue hover:text-custom-blue/80 transition-colors duration-300">
                        themarcellvarga@gmail.com
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-custom-blue opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </a>
                {/* LinkedIn Contact */}
                <a
                  href="https://www.linkedin.com/in/marcellvarga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full md:w-1/2 bg-gray-100/90 rounded-lg p-6 
                  transition-all duration-300 ease-out
                  hover:bg-neutral-100/95 
                  hover:scale-[1.02] 
                  hover:-translate-y-1 
                  hover:shadow-[0_8px_30px_rgba(2,66,92,0.12)]
                  relative overflow-hidden border border-transparent"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-custom-blue mb-2">
                        LinkedIn
                      </h3>
                      <span className="text-custom-blue hover:text-custom-blue/80 transition-colors duration-300">
                        Marcell Varga
                      </span>
                    </div>
                    <LinkedInIcon className="h-8 w-8 text-custom-blue opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>
                </a>
              </div>

              {/* Message */}
              <div className="w-full bg-gray-100/90 rounded-lg p-6 hover:bg-neutral-100/95 transition-all duration-300">
                <p className="text-custom-blue text-center">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <Footer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isHover={footerHover}
        setIsHover={setFooterHover}
      />
    </div>
  );
}
