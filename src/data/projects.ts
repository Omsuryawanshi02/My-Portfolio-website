import { Project } from '../types';

export type { Project };

export const projectsData: Project[] = [
  {
    id: "cyber-threat-detection",
    title: "Cyber Threat Detection in IP Traffic",
    description:
      "Machine learning system analyzing unidirectional NetFlow packet streams to detect DDoS, port scans, and anomalies using XGBoost.",
    technologies: ["Python", "XGBoost", "NetFlow", "Machine Learning"],
    githubUrl: "https://github.com/Omsuryawanshi02/AI-Based-Detection-of-Cyber-Threats-in-Unidirectional-IP-Traffic",
    featured: true,
    image: "/images/cyber-threat.jpg",
  },
  {
    id: "guardian-desk",
    title: "Guardian-Desk Cybersecurity Toolkit",
    description:
      "Cybersecurity utility toolkit featuring real-time SHA-256 file integrity monitoring, password audit gauges, and system diagnostic logs.",
    technologies: ["Python", "Flask", "SHA-256", "Cybersecurity"],
    githubUrl: "https://github.com/Omsuryawanshi02/Guardian-Desk",
    featured: true,
    image: "/images/guardian-desk.jpg",
  },
  {
    id: "multi-agent-code-helper",
    title: "Multi-Agent Code Helper",
    description:
      "Enterprise developer cockpit powered by Google ADK, NVIDIA NIM, and Pinecone vector search with 4 specialized collaborative AI agents.",
    technologies: ["Google ADK", "Python", "NVIDIA NIM", "Pinecone"],
    githubUrl: "https://github.com/Omsuryawanshi02/Capstone-Multi-Agent-CodeHelper",
    featured: true,
    image: "/images/code-helper.jpg",
  },
];
