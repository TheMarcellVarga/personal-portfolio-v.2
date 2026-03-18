import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcell Varga | UX & Frontend Engineer",
  description:
    "Portfolio of Marcell Varga, UX & Frontend Engineer building high-quality product experiences from strategy to scalable implementation.",
  keywords: [
    "Marcell Varga",
    "UX Engineer",
    "Frontend Engineer",
    "Product Design",
    "Design Systems",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio 2026",
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
  alternates: {
    canonical: "https://marcellvarga.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marcellvarga.com",
    title: "Marcell Varga | UX & Frontend Engineer",
    description:
      "UX and frontend engineering focused on shipping elegant, measurable digital products.",
    siteName: "Marcell Varga Portfolio",
    images: [
      {
        url: "/images/personalpageprofilealt.png",
        width: 1200,
        height: 630,
        alt: "Marcell Varga Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcell Varga | UX & Frontend Engineer",
    description:
      "UX and frontend engineering focused on shipping elegant, measurable digital products.",
    images: ["/images/personalpageprofilealt.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
