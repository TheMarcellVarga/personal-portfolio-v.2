"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { PortfolioShell } from "../components/PortfolioShell";
import { PageIntro } from "../components/PageIntro";
import { useClientReducedMotion } from "../hooks/useClientReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

const curiosities = [
  {
    title: "New places",
    body: "Moving between Hungary, Denmark, and Singapore made me curious about the small ways everyday life changes from place to place.",
  },
  {
    title: "Long walks",
    body: "Outside is where I reset. A trail, an unfamiliar street, or a view with no screen in it usually does the job.",
  },
  {
    title: "Making things",
    body: "I rarely leave an idea alone for long. Sometimes it becomes a project; sometimes it only becomes a better question.",
  },
] as const;

export default function AboutPage() {
  const reduceMotion = useClientReducedMotion();

  const reveal = (delay = 0, distance = 22) => ({
    initial: reduceMotion ? false : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.16 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.78, delay, ease },
  });

  return (
    <PortfolioShell activeSection="About">
      <main id="main-content" className="portfolio-main page-gutter">
        <section className="portfolio-container grid items-center gap-10 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <motion.div {...reveal()}>
            <PageIntro
              eyebrow="A little more human"
              title={<>Hi, I’m <span className="title-accent">Marcell.</span></>}
              description="Hungarian, shaped by Denmark, now living in Singapore. I like new places, long walks, thoughtful details, and making things."
            >
              <Link href="#more-about-me" data-cursor-label="Keep reading" className="portfolio-button group">
                More about me
                <ArrowRight aria-hidden="true" className="h-4 w-4 rotate-90 transition-transform duration-300 group-hover:translate-y-1" />
              </Link>
            </PageIntro>
          </motion.div>
          <motion.figure {...reveal(0.08, 16)} className="min-w-0">
            <div className="dark-panel relative aspect-[4/5] max-h-[36rem]">
              <Image
                src="/images/marcell-great-wall.webp"
                alt="Marcell Varga at the Great Wall of China"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover object-[center_44%]"
              />
            </div>
            <figcaption className="mt-4 text-sm leading-6 text-custom-blue/72">
              Proof that I occasionally close the laptop. Great Wall, July 2026.
            </figcaption>
          </motion.figure>
        </section>

        <section id="more-about-me" className="portfolio-container portfolio-section scroll-mt-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-start lg:gap-20">
            <motion.div {...reveal()}>
              <p className="font-label text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-custom-blue/48">
                A few coordinates
              </p>
              <h2 className="section-heading mt-6 max-w-[16ch]">
                Home has meant a few different <span className="title-accent">places.</span>
              </h2>
              <div className="mt-9 grid max-w-4xl gap-6 text-base leading-8 text-custom-blue/68 sm:grid-cols-2 sm:text-lg sm:leading-8">
                <p>
                  I am from Hungary, spent an important chapter in Denmark, and now
                  call Singapore home. Each place changed what feels familiar.
                </p>
                <p>
                  Living abroad made me more observant, more comfortable being new,
                  and much more likely to choose the long way home just to see what is there.
                </p>
              </div>
            </motion.div>

            <motion.aside {...reveal(0.08, 16)} className="dark-panel p-6 sm:p-8 lg:mt-14">
              <p className="font-label text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/80">A small map</p>
              <p className="mt-5 font-display text-3xl leading-[1.05] tracking-[-0.035em] text-white">
                Hungary → Denmark → Singapore
              </p>
              <dl className="mt-8 grid gap-5 border-t border-white/15 pt-6 text-sm">
                <div className="flex items-center justify-between gap-5">
                  <dt className="text-white/70">From</dt>
                  <dd className="font-mono text-xs text-white/90">Hungary</dd>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <dt className="text-white/70">A chapter in</dt>
                  <dd className="font-mono text-xs text-white/90">Denmark</dd>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <dt className="text-white/70">Home now</dt>
                  <dd className="font-mono text-xs text-white/90">Singapore</dd>
                </div>
              </dl>
            </motion.aside>
          </div>
        </section>

        <section className="portfolio-container portfolio-section">
          <motion.div {...reveal()} className="mb-12 max-w-3xl">
            <p className="font-label text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-custom-blue/48">
              Off the clock
            </p>
            <h2 className="section-heading mt-6">
              Things that make me feel like myself.
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

            <motion.figure {...reveal(0.1, 16)} className="dark-panel relative min-h-[27rem] sm:min-h-[36rem] lg:ml-5">
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

        <section className="portfolio-container my-12">
          <motion.div
            {...reveal()}
            className="dark-panel relative mx-auto flex w-full max-w-5xl items-start px-6 py-8 md:min-h-[28rem] md:items-center md:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(72,205,255,0.26),_transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_55%)]" />
            <div className="relative grid w-full min-w-0 grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
              <div>
                <p className="page-eyebrow text-white/80">
                  That is probably enough about me
                </p>
                <h2 className="font-display text-[clamp(3rem,14vw,5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white">
                  Now tell me something about you.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-[1.05rem] sm:leading-8">
                  A travel story, an odd observation, or simply a hello is more than enough.
                </p>
              </div>
              <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-3 self-end">
                <a
                  href="mailto:themarcellvarga@gmail.com"
                  data-cursor-label="Send email"
                  className="group flex min-h-12 w-full items-center justify-between gap-3 rounded-[1.35rem] bg-white/7 px-4 py-3 text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:gap-4 md:px-5 md:py-3.5"
                >
                  <span className="flex min-w-0 flex-1 items-center gap-3">
                    <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-[#67d9ff]" />
                    <span className="min-w-0 break-words font-label text-[0.72rem] font-medium uppercase leading-6 tracking-[0.08em] text-white/80 [overflow-wrap:anywhere] sm:tracking-[0.16em]">
                      Send a note
                    </span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link
                  href="/#contact"
                  data-cursor-label="Open contact"
                  className="group flex min-h-12 w-full items-center justify-between gap-3 rounded-[1.35rem] bg-white/7 px-4 py-3 text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:gap-4 md:px-5 md:py-3.5"
                >
                  <span className="flex min-w-0 flex-1 items-center gap-3">
                    <span className="min-w-0 break-words font-label text-[0.72rem] font-medium uppercase leading-6 tracking-[0.08em] text-white/80 [overflow-wrap:anywhere] sm:tracking-[0.16em]">
                      Contact
                    </span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </PortfolioShell>
  );
}
