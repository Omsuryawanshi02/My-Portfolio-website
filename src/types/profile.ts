export interface EducationInfo {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  phone?: string;
}

export interface InfoCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ProfileData {
  name: string;
  firstName: string;
  brandTitle: string;
  headline: string;
  tagline: string;
  bioIntro: string;
  aboutParagraph: string;
  location: string;
  education: EducationInfo;
  contact: ContactInfo;
  resumeUrl: string;
  avatarUrl: string;
  infoCards: InfoCard[];
}
