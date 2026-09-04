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
 *
 * Este provider vive una sola vez en el layout raíz y NO se remonta al
 * navegar entre páginas (Next.js solo cambia el contenido). Cada página
 * tiene una altura distinta, y sin avisarle a Lenis, sus límites de scroll
 * quedan calculados para la página anterior — navegando lo suficiente esa
 * diferencia se acumula hasta que el scroll parece "trabarse" en un punto
 * fijo (solo un refresh completo lo reinicia). El ResizeObserver de acá
 * abajo mide el alto real del body en todo momento y le avisa a Lenis cada
 * vez que cambia — por navegación, por imágenes que terminan de cargar, o
 * por cualquier otra razón — así sus límites nunca quedan desactualizados.
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

    const resizeObserver = new ResizeObserver(() => lenis.resize());
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
