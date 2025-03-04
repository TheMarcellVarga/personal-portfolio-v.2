import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import PostHogProvider from "./providers/PostHogProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Marcell Varga",
    default: "Marcell Varga",
  },
  description: "Marcell Varga Portfolio | UX & Frontend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PostHogProvider>
          {children}
          <SpeedInsights />
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}
