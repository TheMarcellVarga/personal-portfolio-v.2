import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Manrope, Fraunces } from "next/font/google";
import PostHogProvider from "./providers/PostHogProvider";
import { metadata } from "./metadata";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shouldLoadVercelScripts = process.env.VERCEL === "1";

  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable} antialiased`}>
        <PostHogProvider>
          {children}
          {shouldLoadVercelScripts && <SpeedInsights />}
          {shouldLoadVercelScripts && <Analytics />}
        </PostHogProvider>
      </body>
    </html>
  );
}
