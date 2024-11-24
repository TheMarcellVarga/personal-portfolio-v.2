"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../header";
import Footer from "../../footer";
import { projects } from "../../page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import useLocomotive from "../../useLocomotive";

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
          "European Study Solution is a new start-up organization registered in Ukraine, whose purpose is to help American students with the application process and preparation for life abroad. ESS would like to provide a payable service for Americans to help with application submission to European educational programs. The company’s main service feature is a unique approach to their client, where the main focus would lay on helping to find professional orientation, assistance with all the documentary work, preparation for life abroad, etc.",
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
          "According to the footer design, we have tried to display the most important links from the website they should look for, if they missed it on the page, also the agency’s contact information.",
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
          "/images/legacy/ESS-Images/Picture 14.1.png",
          "/images/legacy/ESS-Images/Picture 14.1.png",
          "/images/legacy/ESS-Images/Picture 14.1.png",
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

const ESS = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { updateScroll } = useLocomotive();

  useEffect(() => {
    const handlePageShow = () => {
      updateScroll();
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, [updateScroll]);

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

  useEffect(() => {
    const handleResize = () => {
      updateScroll();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateScroll]);

  return (
    <div
      id="main-container"
      data-scroll-container
      className={`
        px-4 pb-4 
        transition-colors duration-200 
        ease-in-out 
        bg-gray-200 
        relative
        scroll-smooth
      `}
    >
      <div
        className="
          absolute inset-0 
          opacity-[0.05] 
          bg-[radial-gradient(#02425C_1.5px,transparent_1.5px)] 
          [background-size:16px_16px] 
          pointer-events-none
          before:absolute 
          before:inset-0 
          before:bg-gradient-to-b 
          before:from-transparent 
          before:to-gray-200/50 
          before:backdrop-blur-[1px]
          motion-safe:transition-opacity
          motion-safe:duration-700
          scroll-smooth
        "
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />
      <div className="relative z-1">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <main
          data-scroll-container
          data-scroll-section-id="hero"
          className="flex flex-col items-center justify-between m-4 gap-1 w-full"
        >
          <div className="flex-grow pb-12 w-full flex flex-row items-center justify-center gap-2">
            <section className="flex flex-col items-center justify-between my-4 gap-24 w-4/5">
              <article className="mt-16 mb-24 w-full p-4">
                <div className="relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-custom-blue/10 to-transparent 
                    rounded-2xl transform -skew-y-2 h-32 -z-10"
                  />
                  <div className="animate-fade-in-up flex flex-col gap-4 py-8 px-4">
                    <h2
                      className="text-custom-blue text-6xl font-black tracking-tight
                      transform hover:translate-x-2 transition-all duration-300
                      bg-gradient-to-r from-custom-blue to-custom-blue/80 
                      bg-clip-text text-transparent"
                    >
                      European Study Solution
                    </h2>
                    <h2
                      className="text-gray-700 text-xl font-bold tracking-widest uppercase
                      transform hover:translate-x-2 transition-all duration-300"
                    >
                      Student Agency
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col gap-16 mt-16">
                  {history.map((item, index) => (
                    <div
                      key={index}
                      className="flex animate-fade-in-up space-y-8 md:space-y-12"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div className="flex flex-col gap-2 w-full">
                        <div
                          className="
                            mt-4 sm:mt-6 md:mt-8
                            mb-16 sm:mb-24 md:mb-32
                            relative w-full 
                            overflow-hidden 
                            rounded-lg sm:rounded-xl md:rounded-2xl
                            shadow-[0_10px_30px_rgba(2,66,92,0.15)] sm:shadow-[0_15px_40px_rgba(2,66,92,0.18)] md:shadow-[0_20px_50px_rgba(2,66,92,0.2)]
                            group
                          "
                        >
                          <div
                            className="
                              absolute inset-0 
                              bg-gradient-to-br from-custom-blue/3 sm:from-custom-blue/4 md:from-custom-blue/5 to-transparent
                              opacity-0 group-hover:opacity-100
                              transition-opacity duration-500 z-10
                            "
                          />
                          <Image
                            src={item.content.picture}
                            alt="ESS Hero"
                            width={1200}
                            height={800}
                            className="
                              w-full h-auto 
                              object-cover 
                              rounded-lg sm:rounded-xl md:rounded-2xl
                              transform transition-all duration-700 
                              group-hover:scale-[1.02] sm:group-hover:scale-[1.03] md:group-hover:scale-105
                            "
                            priority
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 85vw"
                          />
                        </div>
                        <div className="text-base text-custom-blue transform-gpu">
                          {item.description.map((desc, descIndex) => (
                            <div
                              key={descIndex}
                              className="transform hover:translate-x-2 transition-transform duration-300"
                            >
                              <p
                                className={`
                                  ${
                                    descIndex === 0
                                      ? "pt-8 md:pt-10"
                                      : "pt-12 md:pt-14"
                                  }
                                  text-2xl font-black tracking-tight
                                  text-custom-blue
                                  group-hover:text-custom-blue/90
                                  transition-all duration-300
                                  relative
                                  before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px]
                                  before:bg-custom-blue/30 before:transition-all before:duration-300
                                  group-hover:before:w-full
                                `}
                              >
                                {desc.title}
                              </p>
                              {desc.text && (
                                <div
                                  className="py-4 text-custom-blue/80 group-hover:text-custom-blue 
                                  transition-all duration-300 backdrop-blur-sm"
                                >
                                  {Array.isArray(desc.text) ? (
                                    desc.text.map((text, index) => (
                                      <p
                                        key={index}
                                        className="mb-6 last:mb-0 text-justify leading-relaxed
                                        transform hover:translate-x-2 transition-transform duration-300
                                        hover:text-custom-blue/90"
                                      >
                                        {text}
                                      </p>
                                    ))
                                  ) : (
                                    <p className="transform hover:translate-x-2 transition-transform duration-300">
                                      {desc.text}
                                    </p>
                                  )}
                                </div>
                              )}
                              {Array.isArray(desc.picture) &&
                                desc.picture.length > 0 && (
                                  <div className="mt-6 flex flex-wrap justify-center items-center w-full gap-10">
                                    {Array.isArray(desc.picture) &&
                                      desc.picture
                                        .reduce(
                                          (rows: any[], curr, index, array) => {
                                            const isTriple =
                                              curr === array[index + 1] &&
                                              curr === array[index + 2];
                                            const isSecondOfTriple =
                                              curr === array[index - 1] &&
                                              curr === array[index + 1];
                                            const isThirdOfTriple =
                                              curr === array[index - 2] &&
                                              curr === array[index - 1];

                                            const isPartOfPair =
                                              curr === array[index + 1] &&
                                              !isTriple &&
                                              !isSecondOfTriple;
                                            const isSecondOfPair =
                                              curr === array[index - 1] &&
                                              !isSecondOfTriple &&
                                              !isThirdOfTriple;

                                            const heightMultiplier =
                                              isTriple ||
                                              isSecondOfTriple ||
                                              isThirdOfTriple
                                                ? 3
                                                : isPartOfPair || isSecondOfPair
                                                ? 2
                                                : 1;

                                            if (
                                              isSecondOfPair ||
                                              isSecondOfTriple ||
                                              isThirdOfTriple
                                            )
                                              return rows;

                                            const lastRow =
                                              rows[rows.length - 1];
                                            if (
                                              !lastRow ||
                                              lastRow.length >= 3
                                            ) {
                                              rows.push([
                                                {
                                                  url: curr,
                                                  isPair: isPartOfPair,
                                                  isTriple: isTriple,
                                                  heightMultiplier:
                                                    heightMultiplier,
                                                },
                                              ]);
                                            } else {
                                              lastRow.push({
                                                url: curr,
                                                isPair: isPartOfPair,
                                                isTriple: isTriple,
                                                heightMultiplier:
                                                  heightMultiplier,
                                              });
                                            }
                                            return rows;
                                          },
                                          []
                                        )
                                        .map((row, rowIndex) => (
                                          <div
                                            key={rowIndex}
                                            className="flex flex-row justify-center items-center gap-10 w-full
              transform hover:scale-[1.02] transition-all duration-500 ease-out"
                                          >
                                            {row.map(
                                              (
                                                item: {
                                                  url: string | StaticImport;
                                                  isPair: boolean;
                                                  isTriple: boolean;
                                                  heightMultiplier: 1 | 2 | 3;
                                                },
                                                pictureIndex: number
                                              ) => (
                                                <div
                                                  key={`${rowIndex}-${pictureIndex}`}
                                                  className={`bg-gray-100 p-4 rounded-md ${
                                                    item.isPair || item.isTriple
                                                      ? "w-[calc(90%+2rem)]"
                                                      : row.length === 3
                                                      ? "w-[30%]"
                                                      : row.length === 1
                                                      ? "w-[66%]"
                                                      : "w-[45%]"
                                                  } flex items-center justify-center group`}
                                                >
                                                  <div
                                                    className={`w-full relative flex items-center justify-center ${
                                                      item.heightMultiplier ===
                                                      3
                                                        ? "aspect-[16/36]"
                                                        : item.heightMultiplier ===
                                                          2
                                                        ? "aspect-[16/18]"
                                                        : "aspect-[16/9]"
                                                    }`}
                                                  >
                                                    <Image
                                                      src={item.url}
                                                      alt={`Picture ${
                                                        pictureIndex + 1
                                                      }`}
                                                      fill
                                                      className="object-contain rounded-md transform transition-all duration-500 group-hover:shadow-[0_8px_30px_rgba(2,66,92,0.12)]"
                                                      sizes={
                                                        item.isPair ||
                                                        item.isTriple
                                                          ? "(max-width: 768px) 100vw, calc(90vw + 2rem)"
                                                          : row.length === 1
                                                          ? "(max-width: 768px) 100vw, 75vw"
                                                          : "(max-width: 768px) 100vw, 45vw"
                                                      }
                                                    />
                                                  </div>
                                                </div>
                                              )
                                            )}
                                          </div>
                                        ))}
                                  </div>
                                )}
                              {Array.isArray(desc.subTitle) &&
                                Array.isArray(desc.subText) &&
                                Array.isArray(desc.subPicture) && (
                                  <div className="mt-8 space-y-8">
                                    {desc.subTitle.map((title, index) => (
                                      <div
                                        key={index}
                                        className="mb-4 transform hover:translate-x-2 transition-transform duration-300"
                                      >
                                        <React.Fragment>
                                          {desc.subPicture?.[index] && (
                                            <div className="py-4 flex flex-wrap justify-center items-center w-full gap-8">
                                              {(() => {
                                                const currentPic =
                                                  desc.subPicture[index];
                                                const nextPic =
                                                  desc.subPicture[index + 1];
                                                const isPartOfPair =
                                                  currentPic === nextPic;

                                                return (
                                                  <div className="flex flex-row justify-center items-center gap-8 w-full">
                                                    <div
                                                      className={`bg-gray-100 p-4 rounded-md ${
                                                        isPartOfPair
                                                          ? "w-[calc(90%+2rem)]"
                                                          : "w-[75%]"
                                                      } flex items-center justify-center group`}
                                                    >
                                                      <div className="w-full relative flex items-center justify-center aspect-[16/9]">
                                                        <Image
                                                          src={currentPic ?? ""}
                                                          alt={`Sub-picture ${index}`}
                                                          fill
                                                          className="object-contain rounded-md transform transition-all duration-500 group-hover:shadow-[0_8px_30px_rgba(2,66,92,0.12)]"
                                                          sizes={
                                                            isPartOfPair
                                                              ? "(max-width: 768px) 100vw, calc(90vw + 2rem)"
                                                              : "(max-width: 768px) 100vw, 75vw"
                                                          }
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                );
                                              })()}
                                            </div>
                                          )}
                                          {title && (
                                            <h4 className="text-base mb-1 font-semibold text-custom-blue">
                                              {title}
                                            </h4>
                                          )}
                                          <p
                                            className={
                                              index > 0 && !title ? "my-4" : ""
                                            }
                                          >
                                            {desc.subText?.[index] || ""}
                                          </p>
                                        </React.Fragment>
                                      </div>
                                    ))}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </section>
          </div>
          <section className="w-full flex justify-center items-center mb-16">
            <div className="flex flex-col items-center w-4/5 max-w-2xl">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-custom-blue/60 to-transparent mb-8" />
              <h2 className="text-custom-blue text-xl font-bold mb-6">
                More Projects
              </h2>
              <div className="w-full flex flex-col gap-4">
                {projects
                  .filter(
                    (project) => project.title !== "European Study Solution"
                  )
                  .map((project, index) => (
                    <div
                      key={project.title}
                      className="w-full transform-gpu hover:scale-[1.01] transition-all duration-300"
                    >
                      <Link
                        href={project.link}
                        className={`
                          w-full 
                          flex flex-row           
                          gap-4                 
                          px-4 py-3      
                          rounded-lg           
                          transition-all duration-300 ease-out 
                          bg-gradient-to-br from-gray-100/95 to-gray-100/90
                          hover:bg-neutral-100/95
                          group
                          items-center         
                          border border-transparent
                          hover:border-custom-blue/10
                          backdrop-blur-sm
                          relative
                          overflow-hidden
                        `}
                      >
                        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#02425C_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none group-hover:scale-[1.5] transition-transform duration-1000" />
                        <div className="w-32 relative overflow-hidden flex justify-center items-center group-hover:scale-[1.01] transition-transform duration-300">
                          <div className="w-full h-full relative rounded-md overflow-hidden shadow-sm">
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={160}
                              height={90}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col flex-grow gap-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-bold text-custom-blue group-hover:text-custom-blue/90 transition-colors duration-300">
                                {project.title}
                              </h3>
                              <p className="text-base text-custom-blue/70 group-hover:text-custom-blue/80 transition-colors duration-300">
                                {project.subTitle}
                              </p>
                            </div>
                            <div className="flex items-center transition-transform duration-300 ease-out group-hover:translate-x-1">
                              <FontAwesomeIcon
                                icon={faChevronRight}
                                className="w-4 h-4 text-custom-blue/40 group-hover:text-custom-blue/60"
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </main>
        <Footer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isHover={isHover}
          setIsHover={setIsHover}
        />
      </div>
    </div>
  );
};
export default ESS;
