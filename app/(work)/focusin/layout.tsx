import type { Metadata } from "next";
import { siteName } from "../../seo";

const title = "Focusin Case Study";
const description =
  "A Marcell Varga case study for a local-first native macOS focus-and-reset utility, covering product judgment, state architecture, curated recommendations, accessibility, and release evidence.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/focusin",
  },
  openGraph: {
    title,
    description,
    url: "/focusin",
    siteName,
    type: "article",
    images: [
      {
        url: "/images/focusin/focusin-loop-hero.webp",
        width: 2400,
        height: 1350,
        alt: "Focusin moving from a focus interval into an active micro-break",
      },
    ],
  },
};

export default function FocusinLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
