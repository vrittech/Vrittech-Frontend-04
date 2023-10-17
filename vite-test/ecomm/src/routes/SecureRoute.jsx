import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const SecureRoute = () => {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const loggedin = Boolean(isLoggedIn);
  return <>{loggedin ? <Outlet /> : <Navigate to="/" />}</>;
};

export default SecureRoute;
