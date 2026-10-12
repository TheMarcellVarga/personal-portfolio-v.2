"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { caseStudies } from "../data/case-studies";
import { projects } from "../data/projects";
import { PortfolioShell } from "./PortfolioShell";
import { PageIntro } from "./PageIntro";
import { OtherWorks } from "./OtherWorks";

const stages = [
  {
    label: "Focus", height: 934, title: "Keep your work in the foreground.",
    body: "The interval lives in the menu bar. Open the popover to check the time, choose how you feel, or take an earlier break.",
    decision: "A small utility should fit around work. The main interaction stays one click away, without a separate dashboard.",
    image: "/images/focusin/loop-focus.webp", alt: "Focusin focusing popover with state and duration selectors and a recommended micro-break",
  },
  {
    label: "Break due", height: 932, title: "Make the next action obvious.",
    body: "When the interval ends, the status changes to break due. One recommendation is ready; the primary action starts it.",
    decision: "The state changes inside the app even when notifications are denied. Quiet hours silence reminders without stopping the loop.",
    image: "/images/focusin/loop-due.webp", alt: "Focusin break-due popover with a clear Take Break action and a recommended activity",
  },
  {
    label: "Reset", height: 1018, title: "One small thing to do now.",
    body: "A time-bounded activity replaces the reminder with an instruction. Done and Skip keep the user in control.",
    decision: "State and available time narrow a reviewed, bundled catalog. Office-safe and mindfulness preferences remain hard constraints.",
    image: "/images/focusin/loop-reset.webp", alt: "Focusin active break in dark appearance with activity instructions, progress, Done and Skip actions",
  },
] as const;

const scenarios = [
  { label: "After sleep", title: "Time catches up when the Mac wakes.", trigger: "The focus deadline passes while the Mac is asleep.", result: "On wake, Focusin reconciles elapsed time and enters break due.", reason: "Dates are persisted; a missed countdown tick cannot extend the interval." },
  { label: "Notifications denied", title: "The break is still there.", trigger: "The user declines notification permission.", result: "The menu bar and popover still show break due. Settings offers a permission recovery action.", reason: "Reminders are an optional delivery channel around a working local loop." },
  { label: "Activity removed", title: "Recover without swapping the activity.", trigger: "An active break’s activity is missing from the restored catalog.", result: "Focusin returns to break due instead of substituting a different activity mid-break.", reason: "A persisted activity ID protects the identity of the user’s chosen reset." },
] as const;

export default function FocusinCaseStudy() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeScenario, setActiveScenario] = useState(0);
  const stage = stages[activeStage];
  const scenario = scenarios[activeScenario];
  const record = caseStudies.focusin;
  const project = projects.find(item => item.caseStudyId === "focusin")!;

  return (
    <PortfolioShell className="case-study-page aperture-case focusin-case" activeSection="Work" backLink={{ href: "/#work", label: "Back to work" }}>
      <main id="main-content" className="portfolio-main page-gutter">
        <div className="portfolio-container">
          <section aria-label="Project introduction" className="focusin-introduction">
            <PageIntro eyebrow="Project / Case study" title={<>Focusin. A small break,<br />a clearer <span className="title-accent">return.</span></>} description="A native macOS companion for the moment between focus and fatigue." />
            <div className="aperture-intro-row">
              <p>I designed and built a menu bar utility that turns “I need a break” into one practical action. Choose how you feel and how much time you have. The rest stays small.</p>
              <a href="#focusin-product" className="portfolio-button">Explore the loop <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
            <dl className="aperture-meta">
              <div><dt>Role</dt><dd>Product design + native macOS engineering</dd></div>
              <div><dt>Platform</dt><dd>macOS 14+ · SwiftUI + AppKit</dd></div>
              <div><dt>Experience</dt><dd data-case-study-status="focusin">{project.status}</dd></div>
            </dl>
            <figure className="aperture-hero">
              <Image src="/images/focusin/focusin-loop-hero.webp" alt="Focusin’s native popover moving from a focus interval to an active micro-break, in light and dark appearance" width={2400} height={1350} sizes="(max-width: 1280px) 100vw, 1280px" preload />
              <figcaption>Local engineering captures arranged to show the loop. Debug fixtures; unsigned build, not release media.</figcaption>
            </figure>
          </section>

          <nav aria-label="Case study sections" className="aperture-section-nav">
            <a href="#focusin-brief">The brief</a><a href="#focusin-product">Explore the loop</a><a href="#focusin-updates">Recent work</a><a href="#focusin-engineering">Under the surface</a>
          </nav>

          <section id="focusin-brief" className="portfolio-section aperture-brief" data-case-study-evidence="focusin">
            <h2 className="section-heading">A reminder says when.<br />Focusin helps with <span className="title-accent">what.</span></h2>
            <div className="aperture-brief-copy">
              <p>When attention is running low, choosing a useful break can feel like another task. I reduced that decision to two inputs: your current state and the time you have.</p>
              <p>One optional reset, close to the work. No account, streak pressure, or network connection. General-wellness prompts, without clinical promises.</p>
            </div>
          </section>

          <section id="focusin-product" className="pb-[var(--section-space)]">
            <h2 className="section-heading">Focus. Reset.<br /><span className="title-accent">Get back to it.</span></h2>
            <p className="aperture-section-lead">Choose a moment to inspect the actual interface. Completing, skipping, or finishing a timed break starts the next focus interval.</p>
            <div role="group" aria-label="Focusin walkthrough stages" className="aperture-selector">
              {stages.map((item, index) => <button key={item.label} type="button" aria-pressed={activeStage === index} aria-controls="focusin-screen" onClick={() => setActiveStage(index)}>{item.label}</button>)}
            </div>
            <div id="focusin-screen" className="aperture-walkthrough focusin-walkthrough">
              <figure>
                <div className="focusin-capture-stage">
                  <Image src={stage.image} alt={stage.alt} width={768} height={stage.height} sizes="(max-width: 767px) 90vw, 420px" className="focusin-capture" />
                </div>
                <figcaption>September opaque-panel refinement · deterministic engineering fixture. Screen selection illustrates the app; it does not run a timer.</figcaption>
              </figure>
              <div className="aperture-screen-copy" aria-live="polite" aria-atomic="true">
                <h3>{stage.title}</h3><p>{stage.body}</p>
                <div className="aperture-design-decision"><h4>Why I designed it this way</h4><p>{stage.decision}</p></div>
              </div>
            </div>
          </section>

          <section id="focusin-updates" className="pb-[var(--section-space)]">
            <h2 className="section-heading">Small on screen.<br /><span className="title-accent">Considered in use.</span></h2>
            <p className="aperture-section-lead">Recent work made the surfaces quieter, the controls easier to access, and recovery more explicit.</p>
            <div className="focusin-refinements">
              <article><h3>A surface that holds its own.</h3><p>Opaque semantic panels keep desktop colors from bleeding through the popover. Light and dark appearances retain clear status, instructions, and actions.</p></article>
              <article><h3>A timer that doesn’t talk every second.</h3><p>Stable VoiceOver progress semantics avoid countdown chatter. Settings actions expose named buttons, and larger text expands the layout.</p></article>
            </div>
            <figure className="focusin-settings">
              <a href="/images/focusin/settings-and-resilience.webp" target="_blank" rel="noreferrer" aria-label="Inspect the full-size Focusin Settings capture (opens in a new tab)">
                <Image src="/images/focusin/settings-and-resilience.webp" alt="Focusin native Activities and System settings with recommendation preferences and platform recovery controls" width={2000} height={1300} sizes="(max-width: 1280px) 100vw, 1280px" />
              </a>
              <figcaption>July Settings engineering fixtures. Historical supporting evidence; these captures predate the September popover refinement. <a href="/images/focusin/settings-and-resilience.webp" target="_blank" rel="noreferrer">Inspect full-size capture (new tab)</a>.</figcaption>
            </figure>
          </section>

          <section id="focusin-engineering" className="pb-[var(--section-space)]">
            <h2 className="section-heading">Desktop life is messy.<br />The loop should <span className="title-accent">recover.</span></h2>
            <p className="aperture-section-lead">Select a situation to see the implemented behavior. These are explanations of the state contract, not live native-app simulations.</p>
            <div className="aperture-geography focusin-recovery">
              <div role="group" aria-label="Recovery scenarios" className="aperture-selector focusin-scenarios">
                {scenarios.map((item, index) => <button key={item.label} type="button" aria-pressed={activeScenario === index} aria-controls="focusin-recovery-result" onClick={() => setActiveScenario(index)}>{item.label}</button>)}
              </div>
              <div id="focusin-recovery-result" className="focusin-recovery-result" aria-live="polite" aria-atomic="true">
                <h3>{scenario.title}</h3>
                <dl><div><dt>What happens</dt><dd>{scenario.trigger}</dd></div><div><dt>How it recovers</dt><dd>{scenario.result}</dd></div></dl>
                <p>{scenario.reason}</p>
              </div>
            </div>
            <div className="dark-panel aperture-engineering">
              <h3>A local core, with optional platform services.</h3>
              <ol className="aperture-architecture" aria-label="Focusin application responsibilities">
                <li><h4>Native interface</h4><p>SwiftUI popover and Settings; AppKit handles desktop lifecycle events.</p><ArrowRight aria-hidden="true" /></li>
                <li><h4>One state owner</h4><p>A MainActor store reconciles deadlines, activity identity, and reminders.</p><ArrowRight aria-hidden="true" /></li>
                <li><h4>Local persistence</h4><p>Codable settings and daily history; 21 bundled, reviewed activities.</p></li>
              </ol>
              <div className="aperture-release">
                <div><h4>What is verified</h4><p>The recorded baseline covers 54 deterministic tests. Recorded native appearance and accessibility checks support the design.</p><p className="aperture-dark-note">Source-repository evidence, not usability or adoption metrics.</p></div>
                <div><h4>What comes next</h4><p>Signing, exact-candidate platform checks, and the planned 5–8 person beta. No App Store release or user outcomes yet.</p></div>
              </div>
              <details className="aperture-evidence-details">
                <summary>Verification evidence and release boundaries<ChevronDown size={18} aria-hidden="true" /></summary>
                <div className="aperture-evidence-expanded"><div><h4>Recorded checks</h4><ul>{record.verification.map(item => <li key={item}>{item}</li>)}</ul></div><div><h4>Still open</h4><ul>{record.limitations.map(item => <li key={item}>{item}</li>)}</ul></div></div>
              </details>
            </div>
          </section>
          <OtherWorks currentProjectTitle={project.title} />
        </div>
      </main>
    </PortfolioShell>
  );
}
