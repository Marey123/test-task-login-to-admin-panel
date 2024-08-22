import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../constants";
import { signUpEndpoint } from "./SignUpService";

const useSignUp = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (request) => signUpEndpoint(request),
    onSuccess: (data) => {
      const { token } = data.data;
      localStorage.setItem(TOKEN_KEY, token);
      navigate("/login");
    },
    onError: (error) => console.log(error)
  });
};

export default useSignUp;
