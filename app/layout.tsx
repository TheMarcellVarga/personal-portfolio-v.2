import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { cookies } from "next/headers";
import PostHogProvider from "./providers/PostHogProvider";
import { metadata } from "./metadata";
import ScrollReset from "./components/ScrollReset";
import DevelopmentBanner from "./components/DevelopmentBanner";
import LegacyNotice from "./components/LegacyNotice";

export { metadata };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const introSeen = cookieStore.get("mv-home-intro-seen")?.value === "1";

  return (
    <html lang="en" data-home-intro={introSeen ? "0" : "1"}>
      <body className="font-body">
        <PostHogProvider>
          <ScrollReset />
          {children}
          <DevelopmentBanner />
          <LegacyNotice />
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
