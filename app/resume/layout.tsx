import type { Metadata } from "next";
import { siteName } from "../seo";

const title = "Resume";
const description =
  "Resume for Marcell Varga, a Singapore-based UX and frontend engineer working across product UX, design systems, React, Next.js, and AI-aware workflows.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Marcell Varga Resume",
    description,
    url: "/resume",
    siteName,
    type: "profile",
  },
};

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
