/**
 * Empresas con las que trabajé. Todos los datos son reales, confirmados
 * en conversación — no inventar clientes ni links de proyectos que no
 * estén públicamente disponibles.
 */
export type Client = {
  name: string;
  logo: string;
  /** Solo Wicomm está lanzado y en producción; el resto no lleva link todavía. */
  href?: string;
  /** "circle" para logos tipo sello/badge circular (ej. Alimentos Funcionales). */
  shape?: "rect" | "circle";
};

export const clients: Client[] = [
  {
    name: "Wicomm",
    logo: "/brand/clients/wicomm.png",
    href: "https://www.wicomm.com.py/",
  },
  { name: "Santa Bárbara", logo: "/brand/clients/santa-barbara.png" },
  { name: "SIME Medicina Prepaga", logo: "/brand/clients/sime.png" },
  {
    name: "Alimentos Funcionales",
    logo: "/brand/clients/alimentos-funcionales.png",
    shape: "circle",
  },
  { name: "Nutrica", logo: "/brand/clients/nutrica.png" },
];
