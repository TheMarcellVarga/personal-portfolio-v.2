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
          "We made a dashboard design, including a snippet of a calendar for a quick overview of the upcoming events, which is one of the most crucial assets of an office worker. In case the visitor in the project manager, we also placed a quick overview widget for thƒe tickets submitted though the support.",
        ],
        picture: ["/images/legacy/AC-Images/Figure17.png"],
      },
      {
        title: "",
        text: [
          "We have created design assets and components respecting the Microsoft design language, Fluent, due to our platform of implementation.",
        ],
      },
      {
        title: "",
        text: [
          "In terms of colors, we had to take both Teams' and AskCody's into consideration. It was important to establish a harmony between them, while not blending them in too much.",
        ],
        picture: ["/images/legacy/AC-Images/Figure18.png"],
      },
      {
        title: "",

        picture: ["/images/legacy/AC-Images/Figure19.1.png"],
      },
      {
        title: "",

        picture: ["/images/legacy/AC-Images/Figure19.2.png"],
      },
      {
        title: "",
        text: [
          "Despite them being a way to interpret the brand itself, it also helps capturing feeling, which we want to make the users feel when they are using our solution. Using it properly can improve how the users perceive and interact with the interface. AskCody's main color is a shade of blue, which is notoriously stand for calmness or serenity. This exactly captures what our goal is with our product by contributing to the establishment of a structured and orderly environment.",
        ],
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
        ],
      },
      {
        title: "",

        picture: [
          "/images/legacy/AC-Images/Figure23.png",
          "/images/legacy/AC-Images/Figure23.1.png",
        ],
      },
      {
        title: "",

        picture: [
          "/images/legacy/AC-Images/Figure26.png",
          "/images/legacy/AC-Images/Figure27.png",
        ],
      },
      {
        title: "",

        picture: [
          "/images/legacy/AC-Images/Figure28.png",
          "/images/legacy/AC-Images/Figure29.png",
        ],
      },
      {
        title: "",

        picture: [
          "/images/legacy/AC-Images/Figure30.png",
          "/images/legacy/AC-Images/Figure33.png",
        ],
      },
      {
        title: "Mobile Functionality",
        text: [
          "When thinking about convenience and fast ways of booking the resources, the mobile comes as an obvious solution, unless the ad-hoc on-site version is more convenient. This is exactly the reason we have decided to create a concept of what mobile interaction could look like.",
          "We have created a concept combining did you to land real world implication, where booking could be done using mobile devices.",
        ],
        picture: [
          "/images/legacy/AC-Images/Figure34.png",
          "/images/legacy/AC-Images/Figure35.png",
          "/images/legacy/AC-Images/Figure36.png",
        ],
      },
      {
        title: "Watch Functionality",
        text: [
          "We carried out a watch companion implementation of the booking system that is remarkably similar to the mobile version.",
        ],
        picture: [
          "/images/legacy/AC-Images/Figure37.png",
          "/images/legacy/AC-Images/Figure38.png",
        ],
      },
      {
        title: "Test",
        text: [
          "We had proceeded with carrying out a series of five second tests to verify our findings.",
          "For the first session, we took the busiest page of our prototype to see if the call-to-actions are working as intended and what grabs the user attention the most.",
        ],
        picture: [
          "/images/legacy/AC-Images/Figure39.1.png",
          "/images/legacy/AC-Images/Figure39.2.png",
        ],
      },
      {
        title: "",

        picture: [
          "/images/legacy/AC-Images/Figure40.2.png",
          "/images/legacy/AC-Images/Figure40.2.png",
        ],
      },
      {
        title: "",
        text: [
          "The results of our testing sessions were better than we anticipated. The key targets we were aiming for are recognized by the users in the way that we thought they would. This confirmed our solutions are validity.",
        ],
      },
      {
        title: "Realization",
        text: [
          "The solution was carried out using HTML, CSS, JavaScript. We utilized React as Front-end framework, by having React-Bootstrap as our library. This was due to it is being Microsoft's recommended tool for building Team's applications.",
          "React being a lightweight library, allowed us a flexible and rapid process.",
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

const AskCody = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`px-4 pb-4 transition-colors duration-200 ease-in-out bg-gray-200`}
    >
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex flex-col items-center justify-between m-4 gap-1 w-full">
        <div className="flex-grow pb-12 w-full flex flex-row items-center justify-center gap-2">
          <section className="flex flex-col items-center justify-between my-4 gap-24 w-4/5">
            {/* New Experience Section */}
            <article className="mt-8 w-full p-4">
              <h2 className="text-custom-blue text-3xl font-bold">AskCody</h2>
              <h2 className="text-gray-700 text-md font-bold mb-4 tracking-wider uppercase">
                Hybrid Office Manager
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
                          className="rounded-lg"
                        />
                        {item.content.text}
                      </h4>
                      <div className="text-sm text-custom-blue ">
                        {item.description.map((desc, descIndex) => (
                          <div key={descIndex}>
                            <p
                              className={`${
                                descIndex === 0 ? "pt-2" : "pt-8"
                              } text-xl font-bold`}
                            >
                              {desc.title}
                            </p>
                            {desc.text && (
                              <div className="py-2">
                                {Array.isArray(desc.text) ? (
                                  desc.text.map((text, index) => (
                                    <React.Fragment key={index}>
                                      {text && <p>{text}</p>}
                                      {index !==
                                        (desc.text?.length ?? 0) - 1 && (
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
                                  <p>{desc.text}</p>
                                )}
                              </div>
                            )}{" "}
                            <div className="mt-4 flex flex-wrap justify-center items-center w-full gap-8">
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
                            </div>
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
                                      <p className={index > 0 && !title ? "my-4" : ""}>{desc.subText?.[index] || ""}</p>
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
              .filter((project) => project.title !== "AskCody")
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

export default AskCody;
