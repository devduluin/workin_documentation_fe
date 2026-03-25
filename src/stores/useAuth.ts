import { discussApi } from "@/lib/discussAPI";
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
  token: string | null;
  loading: boolean;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
  loadUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token:
    typeof window !== "undefined"
      ? localStorage.getItem("discuss_token")
      : null,
  loading: true,
  setAuth: (user, token) => {
    localStorage.setItem("discuss_token", token);
    set({ user, token, loading: false });
  },
  logout: () => {
    localStorage.removeItem("discuss_token");
    set({ user: null, token: null, loading: false });
  },
  loadUser: async () => {
    try {
      const token = localStorage.getItem("discuss_token");
      if (!token) {
        set({ loading: false });
        return;
      }
      const user = await discussApi.me();
      set({ user, token, loading: false });
    } catch {
      localStorage.removeItem("discuss_token");
      set({ user: null, token: null, loading: false });
    }
  },
}));
