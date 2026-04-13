"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, Tag } from "lucide-react";
import Header from "../../header";
import Footer from "../../footer";
import { projects } from "../../data/projects";
import { PageBackground } from "../../components/PageBackground";
import { SectionLabel } from "../../components/SectionLabel";
import { OtherWorks } from "../../components/OtherWorks";
import { useRouter } from "next/navigation";
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
          "AskCody is a company specializing in efficient meeting management through digital solutions. Their philosophy is based on improving the workplace experience, thus increasing employee productivity and satisfaction. Their main product is a cloud-based, flexible and secure solution for creating and managing meetings for office spaces, therefore creating a controlled distribution of the employees. Their platform also makes it possible to edit, track and analyze the meetings. However, our client is addressing major challenge due to the change in corporate office culture.",
        ],
      },
      {
        title: "Problem",
        text: [
          "After the COVID-19 pandemic, the concept of workplaces has changed. More and more companies are in the process of transition from static to hybrid office environments. With this transition a new problem arises. Office resource management tools are simply not suitable for the new era of hybrid transformation.",
        ],
      },
      {
        title: "Objective",
        text: [
          "To help companies address this issue, we will investigate developing a software solution which will capitalize on utilizing all the company's resources while providing flexible work arrangements for its employees.",
        ],
      },
      {
        title: "Design Thinking",
        text: [
          "Our choice of development method for the project was Design Thinking as it can help us systematically extract, teach, learn and apply human centric techniques to solve problems in a creative and innovative way. By using Design Thinking we will ensure that the focus is kept on the users' needs and values, and that it is a human-centered procedure.",
        ],
      },
      {
        title: "Empathize",
        subTitle: ["Interviews", "", "Personas", "", ""],
        subText: [
          "We prepared a thorough interview guide and carefully selected the possible participants, as it would greatly influence the result. We believed that the best source to extract information from would be from personnel of the corporate offices.",
          "Based on the interviews, we gained insight to many unique needs, which we sorted and evaluated. From this we concluded that companies are looking to optimize their capacity of space resources and to increase the productivity of their employees by automating everyday ad-hoc tasks. In addition, complying with the hybrid model was a key factor.",
          "Together our findings we settled on having personas for the best representation of our target audience. By doing this we'll be able to know the specific needs of workers in similar positions and use their possible motivation or pain points for our own good. We chose to bring our perception for making it role based.",
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
          "After finding the core issues to be solved, we analyze our observations from our users and funnel our thoughts down to make it more tangible. To do this we are synthesizing our findings so we can define the problem.",
        ],
        subTitle: ["Point of View", "", "", "", ""],
        subText: [
          "Since our project was revolving around exploring what are the crucial issues and how they could act as an obstacle for digital-first work environment, we had to define what the exact problems are, using an actionable problem statements.",
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
          "Having sufficient data made it easy for us to start ideating on the show structure for the product and with it the functionalities which will provide a solution for different user types.",
          "First, we are stating our goal, which in our case was to discover the potential functionality of the product. To fulfill this, we developed ideas under a short, predetermined amount of time and later validated them among us.",
          "",
          "",
          "Our next step was to conduct a card sorting study. We have created cards based on our previous brainstorming sessions, where we were discussing taxonomically low-level features and other aspects of the future system.",
          "We choose our card sorting method to be hybrid, as our end-product was focusing more on functionality, rather than pure information presentation.",
          "",
          "The results were captivating, which drove us to generate additional categories, which gave us a further approvement.",
          "",
          "",
          "We started to establish an informational architecture by creating a sitemap. Visual sitemaps gave us a clear representation of the structure for our product. To institute the taxonomy, we had made clear relations between the content, which also lay down the foundation for multiple user flows.",
          "",
          "",
          "Before finalizing the IA, we created a sitemap for the most valid categories and listed their functions and dependencies beneath them, based on the study results. This was necessary as after working with many pages with many functionalities their relations became quite confusing and therefore, we visualize them.",
          "",
          "Before going any further we had to make a product discovery using User Stories to revise our progress and verify if all customer goals and product requirements achievable and can be met.",
          "Our discovery was dictated by two factors, which were our project needs and the technical requirements, including the potential limitations.",
          "",
          "We have made a list with User Stories to catch all software features from our users' perspective.",
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
          "We had started to create initial sketches to capture our vision and get an overview of the page structure. We're also able to visualize the information architecture and project the user behaviors.",
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
          "This time we started to apply more details, including a well-defined information architecture.",
          "Based on the assessment of the card sorting we had re-evaluated and placed the access to the most important pages into the header, ending up with five subpages.",
        ],
        picture: ["/images/legacy/AC-Images/Figure16.png"],
      },
      {
        title: "Mid-Fidelity Prototype",
        text: [
          "Our design was determined by the Fluent UI design system while retaining the AskCody corporate visual identity.",
          "We made a dashboard design, including a snippet of a calendar for a quick overview of the upcoming events, which is one of the most crucial assets of an office worker. In case the visitor in the project manager, we also placed a quick overview widget for the tickets submitted though the support.",
        ],
        picture: ["/images/legacy/AC-Images/Figure17.png"],
      },
      {
        title: "",
        text: [
          "In terms of colors, we had to take both Teams' and AskCody's into consideration. It was important to establish a harmony between them, while not blending them in too much.",
        ],
        picture: ["/images/legacy/AC-Images/Figure18.png"],
      },
      {
        title: "High-Fidelity Mockups",
        text: [
          "Our last iterations included all the functional and interactive elements, using both the design system and the custom assets.",
          "At this point, we had planned out how the interactions should behave and what they should result in, including changes based on additional feedback.",
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
          "When thinking about convenience and fast ways of booking the resources, the mobile comes as an obvious solution. We also carried out a watch companion implementation.",
        ],
        picture: [
          "/images/legacy/AC-Images/Figure34.png",
          "/images/legacy/AC-Images/Figure37.png",
        ],
      },
      {
        title: "Summary",
        text: [
          "To summarize, we have created an innovative concept for AskCody to solve the issue of resource management and flexible transformation in the office management area.",
          "We had carried out a centralized solution existing part of AskCody's ecosystem integrated into Microsoft Teams to manage office resources, while providing an overview of the company both for the employees and the managers in the rising trend of hybrid work environments.",
        ],
      },
    ],
  },
];

function fadeInUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };
}

export default function AskCodyPage() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const projectData = projects.find((p) => p.title === "AskCody")!;

  const handleBack = useCallback(() => {
    router.push("/#work");
  }, [router]);

  return (
    <div className="relative overflow-x-clip">
      <PageBackground />
      
      <Header 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        activeSection="Work"
      />

      <main className="relative z-10 px-4 pb-20 pt-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBack}
            className="group mb-12 flex items-center gap-2 text-sm font-semibold text-custom-blue/60 transition-colors hover:text-custom-blue"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to work
          </motion.button>

          <header className="mb-20 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div {...fadeInUp(0)}>
              <SectionLabel index="Project" label="Case Study" />
              <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.02em] text-custom-blue">
                {projectData.title}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-custom-blue/72">
                {projectData.description}
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp(0.1)}
              className="flex flex-col gap-6 lg:pt-16"
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1">
                  <p className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-custom-blue/45">
                    <Calendar className="h-3 w-3" /> Date
                  </p>
                  <p className="text-sm font-semibold text-custom-blue">{projectData.date}</p>
                </div>
                <div className="space-y-1">
                  <p className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-custom-blue/45">
                    <Tag className="h-3 w-3" /> Category
                  </p>
                  <p className="text-sm font-semibold text-custom-blue">{projectData.category}</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-custom-blue/45">Key Skills</p>
                <div className="flex flex-wrap gap-2">
                  {projectData.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-custom-blue/10 bg-white/50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-custom-blue/60 backdrop-blur-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </header>

          <motion.div 
            {...fadeInUp(0.2)}
            className={`relative mb-24 aspect-[16/9] overflow-hidden rounded-[3rem] shadow-[0_40px_120px_rgba(7,20,38,0.16)] ${projectData.backgroundClass}`}
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
                      <h2 className="font-display text-4xl font-medium tracking-[-0.02em] text-custom-blue">
                        {section.title}
                      </h2>
                    </>
                  )}
                </div>

                <div className="space-y-12">
                  {section.text && section.text.length > 0 && section.text[0] !== "" && (
                    <div className="glass-panel space-y-6 rounded-[2.5rem] p-8 sm:p-10">
                      {section.text.map((p, pIndex) => (
                        <p key={pIndex} className="text-lg leading-relaxed text-custom-blue/72">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}

                  {!hideLegacyImages && section.picture && section.picture.length > 0 && (
                    <div className="grid gap-6 sm:grid-cols-2">
                      {section.picture.map((pic, pIdx) => (
                        <div key={pIdx} className="overflow-hidden rounded-3xl border border-custom-blue/5 bg-white shadow-lg">
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

                  {!hideLegacyImages && section.subTitle && section.subTitle.map((sub, subIdx) => (
                    <div key={subIdx} className={`space-y-6 ${subIdx > 0 ? "pt-8 border-t border-custom-blue/5" : ""}`}>
                      {sub && <h3 className="text-xl font-bold text-custom-blue">{sub}</h3>}
                      {section.subText?.[subIdx] && (
                        <p className="text-lg leading-relaxed text-custom-blue/72">
                          {section.subText[subIdx]}
                        </p>
                      )}
                      {section.subPicture?.[subIdx] && section.subPicture[subIdx] !== "" && (
                        <div className="overflow-hidden rounded-3xl border border-custom-blue/5 bg-white shadow-lg">
                          <Image
                            src={section.subPicture[subIdx]}
                            alt={sub || "Case study visual"}
                            width={1200}
                            height={800}
                            className="h-auto w-full"
                          />
                        </div>
                      )}
                    </div>
                  ))}
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
