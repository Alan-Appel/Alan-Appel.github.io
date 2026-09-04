import type { Metadata } from "next";
import ServicesList from "@/components/sections/ServicesList";
import ClosingBanner from "@/components/sections/ClosingBanner";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo web Full Stack, e-commerce, software a medida y automatización con IA — servicios de desarrollo para empresas y organizaciones en Paraguay. Escribime y conversamos sobre tu proyecto.",
};

/**
 * JSON-LD (schema.org Service) — refleja exactamente el contenido visible
 * de la página (mismos nombres y descripciones), como pide la buena
 * práctica de datos estructurados: nada que no esté también en pantalla.
 */
function ServicesJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": services.map((service) => ({
      "@type": "Service",
      name: service.name,
      description: service.description,
      areaServed: siteConfig.location,
      provider: {
        "@type": "Person",
        name: "Alan Roy Appel Monges",
        url: siteConfig.url,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Servicios() {
  return (
    <>
      <ServicesJsonLd />
      <ServicesList />
      <ClosingBanner
        title="¿Tenés un proyecto en mente?"
        subtitle="Contame qué necesitás y vemos cuál de estos frentes encaja mejor."
      />
    </>
  );
}
