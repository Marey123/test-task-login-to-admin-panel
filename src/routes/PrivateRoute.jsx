import React from "react";
import { Navigate } from "react-router-dom";
import useMe from "../me/useMe";

export const PrivateRoute = ({ children }) => {
  const me = useMe();

  return me.isError ? <Navigate to="/signup" replace /> : children;
};
