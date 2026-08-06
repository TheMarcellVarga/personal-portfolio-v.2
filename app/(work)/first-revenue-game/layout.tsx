import type { Metadata } from "next";
import { siteName } from "../../seo";

const title = "First Revenue Game Case Study";
const description =
  "A Marcell Varga product-systems case study about one mission, evidence-gated progression, a Next.js-to-Spring migration, transactional event reliability, and observable release proof.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/first-revenue-game",
  },
  openGraph: {
    title,
    description,
    url: "/first-revenue-game",
    siteName,
    type: "article",
    images: [
      {
        url: "/images/first-revenue-game/member-dashboard.jpg",
        width: 983,
        height: 1000,
        alt: "First Revenue Game member mission workspace",
      },
    ],
  },
};

export default function FirstRevenueGameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
