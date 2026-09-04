/**
 * Servicios reales confirmados en conversación: desarrollo Full Stack
 * (el diseño web va integrado ahí, no es un servicio aparte — así lo pidió
 * Alan), e-commerce, software a medida y automatización con IA. No agregar
 * servicios, tecnologías puntuales ni métricas que no se hayan confirmado.
 */
export type Service = {
  slug: string;
  name: string;
  description: string;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "full-stack",
    name: "Desarrollo Web / Full Stack",
    description:
      "Diseño y desarrollo de sitios y aplicaciones web de principio a fin: interfaz, lógica de negocio y base de datos. El diseño va integrado en cada proyecto — un sitio bien pensado visualmente que además funciona rápido, es seguro y fácil de mantener.",
    includes: [
      "Sitios institucionales y corporativos",
      "Aplicaciones web a medida",
      "Rendimiento, accesibilidad y buenas prácticas técnicas",
      "Optimización SEO técnica de base",
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    description:
      "Tiendas online pensadas para vender: catálogo de productos, carrito de compras, gestión de pedidos y una experiencia de compra clara de principio a fin para el cliente final.",
    includes: [
      "Catálogo y carrito de compras",
      "Gestión de pedidos y stock",
      "Panel de administración a medida",
      "Integración de métodos de pago",
    ],
  },
  {
    slug: "software-a-medida",
    name: "Software a Medida",
    description:
      "Sistemas de gestión diseñados para las necesidades específicas de cada negocio — plataformas de administración interna, organización de información, procesos y usuarios en un solo lugar.",
    includes: [
      "Sistemas de gestión y administración",
      "Paneles y reportes a medida",
      "Automatización de procesos internos",
      "Documentación y procesos ordenados",
    ],
  },
  {
    slug: "automatizacion-ia",
    name: "Automatización con IA",
    description:
      "Integración de herramientas de inteligencia artificial para automatizar tareas repetitivas y optimizar procesos, liberando tiempo para lo que realmente importa en cada negocio.",
    includes: [
      "Automatización de tareas repetitivas",
      "Integración de APIs de IA",
      "Asistentes y flujos automatizados",
      "Conexión con herramientas ya existentes",
    ],
  },
];
