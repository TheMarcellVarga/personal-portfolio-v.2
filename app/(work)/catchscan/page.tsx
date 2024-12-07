"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../header";
import Footer from "../../footer";
import { projects } from "../../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import useLocomotive from "../../useLocomotive";

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
          "Our client had created a beta version of their product, where their main focus was on the functionality itself, rather than the user experience. This led to broken user flows of the existing dashboard, resulting in an unpleasing, confusing experience, which doesn’t represent the company’s values.",
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
          "To make sure we fulfill the users needs and preferences, we have started with formulating problem from the users’ point of view.",
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
          "Organisms are next phase of connection smaller elements. Putting together cards we create “libraries”, menu buttons - navigation",
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

const Catchscan = () => {
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
          bg-[radial-gradient(rgba(2,66,92,0.07)_1.5px,transparent_1.5px)]
          [background-size:16px_16px] 
          pointer-events-none
          before:absolute 
          before:inset-0 
          before:bg-linear-to-b 
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
          <div className="grow pb-12 w-full flex flex-row items-center justify-center gap-2">
            <section className="flex flex-col items-center justify-between my-4 gap-24 w-4/5">
              <article className="mt-16 mb-24 w-full p-4">
                <div className="relative">
                  <div className="animate-fade-in-up flex flex-row justify-between items-start py-8 px-4">
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center sm:gap-0 w-full">
                        <div className="flex flex-col sm:gap-2 w-full">
                          <div className="flex flex-row justify-between items-center w-full">
                            <h2
                              className="text-5xl sm:text-6xl font-extrabold tracking-tight
            transform hover:translate-x-2 transition-all duration-300
            bg-linear-to-r from-custom-blue to-custom-blue/80 
            bg-clip-text text-transparent
            leading-tight"
                            >
                              CatchScan
                            </h2>
                            <span
                              className="text-lg sm:text-2xl font-bold text-gray-500
            transform hover:translate-x-2 transition-all duration-300
                              self-start sm:self-center
            mt-5 sm:mt-0"
                            >
                              2021
                            </span>
                          </div>
                          <h2
                            className="text-gray-700 text-xl font-bold tracking-widest uppercase
          transform hover:translate-x-2 transition-all duration-300"
                          >
                            Copyright Protection SaaS
                          </h2>
                        </div>
                      </div>
                    </div>
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
                              bg-linear-to-br from-custom-blue/3 sm:from-custom-blue/4 md:from-custom-blue/5 to-transparent
                              opacity-0 group-hover:opacity-100
                              transition-opacity duration-500 z-10
                            "
                          />
                          <img
                            src={history[0].content.picture}
                            alt="CatchScan Hero"
                            width={1200}
                            height={800}
                            className="
                              w-full h-auto 
                              object-cover 
                              rounded-lg sm:rounded-xl md:rounded-2xl
                              transition-all duration-300
                              group-hover:scale-[1.02] sm:group-hover:scale-[1.03] md:group-hover:scale-105
                            "
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 85vw"
                          />
                        </div>
                        <div className="text-base text-custom-blue transform-gpu">
                          {item.description.map((desc, descIndex) => (
                            <div
                              key={descIndex}
                              className="transition-transform duration-300"
                            >
                              <p
                                className={`
                                ${
                                  descIndex === 0
                                    ? "pt-8 md:pt-10"
                                    : "pt-12 md:pt-14"
                                }
                                text-2xl font-extrabold tracking-tight
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
                                  transition-all duration-300 backdrop-blur-xs"
                                >
                                  {Array.isArray(desc.text) ? (
                                    desc.text.map((text, index) => (
                                      <p
                                        key={index}
                                        className="mb-6 last:mb-0 text-justify leading-relaxed
                                        transition-all duration-300
                                        text-custom-blue/80"
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
                                            transition-all duration-300"
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
                                                  } flex items-center justify-center transition-all duration-300`}
                                                >
                                                  <div
                                                    className={`w-full relative flex items-center justify-center ${
                                                      item.heightMultiplier ===
                                                      3
                                                        ? "aspect-16/36"
                                                        : item.heightMultiplier ===
                                                          2
                                                        ? "aspect-16/18"
                                                        : "aspect-16/9"
                                                    }`}
                                                  >
                                                    <img
                                                      src={
                                                        typeof item.url ===
                                                        "string"
                                                          ? item.url
                                                          : (item.url as any)
                                                              .src
                                                      }
                                                      alt={`Picture ${
                                                        pictureIndex + 1
                                                      }`}
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
                                                      } flex items-center justify-center transition-all duration-300`}
                                                    >
                                                      <div className="w-full relative flex items-center justify-center aspect-16/9">
                                                        <img
                                                          src={currentPic ?? ""}
                                                          alt={`Sub-picture ${index}`}
                                                          className="object-contain rounded-md transition-all duration-300"
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
              <div className="w-full h-px bg-linear-to-r from-transparent via-custom-blue/60 to-transparent mb-8" />
              <h2 className="text-custom-blue text-xl font-bold mb-6">
                More Projects
              </h2>
              <div className="w-full flex flex-col gap-4">
                {projects
                  .filter((project) => project.title !== "CatchScan")
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
                          bg-linear-to-br from-gray-100/95 to-gray-100/90
                          hover:bg-neutral-100/95
                          group
                          items-center         
                          border border-transparent
                          hover:border-custom-blue/10
                          backdrop-blur-xs
                          relative
                          overflow-hidden
                        `}
                      >
                        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#02425C_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none group-hover:scale-[1.5] transition-transform duration-1000" />
                        <div className="w-32 relative overflow-hidden flex justify-center items-center group-hover:scale-[1.01] transition-transform duration-300">
                          <div className="w-full h-full relative rounded-md overflow-hidden shadow-xs">
                            <img
                              src={project.image}
                              alt={project.title}
                              width={160}
                              height={90}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col grow gap-1">
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
export default Catchscan;
