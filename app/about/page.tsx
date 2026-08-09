"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";
import { useState } from "react";
import Footer from "../footer";
import Header from "../header";
import { PageBackground } from "../components/PageBackground";
import { SectionLabel } from "../components/SectionLabel";
import { SplitTextReveal } from "../components/SplitTextReveal";
import { useClientReducedMotion } from "../hooks/useClientReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

const workingPrinciples = [
  {
    number: "01",
    title: "Understand the system",
    body: "Map the users, constraints, data, and failure paths before polishing the interface.",
  },
  {
    number: "02",
    title: "Prototype the decision",
    body: "Use interaction design and working prototypes to make consequential product choices concrete.",
  },
  {
    number: "03",
    title: "Build the full state model",
    body: "Carry the idea into accessible components, honest feedback, edge cases, and production code.",
  },
] as const;

const experience = [
  {
    period: "2022 — now",
    company: "AXON Networks",
    role: "UX & frontend engineering",
    body: "Complex product workflows, scalable component systems, supporting APIs, and practical AI-aware delivery with cross-functional teams.",
  },
  {
    period: "2022",
    company: "MapsPeople",
    role: "UX design internship",
    body: "Research and interactive prototypes for the MapsIndoors CMS, grounded in accessibility and layouts designed to scale.",
  },
  {
    period: "2020 — 2022",
    company: "UCN Denmark",
    role: "Multimedia design",
    body: "A practical foundation in research, responsive interfaces, content, and the craft of moving from design intent to working code.",
  },
] as const;

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useClientReducedMotion();

  const reveal = (delay = 0, distance = 24) => ({
    initial: reduceMotion ? false : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.16 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.8, delay, ease },
  });

  return (
    <div className="relative overflow-x-clip">
      <PageBackground />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} activeSection="About" />

      <main className="relative z-10 px-4 pb-8 sm:px-6 sm:pb-12 lg:px-10">
        <section className="relative mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-col justify-end pb-12 pt-28 sm:pb-16 sm:pt-36 lg:pb-20">
          <div className="pointer-events-none absolute right-[-18%] top-[8%] -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(76,207,255,0.18),transparent_68%)] blur-2xl sm:right-[-8%] lg:h-[48rem] lg:w-[48rem]" />

          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:gap-14">
            <motion.div {...reveal(0, 18)} className="relative z-10 pb-1 lg:pb-10">
              <SectionLabel index="00" label="About" />
              <h1 className="max-w-[9ch] text-balance font-display text-[clamp(3.55rem,12vw,8.6rem)] font-medium leading-[0.84] tracking-[-0.065em] text-custom-blue">
                Design judgment. Engineering depth.
              </h1>
              <div className="mt-8 grid max-w-2xl gap-6 border-t border-custom-blue/12 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="max-w-[35rem] text-[0.98rem] leading-7 text-custom-blue/70 sm:text-[1.08rem] sm:leading-8">
                  I am Marcell, a Singapore-based product-focused frontend engineer.
                  UX trained my eye; React and TypeScript let me carry that judgment
                  into products people can trust.
                </p>
                <Link
                  href="/resume"
                  className="group inline-flex w-fit items-center gap-3 font-label text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-custom-blue outline-none transition-colors duration-300 hover:text-custom-blue/62 focus-visible:ring-2 focus-visible:ring-custom-teal focus-visible:ring-offset-4"
                >
                  Resume
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </Link>
              </div>
            </motion.div>

            <motion.figure
              {...reveal(0.08, 18)}
              className="relative ml-auto w-full max-w-[38rem] lg:translate-y-10"
            >
              <div className="absolute -left-4 top-8 z-10 hidden rounded-full bg-white/74 px-4 py-2 font-label text-[0.6rem] font-medium uppercase tracking-[0.2em] text-custom-blue/72 shadow-[0_14px_40px_rgba(17,27,40,0.10)] backdrop-blur-xl sm:block">
                Singapore · 1.3521° N
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#071726] shadow-[0_34px_100px_rgba(7,23,38,0.2)] sm:rounded-[2.5rem] lg:aspect-[0.92]">
                <Image
                  src="/images/marcell-great-wall.webp"
                  alt="Marcell Varga at the Great Wall of China"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  className="object-cover object-[center_44%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(5,15,24,0.38)_100%)]" />
                <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <span className="max-w-[18rem] text-sm leading-6 text-white/76">
                    Product work shaped by living and learning across cultures.
                  </span>
                  <span className="font-mono text-[0.62rem] text-white/54">CN / 2025</span>
                </figcaption>
              </div>
            </motion.figure>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl py-16 sm:py-24 lg:py-32">
          <motion.div
            {...reveal()}
            className="relative mx-auto min-h-[30rem] max-w-5xl overflow-hidden rounded-[1.75rem] bg-[#071726] p-6 text-white shadow-[0_40px_140px_rgba(5,16,32,0.26),inset_0_1px_0_rgba(255,255,255,0.16)] sm:min-h-[38rem] sm:rounded-[2.75rem] sm:p-10 lg:p-14"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(76,207,255,0.24),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_55%)]" />
            <div className="relative flex min-h-[inherit] flex-col justify-between gap-16">
              <div>
                <SectionLabel index="01" label="Throughline" tone="light" />
                <div className="mb-8 h-px w-full bg-[linear-gradient(90deg,rgba(76,216,255,0.85),rgba(76,216,255,0.02))]" />
                <SplitTextReveal
                  as="h2"
                  text="The throughline is clarity."
                  animate={!reduceMotion}
                  triggerOnView
                  className="max-w-[12ch] font-display text-[clamp(2.65rem,9vw,6.8rem)] font-medium leading-[0.92] tracking-[-0.05em] text-white"
                />
              </div>
              <div className="grid gap-8 border-t border-white/12 pt-7 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                <p className="max-w-[42rem] text-lg leading-8 text-white/72 sm:text-xl sm:leading-9">
                  I started in multimedia design, studying people, context, and
                  interaction. Engineering gave me a way to make those decisions
                  durable—and to own what happens beyond the polished screen.
                </p>
                <dl className="grid grid-cols-2 gap-6 md:justify-self-end">
                  <div>
                    <dt className="font-label text-[0.58rem] uppercase tracking-[0.2em] text-white/42">Based in</dt>
                    <dd className="mt-2 font-display text-xl text-white">Singapore</dd>
                  </div>
                  <div>
                    <dt className="font-label text-[0.58rem] uppercase tracking-[0.2em] text-white/42">Languages</dt>
                    <dd className="mt-2 font-display text-xl text-white">HU · EN · DA</dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="relative mx-auto w-full max-w-7xl py-16 sm:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <motion.div {...reveal()} className="lg:sticky lg:top-32 lg:h-fit">
              <SectionLabel index="02" label="Practice" />
              <h2 className="max-w-[8ch] font-display text-[clamp(3rem,9vw,6.2rem)] leading-[0.88] tracking-[-0.055em] text-custom-blue">
                How I work.
              </h2>
              <p className="mt-7 max-w-[26rem] text-[0.95rem] leading-7 text-custom-blue/66">
                The interface is one view of a larger system. I work through the
                product decision, implementation, and evidence as one connected path.
              </p>
            </motion.div>

            <div className="space-y-4">
              {workingPrinciples.map((principle, index) => (
                <motion.article
                  key={principle.title}
                  {...reveal(index * 0.06, 18)}
                  className="glass-panel group grid min-h-[13rem] gap-8 overflow-hidden rounded-[1.75rem] p-6 transition-transform duration-500 hover:-translate-y-1 sm:grid-cols-[auto_1fr] sm:p-8"
                >
                  <span className="font-label text-[0.62rem] font-semibold tracking-[0.18em] text-custom-blue/44">
                    {principle.number}
                  </span>
                  <div className="self-end">
                    <h3 className="max-w-[16ch] font-display text-[clamp(1.8rem,5vw,3.35rem)] leading-[0.98] tracking-[-0.04em] text-custom-blue">
                      {principle.title}
                    </h3>
                    <p className="mt-4 max-w-[34rem] text-sm leading-6 text-custom-blue/66 sm:text-base sm:leading-7">
                      {principle.body}
                    </p>
                  </div>
                </motion.article>
              ))}

              <motion.figure {...reveal(0.1, 18)} className="pt-4">
                <div className="relative aspect-[1.35] overflow-hidden rounded-[1.75rem] bg-[#071726] shadow-[0_28px_90px_rgba(7,23,38,0.16)] sm:aspect-[1.7] sm:rounded-[2.25rem]">
                  <Image
                    src="/images/ai-finance/aperture-product.jpg"
                    alt="Aperture financial research workspace designed and built by Marcell Varga"
                    fill
                    sizes="(max-width: 1023px) 100vw, 58vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 flex max-w-[42rem] items-start gap-4 text-sm leading-6 text-custom-blue/62">
                  <span className="mt-2 h-px w-8 shrink-0 bg-custom-blue/24" />
                  Aperture: product direction, interface architecture, implementation,
                  testing, and release evidence carried as one body of work.
                </figcaption>
              </motion.figure>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl py-16 sm:py-24 lg:py-32">
          <motion.div {...reveal()} className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <SectionLabel index="03" label="Trajectory" />
              <h2 className="max-w-[10ch] font-display text-[clamp(3rem,9vw,6.3rem)] leading-[0.9] tracking-[-0.055em] text-custom-blue">
                Experience that compounds.
              </h2>
            </div>
            <p className="max-w-[31rem] text-[0.95rem] leading-7 text-custom-blue/66 lg:justify-self-end">
              Each step widened the same practice: understand the product, improve
              the experience, and make the next iteration easier.
            </p>
          </motion.div>

          <div className="border-t border-custom-blue/12">
            {experience.map((item, index) => (
              <motion.article
                key={item.company}
                {...reveal(index * 0.06, 16)}
                className="group grid gap-5 border-b border-custom-blue/12 py-8 transition-colors duration-500 hover:bg-white/16 sm:grid-cols-[6rem_minmax(0,0.85fr)_minmax(0,1.15fr)] sm:gap-8 sm:px-2 sm:py-10"
              >
                <p className="font-mono text-[0.66rem] text-custom-blue/46">{item.period}</p>
                <div>
                  <h3 className="font-display text-3xl tracking-[-0.035em] text-custom-blue transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
                    {item.company}
                  </h3>
                  <p className="mt-2 font-label text-[0.62rem] font-medium uppercase tracking-[0.18em] text-custom-blue/46">
                    {item.role}
                  </p>
                </div>
                <p className="max-w-[37rem] text-sm leading-6 text-custom-blue/66 sm:text-base sm:leading-7">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl py-16 sm:py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
            <motion.div {...reveal()}>
              <SectionLabel index="04" label="Independent work" />
              <h2 className="max-w-[10ch] font-display text-[clamp(3rem,8vw,5.8rem)] leading-[0.9] tracking-[-0.05em] text-custom-blue">
                I learn by building the whole path.
              </h2>
              <p className="mt-7 max-w-[34rem] text-base leading-7 text-custom-blue/68 sm:text-lg sm:leading-8">
                Independent projects let me test product ideas, architecture, AI
                evaluation, accessibility, and release discipline without a handoff
                boundary.
              </p>
              <Link
                href="/#work"
                className="group mt-8 inline-flex items-center gap-3 font-label text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-custom-blue outline-none transition-colors duration-300 hover:text-custom-blue/62 focus-visible:ring-2 focus-visible:ring-custom-teal focus-visible:ring-offset-4"
              >
                Explore selected work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div {...reveal(0.08, 18)} className="relative min-h-[31rem] sm:min-h-[40rem]">
              <div className="absolute left-0 top-0 h-[62%] w-[74%] overflow-hidden rounded-[1.65rem] bg-[#071726] shadow-[0_28px_80px_rgba(7,23,38,0.15)] sm:rounded-[2.1rem]">
                <Image
                  src="/images/cinematic-profile-pic-sg.webp"
                  alt="Marcell Varga exploring a nature trail in Singapore"
                  fill
                  sizes="(max-width: 1023px) 74vw, 38vw"
                  className="object-cover object-[center_54%]"
                />
              </div>
              <div className="absolute bottom-0 right-0 h-[58%] w-[68%] overflow-hidden rounded-[1.4rem] border-[6px] border-[#f7f0e7] bg-[#071726] shadow-[0_28px_90px_rgba(7,23,38,0.2)] sm:rounded-[1.9rem] sm:border-[10px]">
                <Image
                  src="/images/threadscribe/transformed-output.png"
                  alt="ThreadScribe review workflow built by Marcell Varga"
                  fill
                  sizes="(max-width: 1023px) 68vw, 35vw"
                  className="object-cover object-left-top"
                />
              </div>
              <div className="absolute bottom-[8%] left-[4%] rounded-full bg-[#071726]/92 px-4 py-2 font-label text-[0.58rem] font-medium uppercase tracking-[0.18em] text-white/78 shadow-[0_12px_32px_rgba(7,23,38,0.18)] backdrop-blur-xl">
                Life / product / code
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          {...reveal()}
          className="relative mx-auto my-16 flex min-h-[24rem] w-full max-w-5xl items-start overflow-hidden rounded-[1.75rem] bg-[#071726] p-6 text-white shadow-[0_40px_140px_rgba(7,20,38,0.26),inset_0_1px_0_rgba(255,255,255,0.16)] sm:my-24 sm:min-h-[28rem] sm:items-center sm:rounded-[2.75rem] sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(72,205,255,0.26),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_55%)]" />
          <div className="relative grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <SectionLabel index="05" label="Contact" tone="light" />
              <h2 className="max-w-[8ch] font-display text-[clamp(3.2rem,10vw,6.2rem)] leading-[0.88] tracking-[-0.05em] text-white">
                Compare notes?
              </h2>
              <p className="mt-6 max-w-[34rem] text-base leading-7 text-white/68">
                Product engineering, interface systems, or trustworthy AI workflows—I
                read every note myself and usually reply within a day.
              </p>
            </div>
            <div className="grid gap-3">
              <a
                href="mailto:themarcellvarga@gmail.com"
                className="group flex items-center justify-between gap-4 rounded-[1.35rem] bg-white/7 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] outline-none transition duration-300 hover:bg-white/11 focus-visible:ring-2 focus-visible:ring-custom-teal"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-[#67d9ff]" />
                  <span className="truncate font-label text-[0.66rem] font-medium uppercase tracking-[0.12em] text-white/82 sm:text-[0.72rem] sm:tracking-[0.16em]">
                    themarcellvarga@gmail.com
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <Link
                href="/contact"
                className="group flex items-center justify-between rounded-[1.35rem] bg-white/7 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] outline-none transition duration-300 hover:bg-white/11 focus-visible:ring-2 focus-visible:ring-custom-teal"
              >
                <span className="font-label text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/82">Contact page</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
