import type { Metadata } from "next";
import { siteName } from "../../seo";

const title = "Burnout 3: Takedown — Native iOS Port Case Study";
const description = "Marcell Varga’s experimental iPhone port of Burnout 3: Takedown, built on burnout3-pc. Touch interaction, ARM64 adaptation and measured graphics tradeoffs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/burnout3-ios" },
  openGraph: {
    title, description, url: "/burnout3-ios", siteName, type: "article",
    images: [{ url: "/images/burnout3/gameplay-controller-20261019.webp", width: 2796, height: 1290, alt: "Burnout 3: Takedown gameplay and native touch controller on iPhone" }],
  },
};

export default function BurnoutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
