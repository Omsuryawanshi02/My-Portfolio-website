import { Project } from '../types';

export type { Project };

export const projectsData: Project[] = [
  {
    id: "cyber-threat-detection",
    title: "Cyber Threat Detection",
    description:
      "AI cybersecurity system identifying and classifying suspicious network activity in real-time using XGBoost and traffic analysis.",
    technologies: ["Python", "XGBoost", "Machine Learning", "Traffic Analysis"],
    category: "AI & Cybersecurity",
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/cyber-threat.jpg",
  },
  {
    id: "smart-irrigation",
    title: "Smart Irrigation AI",
    description:
      "Precision agriculture IoT and ML platform predicting irrigation requirements and valve actuation using soil telemetry data.",
    technologies: ["Python", "scikit-learn", "pandas", "IoT Telemetry"],
    category: "AI & Machine Learning",
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/smart-irrigation.jpg",
  },
  {
    id: "guardian-desk",
    title: "Guardian-Desk Security",
    description:
      "Desktop security toolkit featuring file integrity monitoring with SHA-256 hash checks, password vulnerability audit, and event logs.",
    technologies: ["Python", "Flask", "Cybersecurity", "SHA-256"],
    category: "Cybersecurity & Tools",
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/guardian-desk.jpg",
  },
  {
    id: "indiakart-analytics",
    title: "IndiaKart Analytics",
    description:
      "Enterprise e-commerce intelligence dashboard analyzing regional sales trends, SQL query performance metrics, and demographic cohorts.",
    technologies: ["SQL", "Python", "pandas", "Power BI"],
    category: "Data & Analytics",
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/indiakart-analytics.jpg",
  },
  {
    id: "multi-agent-code-helper",
    title: "Multi-Agent Code Helper",
    description:
      "Autonomous coding workspace powered by collaborative LLM agents assisting developers with repository exploration, debugging, and refactoring.",
    technologies: ["Python", "LangChain", "LLMs", "AI Agents"],
    category: "AI Engineering",
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/code-helper.png",
  },
];
