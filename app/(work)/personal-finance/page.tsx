"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../header";
import Footer from "../../footer";
import { projects } from "../../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import useLocomotive from "../../useLocomotive";
import { useRouter } from "next/navigation";

const history = [
  {
    title: "",
    subTitle: "",
    content: {
      picture: "/images/personal-finance-index.svg",
      text: "",
    },
    description: [
      {
        title: "Overview",
        text: [
          "The Personal Finance App is a comprehensive financial management platform designed to help users take control of their financial health through intelligent tracking, analysis, and AI-powered insights. Built with modern web technologies, the application provides a centralized dashboard for monitoring all financial metrics, from daily expenses to long-term investment portfolios.",
          "The platform addresses the growing need for accessible, user-friendly financial management tools that can adapt to individual financial situations and provide personalized guidance for achieving financial goals.",
        ],
        picture: [],
      },
      {
        title: "Problem",
        text: [
          "Many individuals struggle with managing their personal finances due to fragmented tools, lack of comprehensive insights, and difficulty understanding their overall financial health. Traditional financial apps often focus on single aspects like budgeting or investing, leaving users to piece together their complete financial picture from multiple sources.",
          "Users need a unified platform that not only tracks their financial data but also provides intelligent analysis, personalized recommendations, and clear visualizations to help them make informed financial decisions.",
        ],
        picture: [],
      },
      {
        title: "Objective",
        text: [
          "Create a comprehensive personal finance web application that consolidates all aspects of financial management into a single, intuitive platform. The solution should provide users with real-time insights into their financial health, AI-powered recommendations, and tools for tracking investments, expenses, and financial goals.",
          "The platform must be accessible across all devices, secure for handling sensitive financial data, and designed with user experience as a priority to encourage regular engagement with personal finance management.",
        ],
        picture: [],
      },
      {
        title: "User Research",
        text: [
          "To understand the target audience, we conducted extensive research into personal finance management behaviors and pain points. Our research focused on individuals aged 25-45 who are actively managing their finances and seeking better tools for financial planning.",
          "Through surveys and interviews, we identified key user needs: simplified financial tracking, clear visualization of financial health, personalized advice, and secure data handling. Users expressed frustration with existing tools that were either too complex or too limited in scope.",
        ],
        picture: [],
      },
      {
        title: "Technical Architecture",
        text: [
          "The application was built using modern web technologies to ensure performance, scalability, and maintainability. The tech stack was carefully chosen to provide the best user experience while maintaining security standards required for financial applications.",
        ],
        picture: [],
        subTitle: [
          "Frontend Framework",
          "Authentication & Security",
          "Data Visualization",
          "UI Components",
          "State Management",
        ],
        subText: [
          "Next.js 14 with App Router for optimized performance, server-side rendering, and excellent developer experience. TypeScript ensures type safety throughout the application.",
          "Clerk authentication system provides secure user management with protected routes and custom middleware for sensitive financial data access.",
          "Recharts library for responsive, interactive charts and data visualizations that help users understand their financial data at a glance.",
          "shadcn/ui component library with Tailwind CSS for consistent, accessible, and modern interface design that works across all devices.",
          "Zustand for lightweight, efficient state management that handles complex financial data flows without unnecessary complexity.",
        ],
        subPicture: [
          "/images/personal-finance/tech-nextjs.png",
          "/images/personal-finance/tech-auth.png",
          "/images/personal-finance/tech-charts.png",
          "/images/personal-finance/tech-ui.png",
          "/images/personal-finance/tech-state.png",
        ],
      },
      {
        title: "Key Features",
        text: [
          "The application was designed around core features that address the identified user needs. Each feature was carefully crafted to provide maximum value while maintaining simplicity and ease of use.",
        ],
        picture: [],
        subTitle: [
          "Financial Dashboard",
          "Health Score Algorithm",
          "AI Financial Advisor",
          "Investment Portfolio Tracker",
          "Tax Insights",
          "Goal Tracking",
        ],
        subText: [
          "A comprehensive command center that presents all key financial metrics in one place with interactive data visualizations and quick access to common financial tasks.",
          "A proprietary algorithm that calculates overall financial wellness based on savings rate, debt management, emergency fund status, investment diversity, and tax optimization.",
          "AI-powered analysis of spending patterns and financial behavior that provides personalized recommendations and identifies opportunities for improvement.",
          "Comprehensive investment tracking with portfolio visualization, performance analysis across different timeframes, and comparison to benchmarks.",
          "Global tax optimization tools that help users understand tax implications across different countries and identify tax-saving opportunities.",
          "Progress tracking toward financial goals with visual representations and milestone celebrations to maintain user motivation.",
        ],
        subPicture: [
          "/images/personal-finance/dashboard-overview.png",
          "/images/personal-finance/health-score.png",
          "/images/personal-finance/ai-advisor.png",
          "/images/personal-finance/portfolio-tracker.png",
          "/images/personal-finance/tax-insights.png",
          "/images/personal-finance/goal-tracking.png",
        ],
      },
      {
        title: "Financial Health Algorithm",
        text: [
          "One of the core innovations is the proprietary financial health scoring algorithm that evaluates multiple aspects of a user's financial situation. The algorithm considers savings rate, debt-to-income ratio, emergency fund adequacy, investment diversification, and tax optimization to provide a comprehensive health score.",
        ],
        picture: ["/images/personal-finance/health-algorithm.png"],
      },
      {
        title: "",
        text: [
          "The scoring system provides actionable insights and recommendations for improvement in each category, helping users understand not just where they stand, but how to improve their financial position.",
        ],
        picture: ["/images/personal-finance/health-breakdown.png"],
      },
      {
        title: "Dashboard Design",
        text: [
          "The main dashboard serves as the central hub for all financial information. We designed it to be both comprehensive and digestible, presenting complex financial data in an intuitive and visually appealing format.",
        ],
        picture: ["/images/personal-finance/dashboard-main.png"],
      },
      {
        title: "",
        text: [
          "Interactive charts and graphs provide real-time insights into spending patterns, income trends, and investment performance. Users can drill down into specific categories for detailed analysis.",
        ],
        picture: [
          "/images/personal-finance/dashboard-charts.png",
          "/images/personal-finance/dashboard-analytics.png",
        ],
      },
      {
        title: "AI-Powered Insights",
        text: [
          "The AI financial advisor analyzes user spending patterns, income trends, and financial goals to provide personalized recommendations. The system can identify potential savings opportunities, suggest budget optimizations, and alert users to unusual spending patterns.",
        ],
        picture: ["/images/personal-finance/ai-insights.png"],
      },
      {
        title: "",
        text: [
          "The AI interface provides conversational interactions, making financial advice more accessible and engaging for users of all financial literacy levels.",
        ],
        picture: ["/images/personal-finance/ai-chat.png"],
      },
      {
        title: "Investment Portfolio Management",
        text: [
          "The investment tracking feature provides comprehensive portfolio analysis with visual breakdowns of asset allocation, performance tracking across different timeframes, and comparison to market benchmarks.",
        ],
        picture: ["/images/personal-finance/portfolio-overview.png"],
      },
      {
        title: "",
        text: [
          "Users can easily identify their best and worst performing investments and understand the context behind their portfolio's performance with detailed analytics and insights.",
        ],
        picture: [
          "/images/personal-finance/portfolio-performance.png",
          "/images/personal-finance/portfolio-allocation.png",
        ],
      },
      {
        title: "Responsive Design",
        text: [
          "The application is fully responsive and optimized for use across desktop, tablet, and mobile devices. The mobile experience maintains full functionality while adapting the interface for touch interactions and smaller screen sizes.",
        ],
        picture: [
          "/images/personal-finance/responsive-desktop.png",
          "/images/personal-finance/responsive-desktop.png",
          "/images/personal-finance/responsive-desktop.png",
          "/images/personal-finance/responsive-tablet.png",
          "/images/personal-finance/responsive-tablet.png",
          "/images/personal-finance/responsive-tablet.png",
          "/images/personal-finance/responsive-mobile.png",
          "/images/personal-finance/responsive-mobile.png",
          "/images/personal-finance/responsive-mobile.png",
        ],
      },
      {
        title: "Implementation",
        text: [
          "After finalizing the design and user experience, we implemented the application using Next.js 14, TypeScript, and modern React patterns. The development process focused on performance optimization and security best practices.",
        ],
        picture: [],
      },
      {
        title: "Security & Privacy",
        text: [
          "Security is paramount in financial applications. The platform implements industry-standard security practices including encrypted data transmission, secure authentication flows, and privacy-focused data handling.",
          "User financial data is protected with multiple layers of security, ensuring compliance with financial data protection regulations.",
        ],
        picture: [],
      },
      {
        title: "Results & Impact",
        text: [
          "The Personal Finance App successfully addresses the core challenges of personal financial management by providing a unified, intelligent platform for financial tracking and planning. The application delivers significant value through increased user engagement with their finances, actionable insights that lead to better financial decisions, and tools that build financial literacy and confidence.",
          "The modern technical foundation ensures the application is performant, secure, and ready for future enhancements as user needs evolve.",
        ],
        picture: [],
      },
      {
        title: "Summary",
        text: [
          "To conclude our development process, we have created a comprehensive personal finance application that serves as the central platform for users to manage their financial health and achieve their financial goals. From the user perspective, we have created the possibility to gain deep insights into their financial situation and receive personalized guidance for improvement.",
          "Overall, we feel we have created a feature-rich and intuitive product that users can utilize to take control of their finances and build a stronger financial future.",
        ],
        picture: [],
      },
    ],
  },
];

const PersonalFinance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { updateScroll } = useLocomotive();
  const router = useRouter();

  // Add navigation functions for the header
  const scrollToHome = useCallback(async () => {
    await router.push("/");
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }, [router]);

  const scrollToAbout = useCallback(async () => {
    await router.push("/");
    setTimeout(() => {
      const aboutSection = document.querySelector('[data-scroll-section-id="about"]');
      if (aboutSection) {
        const offset = aboutSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }, 100);
  }, [router]);

  const scrollToWork = useCallback(async () => {
    await router.push("/");
    setTimeout(() => {
      const projectsContent = document.getElementById('projects-content');
      if (projectsContent) {
        const offset = projectsContent.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }, 100);
  }, [router]);

  const scrollToContact = useCallback(async () => {
    await router.push("/");
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  }, [router]);

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
        <Header 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          scrollToHome={scrollToHome}
          scrollToAbout={scrollToAbout}
          scrollToWork={scrollToWork}
          scrollToContact={scrollToContact}
        />
        <main
          data-scroll-container
          data-scroll-section-id="hero"
          className="flex flex-col items-center justify-between sm:m-4 gap-1 w-full"
        >
          <div className="grow pb-12 w-full flex flex-row items-center justify-center gap-2">
            <section className="flex flex-col items-center justify-between my-4 gap-24 w-4/5">
              <article className="mt-16 mb-24 w-full sm:p-4">
                <div className="relative">
                  <div className="animate-fade-in-up flex flex-row justify-between items-start sm:py-8 sm:px-4">
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0">
                        <div className="flex flex-col gap-1 sm:gap-2 w-full ">
                          <div className="flex flex-row justify-between items-center w-full gap-2 sm:gap-0">
                            <h2
                              className="text-4xl sm:text-6xl font-extrabold tracking-tight
              transform hover:translate-x-2 transition-all duration-300
              bg-linear-to-r from-custom-blue to-custom-blue/80 
              bg-clip-text text-transparent
              leading-tight
              text-center sm:text-left"
                            >
                              Personal Finance App
                            </h2>
                            <span
                              className="
                                px-3 sm:px-4 py-1
                                rounded-full 
                                bg-custom-blue/5 
                                text-sm sm:text-xl
                                text-custom-blue/60
                                transform hover:-translate-x-2 
                                transition-all duration-300
                                self-center
                              "
                            >
                              2024
                            </span>
                          </div>
                          <h2
                            className="text-gray-700 text-sm sm:text-xl font-bold tracking-widest uppercase
            transform hover:translate-x-2 transition-all duration-300"
                          >
                            Financial Management Platform
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
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
                            src={item.content.picture}
                            alt="Personal Finance App Hero"
                            width={1200}
                            height={800}
                            className="
                              w-full h-auto 
                              object-cover 
                              rounded-lg sm:rounded-xl md:rounded-2xl
                              transform transition-all duration-700 
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
                                            className={`
                                            flex flex-row 
                                            ${
                                              desc.title === "Responsive Design"
                                                ? "items-start"
                                                : "items-center"
                                            }
                                            justify-center gap-10 w-full
                                            transform hover:scale-[1.02] transition-all duration-500 ease-out
                                          `}
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
                                                      className="object-contain rounded-md transition-all duration-300"
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
                                                      <div className="w-full relative flex items-center justify-center aspect-16/9">
                                                        <img
                                                          src={currentPic ?? ""}
                                                          alt={`Sub-picture ${index}`}
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
              <div className="w-full h-px bg-linear-to-r from-transparent via-custom-blue/60 to-transparent mb-8" />
              <h2 className="text-custom-blue text-xl font-bold mb-6">
                More Projects
              </h2>
              <div className="w-full flex flex-col gap-4">
                {projects
                  .filter(
                    (project) => project.title !== "Personal Finance App"
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
                          ${
                            project.inProgress
                              ? "bg-gradient-to-br from-custom-blue/10 via-custom-teal/10 to-custom-blue/10"
                              : "bg-linear-to-br from-gray-100/95 to-gray-100/90"
                          }
                          hover:bg-neutral-100/95
                          group
                          items-center         
                          border border-transparent
                          ${
                            project.inProgress
                              ? "border-custom-blue/20"
                              : "hover:border-custom-blue/10"
                          }
                          backdrop-blur-xs
                          relative
                          overflow-hidden
                        `}
                      >
                        {project.inProgress && (
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-custom-blue/5 via-custom-teal/5 to-custom-blue/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        )}
                        <div className="relative z-10 flex flex-row items-center gap-4 w-full">
                          <div className="flex-shrink-0">
                            {typeof project.image === "string" &&
                            project.image.startsWith("/") ? (
                              <div className="w-16 h-16 relative overflow-hidden rounded-md bg-gray-100">
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-16 h-16 flex items-center justify-center text-2xl bg-gray-100 rounded-md">
                                {project.image}
                              </div>
                            )}
                          </div>
                          <div className="flex-grow min-w-0">
                            <h3 className="font-semibold text-custom-blue group-hover:text-custom-blue/90 transition-colors duration-300 truncate">
                              {project.title}
                            </h3>
                            <p className="text-sm text-custom-blue/70 group-hover:text-custom-blue/80 transition-colors duration-300 truncate">
                              {project.subTitle}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="text-custom-blue/50 group-hover:text-custom-blue/70 group-hover:translate-x-1 transition-all duration-300"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </main>
        <Footer isOpen={isOpen} setIsOpen={setIsOpen} isHover={isHover} setIsHover={setIsHover} />
      </div>
    </div>
  );
};

export default PersonalFinance; 