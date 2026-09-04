import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No exponer "X-Powered-By: Next.js" — no aporta nada al visitante y es
  // información gratis para quien esté buscando qué framework/versión atacar.
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Evita que el sitio se pueda embeber en un <iframe> de otro
          // dominio (clickjacking).
          { key: "X-Frame-Options", value: "DENY" },
          // El navegador no debe "adivinar" el tipo de un archivo distinto
          // al Content-Type real que mandamos.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // No mandar la URL completa de origen a sitios externos cuando
          // se hace click en un link saliente (GitHub, LinkedIn, etc.).
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Este sitio no usa cámara/micrófono/ubicación — lo decimos
          // explícito en vez de dejarlo abierto por default.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
