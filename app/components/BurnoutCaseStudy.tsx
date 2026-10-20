"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { caseStudies } from "../data/case-studies";
import { projects } from "../data/projects";
import { PortfolioShell } from "./PortfolioShell";
import { PageIntro } from "./PageIntro";
import { OtherWorks } from "./OtherWorks";
import styles from "./BurnoutCaseStudy.module.css";

const source = "https://github.com/TheMarcellVarga/burnout3-ios";
const baseline = "b27cd98";
const proofUrl = `${source}/blob/${baseline}/docs/GPU_STATUS.md`;
const presets = [
  {
    label: "Faster preset", build: "Build 45", image: "/images/burnout3/race-fast-preset.webp",
    title: "Keep the road. Simplify the reflections.",
    body: "Original meshes, textures, LOD and camera distances stay. Live reflection cameras and overlays are omitted, and post effects are reduced. Paint and glass look flatter.",
    minimum: "47.0", median: "59.9",
    caption: "Build 45 · captured race output · faster preset.",
  },
  {
    label: "Live reflections", build: "Build 46", image: "/images/burnout3/race-live-reflections.webp",
    title: "Bring back the shine. Pay for the extra work.",
    body: "Restoring live reflection passes brings back the car’s reflective paint and glass. The recorded race slows in busy sections; reduced post effects remain.",
    minimum: "24.7", median: "48.55",
    caption: "Build 46 · captured race output · live reflections.",
  },
] as const;

export default function BurnoutCaseStudy() {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const preset = presets[selectedPreset];
  const project = projects.find(item => item.caseStudyId === "burnout3-ios")!;
  const record = caseStudies["burnout3-ios"];

  return (
    <PortfolioShell className={`case-study-page aperture-case ${styles.case}`} activeSection="Work" backLink={{ href: "/#work", label: "Back to work" }}>
      <main id="main-content" className="portfolio-main page-gutter">
        <div className="portfolio-container">
          <section aria-label="Project introduction">
            <PageIntro eyebrow="Side project / iOS port" title={<>Burnout 3: <span className="title-accent">Takedown</span></>} description="An experimental iOS port of Burnout 3: Takedown." />
            <figure className={styles.heroCapture} data-recorded-game-frame>
              <Image src="/images/burnout3/gameplay-controller-20261019.webp" alt="Burnout 3: Takedown gameplay on iPhone with the actual native analog sticks, D-pad, face buttons and shoulder controls visible" width={2796} height={1290} sizes="(max-width: 1280px) 90vw, 1280px" preload />
              <figcaption>Full-screen iPhone 15 Pro Max capture · 19 October 2026 · recorded race replay with the native touch controls visible.</figcaption>
            </figure>
            <div className="aperture-intro-row">
              <p>I wanted this game in my pocket. Starting with the existing burnout3-pc project, I worked on the Apple port, the touch experience and the performance tradeoffs that make it usable on a phone.</p>
              <a href={source} target="_blank" rel="noreferrer" className="portfolio-button">Explore the source <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <dl className="aperture-meta">
              <div><dt>My contribution</dt><dd>Apple port + touch interaction</dd></div>
              <div><dt>Test device</dt><dd>iPhone 15 Pro Max · 2026</dd></div>
              <div><dt>Experience</dt><dd data-case-study-status="burnout3-ios">{project.status} · experimental</dd></div>
            </dl>
          </section>

          <nav aria-label="Case study sections" className="aperture-section-nav">
            <a href="#burnout-interaction">Making it feel native</a><a href="#burnout-tradeoff">The graphics tradeoff</a><a href="#burnout-engineering">What’s underneath</a>
          </nav>

          <section id="burnout-interaction" className={`portfolio-section ${styles.interaction}`} data-case-study-evidence="burnout3-ios">
            <div>
              <h2 className="section-heading">Booting was the start.<br /><span className="title-accent">Touch came next.</span></h2>
              <p className="aperture-section-lead">A game made for a controller needs more than buttons drawn on a screen.</p>
            </div>
            <div>
              <figure className={styles.controllerCapture} data-native-controller-capture>
                <Image src="/images/burnout3/gameplay-controller-detail-20261019.webp" alt="Actual iPhone gameplay capture with the native two-stick controller and translucent buttons" width={2796} height={1290} sizes="(max-width: 1023px) 90vw, 640px" />
                <figcaption>Actual controller during a race replay · captured on iPhone, 19 October 2026.</figcaption>
              </figure>
              <ol className={styles.decisions}>
              <li><h3>Keep steering immediate.</h3><p>Proportional analog input, a small center dead zone and simultaneous accelerator input. Releasing the stick clears game input immediately; its visual spring settles separately.</p></li>
              <li><h3>Get the setup out of the way.</h3><p>Import a supported ISO once through Files. Later launches go straight into the game, with a local memory card that survives app restarts and updates.</p></li>
              <li><h3>Give the screen back to the race.</h3><p>The landscape controls fade to 24% opacity at rest and brighten while held. Device audio and direct Metal presentation complete the native shell.</p></li>
              </ol>
            </div>
          </section>

          <section id="burnout-tradeoff" className="pb-[var(--section-space)]">
            <h2 className="section-heading">A faster race.<br /><span className="title-accent">A visible tradeoff.</span></h2>
            <p className="aperture-section-lead">Explore two historical rendering experiments. These renderer-only captures omit the app controls and show different replay moments.</p>
            <div role="group" aria-label="Recorded graphics presets" className="aperture-selector">
              {presets.map((item, index) => <button key={item.label} type="button" aria-pressed={selectedPreset === index} aria-controls="burnout-preset" onClick={() => setSelectedPreset(index)}>{item.label}<span className={styles.buildLabel}>{item.build}</span></button>)}
            </div>
            <div id="burnout-preset" className={styles.preset}>
              <figure>
                <div className={styles.raceFrame}><Image src={preset.image} alt={preset.caption} width={640} height={448} sizes="(max-width: 767px) 90vw, 760px" /></div>
                <figcaption>{preset.caption} iPhone 15 Pro Max.</figcaption>
              </figure>
              <div className={styles.presetCopy} aria-live="polite" aria-atomic="true">
                <h3>{preset.title}</h3><p>{preset.body}</p>
                <table className={styles.measurement}>
                  <caption>Recorded main-scene submissions / second</caption>
                  <thead><tr><th scope="col">Minimum</th><th scope="col">Median</th></tr></thead>
                  <tbody><tr><td>{preset.minimum}</td><td>{preset.median}</td></tr></tbody>
                </table>
                <p className={styles.measurementNote}>42 two-second intervals per run · Serious thermal state. Scene submissions measure new world rendering, separately from simulation ticks or screen refreshes.</p>
                <a className={styles.textLink} href={proofUrl} target="_blank" rel="noreferrer">Read the recorded evidence <ArrowUpRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
            <p className={styles.currentStatus}><strong>Where it stands:</strong> the current proof of concept prioritizes the faster preset and original camera distances. A later short test recorded 42.9 minimum / 51.85 median scene submissions per second. Stable 50–60 FPS remains work in progress.</p>
          </section>

          <section id="burnout-engineering" className="pb-[var(--section-space)]">
            <div className="dark-panel aperture-engineering">
              <h2 className="section-heading text-white">An existing foundation.<br />An Apple-shaped challenge.</h2>
              <p className="aperture-engineering-lead">The technical term is ahead-of-time recompilation: this port uses the PlayStation 2 version of the game, translating its instructions and compiling them for ARM64 before the app runs.</p>
              <ol className="aperture-architecture" aria-label="Native port architecture">
                <li><h3>PS2 version + upstream</h3><p>The player’s disc and burnout3-pc supply the game and recompilation foundation.</p><ArrowRight aria-hidden="true" /></li>
                <li><h3>Apple ARM64 host</h3><p>Translated C++, runtime adapters and compiled VU programs, with interpreter fallback.</p><ArrowRight aria-hidden="true" /></li>
                <li><h3>iPhone experience</h3><p>UIKit touch controls, AVAudioEngine, local saves and Vulkan through MoltenVK / Metal.</p></li>
              </ol>
              <div className="aperture-release">
                <div><h3>Measure the change.</h3><p>Seven Mac regression groups and device GPU/math checks are recorded. One graphics optimization preserved the captured race image and all 4 MiB of graphics memory byte for byte.</p></div>
                <div><h3>Keep the scope honest.</h3><p>A personal porting experiment built on upstream work. Recorded races run on a physical phone; full-game compatibility, sustained performance and audio still need broader validation.</p></div>
              </div>
              <details className="aperture-evidence-details">
                <summary>Verification, limitations and credits<ChevronDown size={18} aria-hidden="true" /></summary>
                <div className="aperture-evidence-expanded">
                  <div><h4>Recorded verification</h4><ul>{record.verification.map(item => <li key={item}>{item}</li>)}</ul></div>
                  <div><h4>Still experimental</h4><ul>{record.limitations.map(item => <li key={item}>{item}</li>)}</ul></div>
                </div>
                <p className={styles.credits}>Built on <a href="https://github.com/danielgomesvieira2000/burnout3-pc" target="_blank" rel="noreferrer">burnout3-pc</a> and its PS2 recompilation engine. Burnout 3: Takedown is the Criterion Games / Electronic Arts title. Game imagery here is captured project evidence; no game binaries, ISO or app download are offered. Content baseline: committed source <a href={`${source}/tree/${baseline}`} target="_blank" rel="noreferrer">{baseline}</a>.</p>
              </details>
            </div>
          </section>
          <OtherWorks currentProjectTitle={project.title} />
        </div>
      </main>
    </PortfolioShell>
  );
}
