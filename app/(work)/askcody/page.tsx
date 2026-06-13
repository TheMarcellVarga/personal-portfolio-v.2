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
      picture: "/images/legacy/AskCody-CaseIndex-New.png",
      text: "",
    },
    description: [
      {
        title: "Overview",
        text: [
          "AskCody builds digital tools for meeting and workplace management. As office culture shifted toward hybrid work, the product needed to support a broader challenge: helping teams coordinate people, spaces, and shared resources.",
        ],
      },
      {
        title: "Problem",
        text: [
          "The shift from static offices to hybrid work changed how companies use desks, rooms, and shared spaces. Existing resource-management tools were not designed for that flexibility.",
        ],
      },
      {
        title: "Objective",
        text: [
          "The objective was to explore a software concept that helps companies use office resources efficiently while giving employees more flexibility.",
        ],
      },
      {
        title: "Design Thinking",
        text: [
          "We used a design-thinking process to keep the concept grounded in user needs while exploring a new workplace model.",
        ],
      },
      {
        title: "Empathize",
        subTitle: ["Interviews", "", "Personas", "", ""],
        subText: [
          "We prepared an interview guide and selected participants with experience in corporate office environments.",
          "The interviews highlighted a need to use space more efficiently, automate everyday coordination tasks, and support hybrid work without creating more friction.",
          "Role-based personas helped us represent the needs, motivations, and pain points of the main user groups.",
          "",
        ],
        subPicture: [
          "",
          "",
          "",
          "/images/legacy/AC-Images/Figure1.png",
          "/images/legacy/AC-Images/Figure2.png",
        ],
      },
      {
        title: "Define",
        text: [
          "We synthesized the research into a more focused definition of the problem.",
        ],
        subTitle: ["Point of View", "", "", "", ""],
        subText: [
          "Actionable problem statements helped clarify the barriers people faced in a digital-first workplace.",
          "",
          "",
          "",
          "",
        ],
        subPicture: [
          "",
          "/images/legacy/AC-Images/Figure3.1.png",
          "/images/legacy/AC-Images/Figure3.2.png",
          "/images/legacy/AC-Images/Figure3.3.png",
          "/images/legacy/AC-Images/Figure3.4.png",
        ],
      },
      {
        title: "Ideate",
        subTitle: [
          "Crazy 8s",
          "",
          "",
          "",
          "Card Sorting",
          "",
          "",
          "",
          "",
          "",
          "Information Architecture",
          "",
          "",
          "",
          "",
          "User Stories",
          "",
          "",
          "",
          "",
        ],
        subText: [
          "With the research in place, we explored the product structure and the features needed by different user groups.",
          "Timed ideation exercises helped us generate and compare possible features quickly.",
          "",
          "",
          "We then ran a card-sorting study using features identified during brainstorming.",
          "A hybrid card sort suited a product centered on functionality rather than content alone.",
          "",
          "The results revealed additional categories and improved the structure.",
          "",
          "",
          "A sitemap made the product structure visible and established the relationships between features, content, and user flows.",
          "",
          "",
          "Before finalizing the information architecture, we mapped the strongest categories, their functions, and their dependencies.",
          "",
          "User stories helped us check whether the concept addressed the main customer goals and product requirements.",
          "We considered both the project goals and the technical constraints.",
          "",
          "The final user-story list framed the software features from the users' perspective.",
        ],
        subPicture: [
          "",
          "",
          "/images/legacy/AC-Images/Figure4.png",
          "/images/legacy/AC-Images/Figure5.png",
          "/images/legacy/AC-Images/Figure6.png",
          "",
          "",
          "/images/legacy/AC-Images/Figure7.png",
          "/images/legacy/AC-Images/Figure8.png",
          "/images/legacy/AC-Images/Figure9.png",
          "",
          "/images/legacy/AC-Images/Figure10.png",
          "/images/legacy/AC-Images/Figure11.png",
          "",
          "/images/legacy/AC-Images/Figure12.png",
          "",
          "",
          "",
          "",
          "/images/legacy/AC-Images/Figure13.png",
        ],
      },
      {
        title: "Prototype",
        text: [""],
        subTitle: ["Sketches", "", ""],
        subText: [
          "Initial sketches captured the direction, clarified the page structure, and made the information architecture easier to evaluate.",
          "",
          "",
        ],
        subPicture: [
          "",
          "/images/legacy/AC-Images/Figure14.jpg",
          "/images/legacy/AC-Images/Figure15.jpg",
        ],
      },
      {
        title: "Low-Fidelity Wireframes",
        text: [
          "Low-fidelity wireframes introduced more detail and a clearer information architecture.",
          "Based on the card sort, we moved the most important destinations into the header and organized the concept into five main pages.",
        ],
        picture: ["/images/legacy/AC-Images/Figure16.png"],
      },
      {
        title: "Mid-Fidelity Prototype",
        text: [
          "The design used Fluent UI while retaining AskCody's visual identity.",
          "The dashboard included a calendar overview for upcoming events and a support-ticket widget for project managers.",
        ],
        picture: ["/images/legacy/AC-Images/Figure17.png"],
      },
      {
        title: "",
        text: [
          "The color system needed to feel compatible with Microsoft Teams while keeping AskCody recognizable.",
        ],
        picture: ["/images/legacy/AC-Images/Figure18.png"],
      },
      {
        title: "High-Fidelity Mockups",
        text: [
          "The final iterations combined the design system, custom assets, and the main interactive states.",
          "We defined how the key interactions should behave and incorporated additional feedback.",
        ],
        picture: [
          "/images/legacy/AC-Images/Figure20.png",
          "/images/legacy/AC-Images/Figure21.png",
          "/images/legacy/AC-Images/Figure23.png",
          "/images/legacy/AC-Images/Figure26.png",
        ],
      },
      {
        title: "Mobile & Watch",
        text: [
          "To support quick bookings on the move, we explored both mobile and watch companion experiences.",
        ],
        picture: [
          "/images/legacy/AC-Images/Figure34.png",
          "/images/legacy/AC-Images/Figure37.png",
        ],
      },
      {
        title: "Summary",
        text: [
          "The final concept extends AskCody's ecosystem with a centralized resource-management experience inside Microsoft Teams.",
          "It gives employees and managers a clearer overview of desks, rooms, events, and support needs in a hybrid workplace.",
        ],
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

export default function AskCodyPage() {
  const [isOpen, setIsOpen] = useState(false);
  const projectData = projects.find((p) => p.title === "AskCody")!;

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

          <OtherWorks currentProjectTitle="AskCody" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
