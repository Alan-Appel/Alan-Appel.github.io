"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FiFileText } from "react-icons/fi";
import { identity, mission } from "@/lib/about";
import TerminalTypewriter from "@/components/ui/TerminalTypewriter";

const terminalLines = [
  { text: "visitor@vector:~$ whoami", className: "text-vector-blue" },
  { text: identity.paragraphs[0], className: "mt-3 text-white/70" },
  { text: identity.paragraphs[1], className: "mt-4 text-white/70" },
  {
    text: "visitor@vector:~$ cat mision.md",
    className: "mt-6 text-vector-blue",
  },
  { text: mission.paragraphs[0], className: "mt-3 text-white/70" },
  { text: mission.paragraphs[1], className: "mt-4 text-white/70" },
  { text: mission.paragraphs[2], className: "mt-4 text-white/70" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function MissionTerminal() {
  return (
    <section className="bg-vector-white">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pb-20 sm:pt-28">
        <div className="grid items-center gap-10 sm:grid-cols-[1fr_300px] sm:gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          <div>
            <motion.p
              initial="hidden"
              animate="show"
              custom={0}
              variants={fadeUp}
              className="font-mono text-xs uppercase tracking-widest text-vector-blue"
            >
              Sobre mí
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="show"
              custom={0.08}
              variants={fadeUp}
              className="mt-3 text-4xl font-bold tracking-tight text-vector-black sm:text-5xl"
            >
              La misión detrás de Vector
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="show"
              custom={0.16}
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-black/60 sm:text-lg"
            >
              Alan Appel, desarrollador Full Stack detrás de Vector.
            </motion.p>
          </div>

          {/* Foto real de Alan — en blanco y negro, encaja directo con la
              paleta monocromo del sitio. Tratamiento de retrato editorial
              (tamaño real, no una miniatura de esquina) con una línea de
              acento azul y una etiqueta debajo, como una foto de autor en
              una publicación — así se integra como parte del diseño y no
              como una foto pegada aparte. */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.14}
            variants={fadeUp}
            className="mx-auto w-full max-w-[240px] sm:mx-0 sm:max-w-none"
          >
            <div className="relative overflow-hidden rounded-2xl border border-black/10 shadow-xl shadow-black/10">
              <span className="absolute inset-x-0 top-0 z-10 h-1 bg-vector-blue" />
              <div className="relative aspect-[4/5]">
                <Image
                  src="/profile/alan-appel.jpg"
                  alt="Alan Appel, desarrollador Full Stack detrás de Vector"
                  fill
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 300px, 240px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-black/35">
              <span>Alan Appel</span>
              <span>Asunción, PY</span>
            </p>
          </motion.div>
        </div>

        {/* Ventana de editor — formato adaptado a la identidad de Vector:
            monocromo (negro/blanco/azul), sin colores de "traffic light".
            Gutter de líneas, tab de archivo y barra de estado real (como
            un editor de código de verdad, no un mockup plano) + sombra con
            profundidad para que se sienta tangible, flotando sobre la página. */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.2}
          variants={fadeUp}
          className="mt-10 overflow-hidden rounded-2xl border border-black/10 bg-vector-black shadow-2xl shadow-black/20 ring-1 ring-black/5"
        >
          {/* Barra de título — gradiente sutil para dar volumen, como la
              barra de una ventana real en vez de un rectángulo plano. */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-b from-white/25 to-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-b from-white/25 to-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-b from-white/25 to-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]" />
            {/* Tab de archivo activo, como en un editor real */}
            <span className="ml-4 flex items-center gap-1.5 rounded-t-md border-b-2 border-vector-blue px-2 py-1 font-mono text-xs text-white/70">
              <FiFileText aria-hidden="true" className="h-3 w-3" />
              mision.md
            </span>
          </div>
          <div className="p-6 font-mono text-[13px] leading-relaxed sm:p-8 sm:text-sm">
            {/* Ritmo de tipeo FIJO (no duración total): 25 caracteres por
                segundo, como alguien escribiendo rápido de verdad — ni al
                instante (como quedaba con duration en un texto largo) ni
                arrastrado. showLineNumbers: gutter de líneas como un editor
                real. */}
            <TerminalTypewriter
              lines={terminalLines}
              charsPerSecond={25}
              showLineNumbers
            />
          </div>
          {/* Barra de estado — detalle final que remata la sensación de
              "editor real" (UTF-8, tipo de archivo, etc, como VS Code). */}
          <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.03] px-5 py-2 font-mono text-[10px] uppercase tracking-wider text-white/25">
            <span>Markdown</span>
            <span>UTF-8</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
