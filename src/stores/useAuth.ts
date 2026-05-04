import { ApiHrms } from "@/lib/API-hrms";
import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  setAuth: (user: User) => void;
  logout: () => void;
  loadUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setAuth: (user) => {
    set({ user, loading: false });
  },
  logout: async () => {
    try {
      await ApiHrms.logout();
    } catch (err) {
      console.error("Logout error:", err);
    }
    set({ user: null, loading: false });
  },
  loadUser: async () => {
    try {
      const res = await ApiHrms.me();
      if (res && res.user) {
        set({ user: res.user, loading: false });
      } else {
        set({ user: null, loading: false });
      }
    } catch {
      set({ user: null, loading: false });
    }
  },
}));
