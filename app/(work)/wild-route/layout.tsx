import type { Metadata } from "next";
import { siteName } from "../../seo";

const title = "Wild Route Case Study";
const description =
  "A Marcell Varga case study for a prompt-first travel planner that turns open-ended trip briefs into ranked route options and booking-ready flows.";

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
        width: 1200,
        height: 900,
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
