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
      picture: "/images/legacy/CatchScan-CaseIndex-New.png",
      text: "",
    },
    description: [
      {
        title: "Overview",
        text: [
          "CatchScan is an IT company, whose mission is to help content creators to protect their brand and place them in control of their content. Their product is a software driven platform where content creators can establish an automated protection regarding to their copyright. They offer a web app, where influencers or other artists can insert their intellectual work (for now only images) and make sure that no one else is using it without their permission. As the creator upload their work, the algorithm can search for any misconduct.",
          "Our client gave us the task to come up with a user-friendly interface and reestablish the architecture of their app while utilizing their already existing in-house algorithm.",
        ],
        picture: [],
      },
      {
        title: "Problem",
        text: [
          "Our client had created a beta version of their product, where their main focus was on the functionality itself, rather than the user experience. This led to broken user flows of the existing dashboard, resulting in an unpleasing, confusing experience, which doesn't represent the company's values.",
        ],
        picture: [],
      },
      {
        title: "Objective",
        text: [
          "The goal of this project is to create a web app for CatchScan, which will be utilizing their copyright matching algorithm. We need to create a visual interface with a well-developed and optimized structure, which will focus on information architecture and user navigation. The dashboard interface will be created from scratch and will help the user to find the functions with ease and fulfill their needs.",
        ],
        picture: [],
      },
      {
        title: "Design Thinking",
        text: [
          "At the beginning of the whole process, we need to establish what kind of development method we are going to use. In this project we will be using Design Thinking development. Since it is a human-centered methodology, we bring the users to the spotlight and try to understand their problems, wants, needs, values, feelings. As we will know more about our users, we might re-frame our problem in order to achieve the best solution for them.",
          "Design thinking consist of 5 parts - empathize, define, ideate, prototype and test. It is non-linear process. That means, while we are moving forward in the overall process, we will be going back to the former steps",
        ],
        picture: [],
      },
      {
        title: "Empathize",
        text: [
          "In this phase of the project, the main goal was to connect with our users - know who they are, what are their needs and expectations.",
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
          "After meeting with our client, our extensive research helped us to understand competition and we had listed the main pros and cons of their solutions, with having the distinctive aspects in mind.",
          "We had started off by user categorization prior to conducting qualitative interviews to define who is our target audience that will be using our web application.",
          "First, we had set a subjective criteria where are we considered our user base based on their behaviors and psychographics. After this we also established an objective criteria which consisted of, they are geographic and the demographic status.",
          "Based on our results, we assume our target audience is English speaker content creators between the age of 18-35.",
          "To organize and see the outcome of the interviews we created an empathy map, where we have sorted our results into four sections",
          "This helped us not only to further understand our users but also to prioritize their needs.",
          "To enhance our research further, we believe we can benefit from creating Personas. As a result, we came up with two personas, which helped us to get a better understanding about what our users' possible needs could be and what aspects should we emphasize on based on our research.",
          "",
          "We constructed a user journey to take notes of how we can improve the user interaction and the overall satisfaction. This helped us to plan out the process starting from submitting the cases, while taking the user's emotion in mind.",
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
          "Human-centric problem fomulations",
          "",
          "",
          "Content Inventory",
        ],
        subText: [
          "To make sure we fulfill the users needs and preferences, we have started with formulating problem from the users' point of view.",
          "To simplify these formulations, we have narrowed them down by paraphrasing them into one sentence forms.",
          "To support the idea and process we had reformulated the statement once again by creating questions from the one sentence insights",
          "To fully determine the scope of the project, we have conducted content inventory, to include the all the necessary elements of the project.",
        ],
        subPicture: ["", "/images/legacy/CS-Images/Figure7.png"],
      },
      {
        title: "Ideate",
        text: [
          "After getting connected with the users and understand what they want and need, we are kicking off the ideation phase.",
        ],
        picture: [],
        subTitle: ["Brainstorm", "", "", "Information Architecture", ""],
        subText: [
          "As a result of our inspiring brainstorming session, ended up with ideas based on both the user research results and the human-centered formulations.",
          "One of the most important result was proceeding with the dashboard styled design as we believed it could incorporate the most tools and usability.",
          "Moreover, to accomplish this we stumbled upon applying elements of glassmorphism to help emphasize on the objects.",
          "Our goal was to establish the information architecture in a way to make sure that the users can get their tasks done by spending the least amount of effort as possible, resulting in a satisfying, pleasant experience. This was carried out by provide the user with a clear and assorted information, which is being accompanied by well-defined suitable font type, size and color.",
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
          "After concluding our ideations phase, we had started make initial sketches that represents the primary idea of our design solution.",
          "To become more precise and see the actual details, although not fully acquired yet, we have created low-fidelity wireframes, where we were focusing on the layout and identifying elements.",
          "Considering the results of the user research we chose to apply a desktop first approach. This is because based on the user's preferences this is a more corporate pensive way of presenting the users with features. Nevertheless, it is an approach more welcome in the professional space and there is more opportunity to increase the number of features.",
          "Having done with wireframes, guided us towards creating high-fidelity mockups.",
          "Before we started the actual process of designing, we had decided on using Atomic Design as our choice of team collaboration methodology",
          "As the atomic design consists of components, our design process started with the smallest ones - Atoms",
          "By combining atoms together, we formed molecules. In our case as a molecules, we can consider buttons in navigation formed with an icon and text and cards with the buttons, texts, and images",
          "Organisms are next phase of connection smaller elements. Putting together cards we create \"libraries\", menu buttons - navigation",
          "Templates are already complex solutions. It is a combination of organisms, and it represents how the pages will look like",
          "Finally, the complete design with included content - pages",
          "",
          "The first that draws the attention of the user are colors. They make the first impression, they affect how the users perceive the interface, see the functionality, they might evoke emotions, they increase the brand recognition as well, and invite the users to take an action. We are preparing solution for CatchScan, start-up company, with an already existing branding, thus we have decided to keep with their image and use their brand colors - blue and orange",
          "Even though, this was not the requirement, we believe to keep the consistency with their promoting website is a good brand move",
          "",
          "Throughout the design process, we went through several iteration before we found the best solution. It was not easy to find solution that captures our style the most in harmony",
          "",
          "",
          "",
          "Our final solution resulted in having a simple one-color background, as we believed this was can the user focus the most on the content, which will facilitate the process of fulfilling any task.",
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
          "To validate our findings, we had proceeded with conducting hybrid testing, using Five Second and Think Aloud tests. They helped us to verify that call-to-actions and the other important information are highlighted enough to catch the users attention and to make sure the user can interact with the product effortlessly.",
        ],
        picture: [],
      },
      {
        title: "Realization",
        text: [
          "Our project was coded using HTML, CSS and JavaScript. Additionally, we utilized Tailwind as our choice of CSS Framework, which resulted in a swift and efficient workflow.",
          "As we were creating a web app for service, having the feature of being able to sign up and log in is an essential part. We established this feature therefore the users can access the platform in the easiest way possible",
        ],
        picture: ["/images/legacy/CS-Images/Figure24.png"],
      },
      {
        title: "",
        text: [
          "We started off the sign-up sequence by designing with the objective the ask for the most essential data from the user which is inevitable. For the subsequent steps we had to utilize our research and evaluate which lead us to include multiple user input.",
        ],
        picture: ["/images/legacy/CS-Images/Figure25.png"],
      },
      {
        title: "Summary",
        text: [
          "To wrap up our process, we have created a dashboard for the SaaS company - CatchScan. We have created a way for their customers to protect their intellectual properties by giving them the possibility to upload their content for the algorithm to process. Furthermore, we provide them with the opportunity to initiate legal action against the found misusers, while supplying them with useful analytics",
          "The product was accomplished in a human-centered way though conducting broad research, resulting in an easy-to-use, intuitive interface.",
        ],
        picture: [],
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

export default function CatchScanPage() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const projectData = projects.find((p) => p.title === "CatchScan")!;

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
              <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.06em] text-custom-blue">
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
                      <h2 className="font-display text-4xl font-medium tracking-tight text-custom-blue">
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

          <OtherWorks currentProjectTitle="CatchScan" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
