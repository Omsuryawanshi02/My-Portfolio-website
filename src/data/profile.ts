import { ProfileData } from '../types';

export type { ProfileData };

export const profileData: ProfileData = {
  name: "Om Suryawanshi",
  firstName: "Om",
  brandTitle: "Om Suryawanshi",
  headline: "GenAI & DevOps Engineer Building Scalable, Intelligent Systems",
  tagline: "GenAI Engineer | Forward Deployed Engineer | AI Agent & DevOps Developer",
  bioIntro: "GenAI & DevOps Engineer with hands-on experience developing AI-powered applications, multi-agent systems, and automated CI/CD pipelines.",
  aboutParagraph: "I am an aspiring Generative AI & DevOps Engineer with hands-on experience through industry internships and real-world projects. I specialize in building AI-powered applications, multi-agent systems, and implementing automated CI/CD pipelines with Docker, AWS, and Git. Passionate about bridging cutting-edge LLMs and agentic workflows with reliable, scalable production systems.",
  location: "Nashik, Maharashtra, India",
  education: {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    institution: "MVPS's KBTCOE, Nashik",
    location: "Nashik, Maharashtra, India",
    period: "2024 — 2028",
  },
  contact: {
    email: "omsuryawanshi006@gmail.com",
    github: "https://github.com/Omsuryawanshi02",
    linkedin: "https://www.linkedin.com/in/om-suryawanshi-648795342",
    twitter: "https://x.com",
    phone: "+91 93223 64033",
  },
  resumeUrl: "/resume/Om_Suryawanshi_Resume.pdf",
  avatarUrl: "/images/profile.jpg",
  infoCards: [
    {
      id: "languages",
      icon: "code",
      title: "Languages & Tech",
      description: "Python, Docker, Jenkins, AWS, Git, Linux, Flask, React",
    },
    {
      id: "education",
      icon: "graduation-cap",
      title: "Education",
      description: "B.Tech in AI & Data Science, MVPS's KBTCOE, Nashik (2024 — 2028)",
    },
    {
      id: "projects",
      icon: "folder-kanban",
      title: "Experience & Focus",
      description: "Forward Deployed Eng., Multi-Agent Systems, RAG, LLMOps & DevOps",
    },
  ],
};
