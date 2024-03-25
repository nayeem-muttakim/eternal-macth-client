import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Customers from "./Customers/Customers";
import Process from "./Process/Process";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Eternal Match</title>
      </Helmet>
      <Banner />
      <Process />
      <Customers />
    </div>
  );
};

export default HomePage;
