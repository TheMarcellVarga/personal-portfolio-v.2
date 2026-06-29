import type { Metadata } from "next";
import { siteName } from "../seo";

const title = "Contact Marcell Varga";
const description =
  "Contact Marcell Varga, a Singapore-based UX and frontend engineer, for product interface, design system, React, and Next.js work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title,
    description,
    url: "/contact",
    siteName,
    type: "profile",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
