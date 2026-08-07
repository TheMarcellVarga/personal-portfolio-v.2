"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useState } from "react";
import Footer from "../footer";
import Header from "../header";
import { PageBackground } from "../components/PageBackground";
import { resume } from "../data/resume";
import { useClientReducedMotion } from "../hooks/useClientReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

const workingPrinciples = [
  {
    title: "Understand the system",
    body: "I map the users, constraints, data, and failure paths before polishing the interface.",
  },
  {
    title: "Prototype the decision",
    body: "I use interaction design and working prototypes to make important product choices concrete.",
  },
  {
    title: "Build the full state model",
    body: "I carry the idea into accessible components, honest feedback, edge cases, and production code.",
  },
] as const;

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useClientReducedMotion();

  const reveal = (delay = 0, distance = 20) => ({
    initial: reduceMotion ? false : { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion
      ? { duration: 0 }
      : { duration: 0.68, delay, ease },
  });

  return (
    <div className="relative overflow-x-clip">
      <PageBackground />
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeSection="About"
      />

      <main className="relative z-10 px-4 pb-12 sm:px-6 lg:px-10">
        <section className="mx-auto grid min-h-[100dvh] w-full max-w-7xl grid-cols-1 items-center gap-10 pb-14 pt-24 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] md:gap-12 lg:gap-16">
          <motion.div {...reveal(0)} className="relative z-10 max-w-[39rem]">
            <p className="font-label text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-custom-blue/68">
              About Marcell Varga
            </p>
            <h1 className="mt-6 max-w-[15ch] font-display text-[clamp(3rem,7vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-custom-blue">
              Product thinking, built into code.
            </h1>
            <p className="mt-7 max-w-[34rem] text-base leading-7 text-custom-blue/70 sm:text-lg sm:leading-8">
              UX trained my eye. React and TypeScript let me carry that judgment
              into products people can trust.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/#work"
                className="group inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-full bg-custom-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(17,27,40,0.18)] outline-none transition duration-300 hover:-translate-y-0.5 hover:bg-[#0b2438] active:translate-y-0 active:scale-[0.985] focus-visible:ring-2 focus-visible:ring-custom-teal focus-visible:ring-offset-2 sm:w-fit"
              >
                Selected work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/resume"
                className="group inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-full border border-custom-blue/12 bg-white/62 px-6 py-3 text-sm font-semibold text-custom-blue outline-none transition duration-300 hover:-translate-y-0.5 hover:bg-white active:translate-y-0 active:scale-[0.985] focus-visible:ring-2 focus-visible:ring-custom-teal focus-visible:ring-offset-2 sm:w-fit"
              >
                Resume
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          <motion.figure
            {...reveal(0.1, 14)}
            className="relative w-full overflow-hidden rounded-[2rem] border border-white/70 bg-[#0b1824] p-2.5 shadow-[0_32px_90px_rgba(17,27,40,0.16)] sm:rounded-[2.5rem] sm:p-3"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] md:aspect-[0.92] lg:aspect-[1.05]">
              <Image
                src="/images/marcell-great-wall.webp"
                alt="Marcell Varga at the Great Wall of China"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 55vw"
                className="object-cover object-[center_44%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(5,15,24,0.32)_100%)]" />
            </div>
          </motion.figure>
        </section>

        <section className="mx-auto w-full max-w-7xl py-20 sm:py-28">
          <motion.div {...reveal(0)} className="max-w-5xl">
            <h2 className="font-display text-[clamp(2.6rem,6vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.05em] text-custom-blue">
              The throughline is clarity.
            </h2>
            <p className="mt-8 max-w-[58rem] text-xl leading-8 text-custom-blue/74 sm:text-2xl sm:leading-10">
              I started in multimedia design, where I learned to study people,
              context, and interaction. Engineering gave me a way to make those
              decisions durable.
            </p>
          </motion.div>

          <motion.div
            {...reveal(0.08)}
            className="mt-14 grid gap-10 border-t border-custom-blue/10 pt-8 md:grid-cols-3 md:gap-8"
          >
            <div>
              <p className="text-sm text-custom-blue/68">Based in</p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-custom-blue">
                Singapore
              </p>
            </div>
            <div>
              <p className="text-sm text-custom-blue/68">Design foundation</p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-custom-blue">
                Nordic multimedia design
              </p>
            </div>
            <div>
              <p className="text-sm text-custom-blue/68">Working languages</p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-custom-blue">
                Hungarian, English, Danish
              </p>
            </div>
          </motion.div>

          <motion.figure
            {...reveal(0.12, 14)}
            className="mt-14 overflow-hidden rounded-[2rem] border border-white/70 bg-[#0b1824] p-2.5 shadow-[0_24px_72px_rgba(17,27,40,0.11)] sm:rounded-[2.5rem] sm:p-3"
          >
            <div className="relative aspect-[1.55] overflow-hidden rounded-[1.5rem] sm:aspect-[2.2] sm:rounded-[2rem]">
              <Image
                src="/images/cinematic-profile-pic-sg.webp"
                alt="Marcell Varga exploring a nature trail in Singapore"
                fill
                sizes="(max-width: 767px) 100vw, 1280px"
                className="object-cover object-[center_54%]"
              />
            </div>
          </motion.figure>
        </section>

        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 py-20 sm:py-28 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center md:gap-14 lg:gap-20">
          <motion.figure {...reveal(0)} className="min-w-0">
            <div className="overflow-hidden rounded-[2rem] border border-custom-blue/10 bg-white/62 p-2.5 shadow-[0_24px_72px_rgba(17,27,40,0.09)] sm:rounded-[2.5rem] sm:p-3">
              <div className="relative aspect-[1.4] overflow-hidden rounded-[1.5rem] bg-[#071726] sm:rounded-[2rem]">
                <Image
                  src="/images/ai-finance/aperture-product.jpg"
                  alt="Aperture financial research workspace designed and built by Marcell Varga"
                  fill
                  sizes="(max-width: 767px) 100vw, 52vw"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="mt-4 max-w-[38rem] text-sm leading-6 text-custom-blue/68">
              Aperture is one example of the full path: product direction,
              interface architecture, implementation, testing, and release evidence.
            </figcaption>
          </motion.figure>

          <motion.div {...reveal(0.08)}>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.05em] text-custom-blue">
              How I work
            </h2>
            <div className="mt-9 space-y-8">
              {workingPrinciples.map((principle, index) => (
                <motion.article
                  key={principle.title}
                  {...reveal(0.12 + index * 0.06, 12)}
                  className="border-l-2 border-custom-teal/75 pl-5"
                >
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-custom-blue">
                    {principle.title}
                  </h3>
                  <p className="mt-2 max-w-[34rem] text-base leading-7 text-custom-blue/66">
                    {principle.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto w-full max-w-7xl py-20 sm:py-28">
          <motion.div {...reveal(0)} className="max-w-3xl">
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.05em] text-custom-blue">
              Experience that compounds
            </h2>
            <p className="mt-6 max-w-[42rem] text-base leading-7 text-custom-blue/68 sm:text-lg sm:leading-8">
              Each step has widened the same practice: understand the product,
              improve the experience, and make the next iteration easier.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-[1.18fr_0.82fr] md:grid-rows-2">
            <motion.article
              {...reveal(0.06)}
              className="rounded-[2rem] bg-[#071726] p-7 text-white shadow-[0_28px_80px_rgba(7,23,38,0.18)] sm:p-10 md:row-span-2"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold text-white">AXON Networks</p>
                <p className="font-mono text-xs text-white/52">Oct 2022 - Present</p>
              </div>
              <h3 className="mt-10 max-w-[18ch] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl">
                UX and frontend engineering for complex product workflows.
              </h3>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <p className="text-sm leading-6 text-white/66">
                  Interactive prototypes, scalable component libraries, and
                  design-system patterns built with cross-functional teams.
                </p>
                <p className="text-sm leading-6 text-white/66">
                  Production UI, supporting APIs, accessibility, analytics
                  collaboration, and practical AI-aware workflows.
                </p>
              </div>
            </motion.article>

            <motion.article
              {...reveal(0.12)}
              className="rounded-[2rem] border border-custom-teal/28 bg-[linear-gradient(145deg,rgba(76,207,255,0.20),rgba(255,255,255,0.56))] p-7 sm:p-8"
            >
              <p className="font-mono text-xs text-custom-blue/68">Jan 2022 - Apr 2022</p>
              <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-custom-blue">
                MapsPeople
              </h3>
              <p className="mt-3 text-sm leading-6 text-custom-blue/66">
                UX research and interactive prototypes for the MapsIndoors CMS,
                grounded in accessibility and scalable layouts.
              </p>
            </motion.article>

            <motion.article
              {...reveal(0.18)}
              className="rounded-[2rem] border border-custom-blue/10 bg-white/64 p-7 shadow-[0_18px_54px_rgba(17,27,40,0.06)] sm:p-8"
            >
              <p className="font-mono text-xs text-custom-blue/68">2020 - 2022</p>
              <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-custom-blue">
                Multimedia Design
              </h3>
              <p className="mt-3 text-sm leading-6 text-custom-blue/66">
                UCN Denmark, with a practical foundation in research, responsive
                interfaces, content, and design-to-code work.
              </p>
            </motion.article>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl py-20 sm:py-28">
          <div className="grid overflow-hidden rounded-[2rem] border border-custom-blue/10 bg-white/62 shadow-[0_28px_86px_rgba(17,27,40,0.09)] md:grid-cols-[0.88fr_1.12fr]">
            <motion.div {...reveal(0)} className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <h2 className="font-display text-[clamp(2.4rem,5vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.05em] text-custom-blue">
                I learn by building the whole path.
              </h2>
              <p className="mt-6 max-w-[36rem] text-base leading-7 text-custom-blue/68 sm:text-lg sm:leading-8">
                Independent projects let me test product ideas, architecture,
                AI evaluation, accessibility, and release discipline without a
                handoff boundary.
              </p>
            </motion.div>

            <motion.div
              {...reveal(0.08, 14)}
              className="grid min-h-[24rem] grid-cols-[0.68fr_1.32fr] gap-3 bg-[#071726] p-3 sm:min-h-[31rem] sm:gap-4 sm:p-4"
            >
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/wild-route/planner-mobile.png"
                  alt="Wild Route mobile planner built by Marcell Varga"
                  fill
                  sizes="(max-width: 767px) 34vw, 24vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/threadscribe/transformed-output.png"
                  alt="ThreadScribe review workflow built by Marcell Varga"
                  fill
                  sizes="(max-width: 767px) 66vw, 38vw"
                  className="object-cover object-left-top"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          {...reveal(0)}
          className="mx-auto my-20 flex w-full max-w-7xl flex-col gap-8 rounded-[2rem] bg-custom-blue px-7 py-10 text-white shadow-[0_30px_90px_rgba(17,27,40,0.18)] sm:px-10 sm:py-12 md:flex-row md:items-end md:justify-between lg:px-14 lg:py-16"
        >
          <div>
            <h2 className="max-w-[17ch] font-display text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.98] tracking-[-0.05em] text-white">
              Have a product problem worth unpacking?
            </h2>
            <p className="mt-5 max-w-[34rem] text-base leading-7 text-white/66">
              I am always happy to compare notes on product engineering,
              interface systems, or trustworthy AI workflows.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex w-full shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-semibold text-custom-blue outline-none transition duration-300 hover:-translate-y-0.5 hover:bg-[#eef8fb] active:translate-y-0 active:scale-[0.985] focus-visible:ring-2 focus-visible:ring-custom-teal focus-visible:ring-offset-2 focus-visible:ring-offset-custom-blue md:w-fit"
          >
            Contact me
            <Mail className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </Link>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
