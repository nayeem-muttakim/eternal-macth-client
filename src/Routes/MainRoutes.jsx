import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import dashboard from "./../assets/dashboard.json";

import SignIn from "../Authentications/SignIn/SignIn";
import MainLayout from "../Layout/MainLayout";
import SignUp from "../Authentications/SignUp/SignUp";
import HomePage from "../Components/HomePage";
import DashLayout from "../Layout/DashLayout";
import EditBio from "../DashBoard/EditBio/EditBio";
import PrivateRoute from "../Private/PrivateRoute";
import ViewBio from "../DashBoard/ViewBio/ViewBio";
import Biodatas from "../Components/Biodatas/Biodatas";
import BioDetails from "../Components/Biodatas/BioDetails";
import FavBio from "../DashBoard/FavBio/FavBio";
import AboutUs from "../Components/AboutUs/AboutUs";
import ContactUs from "../Components/ContactUs/ContactUs";
import MyReqs from "../DashBoard/MyReqs/MyReqs";
import Lottie from "lottie-react";

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
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/bio-datas",
        element: (
          <PrivateRoute>
            <Biodatas />
          </PrivateRoute>
        ),
      },
      {
        path: "/bio-data/:id",
        element: <BioDetails />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: (
              <Lottie style={{ height: 600 }} animationData={dashboard} />
            ),
          },
          {
            path: "edit-biodata",
            element: <EditBio />,
          },
          {
            path: "view-biodata",
            element: <ViewBio />,
          },
          {
            path: "fav-biodata",
            element: <FavBio />,
          },
          {
            path: "my-contact-request",
            element: <MyReqs />,
          },
        ],
      },
    ],
  },
]);
