import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Requerido por output: "export" — este archivo es siempre igual, no
// depende de nada dinámico, pero hay que decírselo a Next.js explícito.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
