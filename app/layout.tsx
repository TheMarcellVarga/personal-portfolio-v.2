import "./globals.css";
import { metadata } from "./metadata";
import { personSameAs, structuredData } from "./seo";
import ScrollReset from "./components/ScrollReset";
import SmoothScroll from "./components/SmoothScroll";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-home-intro="1"
      suppressHydrationWarning
    >
      <head>
        {personSameAs.map((href) => (
          <link key={href} rel="me" href={href} />
        ))}
        <link rel="author" href="https://marcellvarga.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="font-body">
        <SmoothScroll>
          <ScrollReset />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
