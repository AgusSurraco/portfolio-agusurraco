export type CaseStudyCard = { title: string; body: string };
export type AuditRow = { screen: string; tag: "CLARO" | "MEJORABLE" | "REDUNDANTE"; description: string; diagnosis: string };
export type ProcessStep = { number: string; eyebrow: string; title: string; tag: string; body: string };
export type Stat = { value: string; label: string; detail: string };

export const postsmart = {
  slug: "postsmart",
  meta: {
    title: "PostSmart — Caso de estudio · Neky Surraco",
    description: "Rediseño del flujo de cobro de PostSmart, la app de Posnet para comercios que cobran bajo presión.",
  },
  nav: {
    label: "Secciones del caso",
    items: [
      { id: "contexto", number: "01", label: "Contexto" },
      { id: "problema", number: "02", label: "Problema" },
      { id: "proceso", number: "03", label: "Proceso" },
      { id: "solucion", number: "04", label: "Solución" },
      { id: "resultado", number: "05", label: "Resultado" },
    ],
  },
  hero: {
    back: "← Volver al portfolio",
    pill: "CASO DE ESTUDIO · FINTECH / POS",
    titleLine1: "Menos pasos,",
    titleLine2: "más cobros.",
    subtitle: "Rediseño del flujo de cobro de PostSmart, la app de Posnet para comercios que cobran bajo presión.",
    image: { src: "/images/postsmart/hero-pos.png", alt: "Terminal de cobro azul con la pantalla inicial rediseñada de PostSmart: acciones Cobrar, Consultas y Anular", width: 1061, height: 1377 },
    chips: [
      { value: "4.8/5", label: "satisfacción post-uso" },
      { value: "−30%", label: "tiempo de cobro" },
    ],
    meta: [
      { label: "Rol", value: "Diseñadora UX/UI" },
      { label: "Cliente", value: "Posnet" },
      { label: "Año", value: "2025" },
      { label: "Duración", value: "1 Mes" },
      { label: "Herramientas", value: "Claude - Figma Make - Illustrator - Photoshop" },
    ],
  },
  context: {
    label: "01 — Contexto",
    title: "El punto de partida",
    paragraphs: [
      "El equipo detectó un aumento sostenido de consultas de soporte vinculadas a errores de cobro y demoras en el mostrador — una señal de que algo en la experiencia no estaba funcionando.",
      "Esa señal fue el punto de partida para investigar de fondo: el sistema no permitía cobrar rápido ni gestionar ventas y reportes con facilidad, generando errores y frustración, sobre todo en picos de demanda o sin experiencia digital previa.",
    ],
    bigCard: { title: "Comerciantes", body: "Perfil de usuario más afectado por la fricción de cobro" },
    cards: [
      { title: "Alta demanda", body: "Momento de mayor fricción en el mostrador" },
      { title: "Soporte", body: "Canal donde se detectó la señal inicial" },
    ] as CaseStudyCard[],
  },
  problem: {
    label: "02 — Problema",
    statement: "Comerciantes y emprendedores que operan bajo alta demanda o con baja familiaridad digital no logran cobrar rápido ni entender sus reportes de venta — lo que genera errores y frustración en el momento más crítico del negocio: el cobro.",
    quote: "Necesito cerrar el día con claridad: qué vendí, cuánto cobré y sin perder tiempo buscando opciones en la app.",
    attribution: "— Comerciante, entrevista de usuario",
    cards: [
      { title: "Cobro lento en momentos de alta demanda", body: "El proceso de cobro no estaba pensado para picos de demanda: cada paso extra se traducía en fricción real en el mostrador, con el cliente esperando." },
      { title: "Baja familiaridad digital", body: "La interfaz no consideraba usuarios con poca experiencia digital, un perfil frecuente entre comerciantes y emprendedores." },
      { title: "Reportes poco claros", body: "Acceder a reportes de ventas y cobros requería conocimientos técnicos que la mayoría de los usuarios no tenía." },
    ] as CaseStudyCard[],
    image: { src: "/images/postsmart/flujo-original.png", alt: "Flujo de cobro original: pantallas secuenciales de inicio, ingresar monto y cuotas, confirmar monto, confirmar número de tarjeta y autorización", width: 1920, height: 1220 },
  },
  marquee: ["Menos pasos", "Más cobros", "Menos errores", "Más claridad"],
  process: {
    label: "03 — Proceso",
    steps: [
      { number: "01", eyebrow: "PASO 1", title: "Empatizar y definir", tag: "Investigación", body: "Entrevistas con comerciantes y emprendedores para mapear sus motivaciones, preocupaciones, objetivos y contexto de uso — la base para sintetizar el problema en preguntas concretas de diseño (HMW)." },
      { number: "02", eyebrow: "PASO 2", title: "Idear y prototipar", tag: "Prototipado", body: "El mapeo del flujo original reveló hasta 6 pantallas secuenciales para completar un solo cobro — incluyendo un paso de \"confirmar monto\" redundante con el de ingreso, sin edición inline. Prototipé una versión que fusiona esos pasos, reduce las confirmaciones a las estrictamente necesarias y reemplaza degradés y sombras por una interfaz plana de alto contraste." },
      { number: "03", eyebrow: "PASO 3", title: "Testear y validar", tag: "Validación", body: "Testeo de tareas con comerciantes reales, comparando el flujo rediseñado contra el original: tiempo para completar un cobro, errores de carga de datos y una encuesta de satisfacción post-uso. Los resultados (30% menos tiempo, 25% menos errores, 4.8/5 de satisfacción) validaron que fusionar los pasos redundantes reducía la fricción sin sacrificar precisión." },
    ] as ProcessStep[],
    images: [
      { src: "/images/postsmart/proceso-1.png", alt: "Referencia analizada: lector de tarjetas Mercado Pago Point", width: 466, height: 350 },
      { src: "/images/postsmart/proceso-2.png", alt: "Referencia analizada: logo de Fiserv", width: 466, height: 350 },
    ],
    auditTitle: "AUDITORÍA DEL FLUJO ORIGINAL · COBRO",
    auditHeaders: ["Pantalla", "Tag", "Descripción", "Diagnóstico"],
    audit: [
      { screen: "Home", tag: "CLARO", description: "4 accesos secundarios alrededor de un botón central de cobro.", diagnosis: "— Jerarquía clara, pero estética con degradés y sombras, poco alineada a un uso rápido." },
      { screen: "Ingresar monto", tag: "MEJORABLE", description: "El teclado numérico integra el botón de confirmar (✓) en la misma grilla de dígitos.", diagnosis: "— Mezcla entrada y confirmación en un solo gesto, con riesgo de toque accidental." },
      { screen: "Confirmar monto", tag: "REDUNDANTE", description: "Pantalla completa que repite el monto y las cuotas ya ingresados.", diagnosis: "— Mismo dato, dos pantallas, sin edición inline: el paso más costoso del flujo." },
      { screen: "Confirmar tarjeta", tag: "REDUNDANTE", description: "Confirmación de los últimos 4 dígitos, separada del tap que ya validó la tarjeta.", diagnosis: "— Otra pantalla de más para un dato que el sistema ya conoce." },
    ] as AuditRow[],
    testCards: [
      { title: "Metodología Nielsen", body: "Testeé con 5 usuarios individuales, evaluando 6 tareas concretas a resolver en los wireframes." },
      { title: "Resultado: tareas", body: "3 de 5 usuarios completaron las 6 tareas sin ayuda; el resto necesitó una sola aclaración." },
      { title: "Resultado: éxito general", body: "El 100% de los usuarios completó más del 75% de las tareas propuestas." },
    ] as CaseStudyCard[],
  },
  solution: {
    label: "04 — Solución",
    title: "El rediseño, sobre la base del diagnóstico",
    paragraph: "Diseñar una aplicación de cobro ágil, con una interfaz intuitiva y simplificada que permita a pequeños comercios realizar transacciones de forma rápida, acceder a reportes visuales en pocos pasos y operar sin fricciones, incluso en contextos de alta demanda o baja alfabetización digital.",
    list: [
      "Pantalla inicial con 3 acciones claras: Cobrar, Consultas y Anular",
      "Flujo de cobro simplificado, pensado para completarse en pocos pasos",
      "Diseño minimalista que reduce la carga cognitiva y agiliza la navegación",
      "Reportes visuales accesibles, sin necesidad de conocimientos técnicos",
      "Flujo de anulación de cobro claro, para revertir errores sin fricción",
    ],
    image: { src: "/images/postsmart/solucion.png", alt: "Dos terminales con PostSmart rediseñado: pantalla de pago aprobado y pantalla inicial con Cobrar, Consultas, Anular y resumen de ventas", width: 1860, height: 1240 },
  },
  prototype: {
    label: "Probar el prototipo →",
    href: "https://www.figma.com/proto/c3gvGITRQODOc1gWkR73Sh/Terminales?node-id=22-395&starting-point-node-id=22%3A395&scaling=scale-down&content-scaling=fixed&hide-ui=1",
    caption: "Prototipo en Figma · Caso completo en Behance",
    behanceLabel: "Ver caso en Behance ↗",
    behanceHref: "https://www.behance.net/gallery/232266107/Rediseno-UXUI-para-punto-de-venta",
    eyebrow: "PROTOTIPO INTERACTIVO",
    title: "Probalo vos: cobrá, anulá o consultá una venta",
    hint: "Mirá el flujo de cobro o tocá Probar en vivo para navegarlo vos.",
    embedTitle: "Prototipo PostSmart",
    embedSrc: "https://embed.figma.com/proto/c3gvGITRQODOc1gWkR73Sh/Terminales?node-id=22-395&starting-point-node-id=22%3A395&scaling=contain&content-scaling=fixed&hide-ui=1&embed-host=share",
    loading: "Cargando prototipo…",
    video: "/videos/postsmart-flujo-cobro.mp4",
    poster: "/images/postsmart/pos-home.png",
    videoLabel: "Demo del flujo de cobro en PostSmart",
    liveButton: "Probar en vivo",
    demoButton: "Ver demo",
  },
  results: {
    label: "05 — Resultado",
    stats: [
      { value: "30%", label: "Menos tiempo de cobro", detail: "tiempo promedio por transacción" },
      { value: "25%", label: "Menos errores", detail: "en el ingreso de datos" },
      { value: "20%", label: "Más ventas finalizadas", detail: "sin interrupciones" },
      { value: "4.8/5", label: "Satisfacción de usuarios", detail: "en evaluaciones post-uso" },
    ] as Stat[],
    eyebrow: "Aprendizajes clave",
    title: "Simplificar no es sacar funciones, es ordenar prioridades",
    paragraph: "El aprendizaje más significativo fue confirmar que un diseño minimalista, con menos pasos y jerarquía clara, reduce más la fricción que agregar funcionalidades nuevas.",
    learnings: [
      { title: "Investigación con usuarios reales", body: "Entrevistas con comerciantes y emprendedores antes de definir el MVP." },
      { title: "Foco en accesibilidad digital", body: "Validación del flujo simplificado con usuarios de baja familiaridad digital." },
      { title: "Métricas post-lanzamiento", body: "Seguimiento de tiempos de cobro, errores y satisfacción para medir el impacto real." },
    ] as CaseStudyCard[],
  },
};

export const caseStudies = { postsmart } as const;
export type CaseStudy = typeof postsmart;
