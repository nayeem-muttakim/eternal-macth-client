import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { MainROutes } from "./Routes/MainRoutes";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainROutes} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
