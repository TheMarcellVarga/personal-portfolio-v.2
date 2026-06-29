import type { Metadata } from "next";
import { siteName } from "../../seo";

const title = "Aperture Financial Intelligence Case Study";
const description =
  "A Marcell Varga case study for an AI financial research workspace with cited evidence, portfolio review flows, freshness states, and clear product guardrails.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/ai-finance",
  },
  openGraph: {
    title,
    description,
    url: "/ai-finance",
    siteName,
    type: "article",
    images: [
      {
        url: "/images/ai-finance/aperture-home.jpg",
        width: 1200,
        height: 900,
        alt: "Aperture Financial Intelligence product interface",
      },
    ],
  },
};

export default function AiFinanceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
