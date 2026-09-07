/**
 * Proyectos reales, confirmados en conversación. No agregar proyectos,
 * capturas, links o resultados que no hayan sido provistos explícitamente.
 */
export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  /** Inmobiliaria y Eventify no están deployados (sin link de demo). Wicomm
   * sí — es un sitio real en producción, con liveUrl. */
  liveUrl?: string;
  codeUrl?: string;
  /**
   * Captura real de la app/sitio (local con datos de prueba para los que no
   * están deployados, o del sitio en vivo para los que sí). No es un
   * mockup ni una imagen genérica — es la UI real del proyecto.
   */
  image?: string;
  /** Segunda captura real (vista responsive/mobile) para la página de detalle. */
  mobileImage?: string;
};

export const projects: Project[] = [
  {
    slug: "sistema-gestion-inmobiliaria",
    name: "Sistema de Gestión Inmobiliaria",
    description:
      "Aplicación web diseñada para la administración de propiedades y operaciones inmobiliarias. Permite centralizar y organizar la información relacionada con la gestión del negocio inmobiliario en una plataforma digital.",
    stack: ["PHP", "JavaScript", "CSS", "HTML"],
    codeUrl: "https://github.com/Alan-Appel/Sistema-de-Gestion-Inmobiliaria",
    image: "/projects/inmobiliaria.jpg",
    mobileImage: "/projects/inmobiliaria-mobile.jpg",
  },
  {
    slug: "eventify",
    name: "Eventify — Gestión de Eventos y Congresos",
    description:
      "Plataforma web para la gestión y organización de eventos y congresos, diseñada para centralizar la administración de información, participantes y procesos relacionados con cada evento.",
    stack: ["PHP", "JavaScript", "CSS", "HTML"],
    codeUrl:
      "https://github.com/Alan-Appel/Sistema-de-Gestion-de-Eventos-y-Congresos---Eventify",
    image: "/projects/eventify.jpg",
    mobileImage: "/projects/eventify-mobile.jpg",
  },
  {
    slug: "wicomm",
    name: "Wicomm — Soporte Técnico Profesional",
    description:
      "Sitio web corporativo desarrollado para presentar los servicios de soporte técnico y soluciones tecnológicas de Wicomm, facilitando la conexión entre la empresa y sus clientes.",
    stack: ["PHP", "HTML", "CSS", "JavaScript"],
    // Proyecto terminado y lanzado — a diferencia de los otros dos, no hay
    // repositorio (Alan no tiene el código), pero sí está en producción.
    liveUrl: "https://www.wicomm.com.py/",
    image: "/projects/wicomm.jpg",
    // Sin mobileImage todavía — Alan mandó la captura de escritorio; si en
    // algún momento manda una de mobile, se agrega acá igual que en los
    // otros dos proyectos.
  },
];
