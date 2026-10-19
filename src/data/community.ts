export interface CommunityItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  linkText: string;
  url: string;
  platform: 'linkedin' | 'github' | 'article' | 'hackathon';
}

export const communityData: CommunityItem[] = [
  {
    id: "hackathon-spotlight",
    badge: "Hackathon Award",
    title: "2nd Prize — International UAi HAWK-ATHON",
    description:
      "Recognized for innovation, teamwork, and technical problem-solving at the International UAi HAWK-ATHON in Karjat, Mumbai. Developed an intelligent prototype solving real-world challenges.",
    linkText: "View Profile",
    url: "https://www.linkedin.com/in/om-suryawanshi-648795342",
    platform: "hackathon",
  },
  {
    id: "mcp-discussion",
    badge: "LinkedIn",
    title: "Model Context Protocol & FastMCP in AI Agents",
    description:
      "Shared practical insights on how standardized protocol integrations like MCP streamline tool calling, resources, and external system connectivity for LLM agents.",
    linkText: "Connect on LinkedIn",
    url: "https://www.linkedin.com/in/om-suryawanshi-648795342",
    platform: "linkedin",
  },
  {
    id: "agentic-ai",
    badge: "Technical Insights",
    title: "Stateful Agent Workflows & RAG Integration",
    description:
      "Explored architectural patterns for multi-step AI agents, balancing prompt context boundaries with reliable structured outputs and tool coordination.",
    linkText: "Read Updates",
    url: "https://www.linkedin.com/in/om-suryawanshi-648795342",
    platform: "linkedin",
  },
  {
    id: "open-source",
    badge: "Open Source",
    title: "Applied Machine Learning & Open Engineering",
    description:
      "Actively developing, experimenting, and sharing machine learning repositories and practical utilities for the developer community on GitHub.",
    linkText: "Explore GitHub",
    url: "https://github.com/Omsuryawanshi02",
    platform: "github",
  },
];
