"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api/client";

type UseGetProps<T> = {
  key: (string | number)[];
  url: string;
  enabled?: boolean;
};

export function useGet<T = any>({ key, url, enabled = true }: UseGetProps<T>) {
  return useQuery<T>({
    queryKey: key,
    queryFn: async () => {
      const res = await api.get<T>(url);
      return res.data;
    },
    enabled,
  });
}
