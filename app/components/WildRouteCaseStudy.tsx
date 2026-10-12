import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PortfolioShell } from "./PortfolioShell";
import { SectionLabel } from "./SectionLabel";
import { OtherWorks } from "./OtherWorks";
import { caseStudies } from "../data/case-studies";

const demo = "https://ai-travel-planner-psi-five.vercel.app";

/** A visual walkthrough inside the index's existing portfolio system. */
export default function WildRouteCaseStudy() {
  const evidence = caseStudies["wild-route"];
  return (
    <PortfolioShell activeSection="Work" backLink={{ href: "/#work", label: "Back to work" }} className="case-study-page">
      <main id="main-content" className="portfolio-main page-gutter">
        <div className="portfolio-container">
          <section>
            <div className="grid items-end gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
              <div>
                <h1 className="page-title">Wild <span className="title-accent">Route</span></h1>
                <p className="mt-5 max-w-[24ch] font-display text-[clamp(1.7rem,3.2vw,2.8rem)] font-medium leading-[1.12] tracking-[-0.025em]">A rough travel idea.<br />A route you can explain.</p>
                <p className="page-lead max-w-[48ch]">I designed and built a planner that turns travel wishes into complete journeys you can compare, save, and share.</p>
              </div>
              <div>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-y border-custom-blue/15 py-5 text-sm leading-6">
                  <div><dt className="text-custom-blue/65">My role</dt><dd>Design + engineering</dd></div>
                  <div><dt className="text-custom-blue/65">Project</dt><dd>Independent · 2026</dd></div>
                  <div className="col-span-2"><dt className="text-custom-blue/65">Experience</dt><dd data-case-study-status="wild-route">Live public demo</dd></div>
                </dl>
                <Link href={demo} target="_blank" rel="noreferrer" className="portfolio-button mt-6">Open public demo <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
              </div>
            </div>
            <div className="mt-10 sm:mt-14">
              <Screen src="/images/wild-route/home-october-2026.jpg" alt="Wild Route homepage showing the travel brief beside three generated round-trip suggestions" priority />
              <p className="mt-3 text-sm leading-6 text-custom-blue/70">The current product: a travel brief, comparable journeys, and an explicit planning-estimate boundary. Select any screen to view it full size.</p>
            </div>
          </section>

          <section className="portfolio-section">
            <div className="grid gap-8 border-t border-custom-blue/15 pt-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <h2 className="section-heading">Plan the journey.<br /><span className="title-accent">See the tradeoffs.</span></h2>
              <div className="max-w-[60ch] space-y-5 text-base leading-7 text-custom-blue/75 sm:text-lg">
                <p>Flights, maps, destination guides, and notes each show a fragment of a trip. I wanted to bring those fragments into one decision: which route fits the adventure?</p>
                <p>The hard part was making the result useful without overstating what the app knows. Every journey needs a reason, a return leg, and a clear boundary between a planning estimate and a booking.</p>
              </div>
            </div>
          </section>

          <section className="pb-[var(--section-space)]">
            <div className="grid items-center gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
              <div>
                <SectionLabel index="01" label="Describe the trip" />
                <h2 className="section-heading">Start with a wish.</h2>
                <p className="mt-5 text-base leading-7 text-custom-blue/75">A plain-language idea becomes a brief you can edit. Origin, days, stop count, and route shape stay visible before composition.</p>
                <blockquote className="my-7 border-y border-custom-blue/15 py-6 font-display text-2xl font-medium leading-snug tracking-[-0.02em]">“A 12-day round trip from Singapore with hiking, surf, and one meaningful stop.”</blockquote>
                <p className="text-sm leading-6 text-custom-blue/70">The example used in these captures. Deterministic interpretation and route data; no live model call.</p>
              </div>
              <Screen src="/images/wild-route/compose-october-2026.jpg" alt="Wild Route composer with the Singapore travel brief and editable journey constraints" />
            </div>
          </section>

          <section className="pb-[var(--section-space)]">
            <div className="mb-8 grid items-end gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div><SectionLabel index="02" label="Compare the journeys" /><h2 className="section-heading">A whole route.<br />A reason for each stop.</h2></div>
              <p className="max-w-[52ch] text-base leading-7 text-custom-blue/75">The engine compares direct, one-stop, and two-stop journeys. Round trips return to the origin, and the map follows the same legs as the route details.</p>
            </div>
            <Screen src="/images/wild-route/planner-october-2026.jpg" alt="Wild Route ranked planner showing a round-trip route with destination imagery, route legs, and planning status" />
            <div className="mt-7 grid gap-7 border-t border-custom-blue/15 pt-6 md:grid-cols-3">
              <Decision title="Why this route?" body="Ranking, wishes, and confidence explain the suggestion. Confidence belongs to the app’s scoring, not a provider guarantee." />
              <Decision title="What do we know?" body="Current conditions keep their source and observation time. Missing fare observations stay labeled as planning estimates." />
              <Decision title="What if it fails?" body="A 2D map and bundled destination artwork keep the route usable when WebGL or remote media is unavailable." />
            </div>
          </section>

          <section className="pb-[var(--section-space)]">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <Screen src="/images/wild-route/share-october-2026.jpg" alt="Wild Route public route preview showing the journey breakdown and external booking boundary" />
              <div><SectionLabel index="03" label="Keep the decision" /><h2 className="section-heading">Take the route<br />with you.</h2>
                <p className="mt-5 text-base leading-7 text-custom-blue/75">Save a route for later or share a public preview. The original prompt stays private; the shared view carries the journey and its planning caveats.</p>
                <p className="mt-5 text-base leading-7 text-custom-blue/75">Booking links continue on external provider sites. Wild Route helps choose the journey; providers confirm availability and final prices.</p>
                <p className="mt-6 border-t border-custom-blue/15 pt-5 text-sm leading-6 text-custom-blue/70">In the public demo, saves live in this browser and preview links reconstruct a validated public route. Cross-device account persistence remains a separate managed-service path.</p>
              </div>
            </div>
          </section>

          <section data-case-study-evidence="wild-route" className="pb-[var(--section-space)]">
            <div className="dark-panel p-7 sm:p-10 lg:p-14">
              <h2 className="section-heading max-w-[19ch] text-white">The work behind<br /><span className="text-custom-teal">the journey.</span></h2>
              <p className="mt-6 max-w-[62ch] text-base leading-7 text-white/80">I owned the product direction, interface, route engine, API boundaries, and verification. The key decision: let deterministic code own route shape, arithmetic, permissions, and the final validated result.</p>
              <ol aria-label="Route generation pipeline" className="my-9 flex flex-wrap items-center gap-x-4 gap-y-3 border-y border-white/20 py-6 text-sm text-white/90">
                {["Validate brief", "Compose + rank", "Enforce limits", "Persist snapshot", "Render + share"].map((step, index) => <li key={step} className="flex items-center gap-4"><span>{step}</span>{index < 4 && <ArrowRight aria-hidden="true" className="h-4 w-4 text-custom-teal" />}</li>)}
              </ol>
              <div className="grid gap-8 sm:grid-cols-2">
                <div><h3 className="font-display text-2xl font-medium text-white">A failure worth fixing.</h3><p className="mt-3 text-base leading-7 text-white/80">The first hosted save flow assumed the next request could read the same server’s memory. Serverless hosting broke that assumption. I rebuilt the demo around browser-local saves and validated stateless previews.</p></div>
                <div><h3 className="font-display text-2xl font-medium text-white">Designed for imperfect conditions.</h3><p className="mt-3 text-base leading-7 text-white/80">Keyboard access, reduced motion, provider fallback, and image failure are part of the experience. Private data stays behind ownership checks; public shares use an explicit safe snapshot.</p></div>
              </div>
              <details className="mt-9 border-t border-white/20 pt-5">
                <summary className="cursor-pointer py-2 text-base font-medium text-white underline decoration-white/40 underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explore verification and current limits</summary>
                <div className="mt-6 grid gap-8 lg:grid-cols-2">
                  <EvidenceList title="Verification" items={evidence.verification} />
                  <EvidenceList title="Current limits" items={evidence.limitations} />
                </div>
              </details>
            </div>
          </section>
          <OtherWorks currentProjectTitle="Wild Route" />
        </div>
      </main>
    </PortfolioShell>
  );
}

function Screen({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return <figure className="overflow-hidden rounded-[var(--panel-radius)] bg-custom-blue p-2 sm:p-3"><a href={src} target="_blank" rel="noreferrer" aria-label={`View full-size: ${alt}`} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--title-accent)]"><Image src={src} alt={alt} width={1440} height={900} preload={priority} sizes="(max-width: 1023px) 100vw, 1280px" className="h-auto w-full rounded-[calc(var(--panel-radius)-0.5rem)]" /></a></figure>;
}

function Decision({ title, body }: { title: string; body: string }) {
  return <div><h3 className="font-display text-xl font-medium tracking-[-0.02em]">{title}</h3><p className="mt-3 text-base leading-7 text-custom-blue/75">{body}</p></div>;
}

function EvidenceList({ title, items }: { title: string; items: readonly string[] }) {
  return <div><h3 className="font-display text-xl font-medium text-white">{title}</h3><ul className="mt-4 space-y-4 text-sm leading-6 text-white/80">{items.map(item => <li key={item}>{item}</li>)}</ul></div>;
}
