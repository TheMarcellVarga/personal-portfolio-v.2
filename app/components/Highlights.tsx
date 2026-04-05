"use client";

import { motion } from "framer-motion";
import { highlights } from "../data/highlights";

export default function Highlights() {
  return (
    <section className="w-full">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="hairline text-2xl font-semibold text-custom-blue sm:text-3xl">
          Impact snapshot
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, index) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.52,
              delay: index * 0.06,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="flow-card flow-lift rounded-xl border border-custom-blue/16 bg-white/82 p-5 backdrop-blur-md"
          >
            <p className="text-3xl font-semibold text-custom-blue sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm font-semibold text-custom-blue/84 sm:text-base">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-custom-blue/65">
              {item.caption}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
