"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  MotionConfig,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Boxes,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  MoveRight,
  Rocket,
  ScanSearch,
  Sparkles,
  Waves,
  Workflow,
} from "lucide-react";
import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

const heroSignals = [
  "Based in Singapore",
  "Design systems with taste",
  "Motion that earns its place",
  "Frontend precision",
];

const selectedWork = [
  {
    title: "AskCody",
    year: "2022",
    category: "Hybrid workplace platform",
    image: "/images/askcody-index.png",
    href: "/askcody",
    summary:
      "A Microsoft Teams-integrated product concept built to make hybrid office orchestration feel more structured, calmer, and more useful in the flow of work.",
    bullets: [
      "Reframed a complex enterprise workflow into clearer task architecture",
      "Balanced Fluent UI constraints with a stronger product identity",
      "Focused on usability, operational clarity, and scalable system thinking",
    ],
  },
  {
    title: "CatchScan",
    year: "2021",
    category: "Copyright protection SaaS",
    image: "/images/catchscan-index.png",
    href: "/catchscan",
    summary:
      "A sharper dashboard direction for creators protecting their intellectual property, built around trust, legibility, and better decision-making under pressure.",
    bullets: [
      "Reworked information architecture for a product-heavy dashboard",
      "Introduced a more cohesive visual hierarchy and interaction language",
      "Designed the experience to feel credible without becoming sterile",
    ],
  },
  {
    title: "European Study Solution",
    year: "2021",
    category: "Informational platform",
    image: "/images/ess-index.png",
    href: "/ess",
    summary:
      "A conversion-oriented information experience for students exploring life and education abroad, shaped through research, content strategy, and clear UX fundamentals.",
    bullets: [
      "Turned dense decision-making into a clearer, staged journey",
      "Combined UX research, IA, and frontend delivery in one flow",
      "Used content structure as a product feature, not decoration",
    ],
  },
];

const principles = [
  {
    title: "Ambitious, not loud",
    body:
      "The interface should feel premium because every detail is intentional, not because it is overloaded with effects.",
  },
  {
    title: "Motion with a reason",
    body:
      "Reveals, depth, and scroll choreography should expose hierarchy and intent while staying light on the main thread.",
  },
  {
    title: "Systems beat one-off polish",
    body:
      "I care about components, consistency, and the design-to-code bridge because that is what scales quality.",
  },
  {
    title: "Nerd energy, adult execution",
    body:
      "Curiosity, prototyping speed, accessibility, and frontend rigor should coexist inside a product that people actually trust.",
  },
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Product + UX direction",
    body:
      "Research, workflows, IA, interaction design, and framing the right product questions before pixels start moving.",
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend craftsmanship",
    body:
      "Responsive interfaces in React and Next.js with an emphasis on precision, clarity, accessibility, and maintainable architecture.",
  },
  {
    icon: Boxes,
    title: "Design systems",
    body:
      "Components, tokens, and patterns that reduce entropy across teams instead of creating another layer of visual drift.",
  },
  {
    icon: Workflow,
    title: "AI-native workflows",
    body:
      "Practical automation, prototyping, and product experimentation that accelerate work without making the output feel generic.",
  },
];

const experience = [
  {
    period: "2022 - present",
    role: "UX & Frontend Engineer",
    company: "AXON Networks",
    body:
      "Contributed across UX, frontend, design systems, and product-facing engineering for orchestration software in cross-functional teams.",
  },
  {
    period: "2022",
    role: "UX Designer Intern",
    company: "MapsPeople",
    body:
      "Improved product flows through research, prototyping, accessibility thinking, and design-system-aware delivery inside a SaaS environment.",
  },
  {
    period: "2020 - 2022",
    role: "Multimedia Design",
    company: "University College of Northern Denmark",
    body:
      "Built the foundation in UX, content strategy, frontend development, and real-world client collaboration through project-based work.",
  },
];

const stackGroups = [
  {
    label: "Design",
    items: ["Figma", "UX Research", "Interaction Design", "Design Systems", "Prototyping", "Accessibility"],
  },
  {
    label: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "SvelteKit"],
  },
  {
    label: "Backend + product",
    items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
  },
];

const manifestoText =
  "I design and build digital products that feel fast, clear, and alive. Research gives direction. Systems create leverage. Frontend craft creates trust. Motion reveals meaning instead of hiding weak decisions. Singapore is the reset. The work now needs to feel sharper, more global, and more ambitious than what came before.";

const premiumEase = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: premiumEase },
};

function useTypedScrollText(text: string, targetRef: React.RefObject<HTMLElement>) {
  const shouldReduceMotion = useReducedMotion();
  const [typedText, setTypedText] = useState(shouldReduceMotion ? text : "");
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.82", "end 0.3"],
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedText(text);
    }
  }, [shouldReduceMotion, text]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (shouldReduceMotion) {
      return;
    }

    const nextLength = Math.max(0, Math.min(text.length, Math.floor(value * text.length)));
    setTypedText(text.slice(0, nextLength));
  });

  return { typedText, progress: scrollYProgress };
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <motion.div {...fadeUp} className="max-w-3xl">
      <span className="section-label font-mono">{eyebrow}</span>
      <h2 className="font-display mt-6 text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-sand-200)] sm:text-lg">
        {body}
      </p>
    </motion.div>
  );
}

function ActionButton({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const baseClass =
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ease-out";
  const variantClass =
    variant === "primary"
      ? "bg-[linear-gradient(135deg,#61f0c6,#49d6ff)] text-[#07111f] shadow-[0_12px_40px_rgba(73,214,255,0.28)] hover:-translate-y-0.5"
      : "border border-white/12 bg-white/5 text-white hover:border-[var(--color-cyan-300)] hover:bg-white/8 hover:-translate-y-0.5";

  if (external) {
    return (
      <a className={`${baseClass} ${variantClass}`} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={`${baseClass} ${variantClass}`} href={href}>
      {children}
    </Link>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof selectedWork)[number];
}) {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [28, -28]);

  return (
    <motion.article
      {...fadeUp}
      ref={cardRef}
      className="project-card glass-panel-strong group overflow-hidden rounded-[32px] p-4 sm:p-6"
    >
      <Link href={project.href} className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div style={{ y: imageY }} className="project-image-wrap relative aspect-[1.18/1] bg-[rgba(7,17,31,0.7)]">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.02),rgba(7,17,31,0.34))]" />
        </motion.div>

        <div className="flex h-full flex-col justify-between gap-6 px-1 sm:px-3">
          <div>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-cyan-300)]">
                {project.category}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-sand-300)]">
                {project.year}
              </span>
            </div>
            <h3 className="font-display mt-4 text-3xl tracking-[-0.05em] text-white sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--color-sand-200)] sm:text-lg">
              {project.summary}
            </p>
          </div>

          <div className="space-y-3">
            {project.bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3 text-sm leading-7 text-[var(--color-sand-100)] sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-teal-400)]" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          <div className="chrome-line inline-flex w-fit items-center gap-2 pb-2 text-sm font-semibold text-white">
            Read case study
            <MoveRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function Page() {
  const { scrollTo } = useSmoothScroll();
  const shouldReduceMotion = useReducedMotion();

  const pageScroll = useScroll();
  const progressScale = useSpring(pageScroll.scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.2,
  });

  const heroRef = useRef<HTMLElement>(null);
  const manifestoRef = useRef<HTMLElement>(null);
  const { typedText, progress } = useTypedScrollText(manifestoText, manifestoRef);

  const heroScroll = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroCopyY = useTransform(heroScroll.scrollYProgress, [0, 1], [0, 56]);
  const heroVisualY = useTransform(heroScroll.scrollYProgress, [0, 1], [0, -48]);
  const heroOpacity = useTransform(heroScroll.scrollYProgress, [0, 0.9, 1], [1, 0.9, 0.55]);
  const manifestoMeter = useTransform(progress, [0, 1], ["0%", "100%"]);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const jumpTo = (selector: string, offset = -96) => {
    scrollTo(selector, { offset });
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative pb-10">
        <div className="page-grid" aria-hidden="true" />
        <div className="page-noise" aria-hidden="true" />

        <motion.div
          style={{ scaleX: progressScale }}
          className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-[linear-gradient(90deg,#61f0c6,#49d6ff,#ff9c73)]"
        />

        <header className="fixed inset-x-0 top-0 z-[60] pt-4">
          <div className="section-shell">
            <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
              <button
                type="button"
                onClick={() => jumpTo("#top", -24)}
                className="flex items-center gap-3 text-left"
                aria-label="Back to top"
              >
                <IndexSigAnimatedIcon isOpen={false} />
                <div className="hidden sm:block">
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--color-cyan-300)]">
                    Marcell Varga
                  </div>
                  <div className="text-sm text-[var(--color-sand-200)]">Design engineer</div>
                </div>
              </button>

              <nav className="hidden items-center gap-6 text-sm text-[var(--color-sand-200)] md:flex">
                <button type="button" onClick={() => jumpTo("#manifesto")}>Manifesto</button>
                <button type="button" onClick={() => jumpTo("#work")}>Work</button>
                <button type="button" onClick={() => jumpTo("#experience")}>Experience</button>
                <button type="button" onClick={() => jumpTo("#contact")}>Contact</button>
              </nav>

              <button
                type="button"
                onClick={() => jumpTo("#contact")}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-[var(--color-cyan-300)] hover:bg-white/10"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </header>

        <section id="top" ref={heroRef} className="relative overflow-hidden pt-32 sm:pt-36">
          <div className="hero-spotlight hero-spotlight-cyan" aria-hidden="true" />
          <div className="hero-spotlight hero-spotlight-warm" aria-hidden="true" />

          <div className="section-shell grid gap-10 pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pb-32">
            <motion.div style={{ y: heroCopyY, opacity: heroOpacity }} className="relative z-10">
              <motion.span {...fadeUp} className="section-label font-mono">
                Singapore / 2026 reset
              </motion.span>

              <motion.h1
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.06 }}
                className="font-display mt-7 max-w-5xl text-5xl font-medium tracking-[-0.065em] text-white sm:text-6xl lg:text-[clamp(4.8rem,9vw,8rem)] lg:leading-[0.94]"
              >
                Energetic product thinking. <span className="text-gradient">Precise frontend execution.</span>
              </motion.h1>

              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.12 }}
                className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-sand-200)] sm:text-xl"
              >
                I am rebuilding this portfolio around who I actually am now: a design engineer with nerd-level curiosity, stronger ambition, and a new chapter in Singapore. The work should feel premium, global, and unmistakably alive.
              </motion.p>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.18 }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <button
                  type="button"
                  onClick={() => jumpTo("#work")}
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#61f0c6,#49d6ff)] px-5 py-3 text-sm font-semibold text-[#07111f] shadow-[0_12px_40px_rgba(73,214,255,0.28)] transition hover:-translate-y-0.5"
                >
                  Explore selected work
                  <ArrowRight className="h-4 w-4" />
                </button>
                <ActionButton href="/MarcellVargaCV.pdf" variant="secondary">
                  Open resume
                  <Download className="h-4 w-4" />
                </ActionButton>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.24 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                {heroSignals.map((signal) => (
                  <span key={signal} className="chip">
                    <Sparkles className="h-4 w-4 text-[var(--color-teal-400)]" />
                    {signal}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div style={{ y: heroVisualY }} className="relative z-10 lg:pb-6">
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.14 }}
                className="glass-panel-strong relative overflow-hidden rounded-[36px] p-4 sm:p-5"
              >
                <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-[var(--color-cyan-300)]">
                  <span className="font-mono">Now operating</span>
                  <span className="font-mono">Singapore</span>
                </div>

                <div className="relative mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(7,17,31,0.55)]">
                  <Image
                    src="/images/personalpageprofilealt.png"
                    alt="Portrait of Marcell Varga"
                    width={1200}
                    height={1400}
                    priority
                    className="h-auto w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0)_15%,rgba(7,17,31,0.42)_100%)]" />
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="glass-panel floating-card rounded-[24px] p-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-[var(--color-cyan-300)]">
                      Current focus
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-sand-100)]">
                      Design systems, motion-led interfaces, and product experiences that stay sharp under real complexity.
                    </p>
                  </div>
                  <div className="glass-panel floating-card rounded-[24px] p-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-[var(--color-cyan-300)]">
                      New chapter
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-sand-100)]">
                      Bringing a Denmark-built foundation into a more global, higher-energy APAC context.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="section-shell pb-12 sm:pb-16">
            <motion.div
              {...fadeUp}
              className="glass-panel grid gap-6 rounded-[30px] px-5 py-6 sm:px-7 sm:py-7 lg:grid-cols-[0.92fr_1.08fr]"
            >
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-cyan-300)]">
                  Positioning shift
                </div>
                <p className="mt-4 text-2xl leading-tight text-white sm:text-3xl">
                  Less cozy portfolio. More premium design engineering with actual momentum.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[22px] border border-white/8 bg-white/4 p-4">
                  <MapPin className="h-5 w-5 text-[var(--color-teal-400)]" />
                  <p className="mt-4 text-sm leading-7 text-[var(--color-sand-100)]">Now based in Singapore, with a perspective shaped across Europe and product teams.</p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-white/4 p-4">
                  <ScanSearch className="h-5 w-5 text-[var(--color-teal-400)]" />
                  <p className="mt-4 text-sm leading-7 text-[var(--color-sand-100)]">Strong on research and structure, but equally interested in shipping polished interfaces.</p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-white/4 p-4">
                  <Waves className="h-5 w-5 text-[var(--color-teal-400)]" />
                  <p className="mt-4 text-sm leading-7 text-[var(--color-sand-100)]">Scroll and motion are treated as product communication, not decoration or drag.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="manifesto" ref={manifestoRef} className="relative min-h-[240svh]">
          <div className="section-shell sticky top-0 flex min-h-screen items-center py-24">
            <div className="grid w-full gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.8, ease: premiumEase }}
                className="glass-panel rounded-[30px] p-6 sm:p-8"
              >
                <div className="section-label font-mono">Manifesto</div>
                <div className="mt-7 h-1 w-full overflow-hidden rounded-full bg-white/8">
                  <motion.div style={{ width: manifestoMeter }} className="h-full rounded-full bg-[linear-gradient(90deg,#61f0c6,#49d6ff,#ff9c73)]" />
                </div>
                <div className="mt-8 space-y-5 text-sm leading-7 text-[var(--color-sand-200)] sm:text-base">
                  <p>What survives from the previous portfolio is the blue DNA, the typed scroll reveal, and the idea that detail matters.</p>
                  <p>What changes now is the ambition: less student-era softness, more conviction, more precision, more range, and a stronger global signal.</p>
                </div>
                <div className="reveal-divider my-8" />
                <div className="space-y-3">
                  {principles.map((principle) => (
                    <div key={principle.title} className="rounded-[20px] border border-white/8 bg-white/[0.03] p-4">
                      <div className="font-medium text-white">{principle.title}</div>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-sand-200)]">{principle.body}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.9, ease: premiumEase }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_50%_20%,rgba(73,214,255,0.16),transparent_55%)] blur-2xl" aria-hidden="true" />
                <div className="glass-panel-strong relative overflow-hidden rounded-[40px] p-6 sm:p-8 lg:p-10">
                  <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-cyan-300)]">
                    Scroll to reveal
                  </div>
                  <div className="mt-8 text-3xl leading-[1.2] tracking-[-0.05em] text-white sm:text-4xl lg:text-[3.6rem] lg:leading-[1.08]">
                    <span className="text-white/14">{manifestoText}</span>
                    <span className="absolute inset-x-6 top-[4.3rem] sm:inset-x-8 sm:top-[4.8rem] lg:inset-x-10 lg:top-[5.3rem]">
                      {typedText}
                      {!shouldReduceMotion && typedText.length < manifestoText.length ? (
                        <span className="inline-block h-[0.85em] w-[0.12em] translate-y-1 rounded-full bg-[var(--color-cyan-300)] align-middle" />
                      ) : null}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-shell py-16 sm:py-24">
          <SectionHeading
            eyebrow="Capabilities"
            title="Design engineering that carries from strategy to shipped interface."
            body="The point is not to be half designer and half developer. The point is to connect the work so products feel more coherent, move faster, and retain quality under pressure."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                  className="glass-panel rounded-[28px] p-6"
                >
                  <Icon className="h-6 w-6 text-[var(--color-teal-400)]" />
                  <h3 className="mt-5 text-xl font-medium text-white">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-sand-200)] sm:text-base">{capability.body}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="work" className="section-shell py-16 sm:py-24">
          <SectionHeading
            eyebrow="Selected work"
            title="The strongest proof is still in the projects."
            body="These case studies come from earlier chapters, but the underlying strengths still matter: systems thinking, UX structure, frontend execution, and a bias toward making complexity legible."
          />

          <div className="mt-12 space-y-6 sm:space-y-8">
            {selectedWork.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell py-16 sm:py-24">
          <SectionHeading
            eyebrow="Experience"
            title="A path built through product work, not portfolio theater."
            body="The story here is consistent: research and design on one side, code and delivery on the other, with a growing preference for joining them instead of pretending they are separate crafts."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.56fr_0.44fr]">
            <div className="space-y-4">
              {experience.map((item, index) => (
                <motion.article
                  key={`${item.company}-${item.period}`}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                  className="glass-panel rounded-[28px] p-6 sm:p-7"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-cyan-300)]">
                    {item.period}
                  </div>
                  <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
                    {item.role}
                  </h3>
                  <div className="mt-2 text-base text-[var(--color-accent-400)] sm:text-lg">{item.company}</div>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-sand-200)] sm:text-base">{item.body}</p>
                </motion.article>
              ))}
            </div>

            <motion.div {...fadeUp} className="glass-panel-strong rounded-[32px] p-6 sm:p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-cyan-300)]">
                Toolkit
              </div>
              <div className="mt-8 space-y-7">
                {stackGroups.map((group) => (
                  <div key={group.label}>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/78">
                      {group.label}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-[var(--color-sand-100)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="reveal-divider my-8" />

              <div className="rounded-[24px] border border-[rgba(255,156,115,0.18)] bg-[linear-gradient(180deg,rgba(255,156,115,0.09),rgba(255,156,115,0.03))] p-5">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-white">
                  <Rocket className="h-4 w-4 text-[var(--color-accent-400)]" />
                  2026 direction
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--color-sand-100)] sm:text-base">
                  The next iteration of this portfolio should keep evolving toward fresher case studies, clearer metrics, and stronger proof of what I am shipping now, not only what I built earlier.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section-shell py-16 sm:py-24">
          <motion.div
            {...fadeUp}
            className="glass-panel-strong relative overflow-hidden rounded-[40px] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
          >
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/4 -translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(73,214,255,0.34),transparent_68%)] blur-2xl" aria-hidden="true" />
            <div className="section-label font-mono">Contact</div>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.48fr] lg:items-end">
              <div>
                <h2 className="font-display max-w-4xl text-4xl font-medium tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                  Building the next chapter from <span className="text-gradient-warm">Singapore</span>.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-sand-200)] sm:text-lg">
                  If you need someone who can think in systems, sweat the details, and still ship with urgency, let&apos;s talk. I am interested in ambitious product teams, design engineering roles, and collaborations where quality actually matters.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ActionButton href="mailto:themarcellvarga@gmail.com" external>
                    Send email
                    <Mail className="h-4 w-4" />
                  </ActionButton>
                  <ActionButton href="/MarcellVargaCV.pdf" variant="secondary">
                    Resume
                    <Download className="h-4 w-4" />
                  </ActionButton>
                </div>
              </div>

              <div className="grid gap-3">
                <a
                  href="https://www.linkedin.com/in/marcellvarga/"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel flex items-center justify-between rounded-[24px] px-5 py-4 transition hover:border-[var(--color-cyan-300)]"
                >
                  <div>
                    <div className="font-medium text-white">LinkedIn</div>
                    <div className="mt-1 text-sm text-[var(--color-sand-200)]">Professional profile</div>
                  </div>
                  <Linkedin className="h-5 w-5 text-[var(--color-cyan-300)]" />
                </a>
                <a
                  href="https://github.com/TheMarcellVarga"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel flex items-center justify-between rounded-[24px] px-5 py-4 transition hover:border-[var(--color-cyan-300)]"
                >
                  <div>
                    <div className="font-medium text-white">GitHub</div>
                    <div className="mt-1 text-sm text-[var(--color-sand-200)]">Code and experiments</div>
                  </div>
                  <Github className="h-5 w-5 text-[var(--color-cyan-300)]" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <footer className="section-shell pb-8 pt-6">
          <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[var(--color-sand-300)] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <IndexSigAnimatedIcon isOpen={false} />
              <span>© {currentYear} Marcell Varga. Designed for the next chapter.</span>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-cyan-300)]">
              Smooth by RAF. Motion with restraint.
            </div>
          </div>
        </footer>
      </main>
    </MotionConfig>
  );
}
