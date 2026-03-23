import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import PostHogProvider from "./providers/PostHogProvider";
import { metadata } from "./metadata";
import ScrollReset from "./components/ScrollReset";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body">
        <PostHogProvider>
          <ScrollReset />
          {children}
          <SpeedInsights />
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}
