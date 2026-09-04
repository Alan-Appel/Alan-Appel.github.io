"use client";

import { motion, type Variants } from "framer-motion";
import { audience } from "@/lib/about";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AudienceStatement() {
  return (
    <section className="border-t border-black/10 bg-vector-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="border-l-2 border-vector-blue pl-6 sm:pl-8"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-vector-blue">
            Público objetivo
          </p>
          <p className="mt-4 max-w-2xl text-xl font-medium leading-relaxed text-vector-black sm:text-2xl">
            {audience}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
