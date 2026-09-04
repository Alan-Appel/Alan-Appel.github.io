import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import TerminalTypewriter from "@/components/ui/TerminalTypewriter";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página que buscás no existe o fue movida.",
};

const terminalLines = [
  {
    text: "visitor@vector:~$ cd /pagina-que-buscabas",
    className: "text-vector-blue",
  },
  {
    text: "bash: cd: /pagina-que-buscabas: No existe el archivo o directorio",
    className: "mt-3 text-white/70",
  },
  { text: "visitor@vector:~$ cat error.log", className: "mt-6 text-vector-blue" },
  {
    text: "Error 404 — la página no existe o fue movida. Volvé al inicio o escribime si te parece que esto es un error.",
    className: "mt-3 text-white/70",
  },
];

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center bg-vector-black">
      <div className="mx-auto w-full max-w-3xl px-6 py-20 text-center sm:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-vector-blue">
          Error
        </p>
        <p className="mt-4 text-[26vw] font-bold leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_white] sm:text-[9rem]">
          404
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-vector-white sm:text-3xl">
          Página no encontrada
        </h1>

        {/* Terminal window — mismo lenguaje visual que la sección "Sobre mí" */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black text-left shadow-sm">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 font-mono text-xs text-white/30">
              error.log
            </span>
          </div>
          <div className="p-6 font-mono text-[13px] leading-relaxed sm:p-8 sm:text-sm">
            <TerminalTypewriter lines={terminalLines} durationMs={2400} />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-vector-blue px-7 py-3 text-sm font-medium text-vector-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-vector-blue-dark hover:shadow-lg hover:shadow-vector-blue/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-vector-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            O escribime directamente
            <FiArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
