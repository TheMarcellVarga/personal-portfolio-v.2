import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcell Varga | Design Engineer in Singapore",
  description:
    "Portfolio of Marcell Varga, a Singapore-based design engineer blending UX strategy, frontend engineering, motion, and product systems into high-quality digital experiences.",
  keywords: [
    "Marcell Varga",
    "Design Engineer",
    "Frontend Engineer",
    "UX Engineer",
    "Singapore",
    "Product Design",
    "Next.js",
    "TypeScript",
    "Motion Design",
    "Portfolio",
  ],
  authors: [
    {
      name: "Marcell Varga",
      url: "https://www.linkedin.com/in/marcellvarga/",
    },
  ],
  creator: "Marcell Varga",
  publisher: "Marcell Varga",
  metadataBase: new URL("https://marcellvarga.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marcellvarga.com",
    title: "Marcell Varga | Design Engineer in Singapore",
    description:
      "Singapore-based design engineer crafting ambitious interfaces with product thinking, frontend precision, and motion-led storytelling.",
    siteName: "Marcell Varga Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marcell Varga portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcell Varga | Design Engineer in Singapore",
    description:
      "Design engineer crafting ambitious interfaces with product thinking, frontend precision, and motion-led storytelling.",
    images: ["/images/og-image.jpg"],
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
  alternates: {
    canonical: "https://marcellvarga.com",
  },
};
