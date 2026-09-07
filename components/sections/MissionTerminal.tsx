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
        {/* Un solo panel negro compacto: foto a la izquierda (a sangre,
            fundiéndose con degradé hacia el negro) + presentación a la
            derecha, y debajo — sin cortes, en el mismo panel — la ventana
            de editor. Todo el "Sobre mí" vive en una única pieza en vez de
            dos cajas negras sueltas una arriba de la otra. */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="overflow-hidden rounded-3xl border border-black/10 bg-vector-black shadow-2xl shadow-black/20 ring-1 ring-black/5"
        >
          <div className="grid sm:grid-cols-[minmax(220px,360px)_1fr]">
            {/* Foto — llena la columna a sangre (sin marco propio) y se
                funde con el negro del panel: degradé a la derecha en
                desktop (donde queda al lado del texto), degradé abajo en
                mobile (donde queda arriba del texto). */}
            <div className="relative h-72 sm:h-auto sm:min-h-[380px]">
              <Image
                src="/profile/alan-appel.jpg"
                alt="Alan Appel, desarrollador Full Stack detrás de Vector"
                fill
                sizes="(min-width: 640px) 360px, 100vw"
                className="object-cover object-[50%_22%]"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-vector-black sm:bg-gradient-to-r sm:to-vector-black"
              />
            </div>

            {/* Presentación */}
            <div className="flex flex-col justify-center px-8 py-10 sm:px-10 sm:py-12 lg:px-14">
              <motion.p
                initial="hidden"
                animate="show"
                custom={0.1}
                variants={fadeUp}
                className="font-mono text-xs uppercase tracking-widest text-vector-blue"
              >
                Sobre mí
              </motion.p>
              <motion.h1
                initial="hidden"
                animate="show"
                custom={0.18}
                variants={fadeUp}
                className="mt-3 text-3xl font-bold tracking-tight text-vector-white sm:text-4xl lg:text-5xl"
              >
                La misión detrás de Vector
              </motion.h1>
              <motion.p
                initial="hidden"
                animate="show"
                custom={0.26}
                variants={fadeUp}
                className="mt-5 max-w-md text-base leading-relaxed text-white/55 sm:text-lg"
              >
                Alan Appel, desarrollador Full Stack detrás de Vector.
              </motion.p>
            </div>
          </div>

          {/* Ventana de editor — mismo panel, ahora como una sección más
              debajo de la presentación. Monocromo (negro/blanco/azul), sin
              colores de "traffic light". Gutter de líneas, tab de archivo y
              barra de estado real (como un editor de código de verdad, no
              un mockup plano). */}
          <div className="border-t border-white/10">
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
                  arrastrado. showLineNumbers: gutter de líneas como un
                  editor real. */}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
