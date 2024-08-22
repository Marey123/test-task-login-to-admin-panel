import React from 'react'
import { Navigate } from 'react-router-dom'
import useMe from '../me/useMe'

export const PrivateRoute = ({ children}) => {
  const meQuery = useMe()

  return meQuery.isError ? <Navigate to="/signup" replace /> : children;
};
