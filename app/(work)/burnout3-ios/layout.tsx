import type { Metadata } from "next";
import { siteName } from "../../seo";

const title = "Burnout 3: Takedown for iOS — Case Study";
const description = "Marcell Varga’s Xbox-based iPhone adaptation of Burnout 3: Takedown, built on Takedawn and xboxrecomp. Hybrid touch controls, native settings, verified imports and measured pacing changes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/burnout3-ios" },
  openGraph: {
    title, description, url: "/burnout3-ios", siteName, type: "article",
    images: [{ url: "/images/burnout3/xbox-hybrid-controls-20261023.webp", width: 2796, height: 1290, alt: "Xbox-based Burnout 3: Takedown with hybrid touch controls on iPhone" }],
  },
};

export default function BurnoutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
