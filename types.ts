
export interface ServiceCard {
  title: string;
  description?: string;
  icon: string;
}

export interface ProjectCard {
  title: string;
  category: string;
  image: string;
  progress?: number;
}

export interface StatItem {
  value: string;
  label: string;
}
