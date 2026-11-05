import type { Metadata } from "next";
import { siteName } from "../../seo";

const title = "Aperture Financial Intelligence Case Study";
const description =
  "A Marcell Varga case study in simplifying a financial research workspace: provider-backed markets, portfolio review, contribution-only planning, private research, and verified local workflows.";

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
        url: "/images/ai-finance/aperture-guided-overview.jpg",
        width: 1440,
        height: 810,
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
