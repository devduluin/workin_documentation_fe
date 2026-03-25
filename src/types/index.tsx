export interface SidebarCategory {
  id: string;
  title: string;
  sections: SidebarSection[];
}

export interface SidebarSection {
  id: string;
  title: string;
  articles: SidebarArticle[];
}

export interface SidebarArticle {
  id: string;
  title: string;
  href: string;
  isActive?: boolean;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
}

export interface ReleaseLogEntry {
  publishedDate: string;
  featureName: string;
  guidebookTitle: string;
  guidebookHref: string;
  featureStatus: "New" | "Update";
  description: string;
}

export interface InfoCard {
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface NavProduct {
  name: string;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface RelatedArticle {
  title: string;
  href: string;
}
