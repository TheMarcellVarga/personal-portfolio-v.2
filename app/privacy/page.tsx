import type { Metadata } from "next";
import { PortfolioShell } from "../components/PortfolioShell";
import { PageIntro } from "../components/PageIntro";
import { siteName } from "../seo";

const title = "Privacy and analytics";
const description = "Privacy and analytics information for the Marcell Varga portfolio.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `${title} | Marcell Varga`,
    description,
    url: "/privacy",
    siteName,
    type: "article",
  },
};

const vendorLinks = [
  ["PostHog privacy policy", "https://posthog.com/privacy"],
  ["Vercel privacy policy", "https://vercel.com/legal/privacy-policy"],
] as const;

export default function PrivacyPage() {
  return (
    <PortfolioShell backLink={{ href: "/", label: "Back to portfolio" }}>
      <main id="main-content" className="portfolio-main page-gutter">
        <article className="portfolio-container">
          <PageIntro
            eyebrow="Privacy and analytics"
            title={<>Analytics, <span className="title-accent">clearly explained.</span></>}
            description={<>This page explains the analytics used by this portfolio and how data is handled. Last
            updated: 22 August 2026.</>}
          />

          <div className="mt-16 max-w-3xl space-y-12 text-base leading-8 text-custom-blue/80">
            <section>
              <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-custom-blue sm:text-3xl">Who controls the data</h2>
              <p className="mt-3">
                The site is operated by Marcell Varga in Singapore. For privacy questions or
                requests, contact <a className="underline" href="mailto:themarcellvarga@gmail.com">themarcellvarga@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-custom-blue sm:text-3xl">Analytics is active</h2>
              <p className="mt-3">
                This portfolio uses PostHog, Vercel Analytics, and Speed Insights to understand
                visits, interactions, performance, and errors. The analytics tools are loaded as
                part of the site and there is no consent popover.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-custom-blue sm:text-3xl">What may be collected</h2>
              <p className="mt-3">
                The enabled configuration may collect pageviews, navigation, clicks and other
                interface interactions, browser and device information, performance measurements,
                client errors, console events, and session recordings. Session recordings mask form
                inputs. Analytics identifiers may be stored in browser storage or cookies so a visit
                can be measured across pages.
              </p>
              <p className="mt-3">
                Analytics is used to understand how the portfolio performs and which parts need
                improvement. It is not used for advertising, selling data, or making decisions about
                visitors.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-custom-blue sm:text-3xl">Service providers</h2>
              <p className="mt-3">
                Measurements are processed by PostHog and Vercel. Their current privacy terms and
                data-processing details are available here:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                {vendorLinks.map(([label, href]) => (
                  <li key={href}>
                    <a className="underline" href={href} target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                These providers may process data outside Singapore. The applicable vendor terms,
                data-processing agreements, transfer safeguards, retention settings, and deletion
                workflows should be reviewed and kept current by the site operator.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-custom-blue sm:text-3xl">Your rights and requests</h2>
              <p className="mt-3">
                Contact the operator about access, correction, deletion, or other privacy requests.
                Requests are handled subject to applicable law and reasonable identity verification.
              </p>
            </section>
          </div>
        </article>
      </main>
    </PortfolioShell>
  );
}
