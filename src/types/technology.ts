export interface FrequentTool {
  name: string;
  iconSrc: string;
  category: string;
}

export interface TechItem {
  name: string;
  tag?: string;
}

export interface TechCategory {
  category: string;
  description: string;
  items: TechItem[];
}
