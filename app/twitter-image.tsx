import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

// Requerido por output: "export" — sin esto, Next.js no sabe que esta
// imagen se puede generar entera en build time (es siempre la misma, no
// depende de nada dinámico) y el export estático falla.
export const dynamic = "force-static";

export const alt = "Vector — Desarrollo Full Stack";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  return renderOgImage();
}
