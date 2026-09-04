import type { Metadata } from "next";
import ProjectsList from "@/components/sections/ProjectsList";
import ClosingBanner from "@/components/sections/ClosingBanner";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos reales de desarrollo Full Stack de Alan Appel (Vector): sistema de gestión inmobiliaria y plataforma de gestión de eventos y congresos.",
  alternates: { canonical: "/proyectos" },
};

/**
 * JSON-LD (schema.org CreativeWork) — mismo criterio que en Servicios:
 * refleja exactamente lo que ya está en pantalla, nada inventado.
 */
function ProjectsJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.name,
      description: project.description,
      author: {
        "@type": "Person",
        name: "Alan Roy Appel Monges",
        url: siteConfig.url,
      },
      ...(project.codeUrl && { codeRepository: project.codeUrl }),
      keywords: project.stack.join(", "),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Proyectos() {
  return (
    <>
      <ProjectsJsonLd />
      <ProjectsList />
      <ClosingBanner
        title="¿Buscás algo parecido para tu negocio?"
        subtitle="Contame tu idea y vemos cómo la construimos, adaptada a lo que realmente necesitás."
      />
    </>
  );
}
