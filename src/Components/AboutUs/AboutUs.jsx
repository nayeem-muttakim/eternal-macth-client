import { Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div style={{ textAlign: "center", minHeight: "80vh", paddingInline: 5 }}>
      <Helmet>
        <title>Eternal Match | About Us</title>
      </Helmet>
      <Heading backgroundColor={"#cdb4db"} color={"#fff"} py={10}>
        About Us
      </Heading>
      <div style={{ maxWidth: 800, marginInline: "auto", marginTop: 70 }}></div>
    </div>
  );
};

export default AboutUs;
