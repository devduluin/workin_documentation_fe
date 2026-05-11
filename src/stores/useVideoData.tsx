import { create } from "zustand";

export interface Video {
  id: string;
  title: string;
  youtube_id: string;
  order: number;
  category: Category[];
}

interface Category {
  id: string;
  name: string;
}

interface VideoStore {
  video: Video[];
  activeVideo: any | null;
  setVideo: (data: any[]) => void;
  setActiveVideo: (data: any) => void;
}

export const useVideoStore = create<VideoStore>((set) => ({
  video: [],
  activeVideo: null,
  setVideo: (data) => set({ video: data }),
  setActiveVideo: (data) => set({ activeVideo: data }),
}));
