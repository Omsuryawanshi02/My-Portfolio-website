export interface ProfileData {
  name: string;
  firstName: string;
  brandTitle: string;
  headline: string;
  tagline: string;
  bioIntro: string;
  aboutParagraph: string;
  location: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
    twitter?: string;
    phone?: string;
  };
  resumeUrl: string;
  avatarUrl: string;
  infoCards: {
    id: string;
    icon: string;
    title: string;
    description: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Om Suryawanshi",
  firstName: "Om",
  brandTitle: "Om Suryawanshi",
  headline: "AI & Data Science Student Building Intelligent Digital Experiences",
  tagline: "AI & Data Science Student | Aspiring AI Engineer | AI/ML Developer | Full-Stack Developer",
  bioIntro: "I explore machine learning, AI agents, and full-stack development to build practical solutions that connect intelligent systems with intuitive user experiences.",
  aboutParagraph: "I build intelligent applications using machine learning, AI agents, and modern web technologies. I enjoy transforming complex technical ideas into practical, user-friendly solutions. While my core focus is AI and data science, I also leverage full-stack web development to build responsive, accessible front-ends that make intelligent systems intuitive and impactful.",
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
      description: "Python, C++, JavaScript, SQL, React, Flask",
    },
    {
      id: "education",
      icon: "graduation-cap",
      title: "Education",
      description: "B.Tech in Artificial Intelligence & Data Science, MVPS's KBTCOE, Nashik",
    },
    {
      id: "projects",
      icon: "folder-kanban",
      title: "Projects & Interests",
      description: "Machine learning, AI agents & RAG, full-stack apps, data analytics",
    },
  ],
};
