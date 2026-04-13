import { create } from "zustand";

export interface TypeDocument {
  id: number;
  categoryId: number;
  title: string;
}

interface DocumentStore {
  documents: TypeDocument[];
  setDocuments: (data: any[]) => void;
}

export const useDocumentStore = create<DocumentStore>((set) => ({
  documents: [],
  setDocuments: (data) => set({ documents: data }),
}));
