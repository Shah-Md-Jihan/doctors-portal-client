import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Loading from "../Pages/Shared/Loading/Loading";
import { toast } from "react-toastify";

const AdminRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loader || isAdminLoading) {
    return <Loading></Loading>;
  }
  if (user && isAdmin) {
    return children;
  }
  return (
    <>
      <Navigate to="/"></Navigate>
      {toast.error("This route is forbidden for you!")}
    </>
  );
};

export default AdminRoute;
