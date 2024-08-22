import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateInfoEndpoint } from "./UpdateInfoService";

const useUpdateInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request) => updateInfoEndpoint(request),
    onSuccess: () => {
      queryClient.invalidateQueries(['ME']);
    },
    onError: (error) => console.log(error),
  });
};

export default useUpdateInfo;

