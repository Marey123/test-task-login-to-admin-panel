import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../login/Login";
import SignUp from '../signup/SignUp';
import AdminPage from "../admin/AdminPage";
import { PrivateRoute } from "./PrivateRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<PrivateRoute><AdminPage/></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<>404</>} />
    </Route>
  )
);
