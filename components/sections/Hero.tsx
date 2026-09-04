"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="flex flex-col">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-20 sm:py-28">
        {/* Eyebrow: disponibilidad + ubicación */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="mb-8 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-widest text-black/50"
        >
          {siteConfig.availableForWork && (
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vector-blue opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-vector-blue" />
              </span>
              Disponible para proyectos
            </span>
          )}
          <span className="text-black/20">/</span>
          <span>{siteConfig.location}</span>
        </motion.div>

        {/* Wordmark: relleno + contorno */}
        <h1 className="leading-[0.9]">
          <motion.span
            initial="hidden"
            animate="show"
            custom={0.1}
            variants={fadeUp}
            className="block text-[16vw] font-bold tracking-tight text-vector-black sm:text-[9rem] md:text-[10.5rem]"
          >
            VECTOR
          </motion.span>
          <motion.span
            initial="hidden"
            animate="show"
            custom={0.22}
            variants={fadeUp}
            className="block text-[7.5vw] font-bold tracking-tight text-transparent [-webkit-text-stroke:1.5px_black] sm:text-[4.25rem] md:text-[5rem]"
          >
            FULL STACK DEVELOPER
          </motion.span>
        </h1>

        {/* Propuesta de valor */}
        <motion.p
          initial="hidden"
          animate="show"
          custom={0.36}
          variants={fadeUp}
          className="mt-8 max-w-xl text-base leading-relaxed text-black/60 sm:text-lg"
        >
          Diseño y desarrollo soluciones digitales — sitios web, e-commerce,
          software a medida y automatización — con dirección, precisión y
          propósito.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.48}
          variants={fadeUp}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/proyectos"
            className="rounded-full bg-vector-black px-7 py-3 text-sm font-medium text-vector-white transition-colors hover:bg-vector-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
          >
            Ver proyectos
          </Link>
          <Link
            href="/contacto"
            className="rounded-full border border-black/15 px-7 py-3 text-sm font-medium text-vector-black transition-colors hover:border-vector-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
          >
            Contactarme
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
