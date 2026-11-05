"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { caseStudies } from "../data/case-studies";
import { caseStudyPages } from "../data/case-study-pages";
import { projects } from "../data/projects";
import { PortfolioShell } from "./PortfolioShell";
import { PageIntro } from "./PageIntro";
import { OtherWorks } from "./OtherWorks";

const walkthrough = [
  {
    label: "Markets",
    title: "Find what deserves a closer look.",
    body: "Filter across asset classes, inspect the confirmed trend, then open a study with the market context still attached.",
    decision: "When I revisit a number, I want to know where it came from and how current it is. Freshness, coverage, and confirmation stay beside the data.",
    image: "/images/ai-finance/aperture-markets.jpg",
    alt: "Aperture cross-market monitor showing provider-backed market states, freshness, filters, and research controls",
    caption: "Web workspace capture · market values are a historical snapshot.",
  },
  {
    label: "Portfolio",
    title: "Understand what you own.",
    body: "Enter your holdings, review their provider-backed value and allocation, then use that starting balance in a contribution-only goal scenario.",
    decision: "A missing portfolio and an unavailable service need different states. Empty portfolios allow entry; service outages disable changes and offer a retry.",
    image: "/images/ai-finance/aperture-portfolio.jpg",
    alt: "Aperture portfolio illustration showing holdings and allocation",
    caption: "Earlier public product illustration · historical ETF values, not a personal portfolio or a capture of the current authenticated interface.",
  },
  {
    label: "Learn",
    title: "Reward the research habit.",
    body: "Move from a market question into an evidence-led curriculum and a personal study record.",
    decision: "Progress recognizes learning and review discipline. It does not reward profit streaks, predictions, or risk-taking.",
    image: "/images/ai-finance/aperture-learn.jpg",
    alt: "Aperture education workspace showing an evidence-led curriculum and account-scoped study record",
    caption: "Web workspace capture · learning is part of the same five-destination shell.",
  },
] as const;

export default function ApertureCaseStudy() {
  const [activeScreen, setActiveScreen] = useState(0);
  const project = projects.find(item => item.caseStudyId === "aperture")!;
  const record = caseStudies.aperture;
  const screen = walkthrough[activeScreen];

  return (
    <PortfolioShell className="case-study-page aperture-case" activeSection="Work" backLink={{ href: "/#work", label: "Back to work" }}>
      <main id="main-content" className="portfolio-main page-gutter">
        <div className="portfolio-container">
          <section aria-label="Project introduction">
            <PageIntro
              eyebrow="Project / Case study"
              title={<>Aperture Financial <span className="title-accent">Intelligence</span></>}
              description="Markets, holdings, and goal scenarios in one focused workspace."
            />
            <div className="aperture-intro-row">
              <p>A financial research workspace I designed and built around five everyday jobs: Overview, Markets, Portfolio, Plan, and Learn. The latest pass favors a smaller working product with clear limits.</p>
              <Link href={caseStudyPages.aperture.demoUrl!} target="_blank" rel="noreferrer" className="portfolio-button">
                Visit web preview <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <dl className="aperture-meta">
              <div><dt>Role</dt><dd>Product design + full-stack engineering</dd></div>
              <div><dt>Year</dt><dd>2026</dd></div>
              <div><dt>Experience</dt><dd data-case-study-status="aperture">{project.status}</dd></div>
            </dl>
            <figure className="aperture-hero">
              <Image src="/images/ai-finance/aperture-markets.jpg" alt="Aperture Markets workspace with cross-asset research context and five primary destinations" width={1490} height={715} sizes="(max-width: 1280px) 100vw, 1280px" preload />
              <figcaption>Earlier Markets capture · figures are historical. The latest local version makes geography optional and puts the table first.</figcaption>
            </figure>
          </section>

          <nav aria-label="Case study sections" className="aperture-section-nav">
            <a href="#aperture-brief">The brief</a>
            <a href="#aperture-product">Explore the product</a>
            <a href="#aperture-updates">Recent work</a>
            <a href="#aperture-engineering">Under the surface</a>
          </nav>

          <section id="aperture-brief" className="portfolio-section aperture-brief" data-case-study-evidence="aperture">
            <h2 className="section-heading">A chart shows a price.<br />It doesn’t explain <span className="title-accent">the picture.</span></h2>
            <div className="aperture-brief-copy">
              <p>{record.problem}</p>
              <p className="aperture-audience">Five everyday jobs keep it focused: Overview, Markets, Portfolio, Plan, and Learn. Research tools live where the question arises.</p>
            </div>
          </section>

          <section id="aperture-product" className="pb-[var(--section-space)]">
            <h2 className="section-heading">Follow the work,<br />from question to <span className="title-accent">judgment.</span></h2>
            <p className="aperture-section-lead">Choose a stage to see the interface and the decision behind it.</p>
            <div role="group" aria-label="Product walkthrough stages" className="aperture-selector">
              {walkthrough.map((item, index) => (
                <button key={item.label} type="button" aria-pressed={activeScreen === index} aria-controls="aperture-screen" onClick={() => setActiveScreen(index)}>
                  {item.label}
                </button>
              ))}
            </div>
            <div id="aperture-screen" className="aperture-walkthrough" aria-live="polite" aria-atomic="true">
              <figure>
                <div className="aperture-screen-frame">
                  <Image src={screen.image} alt={screen.alt} width={1490} height={930} sizes="(max-width: 1023px) 100vw, 880px" className="aperture-product-image" />
                </div>
                <figcaption>{screen.caption}</figcaption>
              </figure>
              <div className="aperture-screen-copy">
                <h3>{screen.title}</h3>
                <p>{screen.body}</p>
                <div className="aperture-design-decision"><h4>Why I designed it this way</h4><p>{screen.decision}</p></div>
              </div>
            </div>
          </section>

          <section id="aperture-updates" className="pb-[var(--section-space)]">
            <h2 className="section-heading">A smaller product.<br /><span className="title-accent">A stronger demo.</span></h2>
            <p className="aperture-section-lead">The latest pass prioritizes complete workflows over adding more features.</p>
            <article className="aperture-geography">
              <div>
                <h3>Keep the main task in view.</h3>
                <p>Five destinations connect market context, holdings, contribution-only planning, and learning. The overview summarizes the financial picture without repeating the navigation.</p>
              </div>
              <div>
                <h3>Reveal depth when it is useful.</h3>
                <p>The market table comes first. Geography is optional, with country enrichment deferred until it is opened. Private document research remains a supporting workflow.</p>
              </div>
            </article>
            <div className="aperture-update-pair">
              <article>
                <h3>Remove what competes with the work.</h3>
                <p>I removed duplicate destination cards, workspace particle effects, long settings explanations, notification shortcuts, and paid-plan promotion.</p>
                <p className="aperture-detail-note">The goal was a calmer interface that makes the working product easier to explain and demonstrate.</p>
              </article>
              <article>
                <h3>Make unavailable actions explicit.</h3>
                <p>Upgrades, account-wide export, email alerts, and the older risk-report action are disabled in the current preview. Research also disables itself when private storage is unavailable.</p>
                <p className="aperture-detail-note">Portfolio outages show a retry action. Empty portfolios remain editable, and Refresh is disabled during a save to prevent overlapping requests.</p>
              </article>
            </div>
          </section>

          <section id="aperture-engineering" className="pb-[var(--section-space)]">
            <div className="dark-panel aperture-engineering">
              <h2 className="section-heading text-white">A calm surface.<br />Clear responsibilities underneath.</h2>
              <p className="aperture-engineering-lead">The interface can ask a question. The backend decides which data it is allowed to use.</p>
              <ol className="aperture-architecture" aria-label="Application data flow">
                <li><h3>Next.js</h3><p>Product UI, same-origin APIs, AI streaming, and review interactions.</p><ArrowRight aria-hidden="true" /></li>
                <li><h3>Go</h3><p>Ownership checks, market normalization, portfolio calculations, and document APIs.</p><ArrowRight aria-hidden="true" /></li>
                <li><h3>Postgres + private storage</h3><p>Portfolio records, page-aware sources, processing jobs, and the human review ledger.</p></li>
              </ol>
              <div className="aperture-release">
                <div><h3>Verification</h3><p>The latest local pass: <strong>20 focused checks passed</strong>, plus a production build, lint, and TypeScript checks.</p><p className="aperture-dark-note">Live integration checks also covered portfolio creation, goal calculations, document processing, and cross-owner access denial. Temporary portfolio data was removed.</p></div>
                <div><h3>What you can try</h3><p>The public URL is a web preview. The latest simplified workflows were verified locally with Clerk sign-in, the Go API, Postgres, and a persistent document worker.</p><p className="aperture-dark-note">The public deployment has not been reverified for these changes. Paid model calls remain disabled; planning and research checks use deterministic paths.</p></div>
              </div>
              <details className="aperture-evidence-details">
                <summary>Implementation evidence and release boundaries<ChevronDown size={18} aria-hidden="true" /></summary>
                <div className="aperture-evidence-expanded">
                  <div><h4>Recorded checks</h4><ul>{record.verification.map(item => <li key={item}>{item}</li>)}</ul></div>
                  <div><h4>Limitations</h4><ul>{record.limitations.map(item => <li key={item}>{item}</li>)}</ul></div>
                </div>
              </details>
            </div>
          </section>
          <OtherWorks currentProjectTitle={project.title} />
        </div>
      </main>
    </PortfolioShell>
  );
}
