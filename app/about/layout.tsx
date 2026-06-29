import type { Metadata } from "next";
import { siteName } from "../seo";

const title = "About Marcell Varga";
const description =
  "Learn how Marcell Varga works across UX design, frontend engineering, product prototypes, design systems, and production software.";

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
