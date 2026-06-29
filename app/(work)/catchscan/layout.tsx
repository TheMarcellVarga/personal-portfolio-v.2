import type { Metadata } from "next";
import { siteName } from "../../seo";

const title = "CatchScan Case Study";
const description =
  "A Marcell Varga case study for a copyright protection SaaS dashboard, focused on product UX, workflow clarity, and reusable interface patterns.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/catchscan",
  },
  openGraph: {
    title,
    description,
    url: "/catchscan",
    siteName,
    type: "article",
    images: [
      {
        url: "/images/catchscan-index.png",
        width: 1200,
        height: 900,
        alt: "CatchScan copyright protection dashboard concept",
      },
    ],
  },
};

export default function CatchScanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
