import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { cookies } from "next/headers";
import PostHogProvider from "./providers/PostHogProvider";
import { metadata } from "./metadata";
import { structuredData } from "./seo";
import ScrollReset from "./components/ScrollReset";
import SmoothScroll from "./components/SmoothScroll";
// import DevelopmentBanner from "./components/DevelopmentBanner";

export { metadata };

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="font-body">
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
