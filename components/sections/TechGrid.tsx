"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiFirebase,
  SiGit,
  SiFigma,
  SiGithub,
} from "react-icons/si";
import { techStack } from "@/lib/site-config";

/** Stack real (Brand Book 4.2) → ícono de marca oficial (react-icons/simple-icons). */
const ICONS: Record<string, IconType> = {
  React: SiReact,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  "Node.js": SiNodedotjs,
  Firebase: SiFirebase,
  Git: SiGit,
  Figma: SiFigma,
  GitHub: SiGithub,
};

function TechCard({ name }: { name: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = ICONS[name];

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    cardRef.current?.style.setProperty("--x", `${e.clientX - rect.left}px`);
    cardRef.current?.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-black/10 bg-white px-6 py-9"
    >
      {/* Foco que sigue al cursor — un solo tono (azul Vector), no colores de marca de terceros */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(180px circle at var(--x, 50%) var(--y, 50%), rgba(37,99,235,0.14), transparent 70%)",
        }}
      />
      {Icon && (
        <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-black/[0.03] transition-colors duration-300 group-hover:bg-vector-blue/10">
          <Icon
            aria-hidden="true"
            className="h-6 w-6 text-black/40 transition-all duration-300 group-hover:scale-110 group-hover:text-vector-blue"
          />
        </span>
      )}
      <span className="relative text-sm font-medium text-black/70 transition-colors duration-300 group-hover:text-vector-black">
        {name}
      </span>
    </motion.div>
  );
}

export default function TechGrid() {
  return (
    <section className="border-t border-black/10 bg-vector-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-vector-blue">
              Stack
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-vector-black sm:text-4xl">
              Tecnologías
            </h2>
          </div>
          <p className="max-w-sm text-sm text-black/50">
            Las herramientas con las que trabajo día a día.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {techStack.map((name) => (
            <TechCard key={name} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
