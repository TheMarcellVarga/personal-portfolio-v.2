import type { Metadata } from "next";
import { siteName } from "../../seo";

const title = "European Study Solution Case Study";
const description =
  "A Marcell Varga case study for a content-rich student agency website, focused on information architecture, responsive design, trust, and SEO.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/ess",
  },
  openGraph: {
    title,
    description,
    url: "/ess",
    siteName,
    type: "article",
    images: [
      {
        url: "/images/ess-index.png",
        width: 1200,
        height: 900,
        alt: "European Study Solution website case study",
      },
    ],
  },
};

export default function EssLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
