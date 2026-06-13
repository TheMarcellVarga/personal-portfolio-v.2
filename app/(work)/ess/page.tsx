"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";
import Header from "../../header";
import Footer from "../../footer";
import { projects } from "../../data/projects";
import { PageBackground } from "../../components/PageBackground";
import { SectionLabel } from "../../components/SectionLabel";
import { OtherWorks } from "../../components/OtherWorks";

const hideLegacyImages = false;

const history = [
  {
    title: "",
    subTitle: "",
    content: {
      picture: "/images/legacy/ESS-CaseIndex-New.png",
      text: "",
    },
    description: [
      {
        title: "Overview",
        text: [
          "European Study Solution helps American students apply to European universities and prepare for life abroad. The service combines program guidance, application support, document preparation, and practical information for the move.",
        ],
        picture: [],
      },
      {
        title: "Problem",
        text: [
          "ESS needed an informative website that could build trust and help students understand the available programs, application process, deadlines, fees, and practical realities of living abroad.",
        ],
        picture: [],
      },
      {
        title: "Objective",
        text: [
          "The objective was to create ESS's main information platform from scratch, with clear paths to services, pricing, and partner universities in France.",
        ],
        picture: [],
      },
      {
        title: "User Research",
        text: [
          "We conducted research to understand the students' environment, expectations, behaviors, and concerns.",
          "An interview guide helped us focus on American students aged 18 and older who were open to studying abroad and experiencing a new culture.",
        ],
        picture: [],
      },
      {
        title: "Personas",
        text: [
          "Personas made the students' needs, behaviors, and goals easier to evaluate throughout the design process.",
        ],
        picture: [
          "/images/legacy/ESS-Images/Picture 3.png",
          "/images/legacy/ESS-Images/Picture 4.png",
        ],
      },
      {
        title: "Five Planes Method",
        text: [
          "We used the Five Planes Method to move from product strategy into interface decisions.",
        ],
        picture: [],
        subTitle: [
          "Strategy plane",
          "Scope plane",
          "Structure plane",
          "Skeleton plane",
        ],
        subText: [
          "We began with two questions: what value should the website create for the organization, and what value should it create for students? Because ESS did not yet have a website, the platform needed to attract potential customers and connect students with partner universities.",
          "The answers pointed toward a content-led website. That made information architecture and readability especially important.",
          "We defined the content and functional requirements needed to support the students' decisions.",
          "Client feedback helped us refine the information architecture, categories, and navigation paths.",
          "Early wireframes explored navigation, buttons, content blocks, and the relationships between interface components.",
        ],
        subPicture: [
          "/images/legacy/ESS-Images/FivePlane5.png",
          "/images/legacy/ESS-Images/FivePlane4.png",
          "/images/legacy/ESS-Images/FivePlane3.png",
          "/images/legacy/ESS-Images/FivePlane2.png",
          "/images/legacy/ESS-Images/FivePlane1.png",
        ],
      },
      {
        title: "Information Architecture",
        text: [
          "The information architecture was designed to help students find relevant content with as little effort as possible.",
        ],
        picture: [],
      },
      {
        title: "Wireframing",
        text: [
          "During the skeleton phase, wireframes clarified the page structure while keeping styling, color, and graphics to a minimum.",
          "We established the navigation bar where we included different page labels to emphasize the structure.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 5.png"],
      },
      {
        title: "",
        text: [
          "For the opening section, we explored a full-width image and slideshow treatment.",
        ],
        picture: [
          "/images/legacy/ESS-Images/Picture 6.1.png",
          "/images/legacy/ESS-Images/Picture 6.2.png",
          "/images/legacy/ESS-Images/Picture 6.3.png",
        ],
      },
      {
        title: "",
        text: [
          "We tested several landing-page directions to explain ESS quickly and make the key services visible from the start.",
        ],
        picture: [
          "/images/legacy/ESS-Images/Picture 7.1.png",
          "/images/legacy/ESS-Images/Picture 7.2.png",
          "/images/legacy/ESS-Images/Picture 7.3.png",
          "/images/legacy/ESS-Images/Picture 7.4.png",
        ],
      },
      {
        title: "",
        text: [
          "A card-based review section was introduced to build trust and group testimonials clearly.",
        ],
        picture: [
          "/images/legacy/ESS-Images/Picture 8.1.png",
          "/images/legacy/ESS-Images/Picture 8.2.png",
        ],
      },
      {
        title: "",
        text: [
          "The footer repeats the most important links and the agency's contact information.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 9.png"],
      },
      {
        title: "",
        text: [
          "The service page uses a vertical sidebar with tabs and a flexible content area for the selected information.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 10.png"],
      },
      {
        title: "",
        text: [
          "The university page balances visuals with readable content in a reusable template that can support multiple institutions.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 11.2.png"],
      },
      {
        title: "Lo-Fi",
        text: [
          "After additional client feedback, we featured partner universities on the landing page and added an institution switcher to the university page.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 12.1.png"],
      },
      {
        title: "",
        text: [
          "A price comparison highlighted the financial advantages of studying at European universities.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 12.2.png"],
      },
      {
        title: "",
        text: [
          "Service packages made the pricing and included support easier to compare.",
        ],
        picture: [],
      },
      {
        title: "Surface Plane",
        text: [],
        picture: ["/images/legacy/ESS-Images/FivePlane1.png"],
      },
      {
        title: "",
        text: [
          "At the surface plane, we brought the structure, content, functionality, and visual direction together.",
        ],
        picture: [],
      },
      {
        title: "Mockup",
        text: [],
        picture: ["/images/legacy/ESS-Images/Picture 13.1.png"],
      },
      {
        title: "",
        text: [
          "The final iteration combined our ideas, client feedback, research, and the necessary design components.",
          "The review section includes space for three testimonials and can expand into a carousel later.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 13.2.png"],
      },
      {
        title: "",
        text: [
          "Images of the schools break up dense content and help students imagine the experience more clearly.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 13.3.png"],
      },
      {
        title: "",
        text: [
          "The contact page confirms successful submission so students are not left wondering whether their message was received.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 13.1.png"],
      },
      {
        title: "Responsive Design",
        text: [
          "Responsive design was essential for the target audience, so we created tablet and mobile prototypes with a compact navigation pattern.",
        ],
        picture: [
          "/images/legacy/ESS-Images/Picture 14.1alt.png",
          "/images/legacy/ESS-Images/Picture 14.1alt.png",
          "/images/legacy/ESS-Images/Picture 14.1alt.png",
          "/images/legacy/ESS-Images/Picture 14.2.png",
          "/images/legacy/ESS-Images/Picture 14.2.png",
          "/images/legacy/ESS-Images/Picture 14.2.png",
          "/images/legacy/ESS-Images/Picture 14.3.png",
          "/images/legacy/ESS-Images/Picture 14.3.png",
          "/images/legacy/ESS-Images/Picture 14.3.png",
        ],
      },
      {
        title: "Realization",
        text: [
          "After the high-fidelity mockup, we implemented the website with HTML, CSS, and JavaScript.",
        ],
        picture: [],
      },
      {
        title: "Usability",
        text: [
          "We used five-second and think-aloud tests to evaluate first impressions and check whether the website supported the intended tasks.",
          "The results supported the direction and helped validate the concept.",
        ],
        picture: [],
      },
      {
        title: "SEO",
        text: [
          "We added metadata and search-focused optimization so the website could be indexed and presented more effectively in search results.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 15.png"],
      },
      {
        title: "Summary",
        text: [
          "The final website gives ESS a central platform for presenting its services and staying in contact with prospective students.",
          "For students, it creates a clearer path to the information and support they need when considering education abroad.",
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

export default function ESSPage() {
  const [isOpen, setIsOpen] = useState(false);
  const projectData = projects.find((p) => p.title === "European Study Solution")!;

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
            <motion.div {...fadeInUp(0)}>
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

          <OtherWorks currentProjectTitle="European Study Solution" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
