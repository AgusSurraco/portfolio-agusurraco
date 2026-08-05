export type ProjectStatus = "draft" | "construction" | "live";

export const featuredProjects: { slug: string; tag: string; title: string; image: string; cardHeight: number; imageHeight: number; status: ProjectStatus }[] = [
  { slug: "postsmart", tag: "UX/UI · Post App", title: "UXUI y rediseño - Punto de venta", image: "/images/home/postsmart-card.png", cardHeight: 442, imageHeight: 279, status: "draft" },
  { slug: "ypf-refineria", tag: "UX/UI · Web App", title: "Diseño de producto - YPF Refineria", image: "/images/home/ypf-refineria-card.png", cardHeight: 330, imageHeight: 169, status: "construction" },
  { slug: "telemedify", tag: "UX/UI · Web App", title: "UXUI y rediseño - Telemedify", image: "/images/home/telemedify-card.png", cardHeight: 442, imageHeight: 279, status: "construction" },
];
