import { create } from "zustand";

export interface Category {
  id: string;
  name: string;
  Videos: Detail[];
}

interface Detail {
  id: string;
  title: string;
  youtube_id: string;
}

interface CategoryVideoStore {
  categoryVideo: Category[];
  activeCategoryVideo: any | null;
  setCategoryVideo: (data: any[]) => void;
  setActiveCategoryVideo: (data: any) => void;
}

export const useCategoryVideoStore = create<CategoryVideoStore>((set) => ({
  categoryVideo: [],
  activeCategoryVideo: null,
  setCategoryVideo: (data: any[]) => set({ categoryVideo: data }),
  setActiveCategoryVideo: (data: any) => set({ activeCategoryVideo: data }),
}));
