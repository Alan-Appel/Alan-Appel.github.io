import type { Metadata } from "next";
import { Suspense } from "react";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a Alan Appel (Vector) para conversar sobre tu proyecto de desarrollo web, e-commerce, software a medida o automatización con IA.",
  // Fija a la URL limpia sin el ?servicio= — todas las variantes de
  // deep-link (desde cada tarjeta de Servicios) son la misma página real,
  // así Google no las trata como contenido duplicado.
  alternates: { canonical: "/contacto" },
};

/**
 * ContactSection lee el ?servicio= client-side (useSearchParams), así que
 * esta página queda 100% estática — necesario para exportar el sitio como
 * HTML estático (GitHub Pages no corre un server de Next.js). Suspense es
 * obligatorio alrededor de useSearchParams en una página estática.
 */
export default function Contacto() {
  return (
    <Suspense fallback={null}>
      <ContactSection />
    </Suspense>
  );
}
