"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Scroll suave (Fase 3 — rendimiento: solo transform/opacity, sin listeners
 * manuales de scroll). Se desactiva por completo si el usuario prefiere
 * movimiento reducido — en ese caso el navegador usa scroll nativo normal.
 *
 * Usa interpolación continua (`lerp`) en vez de una animación por-duración:
 * con `duration`, cada nuevo evento de rueda mientras la animación anterior
 * todavía está en curso reinicia el tween, y en Windows (donde el mouse
 * entrega muchos eventos de rueda pequeños en vez de pocos grandes) eso se
 * siente como que el scroll "se traba" a mitad de camino. `lerp` reacciona
 * a cada evento de forma continua sin ese conflicto.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    function handleResize() {
      lenis.resize();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
