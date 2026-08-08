import type { Metadata } from "next";
import "./globals.css";
import RecoveryPage from "./components/RecoveryPage";

export const metadata: Metadata = {
  title: "Page not found | Marcell Varga",
  description: "The requested portfolio page does not exist.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <RecoveryPage
          eyebrow="404 / Page not found"
          title="This path led nowhere."
          description="The page may have moved, or the link may have been typed differently. The portfolio is still here, with the work, process, and contact paths one step away."
        />
      </body>
    </html>
  );
}
