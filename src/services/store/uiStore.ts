"use client";

import { create } from "zustand";

type UIState = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  theme: "dark",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    })),
}));
