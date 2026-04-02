import { create } from "zustand";

export interface TypeSection {
  id: number;
  documentId: number;
  title: string;
  content: string;
}

interface SectionsStore {
  sections: TypeSection[];
  setSections: (data: any[]) => void;
}

export const useSectionsStore = create<SectionsStore>((set) => ({
  sections: [],
  setSections: (data) => set({ sections: data }),
}));
