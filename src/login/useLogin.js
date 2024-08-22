import { useMutation } from "@tanstack/react-query";
import { TOKEN_KEY } from "../constants";
import { useNavigate } from "react-router-dom";
import { loginEndpoint } from "./LoginService";
import { useSnackbar } from "notistack";

const useLogin = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: loginEndpoint,
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
      navigate("/");
    },
    onError: (error) => {
      enqueueSnackbar(`${error.response.data.message}`, { variant: "error" });
    },
  });
};

export default useLogin;
