"use client";

import { useSyncExternalStore } from "react";

/**
 * Lee `prefers-reduced-motion` de forma segura para SSR/hidratación con
 * useSyncExternalStore: el snapshot de servidor asume "sin preferencia"
 * (igual que hace el navegador antes de hidratar) y React reconcilia al
 * valor real del cliente de forma síncrona, antes del primer pintado, sin
 * parpadeos ni mismatches de hidratación.
 *
 * Compartido por cualquier animación hecha a mano (no-Framer-Motion) que
 * necesite respetar la preferencia — Framer Motion ya la respeta solo via
 * <MotionConfig reducedMotion="user"> en el layout raíz.
 */
function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}
function getSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function getServerSnapshot() {
  return false;
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
