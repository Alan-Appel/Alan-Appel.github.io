/**
 * Proyectos reales, confirmados en conversación. No agregar proyectos,
 * capturas, links o resultados que no hayan sido provistos explícitamente.
 */
export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  /** Ninguno de los dos está deployado — sin link de demo todavía. */
  liveUrl?: string;
  codeUrl?: string;
  /**
   * Captura de la app real corriendo localmente (levantada con datos de
   * prueba para poder renderizarla, ya que ninguna está deployada). No es
   * un mockup ni una imagen genérica — es la UI real del proyecto.
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
];
