"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const { history } = window;
    const previousScrollRestoration = history.scrollRestoration;
    history.scrollRestoration = "manual";

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    const rafOne = window.requestAnimationFrame(scrollToTop);
    const rafTwo = window.requestAnimationFrame(scrollToTop);
    const timeoutId = window.setTimeout(scrollToTop, 50);

    const handlePageShow = () => {
      scrollToTop();
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.cancelAnimationFrame(rafOne);
      window.cancelAnimationFrame(rafTwo);
      window.clearTimeout(timeoutId);
      window.removeEventListener("pageshow", handlePageShow);
      history.scrollRestoration = previousScrollRestoration;
    };
  }, [pathname]);

  return null;
}
