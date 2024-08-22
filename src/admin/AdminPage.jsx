import React, { useState } from "react";
import UpdateInfoForm from "../updateInfo/UpdateInfoForm";
import useUpdateInfo from "../updateInfo/useUpdateInfo";
import useMe from "../me/useMe";
import AdminLoader from "./AdminLoader";

const AdminPage = () => {
  const createMutation = useUpdateInfo();
  const { data: user, isLoading } = useMe();
  const [isExploding, setIsExploding] = useState(false);

  const handleSubmit = (data) => {
    createMutation.mutate(
      {
        email: user.data.user.email,
        password: user.data.user.password,
        new_email: data.new_email,
        new_password: data.new_password,
      },
      {
        onSuccess: () => {
          setIsExploding(true);
        },
      }
    );
  };

  if (isLoading) {
    return <AdminLoader />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-2">
      <section className="w-full max-w-md bg-white shadow-lg shadow-black rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="text-center pb-4">
            <div className="flex justify-center items-center mb-2">
              <img
                src="images/profile.svg"
                alt="profile"
                className="mr-3"
                width={30}
                height={30}
              />
              <h5 className="text-3xl font-bold text-gray-700">Your Account</h5>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Keep your account information up to date.
            </p>

            <div className="mb-4 text-start">
              <p className="text-lg text-gray-800">
                📬 Your Email:{" "}
                <span className="font-medium text-gray-900">
                  {user.data.user.email}
                </span>
              </p>
              <p className="text-lg text-gray-800">
                🖋️ Your Password:{" "}
                <span className="font-medium text-gray-900">
                  {user.data.user.password}
                </span>
              </p>
            </div>
          </div>
          <h5 className="text-xl font-semibold text-gray-700 mb-4">
            Update Information ✨
          </h5>
          <UpdateInfoForm onSubmit={handleSubmit} isExploding={isExploding} />
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
