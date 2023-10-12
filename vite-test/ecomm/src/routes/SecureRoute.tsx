import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const SecureRoute = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const loggedin = Boolean(isLoggedIn);
  return <>{loggedin ? <Outlet /> : <Navigate to="/" />}</>;
};

export default SecureRoute;
