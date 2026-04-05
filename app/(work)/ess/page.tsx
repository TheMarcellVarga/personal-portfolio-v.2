"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, Tag } from "lucide-react";
import Header from "../../header";
import Footer from "../../footer";
import { projects } from "../../data/projects";
import { PageBackground } from "../../components/PageBackground";
import { SectionLabel } from "../../components/SectionLabel";
import { OtherWorks } from "../../components/OtherWorks";
import { useRouter } from "next/navigation";

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
          "European Study Solution is a new start-up organization registered in Ukraine, whose purpose is to help American students with the application process and preparation for life abroad. ESS would like to provide a payable service for Americans to help with application submission to European educational programs. The company's main service feature is a unique approach to their client, where the main focus would lay on helping to find professional orientation, assistance with all the documentary work, preparation for life abroad, etc.",
        ],
        picture: [],
      },
      {
        title: "Problem",
        text: [
          "The main issue ESS is facing is that the company is missing an informative website with the necessary information, which would help students to choose them as a study agency. The website should contain all necessary information about available university programs, the application process, coming deadlines, service fees, and information about living abroad to make the website more attractive and useful to convince people to use the agency's service.",
        ],
        picture: [],
      },
      {
        title: "Objective",
        text: [
          "This must be achieved by creating the website from scratch, which would be the main information platform for the company, where they could have an overview of different services, prices, and information about universities available in France.",
        ],
        picture: [],
      },
      {
        title: "User Research",
        text: [
          "To get a better understanding of our users we had to conduct detailed research understand the environment they live in and observe their behaviors and habits",
          "We proceeded with gathering data using qualitative user research where we conducted interviews using a closed question survey. For this we have created an interview guide with a categorization list, to set our target audience which in our case consisted of American students from 18-20 year-old or older, willing to study abroad and open to new cultures and experiences",
        ],
        picture: [],
      },
      {
        title: "Personas",
        text: [
          "For further insight we created personas to understand our users needs and assume their experiences within a product, behavior and goals.",
        ],
        picture: [
          "/images/legacy/ESS-Images/Picture 3.png",
          "/images/legacy/ESS-Images/Picture 4.png",
        ],
      },
      {
        title: "Five Planes Method",
        text: [
          "We carried out this product by utilizing the Five Planes Method.",
        ],
        picture: [],
        subTitle: [
          "Strategy plane",
          "Scope plane",
          "Structure plane",
          "Skeleton plane",
        ],
        subText: [
          "We started with setting two key issues: what value should the website bring for the organization and what value it can bring for the user. Since the agency didn't have any website yet, it would be a core platform for them to attract potential customers, and for the users, it would be the main moderator between the agency and partner universities.",
          "By answering these questions, it helped us to see that the website we will produce, will be more intended to use as an information website, with less functional specifications and more content requirements, hence spending more time on Information Architecture, to increase the content readability",
          "We defined what are the required content elements to meet the users' needs, both from the functional and content requirement side.",
          "After the requirements have been set, we got a clear picture of what will be included on the website. Besides adding new elements after meeting with our client, we revised the information architecture and created categories and navigational schemes that would allow users to move through the site content efficiently.",
          "In this phase, we have already experimented with the very first wireframe, identifying specific aspects of the interface like navigation, placing the buttons, blocks of text, etc. On the structure plane, we looked at the larger-scale issues of architecture and interactions. In this phase, our concerns exist at a smaller scale of individual components and their relationship.",
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
          "The main purpose of our website was to interpret information for the users, by performing tasks with the least amount of effort possible contributing to an easy and natural experience. To truly accomplish this task, we of course also had to define the most relevant contents for the user.",
        ],
        picture: [],
      },
      {
        title: "Wireframing",
        text: [
          "As part of the skeleton phase, we have created the first design iterations - Wireframes. It gave us clear overview of the page structure and while represented the initial product concept, we kept styling, color, and graphics to the minimum.",
          "We established the navigation bar where we included different page labels to emphasize the structure.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 5.png"],
      },
      {
        title: "",
        text: [
          "Besides, at the very beginning of the website, we had a similar vision of displaying a full-width picture or slide show gallery.",
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
          "Since the landing page is what will catch the user's interest from the very second, therefore we made multiple different prototype, where we clarified what ESS is about and what service they provide, including the key points of their service.",
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
          "We considered implementing a section where the reviews of the company would be shown. Our idea was to display these as a card element in accordance with the Gestalt Principles.",
        ],
        picture: [
          "/images/legacy/ESS-Images/Picture 8.1.png",
          "/images/legacy/ESS-Images/Picture 8.2.png",
        ],
      },
      {
        title: "",
        text: [
          "According to the footer design, we have tried to display the most important links from the website they should look for, if they missed it on the page, also the agency's contact information.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 9.png"],
      },
      {
        title: "",
        text: [
          "Moving to the service page, the most convenient solution we came up with is a vertical sidebar on the left with variety of tabs. On the right side, we placed a container with information, which can be changed by using the tabs",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 10.png"],
      },
      {
        title: "",
        text: [
          "We placed a page for the universities, where content and visuals play an important role, therefore it was our task to make it informative, while being easily readable. Since we have different universities' information, we tried to make the layout template that should suit all of them.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 11.2.png"],
      },
      {
        title: "Lo-Fi",
        text: [
          "Following additional client meetings, we showcased the partner universities on the landing page based on feedback. This inspired us to display them on the university page as well, whereby clicking on the icon of the institution, the content will change accordingly.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 12.1.png"],
      },
      {
        title: "",
        text: [
          "As a follow-up, we also placed a price scale, to highlight the advantage of using the service of our client by studying in European universities over Americans.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 12.2.png"],
      },
      {
        title: "",
        text: [
          "Moreover, we placed an implementation of service package prices and what included in them to help consumers find a deal suited for their needs.",
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
          "After making the structure of wireframes and elements that should be on the page, we reached the Surface Plane. Here we placed our attention to the sensory design to produce a finished design, where content, functionality and aesthetics came together.",
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
          "We have made the last iteration of combining our ideas, client wishes, and research to make the final product, with most of the necessary design assets and components.",
          "In the review section, we displayed place for 3 upcoming customer review, which in the future can be expanded with the use of a slide function.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 13.2.png"],
      },
      {
        title: "",
        text: [
          "Reading plenty of text can result in fatigue. Placing pictures of the schools can uplift their mood and leave a cheerful impression on the users. Afterall, they sometimes speak more than words",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 13.3.png"],
      },
      {
        title: "",
        text: [
          "Lastly, but not least, the contact us page, provides is satisfying confirmation to eliminate any uncertainty if their application was submitted.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 13.1.png"],
      },
      {
        title: "Responsive Design",
        text: [
          "Due to our target audience, making the website responsive was one of our highest priority. Consequently, we made prototypes for both tablet and mobile devices. This came with a responsive navigation via a hamburger menu.",
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
          "After finishing our final design, or for our high-fidelity mockup, we started to code by using HTML, CSS and JavaScript.",
        ],
        picture: [],
      },
      {
        title: "Usability",
        text: [
          "To validate our design, we conducted a five-second test to view and observe the first impressions of our users and a Think Aloud test to make sure our product serves its purpose as intended.",
          "The test was successful and concluded that the concept is well founded.",
        ],
        picture: [],
      },
      {
        title: "SEO",
        text: [
          "Lastly, we improved the website using metadata and further optimization to generate online traffic, driven by search engines so it can be properly indexed and displayed within the search results.",
        ],
        picture: ["/images/legacy/ESS-Images/Picture 15.png"],
      },
      {
        title: "Summary",
        text: [
          "To conclude our process, we have created a website for the start-up organization - European Study Solution, which will be the main platform for them to develop their business and keep in contact with students in the future. From the user perspective, ewe create the possibility to know more about the agency and engage them to use the agency's services.",
          "Overall, we feel we have created a content-rich and functional product that the user can utilize and receive the information and assistance they require regarding their journey abroad",
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
      ease: [0.22, 1, 0.36, 1],
    },
  };
}

export default function ESSPage() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const projectData = projects.find((p) => p.title === "European Study Solution")!;

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
                  {section.text && section.text.length > 0 && (
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
                    <div key={subIdx} className="space-y-6 pt-8 border-t border-custom-blue/5">
                      <h3 className="text-xl font-bold text-custom-blue">{sub}</h3>
                      {section.subText?.[subIdx] && (
                        <p className="text-lg leading-relaxed text-custom-blue/72">
                          {section.subText[subIdx]}
                        </p>
                      )}
                      {section.subPicture?.[subIdx] && (
                        <div className="overflow-hidden rounded-3xl border border-custom-blue/5 bg-white shadow-lg">
                          <Image
                            src={section.subPicture[subIdx]}
                            alt={sub}
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

          <OtherWorks currentProjectTitle="European Study Solution" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
