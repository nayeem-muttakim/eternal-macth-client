import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DataCard from "./DataCard";
import { Heading } from "@chakra-ui/react";

const Biodatas = () => {
  const axiosSecure = useAxiosSecure();

  const { data: Biodatas = [] } = useQuery({
    queryKey: ["Biodatas"],
    queryFn: async () => {
      const res = await axiosSecure("/biodatas");
      return res.data;
    },
  });

  return (
    <div style={{ textAlign: "center", minHeight: "80vh", paddingInline: 5 }}>
      <Helmet>
        <title>Eternal Match | Biodatas</title>
      </Helmet>
      <Heading backgroundColor={"#cdb4db"} color={"#fff"} py={10}>
        Biodatas
      </Heading>
      <div id="biodatas">
        {Biodatas?.map((biodata) => (
          <DataCard key={biodata?._id} biodata={biodata} />
        ))}
      </div>
    </div>
  );
};

export default Biodatas;
