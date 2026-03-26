import { create } from "zustand";

export interface Category {
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

interface CategoryStore {
  categories: Category[];
  activeCategory: any | null;
  setCategories: (data: any[]) => void;
  setActiveCategory: (data: any) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  activeCategory: null,
  setCategories: (data) => set({ categories: data }),
  setActiveCategory: (data) => set({ activeCategory: data }),
}));
