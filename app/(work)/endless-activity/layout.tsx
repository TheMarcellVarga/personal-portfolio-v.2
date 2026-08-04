import type { Metadata } from "next";
import { siteName } from "../../seo";

const title = "Endless Activity Case Study";
const description =
  "A Marcell Varga case study for a local-first native iOS activity deck, covering product restraint, gesture UX, deterministic ranking, persistence, accessibility, and verified release evidence.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/endless-activity",
  },
  openGraph: {
    title,
    description,
    url: "/endless-activity",
    siteName,
    type: "article",
    images: [
      {
        url: "/images/endless-activity/discover.png",
        width: 1170,
        height: 2532,
        alt: "Endless Activity native iOS Discover deck with visible Skip and Save controls",
      },
    ],
  },
};

export default function EndlessActivityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
