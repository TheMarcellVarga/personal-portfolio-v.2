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
const baseline = "b4cd396f5536f5bcaf33d5e3a6e624c01709abf5";
const proofUrl = `${source}/blob/${baseline}/ios/OPTIMIZATION.md`;
const screens = [
  {
    label: "Game menu", build: "Build 9", image: "/images/burnout3/xbox-pause-menu-20261023.webp",
    title: "Start from the game’s own menu.",
    body: "An IOS SETTINGS entry joins the original settings and race pause menus. It opens the native panel without replacing the game’s actions or breaking its existing Quit confirmation.",
    caption: "Original pause menu with IOS SETTINGS inserted before Quit",
    decision: "The game keeps its familiar navigation. The phone-specific choices have a clear home.",
  },
  {
    label: "iOS settings", build: "Build 9", image: "/images/burnout3/xbox-settings-20261023.webp",
    title: "Make the phone-specific choices understandable.",
    body: "Render resolution and picture shape sit beside control size, visibility, layout, steering response and automatic acceleration. Touch choices update immediately; display changes wait for the next app launch.",
    caption: "Native iOS settings with display and touch preferences and a Launcher action",
    decision: "Persistent choices replace desktop-only settings, with reset kept separate from game files and saved profiles.",
  },
  {
    label: "Resume game", build: "Build 9", image: "/images/burnout3/xbox-resume-launcher-20261023.webp",
    title: "Leave the race without losing the session.",
    body: "Launcher returns to the native shell with Resume game. The guest GPU and audio pause while the live runtime stays in memory. The game’s Save Profile still handles progress that must survive closing the app.",
    caption: "Native launcher offering Resume game while the current session is paused",
    decision: "Settings, Launcher and Background own separate holds, so dismissing one cannot accidentally resume another.",
  },
] as const;

export default function BurnoutCaseStudy() {
  const [activeScreen, setActiveScreen] = useState(0);
  const screen = screens[activeScreen];
  const project = projects.find(item => item.caseStudyId === "burnout3-ios")!;
  const record = caseStudies["burnout3-ios"];

  return (
    <PortfolioShell className={`case-study-page aperture-case ${styles.case}`} activeSection="Work" backLink={{ href: "/#work", label: "Back to work" }}>
      <main id="main-content" className="portfolio-main page-gutter">
        <div className="portfolio-container">
          <section aria-label="Project introduction">
            <PageIntro eyebrow="Side project / iOS port" title={<>Burnout 3: <span className="title-accent">Takedown</span> for iOS</>} description="A console racer, adapted for the way a phone is held." />
            <figure className={styles.heroCapture} data-recorded-game-frame data-native-controller-capture>
              <Image src="/images/burnout3/xbox-hybrid-controls-20261023.webp" alt="Xbox-based Burnout 3 running on iPhone with the actual faint steering stick and GAS, BRAKE, BOOST, CRASH, LOOK and VIEW controls" width={2796} height={1290} sizes="(max-width: 1280px) 90vw, 1280px" preload />
              <figcaption>Full-screen iPhone 15 Pro Max capture · Xbox-based build 10 · 23 October 2026 · actual native touch controls visible.</figcaption>
            </figure>
            <div className="aperture-intro-row">
              <p>I wanted this game in my pocket. What began as a PS2 port became an Xbox-based iOS app built on Takedawn and xboxrecomp. My work connects the runtime and direct Metal rendering to the controls, setup and session flows around a race.</p>
              <a href={`${source}/tree/main`} target="_blank" rel="noreferrer" className="portfolio-button">Explore the source <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <dl className="aperture-meta">
              <div><dt>My contribution</dt><dd>iOS port + interaction engineering</dd></div>
              <div><dt>Test device</dt><dd>iPhone 15 Pro Max · 2026</dd></div>
              <div><dt>Experience</dt><dd data-case-study-status="burnout3-ios">{project.status} · experimental</dd></div>
            </dl>
          </section>

          <nav aria-label="Case study sections" className="aperture-section-nav">
            <a href="#burnout-evolution">The project evolved</a><a href="#burnout-interaction">Touch controls</a><a href="#burnout-session">Around the race</a><a href="#burnout-performance">Measured changes</a><a href="#burnout-engineering">What’s underneath</a>
          </nav>

          <section id="burnout-evolution" className={`portfolio-section ${styles.interaction}`}>
            <div>
              <h2 className="section-heading">A different foundation.<br /><span className="title-accent">The same intent.</span></h2>
              <p className="aperture-section-lead">The original PS2 experiment proved the Apple port and touch direction. The next step was choosing a stronger base for the current app.</p>
            </div>
            <div className={styles.evolutionCopy}>
              <p>I moved the main implementation to the Xbox-based Takedawn runtime. That meant adapting its Metal backend, memory aliases, file paths and window lifecycle to iOS, while carrying forward what worked about the earlier interaction design.</p>
              <p>The two implementations have different renderers, saves and performance metrics. I kept the PS2 source on a legacy branch rather than presenting its older graphics experiments as measurements of the new app.</p>
              <a className={styles.textLink} href={`${source}/tree/ps2-legacy`} target="_blank" rel="noreferrer">Explore the PS2 origin <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </section>

          <section id="burnout-interaction" className={`portfolio-section ${styles.interaction}`} data-case-study-evidence="burnout3-ios">
            <div>
              <h2 className="section-heading">A controller’s response.<br /><span className="title-accent">A thumb’s reach.</span></h2>
              <p className="aperture-section-lead">Keep the steering immediate, the driving actions close together and the controls quiet enough to see the road.</p>
            </div>
            <ol className={styles.decisions}>
              <li><h3>Start neutral. Release immediately.</h3><p>Touching the stick off-center does not suddenly steer the car. Movement after pickup drives the input; lifting clears it immediately. Only the visible knob springs back, with Reduce Motion respected.</p></li>
              <li><h3>Let one thumb stay on the driving actions.</h3><p>GAS, BRAKE and BOOST form a compact cluster. Sliding from gas to boost keeps acceleration held, while another finger steers. Standard, Gentle and Quick responses all retain full steering travel.</p></li>
              <li><h3>Give the screen back to the race.</h3><p>The faint PS2-style treatment carries into the new overlay. Controls brighten when held, and action names replace extra Xbox button badges. The earlier Xbox layout remains available for comparison.</p></li>
            </ol>
          </section>

          <section id="burnout-session" className="pb-[var(--section-space)]">
            <h2 className="section-heading">The race is one part.<br /><span className="title-accent">The app has to hold together.</span></h2>
            <p className="aperture-section-lead">Recorded screens show how the original game menus connect to native iOS settings and a resumable launcher.</p>
            <div role="group" aria-label="Recorded iOS session screens" className="aperture-selector">
              {screens.map((item, index) => <button key={item.label} type="button" aria-pressed={activeScreen === index} aria-controls="burnout-session-screen" onClick={() => setActiveScreen(index)}>{item.label}<span className={styles.buildLabel}>{item.build}</span></button>)}
            </div>
            <div id="burnout-session-screen" className={styles.preset}>
              <figure>
                <div className={styles.raceFrame}><Image src={screen.image} alt={screen.caption} width={2796} height={1290} sizes="(max-width: 767px) 90vw, 760px" /></div>
                <figcaption>{screen.caption} · iPhone capture, 23 October 2026.</figcaption>
              </figure>
              <div className={styles.presetCopy} aria-live="polite" aria-atomic="true">
                <h3>{screen.title}</h3><p>{screen.body}</p><p>{screen.decision}</p>
              </div>
            </div>
            <p className={styles.currentStatus}><strong>Setup matters too.</strong> The Files importer stages an extracted Xbox folder and verifies all 716 files against the supported release before moving it into place. Failed validation preserves existing files; app updates keep the Xbox save container.</p>
          </section>

          <section id="burnout-performance" className={`portfolio-section ${styles.interaction}`}>
            <div>
              <h2 className="section-heading">Spend less time waiting.<br /><span className="title-accent">Keep the timing in view.</span></h2>
              <p className="aperture-section-lead">I compared the inherited pacing spin with shorter waits and stopped repainting unchanged controls.</p>
            </div>
            <div className={styles.presetCopy}>
              <table className={styles.measurement}>
                <caption>23 October · short main-menu experiment · iPhone 15 Pro Max</caption>
                <thead><tr><th scope="col">Pacing spin lead</th><th scope="col">Mean CPU*</th><th scope="col">Flip p95</th></tr></thead>
                <tbody><tr><th scope="row">8 ms</th><td>76.92%</td><td>16.760 ms</td></tr><tr><th scope="row">4 ms</th><td>52.98%</td><td>16.744 ms</td></tr></tbody>
              </table>
              <p className={styles.measurementNote}>*Whole-process CPU as a percentage of one core. Five five-second windows per setting, sequential runs on a warm phone in Fair/Serious thermal states. The recent guest-flip p95 is not an optical display measurement.</p>
              <p>The 4 ms setting became the default. A 1 ms experiment reduced CPU work too, but its timing was less consistent. These samples support a pacing choice; they do not establish battery-life gains.</p>
              <p>A separate, roughly 155-second race sample recorded 59.9–60.1 Metal presentations per second. Complete races and sustained thermals still need more testing.</p>
              <a className={styles.textLink} href={proofUrl} target="_blank" rel="noreferrer">Read the measurement scope <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </section>

          <section id="burnout-engineering" className="pb-[var(--section-space)]">
            <div className="dark-panel aperture-engineering">
              <h2 className="section-heading text-white">An existing foundation.<br />An iPhone-shaped challenge.</h2>
              <p className="aperture-engineering-lead">Ahead-of-time recompilation translates the supported Xbox executable into C, then compiles it for ARM64 before the app runs. Takedawn and xboxrecomp supply the foundation; the iOS adaptation makes it work within the phone’s lifecycle and sandbox.</p>
              <ol className="aperture-architecture" aria-label="Native port architecture">
                <li><h3>Xbox game + upstream</h3><p>The player supplies the supported USA release. Pinned Takedawn, xboxrecomp and SDL revisions make the build inputs inspectable.</p><ArrowRight aria-hidden="true" /></li>
                <li><h3>iOS runtime + Metal</h3><p>ARM64 code, sandbox-backed memory aliases, case-folded Xbox paths and scene-backed windows feed the direct Metal presenter.</p><ArrowRight aria-hidden="true" /></li>
                <li><h3>The phone experience</h3><p>UIKit controls, validated imports, persistent preferences and independently owned session holds connect the game to the launcher.</p></li>
              </ol>
              <div className="aperture-release">
                <div><h3>Test the boundaries.</h3><p>Seven host suites cover input, imports, session ownership, menu dispatch, memory aliases and ARM64 MMIO. Scripted device checks separately exercise race input, save/reload and launcher/resume.</p></div>
                <div><h3>Keep the unfinished work visible.</h3><p>A HUD rendering defect remains. The paused runtime still consumes CPU, and physical touch comfort, Files-provider integration, audio and long-session behavior need broader validation.</p></div>
              </div>
              <details className="aperture-evidence-details">
                <summary>Verification, limitations and credits<ChevronDown size={18} aria-hidden="true" /></summary>
                <div className="aperture-evidence-expanded">
                  <div><h4>Recorded verification</h4><ul>{record.verification.map(item => <li key={item}>{item}</li>)}</ul></div>
                  <div><h4>Still experimental</h4><ul>{record.limitations.map(item => <li key={item}>{item}</li>)}</ul></div>
                </div>
                <p className={styles.credits}>Current implementation built on <a href="https://github.com/xenophobentx/takedawn" target="_blank" rel="noreferrer">Takedawn</a> and <a href="https://github.com/xenophobentx/xboxrecomp" target="_blank" rel="noreferrer">xboxrecomp</a>. The earlier PS2 work built on <a href="https://github.com/danielgomesvieira2000/burnout3-pc" target="_blank" rel="noreferrer">burnout3-pc</a>. Burnout 3: Takedown is the Criterion Games / Electronic Arts title. Captures are genuine project evidence; no game or app download is offered. Content baseline: <a href={`${source}/tree/${baseline}`} target="_blank" rel="noreferrer">b4cd396 · 27 October 2026</a>. Device captures are from 23 October, not a new benchmark run.</p>
              </details>
            </div>
          </section>
          <OtherWorks currentProjectTitle={project.title} />
        </div>
      </main>
    </PortfolioShell>
  );
}
