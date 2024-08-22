import { useForm } from "react-hook-form";
import { validatePassword } from "../constants";

const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
    >
      <div className="w-full">
        <label
          htmlFor="yourEmail"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          {...register("email", { required: true })}
          id="yourEmail"
        />
        {errors.email?.type === "required" && (
          <p className="text-red-600 text-sm mt-1">Email is required</p>
        )}
      </div>

      <div className="w-full">
        <label
          htmlFor="yourPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          {...register("password", {
            validate: validatePassword,
          })}
          id="yourPassword"
        />
        {errors.password && (
          <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div className="w-full">
        <button
          className="w-full py-2 px-4 bg-violet-700 text-white rounded-xl hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-800 focus:ring-offset-2"
          type="submit"
        >
          Login
        </button>
      </div>

      <div className="w-full mt-4">
        <hr className="my-4" />
        <div className="flex justify-center">
          <a href="/signup" className="w-full">
            <button
              type="button"
              className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              Create account
            </button>
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
