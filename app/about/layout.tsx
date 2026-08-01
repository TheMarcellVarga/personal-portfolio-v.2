import type { Metadata } from "next";
import { roleTitle, siteName } from "../seo";

const title = `About Marcell Varga | ${roleTitle}`;
const description =
  "Meet Marcell Varga, a Singapore-based product-focused frontend engineer who brings UX judgment into React, TypeScript, design systems, and trustworthy AI workflows.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title,
    description,
    url: "/about",
    siteName,
    type: "profile",
    images: [
      {
        url: "/images/marcell-great-wall.png",
        width: 1086,
        height: 1448,
        alt: "Marcell Varga at the Great Wall of China",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
