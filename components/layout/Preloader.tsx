"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

/**
 * Preloader de marca — dibuja el ictus (el pez cristiano, símbolo real de la
 * marca) trazándose a sí mismo con el mismo lenguaje de "vector" del Brand
 * Book: dirección, magnitud y sentido. El cuerpo del pez se traza primero
 * (dos curvas), y la cola sale al final, todo en negro (sin azul) — mismo
 * timing y misma idea que el vector matemático que dibujaba antes, solo que
 * ahora es el pez el que se dibuja en vez de una flecha.
 *
 * Se reproduce una sola vez por carga completa (vive en el layout raíz, que
 * no se vuelve a montar en la navegación interna de Next.js) y se omite por
 * completo si el usuario prefiere movimiento reducido.
 */
export default function Preloader() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || done) return;

    document.body.style.overflow = "hidden";

    const start = performance.now();
    const durationMs = 1100;
    let frame: number;

    function tick(now: number) {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100));
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = "";
        }, 250);
      }
    }
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
    };
  }, [prefersReducedMotion, done]);

  if (prefersReducedMotion) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-vector-white"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <svg
            width="150"
            height="80"
            viewBox="0 0 150 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cuerpo del pez — dos curvas que nacen en el hocico y se
                encuentran a la derecha, como el ictus tradicional. */}
            <motion.path
              d="M14 40 C 46 14, 80 14, 104 40"
              stroke="#000000"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <motion.path
              d="M14 40 C 46 66, 80 66, 104 40"
              stroke="#000000"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
            />
            {/* Cola — remate en negro, mismo rol que la punta de flecha original. */}
            <motion.path
              d="M104 40 L130 20"
              stroke="#000000"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7, ease: "easeInOut" }}
            />
            <motion.path
              d="M104 40 L130 60"
              stroke="#000000"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.78, ease: "easeInOut" }}
            />
          </svg>

          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-black/50">
            <span>VECTOR</span>
            <span className="text-black/20">/</span>
            <span className="tabular-nums">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
