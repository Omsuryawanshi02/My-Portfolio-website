import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: "deboistech-forward-deployed",
    role: "Forward Deployed Engineer",
    company: "Deboistech",
    companyLogo: "/images/experience/deboistech.png?v=2",
    employmentType: "Full-time",
    period: "Nov 2026 — Present",
    location: "Nashik, Maharashtra, India",
    isCurrent: true,
    description: [
      "Architecting and shipping production Generative AI applications, multi-agent systems, and intelligent automation workflows.",
      "Bridging client requirements directly with deployment-ready code, integrating scalable LLM orchestration using LangGraph.",
      "Managing containerized application deployments with Docker and automating CI/CD delivery pipelines across cloud infrastructure.",
    ],
    skills: ["GenAI", "Multi-Agent Systems", "LangGraph", "Docker", "LLMOps", "Python", "AWS", "CI/CD"],
  },
  {
    id: "deboistech-genai-intern",
    role: "GenAI & DevOps Intern",
    company: "Deboistech",
    companyLogo: "/images/experience/deboistech.png?v=2",
    employmentType: "Internship",
    period: "Oct 2026 — Nov 2026",
    location: "Nashik, Maharashtra, India",
    isCurrent: false,
    description: [
      "Engineered end-to-end Retrieval-Augmented Generation (RAG) pipelines and coordinated autonomous multi-agent tool integrations.",
      "Constructed automated CI/CD pipelines using Docker, Git, and Linux for continuous integration and rapid software testing.",
      "Benchmarked LLM inference performance, optimized prompt architectures, and improved system response precision.",
    ],
    skills: ["Docker", "DevOps", "CI/CD", "RAG Systems", "Agentic AI", "Linux", "Git"],
  },
  {
    id: "saiket-python-developer",
    role: "Python Developer",
    company: "SaiKet Systems",
    companyLogo: "/images/experience/saiket.png?v=2",
    employmentType: "Internship",
    period: "Jul 2026 — Aug 2026",
    location: "India",
    isCurrent: false,
    description: [
      "Developed core backend Python scripts, modular services, and automated data processing routines for web applications.",
      "Built and validated RESTful API endpoints with Flask, ensuring efficient data transformation and query performance.",
      "Maintained version control and collaborated in agile sprint cycles using Git and GitHub.",
    ],
    skills: ["Python", "Flask", "REST APIs", "Data Pipelines", "Git"],
  },
];
