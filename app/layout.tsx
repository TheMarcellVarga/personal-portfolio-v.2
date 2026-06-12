import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { cookies } from "next/headers";
import { Instrument_Serif } from "next/font/google";
import PostHogProvider from "./providers/PostHogProvider";
import { metadata } from "./metadata";
import ScrollReset from "./components/ScrollReset";
import SmoothScroll from "./components/SmoothScroll";
// import DevelopmentBanner from "./components/DevelopmentBanner";

export { metadata };

const editorialSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
  variable: "--font-editorial-serif",
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const introSeen = cookieStore.get("mv-home-intro-seen")?.value === "1";

  return (
    <html
      lang="en"
      data-home-intro={introSeen ? "0" : "1"}
      suppressHydrationWarning
    >
      <body className={`font-body ${editorialSerif.variable}`}>
        <PostHogProvider>
          <SmoothScroll>
            <ScrollReset />
            {children}
          </SmoothScroll>
          {/* <DevelopmentBanner /> */}
          {process.env.NODE_ENV === 'production' && (
            <>
              <SpeedInsights />
              <Analytics />
            </>
          )}
        </PostHogProvider>
      </body>
    </html>
  );
}
