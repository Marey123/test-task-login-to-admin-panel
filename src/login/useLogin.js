import { useMutation } from '@tanstack/react-query';
import { TOKEN_KEY } from '../constants';
import { useNavigate } from "react-router-dom";
import { loginEndpoint } from './LoginService';

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginEndpoint,
    onSuccess: (data) => {
      const { token } = data.data;
      localStorage.setItem(TOKEN_KEY, token);
      navigate("/");
    },
    onError: (error) => {
      console.error('Login error:', error);
    },
  });
};

export default useLogin;
