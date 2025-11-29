"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/services/api/client";

type UsePutProps<T> = {
  url: string;
  invalidateKeys?: (string | number)[][];
};

export function usePut<T>({ url, invalidateKeys = [] }: UsePutProps<T>) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: T) => {
      const res = await api.put(url, data);
      return res.data;
    },
    onSuccess: () => {
      invalidateKeys.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: key });
      });
    },
  });
}
