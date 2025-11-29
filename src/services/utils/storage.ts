// src/utils/storage.ts
const isBrowser = () => typeof window !== "undefined";

export const storage = {
  get(key: string) {
    if (!isBrowser()) return null;
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  },
  set(key: string, value: any) {
    if (!isBrowser()) return;
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key: string) {
    if (!isBrowser()) return;
    window.localStorage.removeItem(key);
  },
};
