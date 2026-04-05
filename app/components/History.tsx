"use client";

import { motion } from "framer-motion";
import { history } from "../data/history";

export default function History() {
  return (
    <section className="w-full">
      <div className="mb-5">
        <h2 className="hairline text-2xl font-semibold text-custom-blue sm:text-3xl">
          Experience timeline
        </h2>
      </div>

      <div className="relative space-y-4 before:absolute before:bottom-0 before:left-3 before:top-2 before:w-px before:bg-custom-blue/20 sm:before:left-4">
        {history.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.time.start}`}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.52,
              delay: index * 0.05,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="flow-card flow-lift relative ml-7 rounded-xl border border-custom-blue/16 bg-white/84 p-5 backdrop-blur-md sm:ml-10 sm:p-6"
          >
            <span className="absolute -left-[1.9rem] top-8 h-3.5 w-3.5 rounded-full border-2 border-white bg-custom-blue shadow-[0_0_0_4px_rgba(65,199,192,0.15)] sm:-left-[2.55rem]" />

            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-custom-blue sm:text-xl">
                  {item.company}
                </h3>
                <p className="mt-1 text-sm font-medium text-custom-blue/75 sm:text-base">
                  {item.jobTitle}
                </p>
              </div>

              <p className="rounded-md border border-custom-blue/18 bg-white/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-custom-blue/66">
                {item.time.start} - {item.time.end || "Present"}
              </p>
            </div>

            <div className="mt-4 space-y-2.5">
              {item.description.map((line) => (
                <p key={line} className="text-sm leading-relaxed text-custom-blue/72 sm:text-base">
                  {line}
                </p>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
