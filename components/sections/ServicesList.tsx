"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FiCode,
  FiShoppingCart,
  FiTool,
  FiCpu,
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";
import { services } from "@/lib/services";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const ICONS: Record<string, IconType> = {
  "full-stack": FiCode,
  ecommerce: FiShoppingCart,
  "software-a-medida": FiTool,
  "automatizacion-ia": FiCpu,
};

export default function ServicesList() {
  return (
    <section className="bg-vector-white">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pb-20 sm:pt-28">
        <motion.p
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-widest text-vector-blue"
        >
          Servicios
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.08}
          variants={fadeUp}
          className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-vector-black sm:text-5xl"
        >
          En qué puedo ayudarte
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="show"
          custom={0.16}
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-black/60 sm:text-lg"
        >
          Como desarrollador Full Stack en Asunción, trabajo el proyecto de
          punta a punta — el diseño no es un servicio aparte, va integrado en
          cada desarrollo. Estos son los frentes en los que trabajo hoy. Si
          alguno encaja con lo que necesitás,{" "}
          <Link
            href="/contacto"
            className="font-medium text-vector-black underline decoration-vector-blue/40 underline-offset-4 transition-colors hover:decoration-vector-blue"
          >
            escribime y lo conversamos
          </Link>
          .
        </motion.p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service, i) => {
            const Icon = ICONS[service.slug];
            return (
              <motion.article
                key={service.slug}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.08}
                variants={fadeUp}
                className="rounded-2xl border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-xl hover:shadow-black/5 sm:p-8"
              >
                {Icon && (
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/[0.04] text-vector-blue">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                )}
                <h2 className="mt-5 text-xl font-bold tracking-tight text-vector-black">
                  {service.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-black/60">
                  {service.description}
                </p>
                <ul className="mt-5 flex flex-col gap-2.5 border-t border-black/10 pt-5">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-black/70"
                    >
                      <FiCheck
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-vector-blue"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contacto?servicio=${service.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-vector-blue transition-colors hover:text-vector-blue-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
                >
                  Consultar por este servicio
                  <FiArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
