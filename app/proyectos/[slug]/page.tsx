import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/sections/ProjectDetail";
import ClosingBanner from "@/components/sections/ClosingBanner";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProyectoDetalle({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectDetail project={project} />
      <ClosingBanner
        title="¿Tenés un proyecto en mente?"
        subtitle="Contame qué necesitás y vemos cómo lo encaramos."
      />
    </>
  );
}
