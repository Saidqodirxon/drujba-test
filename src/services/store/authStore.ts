"use client";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: null,
  setToken: (t: string) => set({ token: t }),
  logout: () => set({ token: null }),
}));
