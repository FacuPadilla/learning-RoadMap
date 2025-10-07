export const roadmapData = {
  user_id: 45,
  steps: [
    {
      id: 1,
      title: "Fundamentos de HTML",
      status: "completed",
      subtasks: [
        {
          id: 1,
          name: "Etiquetas básicas",
          status: "completed",
          description:
            "Etiquetas esenciales (html, head, body, h1–h6, p, a, img) y atributos comunes.",
        },
        {
          id: 2,
          name: "Estructura semántica",
          status: "completed",
          description:
            "Uso de header, nav, main, section, article, aside y footer para dar significado.",
        },
        {
          id: 3,
          name: "Listas y tablas",
          status: "completed",
          description:
            "Listas ol/ul y tablas accesibles con thead/tbody, th con scope y caption.",
        },
        {
          id: 4,
          name: "Formularios básicos",
          status: "review",
          description:
            "Inputs, labels, selects y textareas con validación nativa y buenas prácticas de accesibilidad.",
        },
      ],
    },
    {
      id: 2,
      title: "Introducción a CSS",
      status: "in_progress",
      subtasks: [
        {
          id: 5,
          name: "Selectores",
          status: "completed",
          description:
            "Selectores básicos, de atributo y combinadores para apuntar elementos con precisión.",
        },
        {
          id: 6,
          name: "Box model",
          status: "in_progress",
          description:
            "Contenido, padding, borde y margen; diferencia entre content-box y border-box.",
        },
        {
          id: 7,
          name: "Colores y fuentes",
          status: "pending",
          description:
            "Variables CSS, paletas y tipografías web; jerarquía visual y legibilidad.",
        },
        {
          id: 8,
          name: "Unidades de medida",
          status: "blocked",
          description:
            "px, rem, em, %, vw, vh y cuándo usar cada una para diseño fluido y responsivo.",
        },
      ],
    },
    {
      id: 3,
      title: "CSS Avanzado",
      status: "pending",
      subtasks: [
        {
          id: 9,
          name: "Flexbox",
          status: "pending",
          description:
            "Ejes, alineación, wrap y gap para layouts unidimensionales robustos.",
        },
        {
          id: 10,
          name: "Grid",
          status: "pending",
          description:
            "Tracks, repeat(), fr y áreas para rejillas responsivas y expresivas.",
        },
        {
          id: 11,
          name: "Animaciones y transiciones",
          status: "blocked",
          description:
            "Transiciones, keyframes, curvas de easing y consideraciones de performance.",
        },
      ],
    },
    {
      id: 4,
      title: "JavaScript Básico",
      status: "pending",
      subtasks: [
        {
          id: 12,
          name: "Variables y tipos de datos",
          status: "pending",
          description:
            "let/const, tipos primitivos y coerción segura para evitar bugs sutiles.",
        },
        {
          id: 13,
          name: "Operadores y condicionales",
          status: "pending",
          description:
            "Operadores lógicos/aritméticos y control de flujo con if/else y switch.",
        },
        {
          id: 14,
          name: "Bucles",
          status: "pending",
          description:
            "for, while, for...of y métodos de array para iterar con claridad.",
        },
        {
          id: 15,
          name: "Funciones",
          status: "pending",
          description:
            "Declarativas, expresiones y flecha; parámetros, retorno y pureza.",
        },
      ],
    },
    {
      id: 5,
      title: "JavaScript Intermedio",
      status: "blocked",
      subtasks: [
        {
          id: 16,
          name: "Objetos y arrays",
          status: "pending",
          description:
            "Creación, destructuring, spread/rest y métodos comunes para transformar datos.",
        },
        {
          id: 17,
          name: "Manejo del DOM",
          status: "pending",
          description:
            "querySelector, creación/actualización de nodos, clases y nociones de layout/paint.",
        },
        {
          id: 18,
          name: "Eventos",
          status: "blocked",
          description:
            "addEventListener, delegación de eventos y prevención del comportamiento por defecto.",
        },
        {
          id: 19,
          name: "Fetch API y Promesas",
          status: "blocked",
          description:
            "fetch, then/catch, async/await y manejo de errores y estados de carga.",
        },
      ],
    },
    {
      id: 6,
      title: "React",
      status: "pending",
      subtasks: [
        {
          id: 20,
          name: "Componentes y props",
          status: "pending",
          description:
            "Componentización, props y composición para crear UI reutilizable y legible.",
        },
        {
          id: 21,
          name: "Estado y ciclo de vida",
          status: "pending",
          description:
            "useState y flujo de datos unidireccional; cuándo actualizar y por qué.",
        },
        {
          id: 22,
          name: "Hooks básicos",
          status: "pending",
          description:
            "useState, useEffect y useRef; dependencias, efectos y patrones habituales.",
        },
        {
          id: 23,
          name: "Eventos en React",
          status: "pending",
          description:
            "Synthetic events, lifting state y control de formularios y entradas.",
        },
      ],
    },
    {
      id: 7,
      title: "Proyecto Final",
      status: "pending",
      subtasks: [
        {
          id: 24,
          name: "Diseño del prototipo",
          status: "review",
          description:
            "User flows, wireframes, criterios de aceptación y plan de alcance.",
        },
        {
          id: 25,
          name: "Implementación del frontend",
          status: "pending",
          description:
            "Estructura de carpetas, estilos, componentes y estándares de calidad.",
        },
        {
          id: 26,
          name: "Integración con API",
          status: "pending",
          description:
            "Consumo de endpoints, mapeo de modelos y manejo de errores/estados.",
        },
        {
          id: 27,
          name: "Deploy",
          status: "pending",
          description:
            "Build optimizado, variables de entorno y publicación en Vercel/Netlify.",
        },
      ],
    },
  ],
};
