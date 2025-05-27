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
      picture: "/images/personal-finance-hero.png",
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
        title: "Key Features",
        text: [
          "The application was designed around core features that address the identified user needs:",
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
        title: "Design System",
        text: [
          "A comprehensive design system was developed to ensure consistency across all components and pages. The system prioritizes accessibility, readability, and user-friendly interactions while maintaining a professional appearance suitable for financial applications.",
        ],
        picture: ["/images/personal-finance/design-system.png"],
      },
      {
        title: "User Interface Design",
        text: [
          "The interface design focuses on clarity and ease of use, with careful attention to information hierarchy and visual organization. Financial data is presented in digestible formats with clear calls-to-action and intuitive navigation patterns.",
        ],
        picture: [
          "/images/personal-finance/ui-dashboard.png",
          "/images/personal-finance/ui-mobile.png",
        ],
      },
      {
        title: "Financial Health Algorithm",
        text: [
          "One of the core innovations is the proprietary financial health scoring algorithm that evaluates multiple aspects of a user's financial situation. The algorithm considers savings rate, debt-to-income ratio, emergency fund adequacy, investment diversification, and tax optimization to provide a comprehensive health score.",
          "The scoring system provides actionable insights and recommendations for improvement in each category, helping users understand not just where they stand, but how to improve their financial position.",
        ],
        picture: ["/images/personal-finance/health-algorithm.png"],
      },
      {
        title: "AI-Powered Insights",
        text: [
          "The AI financial advisor analyzes user spending patterns, income trends, and financial goals to provide personalized recommendations. The system can identify potential savings opportunities, suggest budget optimizations, and alert users to unusual spending patterns.",
        ],
        picture: ["/images/personal-finance/ai-insights.png"],
      },
      {
        title: "Investment Portfolio Management",
        text: [
          "The investment tracking feature provides comprehensive portfolio analysis with visual breakdowns of asset allocation, performance tracking across different timeframes, and comparison to market benchmarks. Users can easily identify their best and worst performing investments and understand the context behind their portfolio's performance.",
        ],
        picture: [
          "/images/personal-finance/portfolio-overview.png",
          "/images/personal-finance/portfolio-performance.png",
        ],
      },
      {
        title: "Responsive Design",
        text: [
          "The application is fully responsive and optimized for use across desktop, tablet, and mobile devices. The mobile experience maintains full functionality while adapting the interface for touch interactions and smaller screen sizes.",
        ],
        picture: [
          "/images/personal-finance/responsive-desktop.png",
          "/images/personal-finance/responsive-mobile.png",
        ],
      },
      {
        title: "Security & Privacy",
        text: [
          "Security is paramount in financial applications. The platform implements industry-standard security practices including encrypted data transmission, secure authentication flows, and privacy-focused data handling. User financial data is protected with multiple layers of security.",
        ],
        picture: [],
      },
      {
        title: "Results & Impact",
        text: [
          "The Personal Finance App successfully addresses the core challenges of personal financial management by providing a unified, intelligent platform for financial tracking and planning. The application delivers significant value through increased user engagement with their finances, actionable insights that lead to better financial decisions, and tools that build financial literacy and confidence.",
          "The modern technical foundation ensures the application is performant, secure, and ready for future enhancements as user needs evolve.",
        ],
        picture: ["/images/personal-finance/results-dashboard.png"],
      },
      {
        title: "Future Enhancements",
        text: [
          "Based on user feedback and market analysis, several high-value features have been identified for future development including subscription management, bill payment reminders, financial document storage, multi-currency support, real-time banking integration, and enhanced AI-powered budget optimization.",
        ],
        picture: [],
      },
    ],
  },
];

const PersonalFinance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [footerHover, setFooterHover] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { updateScroll } = useLocomotive();
  const router = useRouter();

  const scrollToHome = useCallback(() => {
    router.push("/");
  }, [router]);

  const scrollToAbout = useCallback(() => {
    router.push("/#about");
  }, [router]);

  const scrollToWork = useCallback(() => {
    router.push("/#work");
  }, [router]);

  const scrollToContact = useCallback(() => {
    router.push("/#contact");
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handlePageShow = () => {
      setTimeout(() => {
        updateScroll();
      }, 50);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" || !document.hidden) {
        setTimeout(() => {
          updateScroll();
        }, 50);
      }
    };

    const handleResize = () => {
      updateScroll();
    };

    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateScroll]);

  const currentProject = projects.find(p => p.title === "Personal Finance App");
  const currentIndex = projects.findIndex(p => p.title === "Personal Finance App");
  const nextProject = projects[currentIndex + 1];
  const prevProject = projects[currentIndex - 1];

  return (
    <div
      id="main-container"
      data-scroll-container
      className="px-2 sm:px-4 pb-4 transition-colors duration-200 ease-in-out bg-gray-200 relative scroll-smooth"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(2,66,92,0.07)_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none before:absolute before:inset-0 before:bg-linear-to-b before:from-transparent before:to-gray-200/50 before:backdrop-blur-[1px] motion-safe:transition-opacity motion-safe:duration-700 scroll-smooth"
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

        <main className="pt-20">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                  Personal Finance App
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-6">
                  Financial Management Platform
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {currentProject?.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {history[0].content.picture && (
                <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={history[0].content.picture}
                    alt="Personal Finance App Overview"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </section>

          {/* Case Study Content */}
          <section className="max-w-4xl mx-auto px-4">
            {history[0].description.map((section, index) => (
              <div key={index} className="mb-12">
                {section.title && (
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {section.title}
                  </h2>
                )}
                
                {section.text.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-lg text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.subTitle && section.subText && (
                  <div className="mt-8">
                    {section.subTitle.map((subTitle, subIndex) => (
                      <div key={subIndex} className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                          {subTitle}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {section.subText[subIndex]}
                        </p>
                        {section.subPicture && section.subPicture[subIndex] && (
                          <div className="mt-4 relative w-full h-64 rounded-lg overflow-hidden">
                            <Image
                              src={section.subPicture[subIndex]}
                              alt={subTitle}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.picture && section.picture.length > 0 && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.picture.map((pic, picIndex) => (
                      <div key={picIndex} className="relative w-full h-64 rounded-lg overflow-hidden">
                        <Image
                          src={pic}
                          alt={`${section.title} - Image ${picIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* Navigation */}
          <section className="max-w-6xl mx-auto px-4 mt-16">
            <div className="flex justify-between items-center py-8 border-t border-gray-300">
              {prevProject ? (
                <Link
                  href={prevProject.link}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span className="mr-2">←</span>
                  <div>
                    <p className="text-sm">Previous Project</p>
                    <p className="font-semibold">{prevProject.title}</p>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}

              <Link
                href="/#work"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Projects
              </Link>

              {nextProject ? (
                <Link
                  href={nextProject.link}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <div className="text-right">
                    <p className="text-sm">Next Project</p>
                    <p className="font-semibold">{nextProject.title}</p>
                  </div>
                  <span className="ml-2">→</span>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </section>
        </main>

        <Footer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isHover={footerHover}
          setIsHover={setFooterHover}
        />
      </div>
    </div>
  );
};

export default PersonalFinance; 