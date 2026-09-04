"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

/**
 * Preloader de marca — en vez de reutilizar el isotipo como imagen estática,
 * dibuja un vector matemático (línea + punta de flecha) trazándose a sí
 * mismo: literalmente "dirección, magnitud y sentido" (Brand Book 2.2),
 * el concepto que le da nombre a la marca.
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
            width="140"
            height="80"
            viewBox="0 0 140 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              x1="10"
              y1="70"
              x2="118"
              y2="14"
              stroke="#000000"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            />
            <motion.path
              d="M100 8 L124 10 L116 32"
              stroke="#2563eb"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.75, ease: "easeInOut" }}
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
