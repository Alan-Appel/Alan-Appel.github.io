"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

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
 *
 * Va dentro de una tarjeta (borde + fondo sutil), como el resto de las
 * tarjetas del sitio (proyectos, stack) — antes eran dos elementos sueltos
 * flotando sobre la banda negra, que quedaba desarmónico con textos de
 * distinto largo. La tarjeta les da un límite visual común.
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
          className="flex flex-col items-start gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:p-12"
        >
          <div className="max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-vector-white sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/50 sm:text-base">
              {subtitle}
            </p>
          </div>
          <Link
            href="/contacto"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-vector-blue px-7 py-3.5 text-sm font-medium text-vector-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-vector-blue-dark hover:shadow-lg hover:shadow-vector-blue/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Contactarme
            <FiArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
