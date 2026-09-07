import type { NextConfig } from "next";

/**
 * GitHub Pages solo sirve archivos estáticos (no corre un server de
 * Next.js), así que el sitio se exporta como HTML/CSS/JS estático:
 * - output: "export" — genera la carpeta out/ en vez de un server.
 * - images.unoptimized — la optimización de next/image necesita un server;
 *   sin uno, sirve las imágenes tal cual (siguen livianas, ya vienen
 *   comprimidas de antes).
 * - trailingSlash — cada ruta exporta como carpeta/index.html
 *   (ej. /servicios/index.html en vez de /servicios.html), que es lo que
 *   los hosts estáticos como GitHub Pages resuelven bien sin configurar
 *   nada aparte.
 *
 * headers()/redirects()/rewrites() no son compatibles con output: "export"
 * (necesitan un server) — y de todos modos GitHub Pages no permite mandar
 * headers de respuesta personalizados, así que no se pierde nada que GitHub
 * Pages pudiera haber servido igual. Si en algún momento se aloja en un
 * server real (Vercel, etc.) conviene volver a sumarlos.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,

  // No exponer "X-Powered-By: Next.js" — no aporta nada al visitante y es
  // información gratis para quien esté buscando qué framework/versión atacar.
  poweredByHeader: false,
};

export default nextConfig;
