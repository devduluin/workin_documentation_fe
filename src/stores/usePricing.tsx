import { create } from "zustand";

interface PricingState {
  selectedBundles: string[];
  toggleBundle: (id: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openFaqIndex: number | null;
  toggleFaq: (index: number) => void;
}

export const usePricingStore = create<PricingState>((set) => ({
  selectedBundles: [],
  toggleBundle: (id) =>
    set((s) => ({
      selectedBundles: s.selectedBundles.includes(id)
        ? s.selectedBundles.filter((b) => b !== id)
        : [...s.selectedBundles, id],
    })),
  activeTab: "video",
  setActiveTab: (tab) => set({ activeTab: tab }),
  openFaqIndex: 0,
  toggleFaq: (index) =>
    set((s) => ({ openFaqIndex: s.openFaqIndex === index ? null : index })),
}));
