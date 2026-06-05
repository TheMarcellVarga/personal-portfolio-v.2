"use client";

import {
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { Loader2, Phone } from "lucide-react";

type PhoneRevealProps = {
  variant?: "inline" | "card";
  className?: string;
};

export type PhoneRevealHandle = {
  revealForPrint: () => Promise<void>;
  hidePrintReveal: () => void;
};

async function waitForPaint() {
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
}

export const PhoneReveal = forwardRef<PhoneRevealHandle, PhoneRevealProps>(function PhoneReveal(
  { variant = "inline", className },
  ref,
) {
  const [phone, setPhone] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [manualVisible, setManualVisible] = useState(false);
  const [printVisible, setPrintVisible] = useState(false);

  const isVisible = manualVisible || printVisible;

  async function loadPhone() {
    if (phone) return phone;

    const response = await fetch("/api/contact/phone", {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to reveal phone number");
    }

    const data: { phone?: string } = await response.json();

    if (!data.phone) {
      throw new Error("Missing phone number");
    }

    setPhone(data.phone);
    return data.phone;
  }

  async function revealPhone() {
    if (isVisible || isLoading) return;

    setIsLoading(true);
    setError(false);

    try {
      await loadPhone();
      setManualVisible(true);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function revealForPrint() {
    if (printVisible) {
      await waitForPaint();
      return;
    }

    setIsLoading(true);
    setError(false);

    try {
      await loadPhone();
      setPrintVisible(true);
      await waitForPaint();
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function hidePrintReveal() {
    setPrintVisible(false);
  }

  useImperativeHandle(
    ref,
    () => ({
      revealForPrint,
      hidePrintReveal,
    }),
    [printVisible, phone],
  );

  if (variant === "card") {
    return (
      <div
        className={[
          "glass-panel group rounded-[1.9rem] bg-white/65 p-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)] sm:rounded-[2.1rem]",
          className ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-[0.95rem] bg-white/82 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_22px_rgba(17,27,40,0.06)]">
            <Phone className="h-4.5 w-4.5" />
          </div>
          <div className="min-w-0">
            <p className="mb-2 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-custom-blue/35">
              Phone
            </p>
            {isVisible && phone ? (
              <a
                href={`tel:${phone}`}
                className="block break-words font-display text-[1.18rem] font-medium leading-[1.06] tracking-[-0.02em] text-custom-blue transition-colors hover:text-custom-blue/70 sm:text-[1.38rem]"
              >
                {phone}
              </a>
            ) : (
              <button
                type="button"
                onClick={revealPhone}
                className="inline-flex items-center gap-2 break-words font-display text-[1.18rem] font-medium leading-[1.06] tracking-[-0.02em] text-custom-blue transition-colors hover:text-custom-blue/70 sm:text-[1.38rem]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Revealing phone...
                  </>
                ) : error ? (
                  "Try again"
                ) : (
                  "Reveal phone number"
                )}
              </button>
            )}
            <div className="mt-5 flex items-center gap-2 text-[0.56rem] font-medium uppercase tracking-[0.15em] text-custom-blue/60">
              <Phone className="h-3 w-3" />
              Click to reveal
            </div>
          </div>
        </div>
      </div>
    );
  }

  return isVisible && phone ? (
    <a
      href={`tel:${phone}`}
      className={[
        "flex items-start gap-2 text-[9px] leading-4 text-white/66 transition-colors hover:text-white",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Phone className="mt-[2px] h-3 w-3 shrink-0 text-[#67d9ff]" />
      <span className="break-words">{phone}</span>
    </a>
  ) : (
    <button
      type="button"
      onClick={revealPhone}
      className={[
        "flex items-start gap-2 text-left text-[9px] leading-4 text-white/66 transition-colors hover:text-white",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Phone className="mt-[2px] h-3 w-3 shrink-0 text-[#67d9ff]" />
      <span className="break-words">
        {isLoading ? "Revealing phone..." : error ? "Try again" : "Reveal phone number"}
      </span>
    </button>
  );
});
