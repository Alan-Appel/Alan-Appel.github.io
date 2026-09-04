"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { TbDatabase } from "react-icons/tb";
import { FiBarChart2, FiMessageSquare } from "react-icons/fi";
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
  SiPython,
  SiPhp,
  SiGooglesheets,
} from "react-icons/si";
import { techStack } from "@/lib/site-config";

/**
 * Stack real (Brand Book 4.2, + herramientas de datos/IA confirmadas por
 * Alan) → ícono de marca oficial (react-icons/simple-icons) y su color real,
 * que solo aparece al hacer hover (por defecto todo es gris/monocromo).
 * Simple Icons no incluye un logo oficial de Power BI ni de OpenAI/ChatGPT
 * (no están en su catálogo), así que esos dos usan un ícono genérico
 * representativo en vez de un logo inventado — el color sí es el real de
 * cada marca. "SQL" tampoco es una marca específica (no se confirmó un
 * motor puntual como MySQL o PostgreSQL), así que también usa un ícono
 * genérico de base de datos.
 */
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
  SQL: TbDatabase,
  Python: SiPython,
  PHP: SiPhp,
  "Power BI": FiBarChart2,
  "Google Sheets": SiGooglesheets,
  ChatGPT: FiMessageSquare,
};

/** Color de marca real de cada herramienta (hex oficial Simple Icons donde aplica). */
const COLORS: Record<string, string> = {
  React: "#61DAFB",
  JavaScript: "#F7DF1E",
  HTML: "#E34F26",
  CSS: "#1572B6",
  "Node.js": "#339933",
  Firebase: "#FFCA28",
  Git: "#F05032",
  Figma: "#F24E1E",
  GitHub: "#181717",
  SQL: "#00758F",
  Python: "#3776AB",
  PHP: "#777BB4",
  "Power BI": "#F2C811",
  "Google Sheets": "#34A853",
  ChatGPT: "#412991",
};

function TechCard({ name }: { name: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = ICONS[name];
  const color = COLORS[name] ?? "#2563eb";

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
      style={{ "--brand": color } as React.CSSProperties}
      className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-black/10 bg-white px-6 py-9"
    >
      {/* Foco que sigue al cursor, teñido con el color real de cada marca. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(180px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--brand) 16%, transparent), transparent 70%)",
        }}
      />
      {Icon && (
        <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-black/[0.03] transition-colors duration-300 group-hover:bg-[color-mix(in_srgb,var(--brand)_12%,white)]">
          <Icon
            aria-hidden="true"
            className="h-6 w-6 text-black/40 transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--brand)]"
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
