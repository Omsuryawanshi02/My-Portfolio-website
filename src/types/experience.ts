export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyLogo: string;
  employmentType: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  description: string[];
  skills: string[];
}
