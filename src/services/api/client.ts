import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  // Masalan: tokenni zustand/dan yoki localStorage’dan olib qo‘yish
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
