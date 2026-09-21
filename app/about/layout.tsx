import type { Metadata } from "next";
import { roleTitle, siteName } from "../seo";

const title = "About";
const socialTitle = `About Marcell Varga | ${roleTitle}`;
const description =
  "Meet Marcell Varga, a Singapore-based UX and frontend engineer who brings product judgment into React, TypeScript, design systems, and trustworthy AI workflows.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: socialTitle,
    description,
    url: "/about",
    siteName,
    type: "profile",
    images: [
      {
        url: "/images/marcell-great-wall.webp",
        width: 1800,
        height: 2400,
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
