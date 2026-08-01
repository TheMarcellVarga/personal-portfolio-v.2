import type { Metadata } from "next";
import { roleTitle, siteName } from "../seo";

const title = `About Marcell Varga | ${roleTitle}`;
const description =
  "Meet Marcell Varga, a Singapore-based product-focused frontend engineer with a UX foundation. He builds clear interfaces, design systems, and trustworthy AI-aware workflows.";

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
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
