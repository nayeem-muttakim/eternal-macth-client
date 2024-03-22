import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";

import SignIn from "../Authentications/SignIn/SignIn";
import MainLayout from "../Layout/MainLayout";
import SignUp from "../Authentications/SignUp/SignUp";
import HomePage from "../Components/HomePage";
import DashLayout from "../Layout/DashLayout";

export const MainROutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: <DashLayout />,
        children: [
          {
            path: "dash",
            element: <div>dis</div>,
          },
        ],
      },
    ],
  },
]);
