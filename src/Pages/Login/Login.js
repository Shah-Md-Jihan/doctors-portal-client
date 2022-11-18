import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { login, googleLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const handleLogin = (data) => {
    login(data.email, data.password)
      .then((user) => {
        console.log(user);
        navigate(from, { replace: true });
        setLoginError("");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((user) => {
        console.log(user);
        navigate(from, { replace: true });
        setLoginError("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[385px] h-[800px] p-6">
        <h1 className="text-xl font-semibold text-center">Login</h1>
        {loginError && <p className="text-red-600">{loginError}</p>}
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full" />
            {errors.email && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password field is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p role="alert" className="text-red-600 mt-1">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text">Forgot password?</span>
            </label>
          </div>
          <div className="form-control w-full">
            <input type="submit" value="LOGIN" className="btn btn-accent w-full" />
          </div>
        </form>
        <div className="flex flex-col w-full border-opacity-50">
          <p className="mt-1">
            New to Doctors Portal?
            <Link to="/signup" className="text-secondary">
              Create new account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button onClick={handleGoogleLogin} className="btn btn-outline">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
