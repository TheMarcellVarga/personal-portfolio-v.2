import type { Metadata } from "next";
import { siteName } from "../../seo";

const title = "Wild Route Case Study";
const description =
  "A Marcell Varga case study for a prompt-first adventure travel planner with ranked route options, deterministic reasoning, save/share flows, and external booking handoffs.";

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
