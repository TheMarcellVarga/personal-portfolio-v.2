"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DarkModeIcon from "@/public/icons/darkMode";
import GitHubIcon from "@/public/icons/github";
import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import LinkedInIcon from "@/public/icons/linkedin";
import MouseScrollIcon from "@/public/icons/mouseScroll";
import Header from "../../header";
import Footer from "../../footer";
import { projects } from "../../page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    // Function to set isDarkMode based on user preference
    const setDarkModeBasedOnPreference = () => {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDarkMode);
    };

    // Call the function to set isDarkMode
    setDarkModeBasedOnPreference();

    // Optionally, you can also lis3ten for changes to the user's preference
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsDarkMode(e.matches);
    };

    mediaQueryList.addListener(listener);

    // Cleanup function to remove the listener
    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`px-4 pb-4 transition-colors duration-200 ease-in-out bg-gray-200`}
    >
      <Header isOpen={isOpen} setIsOpen={setIsDarkMode} />
      <main className="flex flex-col items-center justify-between m-4 gap-1 w-full">
        <div className="flex-grow pb-12 w-full flex flex-row items-center justify-center gap-2">
          <section className="flex flex-col items-center justify-between my-4 gap-24 w-4/5">
            {/* New Experience Section */}
            <article className="mt-8 w-full p-4">
              <h2 className="text-custom-blue text-3xl font-bold">CatchScan</h2>
              <h2 className="text-gray-700 text-md font-bold mb-4 tracking-wider uppercase">
                Copyright Protection SaaS
              </h2>
              <div className="flex flex-col gap-12">
                {history.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl text-custom-blue">{item.title}</h3>
                      <h3 className="text-lg text-custom-blue">
                        {item.subTitle}
                      </h3>
                      <h4 className="text-base font-light text-custom-blue">
                        <Image
                          src={item.content.picture}
                          alt={item.content.text}
                          layout="responsive"
                          width={300}
                          height={200}
                          objectFit="cover"
                        />
                        {item.content.text}
                      </h4>
                      <div className="text-sm text-custom-blue ">
                        {item.description.map((desc, descIndex) => (
                          <div key={descIndex}>
                            <p className="pt-2 text-lg">{desc.title}</p>
                            <div className="py-2">
                              {Array.isArray(desc.text) ? (
                                desc.text.map((text, index) => (
                                  <React.Fragment key={index}>
                                    <p>{text}</p>
                                    {index !== desc.text.length - 1 && (
                                      <span
                                        style={{
                                          marginLeft: "-1em",
                                          display: "inline-block",
                                        }}
                                      />
                                    )}
                                  </React.Fragment>
                                ))
                              ) : (
                                <p>{desc.text || ""}</p>
                              )}
                            </div>
                            <div className="mt-2 flex flex-wrap justify-center items-center w-full">
                              {Array.isArray(desc.picture)
                                ? desc.picture
                                    .reduce(
                                      (rows: any[], curr, index, array) => {
                                        const isPartOfPair =
                                          curr === array[index + 1];
                                        const isSecondOfPair =
                                          curr === array[index - 1];

                                        if (isSecondOfPair) return rows;

                                        const lastRow = rows[rows.length - 1];
                                        if (!lastRow || lastRow.length >= 3) {
                                          rows.push([
                                            { url: curr, isPair: isPartOfPair },
                                          ]);
                                        } else {
                                          lastRow.push({
                                            url: curr,
                                            isPair: isPartOfPair,
                                          });
                                        }
                                        return rows;
                                      },
                                      []
                                    )
                                    .map((row, rowIndex) => (
                                      <div
                                        key={rowIndex}
                                        className="flex flex-row justify-center items-center gap-8 w-full"
                                      >
                                        {row.map(
                                          (
                                            item: {
                                              url: string | StaticImport;
                                              isPair: boolean;
                                            },
                                            pictureIndex: number
                                          ) => (
                                            <div
                                              key={`${rowIndex}-${pictureIndex}`}
                                              className={`bg-gray-100 p-4 rounded-md ${
                                                item.isPair
                                                  ? "w-[calc(90%+2rem)]" // Width for paired images
                                                  : row.length === 3
                                                  ? "w-[30%]" // Width for 3-image rows
                                                  : row.length === 1
                                                  ? "w-[66%]" // Wider width for single images
                                                  : "w-[45%]" // Width for 2-image rows
                                              } flex items-center`}
                                            >
                                              <div className="w-full relative aspect-[16/9]">
                                                <Image
                                                  src={item.url}
                                                  alt={`Picture ${
                                                    pictureIndex + 1
                                                  }`}
                                                  fill
                                                  className="object-contain rounded-md"
                                                  sizes={
                                                    item.isPair
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
                                    ))
                                : null}
                            </div>{" "}
                            {/* Render subTitle and subText alternatively with spacing */}
                            <div className="text-sm text-custom-blue">
                              {Array.isArray(desc.subTitle) &&
                                Array.isArray(desc.subText) &&
                                Array.isArray(desc.subPicture) &&
                                desc.subTitle.map((title, index) => (
                                  <div key={index} className="">
                                    <React.Fragment>
                                      {/* Render subPicture using Next.js Image component */}
                                      {desc.subPicture?.[index] && (
                                        <div className="py-4 flex flex-wrap justify-center items-center w-full gap-8">
                                          {(() => {
                                            const currentPic =
                                              desc.subPicture[index];
                                            const nextPic =
                                              desc.subPicture[index + 1];
                                            const isPartOfPair =
                                              currentPic === nextPic;
                                            const isSingleImage = !isPartOfPair;

                                            return (
                                              <div className="flex flex-row justify-center items-center gap-8 w-full">
                                                <div
                                                  className={`bg-gray-100 p-4 rounded-md ${
                                                    isPartOfPair
                                                      ? "w-[calc(90%+2rem)]" // Width for paired images
                                                      : "w-[75%]" // Wider width for single images
                                                  } flex items-center`}
                                                >
                                                  <div className="w-full relative aspect-[16/9]">
                                                    <Image
                                                      src={currentPic ?? ""}
                                                      alt={`Sub-picture ${index}`}
                                                      fill
                                                      className="object-contain rounded-md"
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
                            </div>{" "}
                            {/* Render subPicture if it exists
                            {(desc.subPicture || []).length > 0 && (
                              <div className="mt-2 flex flex-row space-x-4">
                                {(desc.subPicture || []).map(
                                  (
                                    pictureUrl: string,
                                    pictureIndex: number
                                  ) => (
                                    <div
                                      key={pictureIndex}
                                      className="w-full max-w-xs"
                                    >
                                      <Image
                                        src={pictureUrl}
                                        alt={`Sub-picture ${pictureIndex}`}
                                        layout="responsive"
                                        width={150}
                                        height={100}
                                        objectFit="cover"
                                      />
                                    </div>
                                  )
                                )}
                              </div>
                            )} */}
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
        <div className="pb-8 flex flex-col items-center justify-start w-4/5">
          <h2 className="text-custom-blue text-2xl font-bold mb-4">
            More Projects
          </h2>
          <div className="flex flex-col gap-6 w-full justify-center items-center">
            {projects
              .filter((project) => project.title !== "CatchScan")
              .map((project, index) => (
                <div
                  key={index}
                  className="w-full transform-gpu flex justify-center items-center"
                >
                  <Link
                    href={project.link}
                    className={`
                      w-full
                      max-w-lg
                      flex flex-row 
                      px-4 py-3 
                      rounded-lg 
                      transition-all duration-300 ease-out 
                      bg-gray-100/90
                      hover:bg-neutral-100/95
                      hover:scale-[1.02] 
                      hover:-translate-y-1
                      hover:shadow-[0_4px_15px_rgba(2,66,92,0.12)]
                      relative
                      overflow-hidden
                      border border-transparent
                      group
                      gap-2
                    `}
                  >
                    {/* Image container */}
                    <div className="w-1/4 relative overflow-hidden flex justify-center items-center group-hover:scale-[1.01] transition-transform duration-300">
                      <div className="w-full h-full relative rounded-lg overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="responsive"
                          width={80}
                          height={80}
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col p-2 w-3/4 justify-center">
                      <div className="text-lg text-custom-blue font-bold">
                        {project.title}
                      </div>
                      <div className="text-sm text-custom-blue">
                        {project.subTitle}
                      </div>
                    </div>
                    <div className="w-8 relative overflow-hidden">
                      <div className="flex justify-center items-center absolute inset-0 bg-transparent pointer-events-none transition-transform duration-300 ease-in-out origin-left group-hover:translate-x-2">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="w-4 h-4 text-custom-blue group-hover:text-custom-blue transition-colors duration-700 ease-in-out"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </main>
      <Footer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isHover={isHover}
        setIsHover={setIsHover}
      />
    </div>
  );
};

export default Catchscan;
