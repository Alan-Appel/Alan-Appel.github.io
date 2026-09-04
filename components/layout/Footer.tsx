import Link from "next/link";
import Image from "next/image";
import { navLinks, socialLinks, siteConfig } from "@/lib/site-config";

/**
 * Footer — fondo negro (aplicación del "Negro Vector" del Brand Book 2.4:
 * profesionalismo, autoridad, tecnología), momento de contraste fuerte
 * al final de cada página.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-vector-black text-vector-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-1">
            <Image
              src="/brand/vector-icon-white.png"
              alt=""
              width={122}
              height={38}
              className="h-4 w-auto"
            />
            <span className="text-lg font-bold tracking-wide text-vector-white">
              VECTOR
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Desarrollo Full Stack en Asunción, Paraguay. Soluciones digitales
            con dirección, precisión y propósito.
          </p>
        </div>

        <nav aria-label="Enlaces del footer" className="flex gap-16">
          <ul className="flex flex-col gap-2.5">
            <li className="mb-1 text-xs font-medium uppercase tracking-wider text-white/40">
              Navegación
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-vector-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-2.5">
            <li className="mb-1 text-xs font-medium uppercase tracking-wider text-white/40">
              Conectar
            </li>
            <li>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-vector-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-vector-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-vector-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={socialLinks.freecodecamp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-vector-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
              >
                freeCodeCamp
              </a>
            </li>
            <li>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-vector-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={socialLinks.email}
                className="text-sm text-white/70 transition-colors hover:text-vector-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-white/40">
          © {year} {siteConfig.name} — Alan Roy Appel Monges. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
