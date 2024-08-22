import SignUpForm from "./SignUpForm";
import useSignUp from "./useSignUp";

const SignUp = () => {
  const createMutation = useSignUp();

  const handleSubmit = (data) => {
    createMutation.mutate({
      username: data.username,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center py-4 bg-gray-50">
      <section className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h5 className="text-center text-2xl font-semibold mb-4">
            Sign Up
          </h5>
          <SignUpForm onSubmit={handleSubmit} />
        </div>
      </section>
    </div>
  );
};

export default SignUp;
