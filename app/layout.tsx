import type { Viewport } from "next";
import { IBM_Plex_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import PostHogProvider from "./providers/PostHogProvider";
import { metadata } from "./metadata";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export { metadata };

export const viewport: Viewport = {
  themeColor: "#07111f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} bg-[var(--color-ink-950)] text-[var(--color-sand-50)] antialiased`}
      >
        <PostHogProvider>
          {children}
          <SpeedInsights />
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}
