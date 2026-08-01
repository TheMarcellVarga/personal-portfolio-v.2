import type { Metadata } from "next";
import { siteName } from "../../seo";

const title = "ThreadScribe Studio Case Study";
const description =
  "A Marcell Varga case study for a local-first AI transcript workspace with inspectable raw input, structured output, provider disclosure, recoverable jobs, and deterministic evaluation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/threadscribe",
  },
  openGraph: {
    title,
    description,
    url: "/threadscribe",
    siteName,
    type: "article",
    images: [
      {
        url: "/images/threadscribe/transformed-output.png",
        width: 983,
        height: 1000,
        alt: "ThreadScribe Studio showing cleaned transcript output and provider disclosure",
      },
    ],
  },
};

export default function ThreadScribeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
