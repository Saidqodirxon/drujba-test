"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/services/api/client";

type UsePostProps<T> = {
  url: string;
  invalidateKeys?: (string | number)[][];
};

export function usePost<T>({ url, invalidateKeys = [] }: UsePostProps<T>) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: T) => {
      const res = await api.post(url, data);
      return res.data;
    },
    onSuccess: () => {
      invalidateKeys.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: key });
      });
    },
  });
}
