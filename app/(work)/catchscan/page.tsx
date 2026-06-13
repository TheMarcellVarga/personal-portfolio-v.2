"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";
import Header from "../../header";
import Footer from "../../footer";
import { projects } from "../../data/projects";
import { PageBackground } from "../../components/PageBackground";
import { SectionLabel } from "../../components/SectionLabel";
import { OtherWorks } from "../../components/OtherWorks";
import Link from "next/link";

const hideLegacyImages = false;

const history = [
  {
    title: "",
    subTitle: "",
    content: {
      picture: "/images/legacy/CatchScan-CaseIndex-New.png",
      text: "",
    },
    description: [
      {
        title: "Overview",
        text: [
          "CatchScan helps content creators protect their work through automated copyright monitoring. Creators upload images to a web application, and the platform scans for potential unauthorized use.",
          "Our task was to redesign the dashboard and improve the product architecture around CatchScan's existing matching algorithm.",
        ],
        picture: [],
      },
      {
        title: "Problem",
        text: [
          "The beta product proved the core functionality, but the dashboard had fragmented user flows and an unclear hierarchy. The experience did not yet reflect the value of the service.",
        ],
        picture: [],
      },
      {
        title: "Objective",
        text: [
          "The goal was to create a clear dashboard around the copyright-matching algorithm. We focused on information architecture, navigation, and task flows so creators could upload work, monitor results, and understand their options.",
        ],
        picture: [],
      },
      {
        title: "Design Thinking",
        text: [
          "We used a design-thinking process to keep the work grounded in creators' needs and revisit assumptions as we learned more.",
          "The process moved through empathize, define, ideate, prototype, and test, with iteration between stages when the evidence called for it.",
        ],
        picture: [],
      },
      {
        title: "Empathize",
        text: [
          "We started by identifying the creators most likely to use the product and understanding their needs, expectations, and concerns.",
        ],
        picture: [],
        subTitle: [
          "Benchmarking",
          "User Research",
          "",
          "",
          "Empathy Map",
          "",
          "Personas",
          "",
          "User Journey",
          "",
        ],
        subText: [
          "Benchmarking helped us compare competing solutions and identify the strengths, gaps, and distinctive aspects of the CatchScan concept.",
          "Before the interviews, we grouped potential users to define the audience for the web application.",
          "We combined behavioral and psychographic criteria with demographic and geographic factors.",
          "The research pointed toward English-speaking content creators aged 18 to 35 as the primary audience.",
          "We organized interview findings in an empathy map.",
          "This helped us understand the users more clearly and prioritize their needs.",
          "We created two personas to make those needs tangible and identify which parts of the experience deserved the most attention.",
          "",
          "A user journey mapped the process from submitting a case onward, including opportunities to improve clarity and reduce frustration.",
        ],
        subPicture: [
          "",
          "",
          "",
          "",
          "",
          "/images/legacy/CS-Images/Figure2.png",
          "",
          "/images/legacy/CS-Images/Figure3.png",
          "/images/legacy/CS-Images/Figure4.png",
          "/images/legacy/CS-Images/Figure5.png",
        ],
      },
      {
        title: "Define",
        text: [""],
        picture: [],
        subTitle: [
          "Human-centered problem statements",
          "",
          "",
          "Content Inventory",
        ],
        subText: [
          "We reframed the challenge from the users' point of view.",
          "We condensed the findings into clear, one-sentence problem statements.",
          "We turned those statements into questions that could guide ideation.",
          "A content inventory helped define the scope and ensure the necessary product elements were covered.",
        ],
        subPicture: ["", "/images/legacy/CS-Images/Figure7.png"],
      },
      {
        title: "Ideate",
        text: [
          "With the user needs defined, we moved into ideation.",
        ],
        picture: [],
        subTitle: ["Brainstorm", "", "", "Information Architecture", ""],
        subText: [
          "Brainstorming translated the research findings and problem statements into possible product directions.",
          "We chose a dashboard structure because it could support the required tools while keeping the main actions visible.",
          "We used restrained glassmorphism to separate important objects and create hierarchy.",
          "The information architecture was designed to minimize effort: clear grouping, readable typography, and direct access to the tasks creators needed most.",
        ],
        subPicture: ["", "", "", "", "/images/legacy/CS-Images/Figure11.png"],
      },
      {
        title: "Prototype",
        text: [""],
        picture: [],
        subTitle: [
          "Sketches",
          "Low-Fidelity Wireframes",
          "",
          "High-Fidelity Mockups",
          "",
          "Atomic Design",
          "",
          "",
          "",
          "",
          "",
          "Colors",
          "",
          "",
          "Iterations",
          "",
          "",
          "",
          "",
          "",
        ],
        subText: [
          "We started with sketches to capture the initial direction.",
          "Low-fidelity wireframes made the layout and key interface elements more precise.",
          "The research supported a desktop-first approach because the product needed to present several professional tools in a single workspace.",
          "The wireframes then developed into high-fidelity mockups.",
          "We used Atomic Design to organize the interface and support collaboration.",
          "The system started with atoms: the smallest reusable interface elements.",
          "Combining atoms produced molecules such as navigation buttons and content cards.",
          "Those elements formed larger organisms such as navigation areas and content libraries.",
          "Templates established the page-level structure.",
          "The final pages combined those templates with real content.",
          "",
          "Color shapes the first impression and helps users read the interface. We kept CatchScan's existing blue and orange palette to connect the dashboard with the brand.",
          "Maintaining consistency with the marketing website made the product feel more coherent.",
          "",
          "Several iterations helped us simplify the visual direction and find a more balanced solution.",
          "",
          "",
          "",
          "The final concept uses a simple background so the content and actions stay in focus.",
        ],
        subPicture: [
          "",
          "/images/legacy/CS-Images/Figure12.jpg",
          "/images/legacy/CS-Images/Figure13.png",
          "",
          "",
          "",
          "/images/legacy/CS-Images/Figure14.png",
          "/images/legacy/CS-Images/Figure15.png",
          "/images/legacy/CS-Images/Figure16.png",
          "/images/legacy/CS-Images/Figure17.png",
          "/images/legacy/CS-Images/Figure18.png",
          "",
          "/images/legacy/CS-Images/Figure19.png",
          "",
          "",
          "/images/legacy/CS-Images/Figure20.png",
          "/images/legacy/CS-Images/Figure21.png",
          "/images/legacy/CS-Images/Figure22.png",
          "",
          "/images/legacy/CS-Images/Figure23.png",
        ],
      },
      {
        title: "Test",
        text: [
          "We used five-second and think-aloud tests to check whether the calls to action were visible and whether users could move through the product without confusion.",
        ],
        picture: [],
      },
      {
        title: "Realization",
        text: [
          "We implemented the project with HTML, CSS, JavaScript, and Tailwind CSS.",
          "Because the service depends on personal content and case tracking, sign-up and login were essential parts of the experience.",
        ],
        picture: ["/images/legacy/CS-Images/Figure24.png"],
      },
      {
        title: "",
        text: [
          "The sign-up sequence asks for essential information first, then introduces additional inputs only when they are needed.",
        ],
        picture: ["/images/legacy/CS-Images/Figure25.png"],
      },
      {
        title: "Summary",
        text: [
          "The final dashboard gives creators a structured way to upload work, review matches, understand analytics, and decide what to do next.",
          "The project combined research, information architecture, interface design, and frontend implementation into a clearer copyright-monitoring experience.",
        ],
        picture: [],
      },
    ],
  },
];

function fadeInUp(delay = 0) {
  return {
    initial: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: {
      once: true,
      amount: 0,
      margin: "0px",
    },
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };
}

export default function CatchScanPage() {
  const [isOpen, setIsOpen] = useState(false);
  const projectData = projects.find((p) => p.title === "CatchScan")!;

  return (
    <div className="relative">
      <PageBackground />
      
      <Header 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        activeSection="Work"
        backLink={{ href: "/#work", label: "Back to work" }}
      />

      <main className="relative z-10 px-5 pb-20 pt-32 sm:px-6 lg:px-10 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <header className="mb-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.div {...fadeInUp(0)} className="space-y-6">
              <SectionLabel index="Project" label="Case Study" />
              <h1 className="font-display text-[clamp(2.35rem,10vw,7rem)] font-medium leading-[0.92] tracking-[-0.04em] text-custom-blue">
                {projectData.title}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-custom-blue/72 sm:text-lg">
                {projectData.description}
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp(0.1)}
              className="flex flex-col gap-6 lg:pb-2"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-8">
                <div className="space-y-1">
                  <p className="flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-custom-blue/45">
                    <Calendar className="h-3 w-3" /> Date
                  </p>
                  <p className="text-sm font-semibold text-custom-blue">{projectData.date}</p>
                </div>
                <div className="space-y-1">
                  <p className="flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-custom-blue/45">
                    <Tag className="h-3 w-3" /> Category
                  </p>
                  <p className="text-sm font-semibold text-custom-blue">{projectData.category}</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-custom-blue/45">Key skills</p>
                <div className="flex flex-wrap gap-2">
                  {projectData.skills.map((skill) => (
                    <span key={skill} className="font-label rounded-full bg-white/62 px-2.5 py-1.5 text-[0.54rem] font-medium uppercase tracking-[0.15em] text-custom-blue/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </header>

          <motion.div 
            {...fadeInUp(0.2)}
            className={`glass-panel relative mb-24 aspect-[16/9] overflow-hidden rounded-[1.9rem] bg-white/65 shadow-[0_18px_48px_rgba(11,17,26,0.06)] sm:rounded-[2.1rem] ${projectData.backgroundClass}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_50%)]" />
            <Image
              src={projectData.image}
              alt={projectData.title}
              fill
              className="object-cover transition-transform duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          <div className="space-y-32">
            {history[0].description.map((section, sIndex) => (
              <motion.section 
                key={sIndex}
                {...fadeInUp(0.1)}
                className="grid gap-12 lg:grid-cols-[1fr_2fr]"
              >
                <div className="lg:sticky lg:top-32 lg:h-fit">
                  {section.title && (
                    <>
                      <SectionLabel index={`0${sIndex + 1}`} label={section.title} />
                      <h2 className="font-display text-[clamp(2.25rem,4vw,3.75rem)] font-medium leading-[0.95] tracking-[-0.035em] text-custom-blue">
                        {section.title}
                      </h2>
                    </>
                  )}
                </div>

                <div className="space-y-12">
                  {(section.text ?? []).filter((paragraph) => paragraph.trim().length > 0).length > 0 && (
                    <div className="glass-panel space-y-6 rounded-[1.9rem] bg-white/65 p-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)] sm:rounded-[2.1rem] sm:p-7">
                      {(section.text ?? [])
                        .filter((paragraph) => paragraph.trim().length > 0)
                        .map((p, pIndex) => (
                        <p key={pIndex} className="text-lg leading-relaxed text-custom-blue/72">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}

                  {!hideLegacyImages && section.picture && section.picture.length > 0 && (
                    <div className="grid gap-6 sm:grid-cols-2">
                      {section.picture.map((pic, pIdx) => (
                        <div key={pIdx} className="glass-panel overflow-hidden rounded-[1.9rem] bg-white/65 shadow-[0_12px_40px_rgba(11,17,26,0.04)] sm:rounded-[2.1rem]">
                          <Image
                            src={pic}
                            alt={`${section.title} visual ${pIdx + 1}`}
                            width={1200}
                            height={800}
                            className="h-auto w-full"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {!hideLegacyImages && (() => {
                    const subsections = (section.subTitle ?? [])
                      .map((sub, subIdx) => ({
                        title: sub,
                        text: section.subText?.[subIdx] ?? "",
                        picture: section.subPicture?.[subIdx] ?? "",
                      }))
                      .filter(
                        ({ title, text, picture }) =>
                          title.trim().length > 0 ||
                          text.trim().length > 0 ||
                          picture.trim().length > 0,
                      );

                    return subsections.map((subsection, subIdx) => (
                      <div
                        key={`${subsection.title || "subsection"}-${subIdx}`}
                        className={`space-y-6 ${
                          subIdx > 0 ? "border-t border-custom-blue/5 pt-8" : ""
                        }`}
                      >
                        {subsection.title && (
                          <h3 className="text-xl font-bold text-custom-blue">
                            {subsection.title}
                          </h3>
                        )}
                        {subsection.text && (
                          <p className="text-lg leading-relaxed text-custom-blue/72">
                            {subsection.text}
                          </p>
                        )}
                        {subsection.picture && (
                          <div className="glass-panel overflow-hidden rounded-[1.9rem] bg-white/65 shadow-[0_12px_40px_rgba(11,17,26,0.04)] sm:rounded-[2.1rem]">
                            <Image
                              src={subsection.picture}
                              alt={subsection.title || "Case study visual"}
                              width={1200}
                              height={800}
                              className="h-auto w-full"
                            />
                          </div>
                        )}
                      </div>
                    ));
                  })()}
                </div>
              </motion.section>
            ))}
          </div>

          <OtherWorks currentProjectTitle="CatchScan" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
