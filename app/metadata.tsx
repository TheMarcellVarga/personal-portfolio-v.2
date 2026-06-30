import type { Metadata } from "next";
import {
  alternatePersonNames,
  personName,
  roleTitle,
  shareImage,
  siteDescription,
  siteName,
  siteUrl,
} from "./seo";

export const metadata: Metadata = {
  title: {
    default: `${personName} | ${roleTitle} in Singapore`,
    template: `%s | ${personName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Marcell Varga",
    ...alternatePersonNames,
    "Varga Marcell",
    "marcellvarga.com",
    "TheMarcellVarga",
    "UX Engineer",
    "Frontend Engineer",
    "Product Design Engineer",
    "Singapore UX Engineer",
    "Singapore Frontend Engineer",
    "AI Product UX",
    "Official portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Design Systems",
  ],
  authors: [{ name: "Marcell Varga", url: "https://www.linkedin.com/in/marcellvarga/" }],
  creator: personName,
  publisher: personName,
  category: "Portfolio",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/",
    title: `${personName} | ${roleTitle} in Singapore`,
    description: siteDescription,
    siteName,
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 900,
        alt: "Marcell Varga, Singapore-based UX and frontend engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personName} | ${roleTitle} in Singapore`,
    description: siteDescription,
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
