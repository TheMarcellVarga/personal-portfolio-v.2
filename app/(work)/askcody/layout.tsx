import type { Metadata } from "next";
import { siteName } from "../../seo";

const title = "AskCody Case Study";
const description =
  "A Marcell Varga case study for a hybrid office management experience in Microsoft Teams, covering desk booking, room availability, and enterprise UX.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/askcody",
  },
  openGraph: {
    title,
    description,
    url: "/askcody",
    siteName,
    type: "article",
    images: [
      {
        url: "/images/askcody-index.png",
        width: 1200,
        height: 900,
        alt: "AskCody hybrid office management interface",
      },
    ],
  },
};

export default function AskCodyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
