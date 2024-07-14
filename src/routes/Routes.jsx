import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";
import App from "../pages/auth/App";
import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import RegistrationScreen from "../pages/auth/RegistrationScreen";
import LoginScreen from "../pages/auth/LoginScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          {
            path: "/",
            element: <App />,
          },
          {
            path: "/registration",
            element: <RegistrationScreen />,
          },
          {
            path: "/login",
            element: <LoginScreen />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

export default router;
