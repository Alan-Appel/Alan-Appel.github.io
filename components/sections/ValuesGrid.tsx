"use client";

import { motion, type Variants } from "framer-motion";
import type { IconType } from "react-icons";
import { FiAward, FiShield, FiHeart, FiZap, FiClipboard } from "react-icons/fi";
import { values } from "@/lib/about";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/** Íconos decorativos genéricos (Feather) — no representan marcas ni datos, solo apoyan la lectura de cada valor. */
const ICONS: Record<string, IconType> = {
  Excelencia: FiAward,
  Integridad: FiShield,
  Servicio: FiHeart,
  Innovación: FiZap,
  Orden: FiClipboard,
};

export default function ValuesGrid() {
  return (
    <section className="border-t border-black/10 bg-vector-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-vector-blue">
            Valores
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-vector-black sm:text-4xl">
            Cómo trabaja Vector
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => {
            const Icon = ICONS[value.name];
            return (
              <motion.div
                key={value.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.08}
                variants={fadeUp}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                {Icon && (
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/[0.04] text-vector-blue">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                )}
                <h3 className="mt-4 text-lg font-bold text-vector-black">
                  {value.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
