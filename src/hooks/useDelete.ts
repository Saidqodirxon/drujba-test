"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/services/api/client";

type UseDeleteProps = {
  url: string;
  invalidateKeys?: (string | number)[][];
};

export function useDelete({ url, invalidateKeys = [] }: UseDeleteProps) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const res = await api.delete(url);
      return res.data;
    },
    onSuccess: () => {
      invalidateKeys.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: key });
      });
    },
  });
}
