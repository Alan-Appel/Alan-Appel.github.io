"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { projects } from "@/lib/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function ProjectsList() {
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
          Proyectos
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.08}
          variants={fadeUp}
          className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-vector-black sm:text-5xl"
        >
          Lo que he construido
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="show"
          custom={0.16}
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-black/60 sm:text-lg"
        >
          Proyectos reales, de código abierto. Ninguno está deployado todavía
          — las capturas son de cada app corriendo con datos de prueba. Si
          alguno se parece a lo que necesitás,{" "}
          <Link
            href="/contacto"
            className="font-medium text-vector-black underline decoration-vector-blue/40 underline-offset-4 transition-colors hover:decoration-vector-blue"
          >
            escribime y lo conversamos
          </Link>
          .
        </motion.p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i * 0.1}
              variants={fadeUp}
              className="group overflow-hidden rounded-2xl border border-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-xl hover:shadow-black/5"
            >
              <Link
                href={`/proyectos/${project.slug}`}
                className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
              >
                <div className="relative aspect-video overflow-hidden bg-vector-black">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`Captura de pantalla de ${project.name}`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <div className="p-6 sm:p-7">
                  <h2 className="text-xl font-bold tracking-tight text-vector-black">
                    {project.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-black/60">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-black/[0.04] px-3 py-1 font-mono text-xs text-black/60"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-vector-blue transition-colors group-hover:text-vector-blue-dark">
                    Ver proyecto
                    <FiArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
