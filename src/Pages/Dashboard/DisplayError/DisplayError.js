import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully sing out!");
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex justify-center py-10">
      <div className="text-center">
        <h2 className="text-4xl text-red-500 font-bold mb-5">Oops!</h2>
        <p className="text-xl text-red-500 font-semibold my-2">Something went wrong!</p>
        <p className="text-yellow-500 mb-2">{error.statusText || error.message}</p>
        <p>
          <span className="mr-2">Please</span>
          <button className="btn btn-sm btn-primary" onClick={handleLogOut}>
            Signout
          </button>
          <span className="ml-2">and and Logged in again</span>
        </p>
      </div>
    </div>
  );
};

export default DisplayError;
