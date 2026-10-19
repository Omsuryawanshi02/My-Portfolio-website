import { Project } from '../types';

export type { Project };

export const projectsData: Project[] = [
  {
    id: "cyber-threat-detection",
    title: "Cyber Threat Detection",
    description:
      "AI cybersecurity system identifying and classifying suspicious network activity using machine learning.",
    technologies: ["Python", "Machine Learning", "XGBoost", "Traffic Analysis"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/work-1.png",
  },
  {
    id: "smart-irrigation",
    title: "Smart Irrigation AI",
    description:
      "Machine learning model providing precise irrigation recommendations using agricultural sensor data.",
    technologies: ["Python", "pandas", "scikit-learn", "XGBoost"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/work-2.png",
  },
  {
    id: "guardian-desk",
    title: "Guardian-Desk Security",
    description:
      "Security toolkit featuring integrity monitoring, password audit, system diagnostics, and log analysis.",
    technologies: ["Python", "Flask", "Cybersecurity"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/work-3.png",
  },
  {
    id: "indiakart-analytics",
    title: "IndiaKart Analytics",
    description:
      "Analytics platform analyzing customer trends, sales performance, SQL data queries, and dashboards.",
    technologies: ["SQL", "Python", "pandas", "Power BI"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/work-4.png",
  },
  {
    id: "multi-agent-code-helper",
    title: "Multi-Agent Code Helper",
    description:
      "AI coding workspace with autonomous agents helping developers explore repo context and optimize code.",
    technologies: ["Python", "LLMs", "RAG", "AI Agents"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/work-5.png",
  },
];
