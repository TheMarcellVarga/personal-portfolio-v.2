"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { caseStudies } from "../data/case-studies";
import { projects } from "../data/projects";
import { useClientReducedMotion } from "../hooks/useClientReducedMotion";
import { PortfolioShell } from "./PortfolioShell";
import { PageIntro } from "./PageIntro";
import { OtherWorks } from "./OtherWorks";

const screens = [
  {
    label: "Discover", file: "discover.png",
    alt: "Endless Activity Discover deck with a realistic activity and visible save and skip controls",
    title: "One idea. Two easy answers.",
    body: "Cook from what you already have. Thirty minutes, indoors, medium energy. Enough context to decide before opening another screen.",
    decision: "Swipe right to save, left to skip. Visible buttons and named VoiceOver actions do the same job; a partial drag springs back.",
    outcome: "Save and skip advance the deck and persist locally.",
  },
  {
    label: "Details", file: "detail.png",
    alt: "Endless Activity activity detail sheet with materials, steps, and safety guidance",
    title: "Turn an idea into a next step.",
    body: "A native sheet adds the materials, steps, and safety guidance needed to try the activity.",
    decision: "The deck stays quick to scan. More detail appears on request, with a save action in the same sheet.",
    outcome: "The card helps you choose. The sheet helps you start.",
  },
  {
    label: "Saved", file: "saved.png",
    alt: "Endless Activity saved activity collection",
    title: "Keep the ideas worth coming back to.",
    body: "Saved is a small collection you can reopen, inspect, or clear one idea at a time. It survives closing the app.",
    decision: "A save has a durable destination. Removing an idea works from the list or its detail sheet, using native controls.",
    outcome: "Relaunching restores the collection from local storage.",
  },
  {
    label: "Preferences", file: "preferences.png",
    alt: "Endless Activity native preference controls for time, cost, energy, setting, company, and category",
    title: "Make the next idea fit your day.",
    body: "Have less time or energy? Adjust practical constraints and return to a deck that respects them.",
    decision: "No questionnaire before the first card. Filters persist immediately; resetting them keeps activity history intact.",
    outcome: "An empty deck offers recovery: relax filters or reset skipped ideas.",
  },
] as const;

export default function EndlessActivityCaseStudy() {
  const [activeScreen, setActiveScreen] = useState(0);
  const reducedMotion = useClientReducedMotion();
  const screen = screens[activeScreen];
  const project = projects.find(item => item.caseStudyId === "endless-activity")!;
  const record = caseStudies["endless-activity"];

  return (
    <PortfolioShell className="case-study-page aperture-case endless-case" activeSection="Work" backLink={{ href: "/#work", label: "Back to work" }}>
      <main id="main-content" className="portfolio-main page-gutter">
        <div className="portfolio-container">
          <section aria-label="Project introduction" className="endless-introduction">
            <PageIntro eyebrow="Project / Case study" title={<>Endless <span className="title-accent">Activity</span></>} description="Less looking. Something worth doing." />
            <div className="aperture-intro-row">
              <p>A native iOS app I designed and built for the moment you want to do something, but don’t know what. Open it, choose an idea, get on with your day.</p>
              <a href="#endless-product" className="portfolio-button">Explore the app <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
            <figure className="endless-hero">
              <div className="dark-panel endless-hero-stage">
                {[screens[1], screens[0], screens[2]].map((item, index) => (
                  <div className={`endless-device endless-hero-device endless-device-${index}`} key={item.file}>
                    <Image src={`/images/endless-activity/${item.file}`} alt={index === 1 ? item.alt : ""} width={1170} height={2532} sizes="(max-width: 767px) 240px, 280px" preload={index === 1} />
                  </div>
                ))}
              </div>
              <figcaption>Discover, details, and Saved. Real simulator captures from the working SwiftUI app; these precede the October layout refinements.</figcaption>
            </figure>
            <dl className="aperture-meta">
              <div><dt>My role</dt><dd>Product design + native iOS engineering</dd></div>
              <div><dt>Built with</dt><dd>SwiftUI · Swift · bundled JSON</dd></div>
              <div><dt>Experience</dt><dd data-case-study-status="endless-activity">{project.status}</dd></div>
            </dl>
          </section>

          <nav aria-label="Case study sections" className="aperture-section-nav">
            <a href="#endless-brief">The idea</a><a href="#endless-product">Explore the app</a><a href="#endless-refinements">Recent refinements</a><a href="#endless-engineering">Under the surface</a>
          </nav>

          <section id="endless-brief" className="portfolio-section aperture-brief" data-case-study-evidence="endless-activity">
            <h2 className="section-heading">“I’m bored” isn’t<br />a <span className="title-accent">search query.</span></h2>
            <div className="aperture-brief-copy">
              <p>Search works when you know what you want. I built Endless Activity for the opposite moment: a little free time and no particular plan.</p>
              <p>The first screen gives you one doable suggestion. Time, cost, and energy help you decide. Nothing stands between opening the app and the first idea.</p>
              <p className="aperture-audience">A solo-first, offline MVP with 50 curated activities.</p>
            </div>
          </section>

          <section id="endless-product" className="pb-[var(--section-space)]">
            <h2 className="section-heading">From “maybe” to<br /><span className="title-accent">“let’s try that.”</span></h2>
            <p className="aperture-section-lead">Explore four moments in the app. Each screen pairs the interaction with the decision behind it.</p>
            <div role="group" aria-label="Endless Activity walkthrough stages" className="aperture-selector">
              {screens.map((item, index) => <button key={item.label} type="button" aria-pressed={activeScreen === index} aria-controls="endless-screen" onClick={() => setActiveScreen(index)}>{item.label}</button>)}
            </div>
            <div id="endless-screen" className="endless-walkthrough">
              <figure>
                <div className="endless-capture-stage">
                  <motion.div className="endless-device" key={screen.file} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }}>
                    <Image src={`/images/endless-activity/${screen.file}`} alt={screen.alt} width={1170} height={2532} sizes="(max-width: 767px) 240px, 290px" />
                  </motion.div>
                </div>
                <figcaption>Implemented iOS interface · historical simulator capture.</figcaption>
              </figure>
              <div className="endless-screen-copy" aria-live="polite" aria-atomic="true">
                <h3>{screen.title}</h3><p>{screen.body}</p>
                <div className="aperture-design-decision"><h4>The design decision</h4><p>{screen.decision}</p></div>
                <p className="endless-outcome"><ArrowRight size={18} aria-hidden="true" />{screen.outcome}</p>
              </div>
            </div>
          </section>

          <section className="endless-demo pb-[var(--section-space)]" aria-labelledby="endless-demo-title">
            <div>
              <h2 id="endless-demo-title" className="section-heading">The loop,<br /><span className="title-accent">in 24 seconds.</span></h2>
              <p className="aperture-section-lead">Discover an idea, look closer, save it, and tune what comes next.</p>
              <p className="endless-note">This walkthrough is assembled from verified simulator captures. It shows the implemented screens rather than a continuous gesture recording.</p>
            </div>
            <figure>
              <div className="dark-panel endless-video-stage">
                <video controls playsInline preload="none" poster="/images/endless-activity/discover.png" aria-label="Endless Activity 24-second screen walkthrough">
                  <source src="/images/endless-activity/endless-activity-demo.mp4" type="video/mp4" />
                  <track kind="captions" src="/images/endless-activity/endless-activity-demo.vtt" srcLang="en" label="English" default />
                  <a href="/images/endless-activity/endless-activity-demo.mp4">Download the walkthrough</a>
                </video>
              </div>
              <figcaption>Playback is optional. The selectable screens above cover the same flow.</figcaption>
            </figure>
          </section>

          <section id="endless-refinements" className="pb-[var(--section-space)]">
            <h2 className="section-heading">Small fixes.<br /><span className="title-accent">A more usable deck.</span></h2>
            <p className="aperture-section-lead">October refinements address what happens when the content or text size grows.</p>
            <div className="endless-refinements">
              <article><h3>Let the content set the height.</h3><p>Content-sized cards and independent scrolling replace the oversized fixed layout. Save and Skip stay visible at every text size.</p></article>
              <article><h3>Keep the next card quiet.</h3><p>Decorative back layers preserve the stacked-deck feel without letting another activity’s text leak around the active card.</p></article>
              <article><h3>Make the small labels count.</h3><p>Adaptive secondary text strengthens contrast across Discover, details, Saved, and Preferences.</p></article>
            </div>
            <p className="endless-note endless-refinement-note">Implemented 2 October 2026. App and test-target compilation recorded with the iOS 27 SDK; fresh simulator and large-text visual checks remain pending. The captures above show the earlier build.</p>
          </section>

          <section id="endless-engineering" className="pb-[var(--section-space)]">
            <div className="dark-panel aperture-engineering">
              <h2 className="section-heading text-white">A playful surface.<br />A predictable <span className="endless-light-accent">foundation.</span></h2>
              <p className="aperture-engineering-lead">Every swipe changes your deck. The source catalog stays intact.</p>
              <ol className="aperture-architecture" aria-label="Activity data flow">
                <li><h3>Curated catalog</h3><p>50 bundled activities, decoded and validated before use.</p><ArrowRight aria-hidden="true" /></li>
                <li><h3>Pure ranking</h3><p>Practical filters, saved-category and tag boosts, reproducible ordering.</p><ArrowRight aria-hidden="true" /></li>
                <li><h3>Local state</h3><p>SwiftUI deck state and a Codable UserDefaults store for signals and preferences.</p></li>
              </ol>
              <div className="aperture-release">
                <div><h3>Verification</h3><p><strong>12 unit tests. 7 UI tests.</strong></p><p className="aperture-dark-note">Recorded full simulator run: 28 June 2026. Catalog, ranking, save/skip, filters, details, and relaunch persistence. October corrections still need simulator re-verification.</p></div>
                <div><h3>Where it stands</h3><p>A working native MVP, built to run offline.</p><p className="aperture-dark-note">No App Store release or user-outcome claims. Accounts, live events, booking, and generated activities remain outside v1.</p></div>
              </div>
              <details className="aperture-evidence-details">
                <summary>Engineering evidence and tradeoffs<ChevronDown size={18} aria-hidden="true" /></summary>
                <div className="aperture-evidence-expanded">
                  <div><h4>What is protected</h4><ul>{record.verification.map(item => <li key={item}>{item}</li>)}</ul></div>
                  <div><h4>Deliberate tradeoffs</h4><ul><li>Bundled JSON keeps the app offline; catalog changes require an app update.</li><li>UserDefaults fits small local signals; it provides no cloud sync.</li><li>Rule-based ranking is inspectable; it does not learn a behavioral model.</li><li>Haptic feel and spoken VoiceOver quality still need device-level review.</li></ul></div>
                </div>
              </details>
              <Link href="/#contact" className="portfolio-button portfolio-button-light endless-contact-link">Talk about the project <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </div>
          </section>
          <OtherWorks currentProjectTitle={project.title} />
        </div>
      </main>
    </PortfolioShell>
  );
}
