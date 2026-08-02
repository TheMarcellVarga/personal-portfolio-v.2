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
        url: "/images/focusin/light-focusing.png",
        width: 960,
        height: 898,
        alt: "Focusin native macOS menu bar interface during a focus interval",
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
