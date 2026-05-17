export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  details?: string;
  image?: string;
  gallery?: string[];
  tags: string[];
  github: string;
  live?: string;
  status: "ACTIVE" | "WIP" | "ARCHIVED";
}

export const projects: Project[] = [
  {
    id: "tcm",
    slug: "test-case-management-system",
    title: "Test Case Management System",
    description:
      "Full-stack QA management platform with role-based access control, Redmine integration for bug tracking, Excel import/export, and real-time analytics dashboard.",
    details:
      "Designed and implemented a comprehensive quality assurance platform. The system allows teams to manage test plans, execute test runs, and track results with deep integration into Redmine for automated bug reporting. It features a robust role-based access control (RBAC) system to ensure data security and integrity across different user levels.",
    image: "/projects/tcm/tcm (6).png",
    gallery: [
      "/projects/tcm/tcm (1).png",
      "/projects/tcm/tcm (2).png",
      "/projects/tcm/tcm (3).png",
      "/projects/tcm/tcm (4).png",
      "/projects/tcm/tcm (5).png",
      "/projects/tcm/tcm (6).png",
      "/projects/tcm/tcm (7).png",
      "/projects/tcm/tcm (8).png",
    ],
    tags: ["Spring", "Angular", "MariaDB", "JWT"],
    github: "https://github.com/irfansyafie96/test-case-management-system",
    status: "ARCHIVED",
  },
  {
    id: "paws-and-preferences",
    slug: "paws-and-preferences",
    title: "Paws & Preferences",
    description:
      "A Tinder-style cat discovery app where you swipe through cute cat photos to find the ones you love. Mobile-first design with smooth animations.",
    details:
      "Built as a technical assessment, this app focuses on quality over quantity. Features include touch gesture optimization, Framer Motion animations for fluid interactions, Cataas API integration with image preloading for instant swipes, and a delightful summary screen with floating cats.",
    image: "/projects/paws-and-preferences/paws-and-preferences (1).png",
    gallery: [
      "/projects/paws-and-preferences/paws-and-preferences (1).png",
      "/projects/paws-and-preferences/paws-and-preferences (2).png",
    ],
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
    github: "https://github.com/irfansyafie96/paws-and-preferences",
    live: "https://irfansyafie96.github.io/paws-and-preferences/",
    status: "ARCHIVED",
  },
  {
    id: "food-ordering-system",
    slug: "food-ordering-system",
    title: "Food Ordering System",
    description:
      "Collaborative full-stack food ordering web application with customer orders, staff dashboard, real-time order tracking, and email notifications.",
    details:
      "A team project developed with two teammates to simulate a digital ordering workflow. Features include customer order interface, staff management dashboard, real-time order status updates, and automated email confirmations via PHPMailer. Built as coursework for UTeM FTMK.",
    image: "/projects/food-ordering-system/food-ordering-system (1).png",
    gallery: [
      "/projects/food-ordering-system/food-ordering-system (1).png",
      "/projects/food-ordering-system/food-ordering-system (2).png",
      "/projects/food-ordering-system/food-ordering-system (3).png",
    ],
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/irfansyafie96/food-ordering-system",
    status: "ARCHIVED",
  },
  {
    id: "ai-powered-tutoring-system",
    slug: "ai-powered-tutoring-system",
    title: "AI-Powered Tutoring System",
    description:
      "Full-stack web application that helps students study efficiently by organizing notes, generating AI summaries using DeepSeek, and creating interactive quizzes.",
    details:
      "Final Year Project (FYP) at UTeM. Students can upload PDF, TXT, and PPTX files, get AI-generated summaries, generate multiple-choice quizzes, track performance over time, and explore a personal library with search functionality. Powered by DeepSeek API for natural language processing.",
    image:
      "/projects/ai-powered-tutoring-system/ai-powered-tutoring-system (1).png",
    gallery: [
      "/projects/ai-powered-tutoring-system/ai-powered-tutoring-system (1).png",
      "/projects/ai-powered-tutoring-system/ai-powered-tutoring-system (2).png",
      "/projects/ai-powered-tutoring-system/ai-powered-tutoring-system (3).png",
      "/projects/ai-powered-tutoring-system/ai-powered-tutoring-system (4).png",
    ],
    tags: ["React", "Node.js", "Express", "PostgreSQL", "DeepSeek API"],
    github: "https://github.com/irfansyafie96/ai-powered-tutoring-system",
    status: "ARCHIVED",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
