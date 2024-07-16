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
        picture: [],
      },
      {
        title: "Problem",
        text: [
          "After the COVID-19 pandemic, the concept of workplaces has changed. More and more companies are in the process of transition from static to hybrid office environments. With this transition a new problem arises. Office resource management tools are simply not suitable for the new era of hybrid transformation.",
        ],
        picture: [],
      },
      {
        title: "Objective",
        text: [
          "To help companies address this issue, we will investigate developing a software solution which will capitalize on utilizing all the company's resources while providing flexible work arrangements for its employees.",
        ],
        picture: [],
      },
      {
        title: "Design Thinking",
        text: [
          "Our choice of development method for the project was Design Thinking as it can help us systematically extract, teach, learn and apply human centric techniques to solve problems in a creative and innovative way. By using Design Thinking we will ensure that the focus is kept on the users' needs and values, and that it is a human-centered procedure.",
        ],
        picture: [],
      },
      {
        title: "Empathize",
        text: [
        ],
        picture: [],
        subTitle: [
          "Interviews",
          "",
          "Personas",
          "",
          "",
        ],
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
        picture: [],
        subTitle: [
          "Point of View",
          "",
          "",
          "",
          "",
        ],
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
        text: [
        ],
        picture: [],
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
          "Having sufficient data made it easy for us to start ideating on the show structure for the product and with it the functionalities which will provide a solution for different user types.´",
          "First, we are stating our goal, which in our case was to discover the potential functionality of the product. To fulfill this, we developed ideas under a short, predetermined amount of time and later validated them among us.´",
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
        text: [
          "",
        ],
        picture: [],
        subTitle: [
          "Sketches",
          "",
          "",
        ],
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
        picture: [
          "/images/legacy/AC-Images/Figure16.png",
        ],
      },
      {
        title: "Mid-Fidelity Prototype",
        text: [
          "Our design was determined by the Fluent UI design system while retaining the AskCody corporate visual identity.",
          "We made a dashboard design, including a snippet of a calendar for a quick overview of the upcoming events, which is one of the most crucial assets of an office worker. In case the visitor in the project manager, we also placed a quick overview widget for thƒe tickets submitted though the support.",
        ],
        picture: [
          "/images/legacy/AC-Images/Figure17.png",
        ],
      },
      {
        title: "",
        text: [
          "We have created design assets and components respecting the Microsoft design language, Fluent, due to our platform of implementation.",
        ],
        picture: [
          "/images/legacy/AC-Images/Figure18.png",
        ],
      },
      {
        title: "",
        text: [
          "In terms of colors, we had to take both Teams' and AskCody's into consideration. It was important to establish a harmony between them, while not blending them in too much.",
        ],
        picture: [
          "/images/legacy/AC-Images/Figure19.png",
        ],
      },
    ],
  },
];

const AskCody = () => {
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
    <div className="px-4 pb-4 bg-custom-light dark:bg-custom-dark transition-colors duration-200 ease-in-out">
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isOpen={isOpen}
        setIsOpen={setIsDarkMode}
      />
      <main className="flex flex-col items-center justify-between m-4 gap-1 w-full">
        <div className="flex-grow pb-12 w-full flex flex-row items-center justify-center gap-2">
          <section className="flex flex-col items-center justify-between my-4 gap-24 w-4/5">
            {/* New Experience Section */}
            <article className="mt-8 w-full p-4">
              <h2 className="text-slate-900 dark:text-slate-50 text-3xl font-bold">
                AskCody
              </h2>
              <h2 className="text-custom-blue text-md font-bold mb-4 tracking-wider uppercase">
                Hybrid Office Manager
              </h2>
              <div className="flex flex-col gap-12">
                {history.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl text-black dark:text-white">
                        {item.title}
                      </h3>
                      <h3 className="text-lg text-black dark:text-white">
                        {item.subTitle}
                      </h3>
                      <h4 className="text-base font-light text-black dark:text-white">
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
                      <div className="text-sm text-black dark:text-white ">
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
                            <div className="mt-2 flex flex-wrap justify-center items-start w-full">
                              {Array.isArray(desc.picture)
                                ? desc.picture.flatMap((group, groupIndex) =>
                                    Array.isArray(group) ? (
                                      <div
                                        key={groupIndex}
                                        className="flex space-x-4"
                                      >
                                        {group.map(
                                          (pictureUrl, pictureIndex) => (
                                            <Image
                                              key={`${groupIndex}-${pictureIndex}`}
                                              src={pictureUrl}
                                              alt={`Group Picture ${
                                                pictureIndex + 1
                                              }`}
                                              layout="fixed"
                                              width={150} // Fixed width for all images
                                              height={100} // Fixed height for all images
                                              objectFit="cover"
                                              className="mx-2" // Margin around each image for spacing
                                            />
                                          )
                                        )}
                                      </div>
                                    ) : (
                                      <Image
                                        key={groupIndex}
                                        src={group}
                                        alt="Single Picture"
                                        layout="fixed"
                                        width={150} // Fixed width for single images
                                        height={100} // Fixed height for single images
                                        objectFit="cover"
                                        className="mx-4" // Margin around the single image for spacing
                                      />
                                    )
                                  )
                                : null}
                            </div>{" "}
                            {/* Render subTitle and subText alternatively with spacing */}
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                              {Array.isArray(desc.subTitle) &&
                                Array.isArray(desc.subText) &&
                                Array.isArray(desc.subPicture) &&
                                desc.subTitle.map((title, index) => (
                                  <div key={index} className="mb-2">
                                    {/* Add margin-bottom for spacing */}
                                    <React.Fragment>
                                      {/* Render subPicture using Next.js Image component */}
                                      {desc.subPicture?.[index] && (
                                        <div className="my-4 px-16">
                                          <Image
                                            src={desc.subPicture[index] ?? ""} // Provide a fallback image source
                                            alt={`Sub-picture ${index}`}
                                            layout="responsive"
                                            width={150} // Adjust the width as needed
                                            height={100} // Adjust the height as needed
                                            objectFit="cover"
                                          />
                                        </div>
                                      )}
                                      <h4 className="text-base mb-1 text-gray-900 dark:text-gray-100">
                                        {title}
                                      </h4>
                                      <p>{desc.subText?.[index] || ""}</p>
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
        <div className="pb-32 flex flex-col items-center justify-start"></div>
      </main>
      <Footer
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default AskCody;
