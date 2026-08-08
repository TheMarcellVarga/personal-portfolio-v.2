"use client";

import { useEffect } from "react";
import "./globals.css";
import RecoveryPage from "./components/RecoveryPage";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <title>Something went wrong | Marcell Varga</title>
      </head>
      <body>
        <RecoveryPage
          eyebrow="Something went wrong"
          title="The page hit a rough edge."
          description="The portfolio could not finish rendering this view. Try the page again, or return to the work index while the rest of the site stays available."
          actionLabel="Try again"
          onAction={reset}
        />
      </body>
    </html>
  );
}
