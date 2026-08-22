import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy and analytics",
  description: "Privacy and analytics information for the Marcell Varga portfolio.",
  alternates: { canonical: "/privacy" },
};

const vendorLinks = [
  ["PostHog privacy policy", "https://posthog.com/privacy"],
  ["Vercel privacy policy", "https://vercel.com/legal/privacy-policy"],
] as const;

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f8f1e8] px-5 py-16 text-[#10202d] sm:px-8 lg:px-12">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-[#176b87] hover:underline">
          ← Back to portfolio
        </Link>
        <p className="mt-14 font-label text-xs font-semibold uppercase tracking-[0.2em] text-[#176b87]">
          Privacy and analytics
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
          Analytics, clearly explained.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#10202d]/72">
          This page explains the analytics used by this portfolio and how data is handled. Last
          updated: 22 August 2026.
        </p>

        <div className="mt-12 space-y-10 text-base leading-7 text-[#10202d]/80">
          <section>
            <h2 className="text-xl font-semibold text-[#10202d]">Who controls the data</h2>
            <p className="mt-3">
              The site is operated by Marcell Varga in Singapore. For privacy questions or
              requests, contact <a className="underline" href="mailto:themarcellvarga@gmail.com">themarcellvarga@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#10202d]">Analytics is active</h2>
            <p className="mt-3">
              This portfolio uses PostHog, Vercel Analytics, and Speed Insights to understand
              visits, interactions, performance, and errors. The analytics tools are loaded as
              part of the site and there is no consent popover.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#10202d]">What may be collected</h2>
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
            <h2 className="text-xl font-semibold text-[#10202d]">Service providers</h2>
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
            <h2 className="text-xl font-semibold text-[#10202d]">Your rights and requests</h2>
            <p className="mt-3">
              Contact the operator about access, correction, deletion, or other privacy requests.
              Requests are handled subject to applicable law and reasonable identity verification.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
