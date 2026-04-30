import { create } from "zustand";

interface SidebarState {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;

  openCategoryId: string | null;
  toggleCategory: (id: string) => void;
  setOpenCategoryId: (id: string | null) => void;

  openSectionId: string | null;
  toggleSection: (id: string) => void;

  isProductDropdownOpen: boolean;
  toggleProductDropdown: () => void;
  closeProductDropdown: () => void;

  isLangDropdownOpen: boolean;
  toggleLangDropdown: () => void;
  closeLangDropdown: () => void;

  showBackToTop: boolean;
  setShowBackToTop: (show: boolean) => void;

  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
  closeMobileSidebar: () => void;

  activeHeadingId: string;
  setActiveHeadingId: (id: string) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () =>
    set((s) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  openCategoryId: "cat-general",
  toggleCategory: (id) =>
    set((s) => ({ openCategoryId: s.openCategoryId === id ? null : id })),
  setOpenCategoryId: (id) => set({ openCategoryId: id }),

  openSectionId: "sec-guidebook-release",
  toggleSection: (id) =>
    set((s) => ({ openSectionId: s.openSectionId === id ? null : id })),

  isProductDropdownOpen: false,
  toggleProductDropdown: () =>
    set((s) => ({ isProductDropdownOpen: !s.isProductDropdownOpen })),
  closeProductDropdown: () => set({ isProductDropdownOpen: false }),

  isLangDropdownOpen: false,
  toggleLangDropdown: () =>
    set((s) => ({ isLangDropdownOpen: !s.isLangDropdownOpen })),
  closeLangDropdown: () => set({ isLangDropdownOpen: false }),

  showBackToTop: false,
  setShowBackToTop: (show) => set({ showBackToTop: show }),

  isMobileSidebarOpen: false,
  toggleMobileSidebar: () =>
    set((s) => ({ isMobileSidebarOpen: !s.isMobileSidebarOpen })),
  closeMobileSidebar: () => set({ isMobileSidebarOpen: false }),

  activeHeadingId: "",
  setActiveHeadingId: (id) => set({ activeHeadingId: id }),
}));
