import { create } from "zustand";

interface VideoState {
  activeCategoryId: string;
  setActiveCategoryId: (id: string) => void;

  // Mobile video sidebar
  isMobileVideoSidebarOpen: boolean;
  toggleMobileVideoSidebar: () => void;
  closeMobileVideoSidebar: () => void;
}

export const useVideoStore = create<VideoState>((set) => ({
  activeCategoryId: "mekari-expense",
  setActiveCategoryId: (id) =>
    set({ activeCategoryId: id, isMobileVideoSidebarOpen: false }),

  isMobileVideoSidebarOpen: false,
  toggleMobileVideoSidebar: () =>
    set((s) => ({ isMobileVideoSidebarOpen: !s.isMobileVideoSidebarOpen })),
  closeMobileVideoSidebar: () => set({ isMobileVideoSidebarOpen: false }),
}));
