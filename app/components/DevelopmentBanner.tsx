import { Code2 } from "lucide-react";

export default function DevelopmentBanner() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 max-w-[calc(100vw-2rem)] sm:bottom-6 sm:right-6">
      <div
        role="status"
        aria-label="Preview status indicator"
        className="relative overflow-hidden rounded-full bg-white/74 px-4 py-2.5 shadow-[0_18px_60px_rgba(7,20,38,0.12),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(76,207,255,0.18),transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.45),transparent_62%)]" />

        <div className="relative flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-custom-teal/40" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-custom-teal" />
          </span>

          <div className="min-w-0">
            <p className="font-label text-[0.62rem] uppercase tracking-[0.28em] text-custom-blue/46">
              Preview build
            </p>
            <p className="mt-0.5 text-sm text-custom-blue/72">
              Content refresh in progress.
            </p>
          </div>

          <Code2
            className="h-4 w-4 shrink-0 text-custom-blue/28"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
