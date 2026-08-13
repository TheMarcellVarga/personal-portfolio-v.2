"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";
import { useState } from "react";
import Footer from "../footer";
import Header from "../header";
import { PageBackground } from "../components/PageBackground";
import { useClientReducedMotion } from "../hooks/useClientReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

const curiosities = [
  {
    title: "Messy beginnings",
    body: "The part where the brief is fuzzy, the system is complicated, and the useful question has not been asked yet.",
  },
  {
    title: "Tiny details",
    body: "The spacing, words, states, and transitions that quietly decide whether an interface feels trustworthy.",
  },
  {
    title: "Making it real",
    body: "I am happiest when an idea survives contact with code, edge cases, testing, and the people using it.",
  },
] as const;

const route = [
  {
    place: "Denmark",
    time: "2020–22",
    title: "Learning to see the product",
    body: "Multimedia design gave me a practical start in research, interaction, visual systems, content, and frontend work.",
  },
  {
    place: "MapsPeople",
    time: "2022",
    title: "Designing inside a real team",
    body: "Research and prototypes for MapsIndoors taught me how accessibility, documentation, and a shared design system shape the work.",
  },
  {
    place: "Singapore",
    time: "2022–now",
    title: "Owning more of the path",
    body: "At AXON Networks I moved deeper into React, TypeScript, supporting APIs, and the production details around complex product workflows.",
  },
] as const;

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useClientReducedMotion();

  const reveal = (delay = 0, distance = 22) => ({
    initial: reduceMotion ? false : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.16 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.78, delay, ease },
  });

  return (
    <div className="relative overflow-x-clip">
      <PageBackground />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} activeSection="About" />

      <main className="relative z-10 px-4 pb-8 sm:px-6 sm:pb-12 lg:px-10">
        <section className="relative mx-auto flex min-h-[100dvh] w-full max-w-7xl items-center pb-14 pt-28 sm:pb-20 sm:pt-36">
          <div className="pointer-events-none absolute -left-[18%] top-[16%] -z-10 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(76,207,255,0.2),transparent_70%)] blur-2xl" />
          <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(22rem,0.98fr)] lg:gap-16">
            <motion.div {...reveal()} className="relative z-10">
              <div className="mb-7 inline-flex -rotate-2 items-center rounded-full bg-white/68 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_12px_32px_rgba(17,27,40,0.08)] backdrop-blur-xl">
                <span className="font-label text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-custom-blue/72">
                  A little more human
                </span>
              </div>
              <h1 className="max-w-[8ch] text-balance font-display text-[clamp(4.3rem,13vw,9rem)] font-medium leading-[0.84] tracking-[-0.065em] text-custom-blue">
                Hi, I’m Marcell.
              </h1>
              <p className="mt-8 max-w-[37rem] text-pretty text-[1.05rem] leading-8 text-custom-blue/72 sm:text-xl sm:leading-9">
                A designer who learned to ship the whole thing—and a developer who
                still notices when a button feels two pixels off.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link
                  href="/resume"
                  className="group inline-flex items-center gap-3 rounded-full bg-custom-blue px-6 py-3 text-sm font-medium text-white shadow-[0_18px_48px_rgba(17,27,40,0.18)] outline-none transition duration-300 hover:-translate-y-0.5 hover:bg-[#0b2438] active:translate-y-0 active:scale-[0.985] focus-visible:ring-2 focus-visible:ring-custom-teal focus-visible:ring-offset-3"
                >
                  Resume
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </Link>
                <Link
                  href="/#work"
                  className="group inline-flex items-center gap-2 font-label text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-custom-blue/68 outline-none transition-colors duration-300 hover:text-custom-blue focus-visible:ring-2 focus-visible:ring-custom-teal focus-visible:ring-offset-3"
                >
                  See what I build
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.figure {...reveal(0.08, 16)} className="relative mx-auto w-full max-w-[35rem] pb-8 sm:pb-12">
              <div className="relative ml-auto aspect-[0.84] w-[88%] rotate-[1.5deg] overflow-hidden rounded-[2rem] bg-[#071726] shadow-[0_36px_110px_rgba(7,23,38,0.22)] sm:rounded-[2.75rem]">
                <Image
                  src="/images/marcell-great-wall.webp"
                  alt="Marcell Varga at the Great Wall of China"
                  fill
                  priority
                  sizes="(max-width: 1023px) 88vw, 42vw"
                  className="object-cover object-[center_44%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,rgba(5,15,24,0.34)_100%)]" />
              </div>
              <figcaption className="glass-panel absolute bottom-0 left-0 max-w-[16rem] -rotate-3 rounded-[1.35rem] px-5 py-4 text-sm leading-6 text-custom-blue/72 sm:max-w-[18rem]">
                Proof that I occasionally close the laptop.
                <span className="mt-2 block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-custom-blue/42">
                  Great Wall · July 2026
                </span>
              </figcaption>
              <div className="absolute -right-2 top-[18%] rotate-6 rounded-full bg-[#071726] px-4 py-2 font-label text-[0.58rem] uppercase tracking-[0.18em] text-white/78 shadow-[0_14px_36px_rgba(7,23,38,0.2)] sm:right-0">
                Latest detour · July 2026
              </div>
              <svg
                aria-hidden="true"
                viewBox="0 0 140 110"
                fill="none"
                className="pointer-events-none absolute -right-10 top-[18%] hidden h-28 w-36 text-custom-blue/46 sm:block"
              >
                <path
                  d="M132 7C127 37 113 53 88 62C65 70 49 81 42 101"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="2 6"
                />
                <path
                  d="M42 101L44 85M42 101L57 95"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.figure>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl py-20 sm:py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-start lg:gap-20">
            <motion.div {...reveal()}>
              <p className="font-label text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-custom-blue/48">
                The short version
              </p>
              <h2 className="mt-6 max-w-[13ch] text-balance font-display text-[clamp(3rem,8vw,6.6rem)] font-normal leading-[0.92] tracking-[-0.05em] text-custom-blue">
                My route here was not a straight line.
              </h2>
              <div className="mt-9 grid max-w-4xl gap-6 text-base leading-8 text-custom-blue/68 sm:grid-cols-2 sm:text-lg sm:leading-8">
                <p>
                  I started with multimedia design in Denmark, pulled toward the
                  parts where research, interaction, and visual choices meet.
                </p>
                <p>
                  Then code kept inviting me further in. Today I move between product
                  thinking and implementation without treating either as a handoff.
                </p>
              </div>
            </motion.div>

            <motion.aside {...reveal(0.08, 16)} className="glass-panel relative rounded-[2rem] p-6 sm:p-8 lg:mt-14">
              <div className="absolute right-6 top-0 h-4 w-20 -translate-y-1/2 rotate-2 bg-[#67d9ff]/24 backdrop-blur-sm" />
              <p className="font-label text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-custom-blue/44">Currently</p>
              <p className="mt-5 font-display text-3xl leading-[1.05] tracking-[-0.035em] text-custom-blue">
                Building product interfaces from Singapore.
              </p>
              <dl className="mt-8 grid gap-5 border-t border-custom-blue/10 pt-6 text-sm">
                <div className="flex items-center justify-between gap-5">
                  <dt className="text-custom-blue/48">Working languages</dt>
                  <dd className="font-mono text-xs text-custom-blue/72">HU · EN · DA</dd>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <dt className="text-custom-blue/48">Local time</dt>
                  <dd className="font-mono text-xs text-custom-blue/72">GMT +8</dd>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <dt className="text-custom-blue/48">Usual tools</dt>
                  <dd className="font-mono text-xs text-custom-blue/72">React · TS</dd>
                </div>
              </dl>
            </motion.aside>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl py-20 sm:py-28 lg:py-36">
          <motion.div {...reveal()} className="mb-12 max-w-3xl">
            <p className="font-label text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-custom-blue/48">
              A few recurring themes
            </p>
            <h2 className="mt-6 text-balance font-display text-[clamp(3rem,8vw,6.4rem)] font-normal leading-[0.92] tracking-[-0.05em] text-custom-blue">
              Things I keep coming back to.
            </h2>
          </motion.div>

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.12fr)_minmax(20rem,0.88fr)]">
            <div className="border-t border-custom-blue/12">
              {curiosities.map((item, index) => (
                <motion.article
                  key={item.title}
                  {...reveal(index * 0.05, 14)}
                  className="group grid gap-4 border-b border-custom-blue/12 py-7 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] sm:items-start sm:gap-8 sm:py-9"
                >
                  <h3 className="font-display text-3xl tracking-[-0.035em] text-custom-blue transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                    {item.title}
                  </h3>
                  <p className="max-w-[35rem] text-sm leading-7 text-custom-blue/64 sm:text-base">
                    {item.body}
                  </p>
                </motion.article>
              ))}
            </div>

            <motion.figure {...reveal(0.1, 16)} className="relative min-h-[27rem] overflow-hidden rounded-[2rem] bg-[#071726] shadow-[0_28px_90px_rgba(7,23,38,0.16)] sm:min-h-[36rem] lg:ml-5">
              <Image
                src="/images/cinematic-profile-pic-sg.webp"
                alt="Marcell Varga exploring a nature trail in Singapore"
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="object-cover object-[center_54%] transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(5,15,24,0.55)_100%)]" />
              <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white sm:bottom-8 sm:left-8 sm:right-8">
                <span className="max-w-[16rem] font-display text-2xl leading-tight tracking-[-0.025em]">Outside is usually a good reset.</span>
                <span className="font-mono text-[0.58rem] text-white/52">SG</span>
              </figcaption>
            </motion.figure>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl py-20 sm:py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
            <motion.div {...reveal()} className="lg:pt-8">
              <p className="font-label text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-custom-blue/48">
                The work bit, briefly
              </p>
              <h2 className="mt-6 max-w-[8ch] font-display text-[clamp(3rem,8vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.05em] text-custom-blue">
                A winding route.
              </h2>
              <p className="mt-7 max-w-[26rem] text-base leading-8 text-custom-blue/64">
                Three stops that changed how much of the product I could understand—and how much of it I could build.
              </p>
              <Link
                href="/resume"
                className="group mt-8 inline-flex items-center gap-2 font-label text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-custom-blue/68 outline-none transition-colors duration-300 hover:text-custom-blue focus-visible:ring-2 focus-visible:ring-custom-teal focus-visible:ring-offset-3"
              >
                The formal version
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            <div className="relative space-y-5 before:absolute before:bottom-6 before:left-[1.15rem] before:top-6 before:w-px before:bg-[linear-gradient(180deg,rgba(76,207,255,0.7),rgba(17,27,40,0.08))] sm:before:left-[1.35rem]">
              {route.map((item, index) => (
                <motion.article
                  key={item.place}
                  {...reveal(index * 0.06, 16)}
                  className={`glass-panel relative ml-10 rounded-[1.65rem] p-6 sm:ml-12 sm:p-8 ${index === 1 ? "lg:mr-10 lg:ml-18" : index === 2 ? "lg:ml-24" : ""}`}
                >
                  <span className="absolute -left-[2.15rem] top-8 flex h-4 w-4 items-center justify-center rounded-full bg-[#67d9ff] shadow-[0_0_0_6px_rgba(103,217,255,0.12)] sm:-left-[2.75rem]" />
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-label text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-custom-blue/58">{item.place}</p>
                    <p className="font-mono text-[0.62rem] text-custom-blue/38">{item.time}</p>
                  </div>
                  <h3 className="mt-6 max-w-[18ch] font-display text-3xl leading-[1.02] tracking-[-0.035em] text-custom-blue sm:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[38rem] text-sm leading-7 text-custom-blue/64 sm:text-base">
                    {item.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl py-20 sm:py-28 lg:py-36">
          <div className="grid overflow-hidden rounded-[2rem] bg-[#071726] shadow-[0_36px_120px_rgba(7,23,38,0.22)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <motion.div {...reveal()} className="relative flex min-h-[28rem] flex-col justify-between p-7 text-white sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,207,255,0.22),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.05),transparent_56%)]" />
              <div className="relative">
                <p className="font-label text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/48">Side-project rabbit holes</p>
                <h2 className="mt-6 max-w-[10ch] font-display text-[clamp(3rem,7vw,5.6rem)] font-normal leading-[0.9] tracking-[-0.05em] text-white">
                  Curiosity usually turns into a repo.
                </h2>
              </div>
              <div className="relative mt-12">
                <p className="max-w-[34rem] text-base leading-8 text-white/64">
                  Independent projects are where I try new product ideas, architecture,
                  AI evaluation, accessibility, and release habits without waiting for a handoff.
                </p>
                <Link
                  href="/#work"
                  className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-custom-blue outline-none transition duration-300 hover:-translate-y-0.5 hover:bg-[#eef8fb] active:translate-y-0 active:scale-[0.985] focus-visible:ring-2 focus-visible:ring-custom-teal focus-visible:ring-offset-2 focus-visible:ring-offset-[#071726]"
                >
                  Browse the projects
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div {...reveal(0.08, 14)} className="grid min-h-[28rem] grid-cols-[0.72fr_1.28fr] gap-3 bg-white/5 p-3 sm:gap-4 sm:p-4">
              <div className="relative overflow-hidden rounded-[1.4rem]">
                <Image
                  src="/images/wild-route/planner-mobile.png"
                  alt="Wild Route mobile planner built by Marcell Varga"
                  fill
                  sizes="(max-width: 1023px) 36vw, 26vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="relative overflow-hidden rounded-[1.4rem]">
                <Image
                  src="/images/threadscribe/transformed-output.png"
                  alt="ThreadScribe review workflow built by Marcell Varga"
                  fill
                  sizes="(max-width: 1023px) 64vw, 38vw"
                  className="object-cover object-left-top"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section {...reveal()} className="mx-auto my-16 w-full max-w-5xl py-12 text-center sm:my-24 sm:py-20">
          <p className="font-label text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-custom-blue/44">That is probably enough about me</p>
          <h2 className="mx-auto mt-6 max-w-[12ch] text-balance font-display text-[clamp(3.2rem,8vw,6rem)] font-normal leading-[0.92] tracking-[-0.05em] text-custom-blue">
            Tell me what you’re working on.
          </h2>
          <p className="mx-auto mt-7 max-w-[34rem] text-base leading-8 text-custom-blue/62">
            Product engineering, interface systems, trustworthy AI—or just a good idea that needs untangling.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:themarcellvarga@gmail.com"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-custom-blue px-6 py-3 text-sm font-medium text-white shadow-[0_18px_48px_rgba(17,27,40,0.18)] outline-none transition duration-300 hover:-translate-y-0.5 hover:bg-[#0b2438] active:translate-y-0 active:scale-[0.985] focus-visible:ring-2 focus-visible:ring-custom-teal focus-visible:ring-offset-3 sm:w-fit"
            >
              <Mail className="h-4 w-4 text-[#67d9ff]" />
              Send a note
            </a>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 font-label text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-custom-blue/64 outline-none transition-colors duration-300 hover:text-custom-blue focus-visible:ring-2 focus-visible:ring-custom-teal focus-visible:ring-offset-3"
            >
              Contact
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
