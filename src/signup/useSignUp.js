import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../constants";
import { signUpEndpoint } from "./SignUpService";
import { useSnackbar } from "notistack";

const useSignUp = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (request) => signUpEndpoint(request),
    onSuccess: (data) => {
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
      const { token } = data.data;
      localStorage.setItem(TOKEN_KEY, token);
      navigate("/login");
    },
    onError: (error) => {
      enqueueSnackbar(`${error.response.data.message}`, { variant: "error" });
    },
  });
};

export default useSignUp;
