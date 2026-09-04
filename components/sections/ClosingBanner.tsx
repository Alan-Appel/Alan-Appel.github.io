"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/**
 * Banda de cierre liviana para páginas internas — sin el formulario
 * completo (ese vive en Home y en /contacto) para no repetirlo en cada
 * página. Solo un llamado a la acción directo.
 */
export default function ClosingBanner({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="border-t border-white/10 bg-vector-black">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
        >
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-vector-white sm:text-3xl">
              {title}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/50 sm:text-base">
              {subtitle}
            </p>
          </div>
          <Link
            href="/contacto"
            className="shrink-0 rounded-full bg-vector-blue px-7 py-3 text-sm font-medium text-vector-white transition-colors hover:bg-vector-blue-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Contactarme
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
