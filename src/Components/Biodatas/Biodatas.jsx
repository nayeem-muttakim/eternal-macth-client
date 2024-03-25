import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DataCard from "./DataCard";

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
    <div>
      <Helmet>
        <title>Eternal Match | Biodatas</title>
      </Helmet>
      <div id="biodatas">
        {Biodatas?.map((biodata) => (
          <DataCard key={biodata?._id} biodata={biodata} />
        ))}
      </div>
    </div>
  );
};

export default Biodatas;
