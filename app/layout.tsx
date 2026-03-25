import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import PostHogProvider from "./providers/PostHogProvider";
import { metadata } from './metadata';
import SmoothScrollProvider from "./providers/SmoothScrollProvider";

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PostHogProvider>
          <SmoothScrollProvider>
            {children}
            <SpeedInsights />
            <Analytics />
          </SmoothScrollProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
