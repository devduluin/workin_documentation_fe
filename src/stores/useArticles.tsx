import { create } from "zustand";

export interface Article {
  id: string;
  name: string;
  Categories: Category[];
}

interface Category {
  id: string;
  name: string;
  Documents: Detail[];
}
interface Section {
  id: string;
  title: string;
  content: string;
}

interface Detail {
  id: string;
  title: string;
  href: string;
  sections: Section[];
}

interface ArticleStore {
  articles: Article[];
  activeArticles: any | null;
  setArticles: (data: any[]) => void;
  setActiveArticles: (data: any) => void;
  sidebar: any[];
  setSidebar: (data: any[]) => void;
}

export const useArticleStore = create<ArticleStore>((set) => ({
  articles: [],
  activeArticles: null,
  setArticles: (data) => set({ articles: data }),
  sidebar: [],
  setSidebar: (data) => set({ sidebar: data }),
  setActiveArticles: (data) => set({ activeArticles: data }),
}));
