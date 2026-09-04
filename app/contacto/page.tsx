import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a Alan Appel (Vector) para conversar sobre tu proyecto de desarrollo web, e-commerce, software a medida o automatización con IA.",
};

/**
 * searchParams es una Promise en esta versión de Next.js (confirmado en
 * node_modules/next/dist/docs). Se usa acá, en el Server Component, y no
 * con useSearchParams() dentro de ContactForm — así el costo de "dynamic
 * rendering" queda acotado a /contacto y no afecta el prerender estático
 * de Home ni de las demás páginas que reusan el mismo formulario.
 */
export default async function Contacto({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { servicio } = await searchParams;
  const slug = Array.isArray(servicio) ? servicio[0] : servicio;
  const defaultService = services.find((s) => s.slug === slug)?.name ?? "";

  return <ContactSection defaultService={defaultService} />;
}
