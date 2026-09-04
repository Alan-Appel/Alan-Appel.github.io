import Image from "next/image";
import { clients } from "@/lib/clients";

function LogoTile({ name, logo, href, shape = "rect" }: (typeof clients)[number]) {
  const isCircle = shape === "circle";

  const content = (
    <div
      className={
        isCircle
          ? "group flex h-24 w-24 mx-auto items-center justify-center rounded-full border border-black/5 bg-white p-2 transition-colors hover:border-black/10"
          : "group flex h-24 w-full items-center justify-center rounded-xl border border-black/5 bg-white px-6 py-4 transition-colors hover:border-black/10"
      }
    >
      <Image
        src={logo}
        alt={name}
        width={240}
        height={120}
        className={
          isCircle
            ? "h-full w-full rounded-full object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
            : "max-h-14 w-auto object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
        }
      />
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
