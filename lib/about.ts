/**
 * Presentación personal, misión, valores y público objetivo — contenido
 * real provisto por Alan. Texto reproducido tal cual fue dado, sin
 * reescribir ni suavizar — incluye la motivación de fe que forma parte de
 * su identidad real. No agregar ni quitar valores.
 */

/**
 * Presentación personal (bloque "whoami") — palabras del propio Alan,
 * reproducidas tal cual las dio, incluida la motivación de fe que forma
 * parte de su identidad real. No reescribir ni suavizar.
 */
export const identity = {
  paragraphs: [
    "Soy Alan Appel, tengo 19 años y soy desarrollador Full Stack de Asunción, Paraguay. Me apasiona la tecnología y la creación de soluciones digitales que puedan generar un impacto real en las personas, empresas y organizaciones.",
    "Como cristiano, mi identidad está en Cristo, y desde esa perspectiva busco desarrollar cada proyecto con excelencia, integridad y propósito. Para mí, la tecnología no se trata únicamente de escribir código, sino de utilizar las habilidades y conocimientos que Dios me ha permitido desarrollar para crear soluciones útiles y aportar valor.",
  ],
};

/**
 * Misión de Vector (bloque "cat mision.md") — texto real provisto por Alan.
 */
export const mission = {
  paragraphs: [
    "Vector nace con el propósito de desarrollar soluciones digitales de alta calidad, combinando tecnología, creatividad y una comprensión real de las necesidades de cada proyecto.",
    "Más que crear software, mi objetivo es construir productos y soluciones profesionales, eficientes y funcionales que ayuden a personas, empresas y organizaciones a avanzar. Creo que cada proyecto es una oportunidad para aprender, servir, resolver problemas y hacer las cosas con excelencia.",
    "Este es el comienzo de un camino que sigo construyendo, creciendo como profesional, desarrollador y persona, con la convicción de que el trabajo también puede ser una forma de reflejar aquello en lo que creo.",
  ],
};

export type Value = {
  name: string;
  description: string;
};

export const values: Value[] = [
  {
    name: "Excelencia",
    description:
      "Buscar la máxima calidad en cada detalle, procurando entregar soluciones sólidas, eficientes y bien diseñadas.",
  },
  {
    name: "Integridad",
    description:
      "Actuar con honestidad, transparencia y coherencia en cada decisión, tanto con clientes como con colaboradores.",
  },
  {
    name: "Servicio",
    description:
      "Comprender las necesidades de cada cliente para ofrecer soluciones que realmente aporten valor.",
  },
  {
    name: "Innovación",
    description:
      "Mantener una actitud de aprendizaje continuo, incorporando tecnologías y buenas prácticas que permitan construir mejores productos.",
  },
  {
    name: "Orden",
    description:
      "Trabajar con planificación, documentación y procesos claros que favorezcan la calidad y la sostenibilidad de cada proyecto.",
  },
];

export const audience =
  "Vector desarrolla soluciones digitales para organizaciones que buscan tecnología de calidad como herramienta para crecer.";
