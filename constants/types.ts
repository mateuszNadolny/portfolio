import { LucideIcon } from "lucide-react";

export interface TechItem {
  name: string;
  icon: string;
  url: string;
}

export interface TechCategory {
  name: string;
  icon: LucideIcon;
  technologies: TechItem[];
}
