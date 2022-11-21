import { createBrowserRouter } from "react-router-dom";
import Main from "./../layouts/Main";
import Home from "./../Pages/Home/Home";
import Login from "./../Pages/Login/Login";
import Appointment from "./../Pages/Appointment/Appointment";
import Register from "./../Pages/Login/Register";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../Pages/Dashboard/All Users/AllUsers";
import AdminRoute from "./AdminRoute";
import AddDoctors from "../Pages/Dashboard/AddDoctors/AddDoctors";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";

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
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add/doctors",
        element: (
          <AdminRoute>
            <AddDoctors></AddDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage/doctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
    ],
  },
]);
