import Link from "next/link";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { projects } from "@/lib/projects";

/**
 * Cuando hay `image`, es una captura real de la app corriendo (con datos
 * de prueba, ya que ninguna está deployada) — no un mockup. Sin imagen
 * todavía, cae al placeholder de marca (número + inicial) en vez de una
 * imagen genérica o inventada.
 */
function ProjectVisual({
  index,
  name,
  image,
}: {
  index: number;
  name: string;
  image?: string;
}) {
  if (image) {
    return (
      <div className="relative aspect-video overflow-hidden bg-vector-black">
        <Image
          src={image}
          alt={`Captura de pantalla de ${name}`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-vector-black">
      <span className="font-mono text-xs tracking-widest text-white/30">
        {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
      </span>
      <span className="absolute text-[6rem] font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.15)] sm:text-[8rem]">
        {name.charAt(0)}
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-black/10">
      <ProjectVisual index={index} name={project.name} image={project.image} />
      <div className="p-6 sm:p-7">
        <h3 className="text-xl font-bold tracking-tight text-vector-black">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-black/60">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-black/[0.04] px-3 py-1 font-mono text-xs text-black/60"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap items-center gap-5">
          <Link
            href={`/proyectos/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-vector-blue transition-colors hover:text-vector-blue-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
          >
            Ver detalles
            <FiArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-vector-black transition-colors hover:text-vector-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
            >
              Ver demo
              <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-black/60 transition-colors hover:text-vector-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
            >
              <SiGithub aria-hidden="true" className="h-4 w-4" />
              Ver código
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function FeaturedProjects() {
  return (
    <section className="border-t border-black/10 bg-vector-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-vector-blue">
              Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-vector-black sm:text-4xl">
              Proyectos destacados
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-vector-black transition-colors hover:text-vector-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vector-blue"
          >
            Ver todos los proyectos
            <FiArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
