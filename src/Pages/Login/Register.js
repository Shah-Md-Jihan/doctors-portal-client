import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import useToken from "../../hooks/useToken";

const Register = () => {
  const handleSingUpAlert = () => toast.success("Successfully Sign In!");
  const location = useLocation();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { user, createUser, updateUser, googleLogin } = useContext(AuthContext);
  const googleProviderInSignUpPage = new GoogleAuthProvider();

  if (token) {
    navigate(from, { replace: true });
  }

  const handleSignUp = (info) => {
    createUser(info.email, info.password)
      .then((user) => {
        const userInfo = {
          displayName: info.name,
        };
        updateUser(userInfo)
          .then(() => {
            handleSingUpAlert();
            saveUserInDB(info.name, info.email);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleLoginInSignUpPage = () => {
    googleLogin(googleProviderInSignUpPage)
      .then((user) => {
        handleSingUpAlert();
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  // user data save in db
  const saveUserInDB = (name, email) => {
    const usersData = { name, email };
    fetch("http://127.0.0.1:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(usersData),
    })
      .then((res) => res.json())
      .then((data) => {
        // getUserToken(email);
        setCreatedUserEmail(email);
      })
      .catch((error) => console.error(error));
  };

  // const getUserToken = (email) => {
  //   fetch(`http://127.0.0.1:5000/jwt?email=${email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.accessToken) {
  //         localStorage.setItem("accessToken", data.accessToken);

  //       }
  //     });
  // };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[385px] h-[800px] p-6">
        <h1 className="text-xl font-semibold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email", { required: "Email is required" })} className="input input-bordered w-full" />
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
                minLength: { value: 6, message: "Password must be 6 character or longer!" },
                pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&?"])(?=.*[0-9])/, message: "Password must be strong!" },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full mt-4">
            <input type="submit" value="SIGN UP" className="btn btn-accent w-full" />
          </div>
        </form>
        <div className="flex flex-col w-full border-opacity-50">
          <p className="mt-1">
            Already have an account?
            <Link to="/login" className="text-secondary">
              Please Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <button onClick={handleGoogleLoginInSignUpPage} className="btn btn-outline">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
