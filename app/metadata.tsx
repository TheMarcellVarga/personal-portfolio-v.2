import type { Metadata } from "next";

const siteUrl = "https://marcellvarga.com";
const shareImage = "/images/personalpageprofilealt.png";

export const metadata: Metadata = {
  title: "Marcell Varga | UX & Frontend Engineer",
  description:
    "Singapore-based UX and frontend engineer with Danish design roots, crafting expressive digital products with strong motion, systems thinking, and technical depth.",
  keywords: [
    "Marcell Varga",
    "UX Engineer",
    "Frontend Engineer",
    "Product Design Engineer",
    "Singapore designer",
    "Next.js portfolio",
    "React",
    "TypeScript",
    "Design Systems",
    "Motion Design",
  ],
  authors: [{ name: "Marcell Varga", url: "https://www.linkedin.com/in/marcellvarga/" }],
  creator: "Marcell Varga",
  publisher: "Marcell Varga",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Marcell Varga | UX & Frontend Engineer",
    description:
      "Danish design clarity, Singapore momentum, and frontend craftsmanship shaped into a 2026 portfolio.",
    siteName: "Marcell Varga Portfolio",
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 1200,
        alt: "Portrait of Marcell Varga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcell Varga | UX & Frontend Engineer",
    description:
      "Singapore-based UX and frontend engineer building expressive digital products with motion and systems thinking.",
    images: [shareImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
