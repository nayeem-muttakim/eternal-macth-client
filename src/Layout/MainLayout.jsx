import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar.jsx/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
