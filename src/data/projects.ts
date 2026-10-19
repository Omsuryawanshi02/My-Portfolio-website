import { Project } from '../types';

export type { Project };

export const projectsData: Project[] = [
  {
    id: "swiss-army-knife-ai",
    title: "Swiss Army Knife AI",
    description:
      "AI workspace with 27+ tools. Chat via RAG, convert media, extract data, and deploy autonomous agents to Gmail/Calendar/Slack via natural language.",
    technologies: ["AI Agents", "RAG", "Next.js", "Python"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/work-1.png",
  },
  {
    id: "cellwise-notebook-agent",
    title: "Cellwise Notebook Agent",
    description:
      "A LangGraph-powered agent that automatically explains and documents your Jupyter notebook cells in real-time, creating markdown docs as you code.",
    technologies: ["LangGraph", "Python", "LLMs", "Jupyter"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/work-3.png",
  },
  {
    id: "pocketpal-revamped",
    title: "PocketPal Revamped",
    description:
      "Revamped full-stack smart expense tracker and subscription manager featuring intelligent financial insights and improved UI.",
    technologies: ["Full-Stack", "React", "Node.js", "Analytics"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/work-2.png",
  },
  {
    id: "multi-agent-code-helper",
    title: "Multi-Agent Code Helper",
    description:
      "AI coding workspace with autonomous agents helping developers explore repo context, debug, and optimize code in real-time.",
    technologies: ["Python", "LLMs", "RAG", "AI Agents"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/code-helper.png",
  },
  {
    id: "cyber-threat-detection",
    title: "Cyber Threat Detection",
    description:
      "AI cybersecurity system identifying and classifying suspicious network activity in real-time using XGBoost and traffic analysis.",
    technologies: ["Python", "Machine Learning", "XGBoost", "Cybersecurity"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/cyber-threat.jpg",
  },
  {
    id: "smart-irrigation",
    title: "Smart Irrigation AI",
    description:
      "Machine learning model providing precise irrigation recommendations and automated valve controls using agricultural sensor data.",
    technologies: ["Python", "scikit-learn", "IoT Telemetry", "pandas"],
    githubUrl: "https://github.com/Omsuryawanshi02",
    featured: true,
    image: "/images/smart-irrigation.jpg",
  },
];
