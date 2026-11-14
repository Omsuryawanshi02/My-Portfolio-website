import { ServiceItem } from '../types';

export type { ServiceItem };

export const servicesData: ServiceItem[] = [
  {
    id: "ai-ml",
    icon: "brain",
    emoji: "🤖",
    title: "AI & Machine Learning",
    description:
      "Building machine learning workflows for prediction, classification, data analysis, and practical intelligent applications.",
  },
  {
    id: "ai-agents",
    icon: "bot",
    emoji: "⚙️",
    title: "AI Agent Development",
    description:
      "Exploring AI agents, tool integrations, and structured workflows that help automate multi-step tasks.",
  },
  {
    id: "full-stack",
    icon: "layout",
    emoji: "🧑‍💻",
    title: "Full-Stack Web Applications",
    description:
      "Developing responsive web interfaces and connecting them with application logic, APIs, and databases.",
  },
  {
    id: "devops",
    icon: "infinity",
    emoji: "🚀",
    title: "DevOps",
    description:
      "Automating CI/CD pipelines, containerizing applications, managing cloud deployments, and streamlining workflows.",
  },
];
