import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateInfoEndpoint } from "./UpdateInfoService";
import { useSnackbar } from "notistack";

const useUpdateInfo = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (request) => updateInfoEndpoint(request),
    onSuccess: () => {
      enqueueSnackbar("Success", {
        variant: "success",
        action: (key) => (
          <button
            onClick={() => closeSnackbar(key)}
            variant="outlined"
            className="close-success"
            aria-label="Close"
            size="small"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        ),
      });
      queryClient.invalidateQueries(["ME"]);
    },
    onError: (error) => {
      enqueueSnackbar(`${error.response.data.message}`, { variant: "error" });
    },
  });
};

export default useUpdateInfo;
