import { TechCategory } from "./types";

import {
  Code2,
  Layout,
  Server,
  ShoppingCart,
  TestTube,
  Workflow,
  Pen,
} from "lucide-react";

export const techCategories: TechCategory[] = [
  {
    name: "Frontend Development",
    icon: Code2,
    technologies: [
      {
        name: "HTML5",
        icon: "🌐",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },

      {
        name: "JavaScript",
        icon: "📜",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        icon: "📘",
        url: "https://www.typescriptlang.org/",
      },
      { name: "React", icon: "⚛️", url: "https://reactjs.org/" },
      { name: "Next.js", icon: "▲", url: "https://nextjs.org/" },

      { name: "Redux", icon: "🔄", url: "https://redux.js.org/" },
      { name: "Zustand", icon: "🔄", url: "https://zustand.docs.pmnd.rs/" },
    ],
  },
  {
    name: "UI Development",
    icon: Layout,
    technologies: [
      { name: "CSS3", icon: "🎨", url: "https://www.w3schools.com/css/" },
      { name: "Tailwind CSS", icon: "🎨", url: "https://tailwindcss.com/" },
      { name: "Bootstrap", icon: "👢", url: "https://getbootstrap.com/" },
      {
        name: "CSS Modules",
        icon: "🎨",
        url: "https://github.com/css-modules/css-modules",
      },
      {
        name: "Framer Motion",
        icon: "🎥",
        url: "https://www.framer.com/motion/",
      },
    ],
  },
  {
    name: "Backend Development & Database",
    icon: Server,
    technologies: [
      {
        name: "Rest API",
        icon: "↔️",
        url: "https://pl.wikipedia.org/wiki/Representational_state_transfer",
      },
      { name: "Prisma", icon: "🟢", url: "https://expressjs.com/" },
      { name: "MongoDB", icon: "🍃", url: "https://www.mongodb.com/" },
      { name: "Supabase", icon: "🟢", url: "https://supabase.com/" },
      { name: "Firebase", icon: "🔥", url: "https://firebase.google.com/" },
      { name: "Pusher", icon: "🔄", url: "https://pusher.com/" },
    ],
  },
  {
    name: "Testing",
    icon: TestTube,
    technologies: [
      { name: "Jest", icon: "🧪", url: "https://jestjs.io/" },
      {
        name: "React Testing Library",
        icon: "🧪",
        url: "https://testing-library.com/react/",
      },
      { name: "MSW", icon: "🧪", url: "https://mswjs.io/" },
    ],
  },
  {
    name: "CMS",
    icon: Workflow,
    technologies: [
      {
        name: "AEM",
        icon: "🌐",
        url: "https://business.adobe.com/products/experience-manager/adobe-experience-manager.html",
      },
      { name: "Drupal CMS", icon: "🌐", url: "https://www.drupal.org/" },
    ],
  },
  {
    name: "eCommerce",
    icon: ShoppingCart,
    technologies: [
      {
        name: "SAP Hybris",
        icon: "🛒",
        url: "https://www.sap.com/poland/products/acquired-brands/what-is-hybris.html",
      },
      { name: "Syndigo", icon: "🛒", url: "https://www.syndigo.com/" },
    ],
  },
  {
    name: "Other tools",
    icon: Pen,
    technologies: [
      { name: "Git", icon: "🔄", url: "https://git-scm.com/" },
      { name: "Figma", icon: "🎨", url: "https://www.figma.com/" },
      {
        name: "Jira",
        icon: "🧪",
        url: "https://www.atlassian.com/software/jira",
      },
      {
        name: "Confluence",
        icon: "🧪",
        url: "https://www.atlassian.com/software/confluence",
      },
    ],
  },
];
