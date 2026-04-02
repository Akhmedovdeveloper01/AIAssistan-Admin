import { updateAcceptance } from "@/service/acceptance";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useUpdateAcceptance = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateAcceptance(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["acceptance"] });
    },
  });
};