import { useForm } from "react-hook-form";

const UpdateInfoForm = ({ onSubmit }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        new_email: "",
        new_password: "",
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
          <label htmlFor="yourEmail" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="new_email"
            name="new_email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            {...register("new_email", { required: true })}
            id="yourEmail"
          />
          {errors.new_email?.type === "required" && (
            <p className="text-red-600 text-sm mt-1">Email is required</p>
          )}
        </div>
        
        <div className="w-full">
          <label htmlFor="yourPassword" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="new_password"
            name="new_password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            {...register("new_password", { required: true })}
            id="yourPassword"
          />
          {errors.new_password?.type === "required" && (
            <p className="text-red-600 text-sm mt-1">Password is required</p>
          )}
        </div>
        
        <div className="w-full">
          <button className="w-full py-2 px-4 bg-violet-700 text-white rounded-xl hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-800 focus:ring-offset-2" type="submit">
            Update
          </button>
        </div>
      </form>
    );
  };
  
  export default UpdateInfoForm;
  