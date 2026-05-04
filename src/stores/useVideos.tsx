import { create } from "zustand";
import { ApiHrms } from "@/lib/API-hrms";

export interface VideoItem {
  id: string;
  title: string;
  youtube_id: string;
  order: number;
}

export interface VideoCategory {
  id: string;
  name: string;
  order: number;
  videos: VideoItem[];
}

interface VideoState {
  categories: VideoCategory[];
  loading: boolean;
  activeCategoryId: string | null;
  setActiveCategoryId: (id: string) => void;
  loadCategories: () => Promise<void>;

  // Mobile video sidebar
  isMobileVideoSidebarOpen: boolean;
  toggleMobileVideoSidebar: () => void;
  closeMobileVideoSidebar: () => void;
}

export const useVideoStore = create<VideoState>((set, get) => ({
  categories: [],
  loading: true,
  activeCategoryId: null,

  setActiveCategoryId: (id) =>
    set({ activeCategoryId: id, isMobileVideoSidebarOpen: false }),

  loadCategories: async () => {
    try {
      const data = await ApiHrms.getVideoCategories();
      const categories: VideoCategory[] = Array.isArray(data) ? data : [];
      set({
        categories,
        loading: false,
        // auto-select first if not set
        activeCategoryId: get().activeCategoryId ?? categories[0]?.id ?? null,
      });
    } catch {
      set({ loading: false });
    }
  },

  isMobileVideoSidebarOpen: false,
  toggleMobileVideoSidebar: () =>
    set((s) => ({ isMobileVideoSidebarOpen: !s.isMobileVideoSidebarOpen })),
  closeMobileVideoSidebar: () => set({ isMobileVideoSidebarOpen: false }),
}));
