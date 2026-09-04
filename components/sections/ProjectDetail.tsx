"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/lib/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <section className="bg-vector-white">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-20 sm:pb-28 sm:pt-28">
        <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-black/50 transition-colors hover:text-vector-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
          >
            <FiArrowLeft aria-hidden="true" className="h-4 w-4" />
            Proyectos
          </Link>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="show"
          custom={0.06}
          variants={fadeUp}
          className="mt-8 font-mono text-xs uppercase tracking-widest text-vector-blue"
        >
          Proyecto
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.12}
          variants={fadeUp}
          className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-vector-black sm:text-5xl"
        >
          {project.name}
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="show"
          custom={0.18}
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base leading-relaxed text-black/60 sm:text-lg"
        >
          {project.description}
        </motion.p>

        <motion.ul
          initial="hidden"
          animate="show"
          custom={0.24}
          variants={fadeUp}
          className="mt-6 flex flex-wrap gap-2"
        >
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-black/[0.04] px-3 py-1 font-mono text-xs text-black/60"
            >
              {tech}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.3}
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-vector-blue px-6 py-3 text-sm font-medium text-vector-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-vector-blue-dark hover:shadow-lg hover:shadow-vector-blue/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
            >
              Ver sitio
              <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-vector-black px-6 py-3 text-sm font-medium text-vector-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/80 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
            >
              <SiGithub aria-hidden="true" className="h-4 w-4" />
              Ver código en GitHub
            </a>
          )}
        </motion.div>

        {project.image && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
            className="mt-16 grid gap-6 sm:grid-cols-[1fr_280px]"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-black/10 bg-vector-black">
              <Image
                src={project.image}
                alt={`Captura de escritorio de ${project.name}`}
                fill
                sizes="(min-width: 640px) 60vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            {project.mobileImage && (
              <div className="relative mx-auto aspect-[390/844] w-full max-w-[280px] overflow-hidden rounded-2xl border border-black/10 bg-vector-black">
                <Image
                  src={project.mobileImage}
                  alt={`Captura mobile de ${project.name}`}
                  fill
                  sizes="280px"
                  className="object-cover object-top"
                />
              </div>
            )}
          </motion.div>
        )}

        {/* Solo aclaro "no deployado" para los proyectos que efectivamente
            no lo están — no tiene sentido mostrarlo en uno que sí está en
            producción (project.liveUrl). */}
        {!project.liveUrl && (
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            custom={0.1}
            variants={fadeUp}
            className="mt-6 text-xs text-black/40"
          >
            Este proyecto todavía no está deployado — la captura es de la
            aplicación real corriendo localmente, con datos de prueba.
          </motion.p>
        )}
      </div>
    </section>
  );
}
