import { createBrowserRouter } from "react-router-dom";
import Main from "./../layouts/Main";
import Home from "./../Pages/Home/Home";
import Login from "./../Pages/Login/Login";
import Appointment from "./../Pages/Appointment/Appointment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
