export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
}

export interface Links {
  linkedin: string;
  portfolio: string;
  github: string;
  email: string;
}

export interface Experience {
  role: string;
  organization: string;
  duration: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tools: string[];
  link: string;
}

export interface DesignPreferences {
  theme: string;
  style: string;
  color_scheme: string;
  layout: string;
  sections: string[];
}

export interface PortfolioData {
  personal_info: PersonalInfo;
  links: Links;
  skills: string[];
  experience: Experience[];
  projects: Project[];
  achievements: string[];
  future_goals: string;
  design_preferences: DesignPreferences;
  seo_keywords: string[];
}