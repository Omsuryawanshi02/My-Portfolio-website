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
    id: "multi-agent-code-helper",
    title: "Multi-Agent Code Helper",
    description:
      "An autonomous AI coding assistant where collaborative LLM agents explore repo context, debug, and optimize code.",
    technologies: ["Python", "LangChain", "LLMs", "AI Agents"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/code-helper.png",
  },
];
