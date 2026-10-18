"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react";
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
    label: "Evidence",
    title: "Open the source behind the sentence.",
    body: "Private documents become page-aware passages. Structured analysis links material claims to evidence from that research run.",
    decision: "I want to check the source, not just read a convincing answer. Direct support and interpretation stay distinct, and unsupported claims remain visible.",
    image: "/images/ai-finance/aperture-evidence.jpg",
    alt: "Aperture evidence preview linking research findings to source filing pages and support labels",
    caption: "Public product illustration · demonstrates the citation interaction, not a live model result.",
  },
  {
    label: "Human review",
    title: "The draft is not the final decision.",
    body: "Accept, edit, or reject a section. Inspect the review trail, then export the reviewed note with its sources and assumptions.",
    decision: "Raw output stays immutable. Review events form a separate, append-only record, so the system preserves what the model wrote and what the person changed.",
    image: "/images/ai-finance/aperture-review.jpg",
    alt: "Aperture human review preview with approval history and a reviewed Markdown export",
    caption: "Public product illustration · shows the review and export contract.",
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

const geographyExamples = [
  { label: "Country supplied", place: "Country linked", body: "A provider country code can place an asset on the globe. The label preserves whether it describes an issuer or listing location.", result: "A location lens, not a claim about economic exposure." },
  { label: "Cross-border asset", place: "Global", body: "An explicitly global instrument or crypto network belongs in the cross-border group, rather than being forced into one country.", result: "Global assets remain in the complete breakdown." },
  { label: "Country missing", place: "Unattributed", body: "When the provider supplies no usable country, the asset stays in an unattributed group. Its value is still counted.", result: "Unknown geography stays visible. No invented map pin." },
] as const;

export default function ApertureCaseStudy() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [activeGeography, setActiveGeography] = useState(0);
  const project = projects.find(item => item.caseStudyId === "aperture")!;
  const record = caseStudies.aperture;
  const screen = walkthrough[activeScreen];
  const geography = geographyExamples[activeGeography];

  return (
    <PortfolioShell className="case-study-page aperture-case" activeSection="Work" backLink={{ href: "/#work", label: "Back to work" }}>
      <main id="main-content" className="portfolio-main page-gutter">
        <div className="portfolio-container">
          <section aria-label="Project introduction">
            <PageIntro
              eyebrow="Project / Case study"
              title={<>Aperture Financial <span className="title-accent">Intelligence</span></>}
              description="From market context to a research note you can inspect."
            />
            <div className="aperture-intro-row">
              <p>A financial research workspace I designed, built, and use myself. It brings my interest in finance and my work as a product engineer into the same place.</p>
              <Link href={caseStudyPages.aperture.demoUrl!} target="_blank" rel="noreferrer" className="portfolio-button">
                Visit Aperture <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <dl className="aperture-meta">
              <div><dt>Role</dt><dd>Product design + full-stack engineering</dd></div>
              <div><dt>Year</dt><dd>2026</dd></div>
              <div><dt>Experience</dt><dd data-case-study-status="aperture">{project.status}</dd></div>
            </dl>
            <figure className="aperture-hero">
              <Image src="/images/ai-finance/aperture-markets.jpg" alt="Aperture Markets workspace with cross-asset research context and five primary destinations" width={1490} height={715} sizes="(max-width: 1280px) 100vw, 1280px" preload />
              <figcaption>Markets, one of five connected workspaces. Historical product capture; figures are not current quotes.</figcaption>
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
            <h2 className="section-heading">The product <span className="title-accent">kept growing.</span></h2>
            <p className="aperture-section-lead">Recent implementation adds geography, quieter monitoring, and a mobile companion.</p>
            <article className="aperture-geography">
              <div>
                <h3>Show where the data places an asset.</h3>
                <p>The new investment globe connects portfolio holdings and market results to provider geography. A complete breakdown keeps global and unknown locations visible.</p>
                <p className="aperture-example-note">Interactive explanation of the implemented grouping rules. These are illustrative cases, not portfolio data.</p>
              </div>
              <div className="aperture-geography-example">
                <div role="group" aria-label="Geography examples" className="aperture-geography-controls">
                  {geographyExamples.map((item, index) => <button key={item.label} type="button" aria-pressed={activeGeography === index} onClick={() => setActiveGeography(index)}>{item.label}</button>)}
                </div>
                <div aria-live="polite" aria-atomic="true" className="aperture-geography-result">
                  <h4>{geography.place}</h4><p>{geography.body}</p><p className="aperture-geography-outcome"><Check size={18} aria-hidden="true" />{geography.result}</p>
                </div>
              </div>
            </article>
            <div className="aperture-update-pair">
              <article>
                <h3>A digest when something changes.</h3>
                <p>Opt-in daily or weekly summaries select confirmed flips on closed daily candles. Users choose direction and delivery channel.</p>
                <ol className="aperture-digest-flow" aria-label="Confirmed flip digest sequence">
                  <li>Candle closes<ArrowRight size={16} aria-hidden="true" /></li>
                  <li>Flip confirmed<ArrowRight size={16} aria-hidden="true" /></li>
                  <li>Matching digest</li>
                </ol>
                <p className="aperture-detail-note">No matching flip means no message. Email delivery depends on server configuration; source freshness and coverage gaps travel with the digest.</p>
              </article>
              <article>
                <h3>Carry the context into mobile.</h3>
                <p>An Expo / React Native companion now shares the backend contracts and Clerk identity with the web workspace.</p>
                <ul className="aperture-mobile-scope">
                  <li><Check size={16} aria-hidden="true" />Overview and portfolio context</li>
                  <li><Check size={16} aria-hidden="true" />Markets and asset detail</li>
                  <li><Check size={16} aria-hidden="true" />Digest inbox and preferences</li>
                </ul>
                <p className="aperture-detail-note">Early implementation, not a store release. Push delivery, device verification, and full web parity remain ahead.</p>
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
                <li><h3>Postgres + private storage</h3><p>Source documents, retrieval, persisted runs, and the human review ledger.</p></li>
              </ol>
              <div className="aperture-release">
                <div><h3>Verification</h3><p>The recorded evidence baseline: <strong>40 of 40 regression cases</strong> across five source documents.</p><p className="aperture-dark-note">Citation trust, injection, unsupported claims, schemas, and advice boundaries. Recorded source-repository evidence; these product checks were not rerun for this portfolio update.</p></div>
                <div><h3>What you can try</h3><p>The public preview shows the product direction. Private workflows need configured services, sign-in, and your own source material.</p><p className="aperture-dark-note">External AI calls are disabled by default. The verified research path uses deterministic generation.</p></div>
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
