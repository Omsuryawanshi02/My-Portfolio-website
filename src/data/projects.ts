import { Project } from '../types';

export type { Project };

export const projectsData: Project[] = [
  {
    id: "cyber-threat-detection",
    title: "AI-Based Cyber Threat Detection",
    description:
      "An AI-driven cybersecurity system identifying and classifying suspicious network activity and anomalies in real-time.",
    technologies: ["Python", "Machine Learning", "XGBoost", "Cybersecurity"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/cyber-threat.jpg",
  },
  {
    id: "smart-irrigation",
    title: "Smart Irrigation Recommendation",
    description:
      "A machine learning project exploring irrigation recommendations and automated valve controls using agricultural sensor data.",
    technologies: ["Python", "scikit-learn", "pandas", "IoT Telemetry"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/smart-irrigation.jpg",
  },
  {
    id: "guardian-desk",
    title: "Guardian-Desk Cybersecurity",
    description:
      "A security toolkit featuring utilities for file integrity monitoring, password vulnerability audit, and event logs.",
    technologies: ["Python", "Flask", "Cybersecurity", "SHA-256"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/guardian-desk.jpg",
  },
  {
    id: "indiakart-analytics",
    title: "IndiaKart E-Commerce Analytics",
    description:
      "An e-commerce analytics platform evaluating sales performance, customer trends, SQL query metrics, and regional dashboards.",
    technologies: ["SQL", "Python", "pandas", "Power BI"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/indiakart-analytics.jpg",
  },
  {
    id: "multi-agent-code-helper",
    title: "Multi-Agent Code Helper",
    description:
      "An autonomous AI coding assistant where collaborative LLM agents explore repo context, debug, and optimize code.",
    technologies: ["Python", "LangChain", "LLMs", "AI Agents"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/code-helper.png",
  },
  {
    id: "hospital-navigation",
    title: "Hospital Navigation System",
    description:
      "An interactive indoor navigation system helping patients and visitors navigate complex hospital departments with 3D pathfinding.",
    technologies: ["JavaScript", "Python", "Flask", "Pathfinding"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/hospital-nav.jpg",
  },
];
