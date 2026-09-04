import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

/**
 * Imagen para Open Graph / Twitter Card — misma marca (logo real, negro
 * Vector, azul Vector) usada en el resto del sitio. Generada con código
 * (next/og) en vez de un diseño estático, así queda sincronizada si el
 * logo cambia.
 */
export async function renderOgImage() {
  const logoBuffer = await readFile(
    join(process.cwd(), "public/brand/vector-logo-white.png")
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={520} height={34} alt="" />
        <div
          style={{
            marginTop: 36,
            fontSize: 30,
            color: "#2563eb",
            fontFamily: "monospace",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Desarrollo Full Stack
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Asunción, Paraguay
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
