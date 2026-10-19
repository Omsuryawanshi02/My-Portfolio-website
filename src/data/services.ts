export interface ServiceItem {
  id: string;
  icon: string;
  emoji: string;
  title: string;
  description: string;
}

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
    id: "data-analytics",
    icon: "bar-chart-3",
    emoji: "📊",
    title: "Data Analytics",
    description:
      "Cleaning data, exploring patterns, calculating KPIs, and turning information into useful business insights.",
  },
];
