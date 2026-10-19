import { FrequentTool, TechCategory, TechItem } from '../types';

export type { FrequentTool, TechCategory, TechItem };

export const frequentTools: FrequentTool[] = [
  { name: 'LangGraph', iconSrc: '/icons/tools/langgraph.svg', category: 'Agent Orchestration' },
  { name: 'Google GenAI SDK', iconSrc: '/icons/tools/google_agent.svg', category: 'AI Models' },
  { name: 'Vercel AI SDK', iconSrc: '/icons/tools/vercel_ai.svg', category: 'Streaming & AI UI' },
  { name: 'n8n', iconSrc: '/icons/tools/n8n.svg', category: 'Workflow Automation' },
  { name: 'MCP', iconSrc: '/icons/tools/mcp.svg', category: 'Model Context Protocol' },
  { name: 'React.js', iconSrc: '/icons/tools/react.png', category: 'Frontend Framework' },
  { name: 'Next.js', iconSrc: '/icons/tools/nextjs.png', category: 'Full-Stack React' },
  { name: 'Git', iconSrc: '/icons/tools/git.png', category: 'Version Control' },
  { name: 'Hugging Face', iconSrc: '/icons/tools/huggingface.svg', category: 'Open Models' },
  { name: 'OpenAI', iconSrc: '/icons/tools/openai.svg', category: 'LLM APIs' },
];

export const categorizedTechnologies: {
  category: string;
  description: string;
  items: { name: string; tag?: string }[];
}[] = [
  {
    category: 'Programming',
    description: 'Core programming languages used for systems, scripting, and web logic.',
    items: [
      { name: 'Python', tag: 'Primary' },
      { name: 'C++', tag: 'Systems' },
      { name: 'JavaScript', tag: 'Web' },
      { name: 'SQL', tag: 'Data' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    description: 'Frameworks and mathematical libraries for predictive modeling and analysis.',
    items: [
      { name: 'scikit-learn' },
      { name: 'TensorFlow' },
      { name: 'XGBoost' },
      { name: 'NumPy' },
      { name: 'pandas' },
    ],
  },
  {
    category: 'AI Engineering',
    description: 'Modern architectures bridging LLMs with real-world execution environments.',
    items: [
      { name: 'LLM Integrations' },
      { name: 'Retrieval-Augmented Generation (RAG)' },
      { name: 'AI Agents' },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    category: 'Web Development',
    description: 'Front-end interfaces and backend application servers.',
    items: [
      { name: 'React' },
      { name: 'Flask' },
      { name: 'HTML5' },
      { name: 'CSS3 / Tailwind' },
    ],
  },
  {
    category: 'Tools & Platforms',
    description: 'Development environments, databases, and version control tools.',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'MySQL' },
      { name: 'Jupyter Notebook' },
    ],
  },
];
