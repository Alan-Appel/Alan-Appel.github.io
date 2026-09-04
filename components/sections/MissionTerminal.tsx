"use client";

import { motion, type Variants } from "framer-motion";
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
          className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-vector-black sm:text-5xl"
        >
          La misión detrás de Vector
        </motion.h1>

        {/* Terminal window — formato terminal adaptado a la identidad de Vector:
            monocromo (negro/blanco/azul), sin colores de "traffic light". */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.2}
          variants={fadeUp}
          className="mt-10 overflow-hidden rounded-2xl border border-black/10 bg-vector-black shadow-sm"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 font-mono text-xs text-white/30">
              mision.md
            </span>
          </div>
          <div className="p-6 font-mono text-[13px] leading-relaxed sm:p-8 sm:text-sm">
            {/* 14s para ~1300 caracteres: rápido y prolijo (tipeo de a 2
                caracteres por tick), pero se puede seguir leyendo — el
                default de 6s quedaba casi instantáneo con este texto. */}
            <TerminalTypewriter lines={terminalLines} durationMs={14000} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
