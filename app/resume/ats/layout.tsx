import type { Metadata } from "next";
import { siteName } from "../../seo";

export const metadata: Metadata = {
  title: "ATS Resume | Marcell Varga",
  description:
    "ATS-readable resume for Marcell Varga, UX and frontend engineer in Singapore.",
  alternates: {
    canonical: "/resume/ats",
  },
  openGraph: {
    title: "Marcell Varga ATS Resume",
    description:
      "ATS-readable resume for Marcell Varga, UX and frontend engineer in Singapore.",
    url: "/resume/ats",
    siteName,
    type: "profile",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AtsResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
