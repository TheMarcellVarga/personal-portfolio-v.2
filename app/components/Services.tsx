"use client";

import { motion } from "framer-motion";
import { services } from "../data/services";

export default function Services() {
  return (
    <section className="w-full">
      <div className="mb-5">
        <h2 className="hairline text-2xl font-semibold text-custom-blue sm:text-3xl">
          What I bring
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-custom-blue/70 sm:text-base">
          Flexible collaboration from early framing to production execution,
          tailored to product maturity and team bandwidth.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flow-card flow-lift rounded-xl border border-custom-blue/16 bg-white/82 p-5 backdrop-blur-md sm:p-6"
          >
            <h3 className="text-lg font-semibold text-custom-blue sm:text-xl">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-custom-blue/68 sm:text-base">
              {service.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
