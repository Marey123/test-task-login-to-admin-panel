import LoginForm from "./LoginForm";
import useLogin from "./useLogin";

const Login = () => {
  const createMutation = useLogin();

  const handleSubmit = (data) => {
    createMutation.mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-4">
      <section className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="text-center pb-4">
            <h5 className="text-2xl font-semibold">Login</h5>
          </div>
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </section>
    </div>
  );
};

export default Login;
