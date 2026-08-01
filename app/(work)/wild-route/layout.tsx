import type { Metadata } from "next";
import { siteName } from "../../seo";

const title = "Wild Route Case Study";
const description =
  "A deployed product-engineering case study by Marcell Varga: prompt-first route planning, deterministic reasoning, secure save/share boundaries, accessibility, testing, and a serverless production repair.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/wild-route",
  },
  openGraph: {
    title,
    description,
    url: "/wild-route",
    siteName,
    type: "article",
    images: [
      {
        url: "/images/wild-route/home.png",
        width: 1440,
        height: 810,
        alt: "Wild Route travel planning interface",
      },
    ],
  },
};

export default function WildRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
