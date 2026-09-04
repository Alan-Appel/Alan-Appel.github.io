import Image from "next/image";
import { clients } from "@/lib/clients";

function LogoTile({ name, logo, href, shape = "rect" }: (typeof clients)[number]) {
  const isCircle = shape === "circle";

  const content = (
    <div
      className={
        isCircle
          ? "group relative flex h-24 w-24 mx-auto items-center justify-center overflow-hidden rounded-full border border-black/5 bg-white p-2 shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md"
          : "group relative flex h-24 w-full items-center justify-center overflow-hidden rounded-xl border border-black/5 bg-white px-6 py-4 shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md"
      }
    >
      <Image
        src={logo}
        alt={name}
        width={240}
        height={120}
        className={
          isCircle
            ? "h-full w-full rounded-full object-contain transition-transform duration-300 group-hover:scale-105"
            : "max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        }
      />
      {/* Overlay al hover — oscurece levemente para destacar el tile sin tocar el color real del logo */}
      <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/[0.06]" />
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} — ver sitio (proyecto de Vector)`}
        className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
      >
        {content}
      </a>
    );
  }

  return content;
}

export default function ClientLogos() {
  return (
    <section className="border-t border-black/10 bg-vector-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-vector-blue">
            Confianza
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-vector-black sm:text-4xl">
            Empresas con las que trabajé
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {clients.map((client) => (
            <LogoTile key={client.name} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
}
