/**
 * Configuración central del sitio: navegación, enlaces sociales, metadatos base.
 * Un solo lugar para editar estos datos (evita repetirlos en Navbar/Footer/SEO).
 */

export const siteConfig = {
  name: "Vector",
  title: "Vector — Desarrollo Full Stack",
  description:
    "Vector es la marca personal de Alan Roy Appel Monges, desarrollador Full Stack en Asunción, Paraguay. Diseño y desarrollo web, e-commerce, software a medida y automatización con IA.",
  url: "https://vector.dev", // placeholder — actualizar con el dominio real
  locale: "es_PY",
  location: "Asunción, Paraguay", // confirmado por Alan (su propia bio en Sobre mí)
  availableForWork: true, // confirmado por Alan
};

/**
 * Stack real declarado en el Brand Book (Fase 4.2 — Skills), más las
 * herramientas de datos/IA que Alan confirmó agregar (SQL, Power BI, Google
 * Sheets, Python, PHP, ChatGPT). No agregar tecnologías sin confirmar.
 */
export const techStack = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Firebase",
  "Git",
  "Figma",
  "GitHub",
  "Python",
  "PHP",
  "SQL",
  "Power BI",
  "Google Sheets",
  "ChatGPT",
];

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

/** Redes y canales de contacto reales, confirmados por Alan. */
export const socialLinks = {
  github: "https://github.com/Alan-Appel",
  linkedin: "https://www.linkedin.com/in/alanappel/",
  instagram: "https://www.instagram.com/alanappel_/",
  freecodecamp: "https://www.freecodecamp.org/AlanAppel",
  email: "mailto:vctr.devpy@gmail.com",
  emailDisplay: "vctr.devpy@gmail.com",
  whatsapp: "https://wa.me/595986132300",
};
