import type { Metadata } from "next";
import { siteName } from "../../seo";

const title = "Aperture Financial Intelligence Case Study";
const description =
  "A Marcell Varga systems case study for an evidence-led financial research workspace with owner-scoped retrieval, cited structured analysis, human approval, AI evaluation, and explicit advice boundaries.";

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
        width: 1440,
        height: 1024,
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
