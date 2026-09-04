"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export type TypewriterLine = {
  text: string;
  className?: string;
};

/**
 * Efecto "escribiendo código" línea por línea, con cursor.
 * - Mecánico y sin conocimiento del contenido: el color/spacing de cada
 *   línea lo decide quien la usa vía `className`.
 * - Con prefers-reduced-motion, salta directo al texto completo (calculado
 *   en el render, no en un setState síncrono dentro del efecto) — el hook
 *   es SSR-safe (ver usePrefersReducedMotion).
 * - Accesible: el texto completo vive también en un nodo sr-only estático,
 *   y la versión animada queda aria-hidden para no spamear lectores de
 *   pantalla caracter por caracter.
 * - Velocidad por duración total (no por caracter): así un bloque de texto
 *   más largo no hace que la animación se sienta eterna — siempre tarda
 *   `durationMs` en completarse, sea cual sea el largo del contenido.
 */
const TICK_MS = 20;

export default function TerminalTypewriter({
  lines,
  durationMs = 6000,
  showLineNumbers = false,
}: {
  lines: TypewriterLine[];
  durationMs?: number;
  /** Gutter de números de línea (uno por elemento de `lines`), como un
   * editor de código real — MissionTerminal lo usa para que la ventana de
   * "Sobre mí" se sienta como un editor de verdad y no un mockup plano. */
  showLineNumbers?: boolean;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const flat = useMemo(
    () =>
      lines.map((line, i) => {
        const start = lines.slice(0, i).reduce((sum, l) => sum + l.text.length, 0);
        return { ...line, start, end: start + line.text.length };
      }),
    [lines],
  );
  const totalLength = flat.length ? flat[flat.length - 1].end : 0;
  const charsPerTick = Math.max(1, Math.ceil(totalLength / (durationMs / TICK_MS)));

  const [tickRevealed, setTickRevealed] = useState(0);

  useEffect(() => {
    // El caso "movimiento reducido" se resuelve en el render (más abajo),
    // no acá — evita un setState síncrono al montar.
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      setTickRevealed((r) => {
        if (r >= totalLength) {
          clearInterval(id);
          return r;
        }
        return Math.min(totalLength, r + charsPerTick);
      });
    }, TICK_MS);
    return () => clearInterval(id);
  }, [prefersReducedMotion, totalLength, charsPerTick]);

  const revealed = prefersReducedMotion ? totalLength : tickRevealed;
  const isDone = revealed >= totalLength;

  return (
    <>
      {/* Contenido real para lectores de pantalla — sin animación */}
      <div className="sr-only">
        {lines.map((line, i) => (
          <p key={i}>{line.text}</p>
        ))}
      </div>

      <div
        aria-hidden="true"
        className={showLineNumbers ? "grid grid-cols-[2ch_1fr] gap-x-4" : undefined}
      >
        {flat.map((line, i) => {
          const visibleCount = Math.max(0, Math.min(line.text.length, revealed - line.start));
          const isTypingThisLine = revealed > line.start && revealed < line.end;
          const hasStartedThisLine = revealed > line.start;
          // El número de línea tiene que subir/bajar junto con el mismo
          // margen-top que ya trae la línea real (mt-3/mt-4/mt-6), si no,
          // los números quedan pegados arriba y desalineados del texto.
          const marginMatch = line.className?.match(/\bmt-\S+/);
          return (
            <Fragment key={i}>
              {showLineNumbers && (
                <span
                  className={`select-none text-right text-white/20 transition-opacity duration-300 ${hasStartedThisLine ? "opacity-100" : "opacity-0"} ${marginMatch?.[0] ?? ""}`}
                >
                  {i + 1}
                </span>
              )}
              <p className={line.className}>
                {line.text.slice(0, visibleCount)}
                {isTypingThisLine && (
                  <span className="ml-0.5 inline-block h-[1em] w-[2px] -translate-y-[1px] bg-current align-middle" />
                )}
              </p>
            </Fragment>
          );
        })}
        {isDone && (
          <span
            className={`mt-1 inline-block h-4 w-2 bg-vector-blue align-middle animate-pulse motion-reduce:animate-none ${showLineNumbers ? "col-start-2" : ""}`}
          />
        )}
      </div>
    </>
  );
}
