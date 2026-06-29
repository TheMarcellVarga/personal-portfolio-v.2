import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATS Resume",
  description:
    "ATS-readable resume for Marcell Varga, UX and frontend engineer in Singapore.",
  alternates: {
    canonical: "/resume/ats",
  },
};

export default function AtsResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
