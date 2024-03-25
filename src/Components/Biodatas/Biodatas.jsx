import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DataCard from "./DataCard";
import { Heading } from "@chakra-ui/react";
import { Select, Slider } from "antd";
import { useState } from "react";

const Biodatas = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedAge, setSelectedAge] = useState([18,70]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const { data: Biodatas = [] } = useQuery({
    queryKey: ["Biodatas", selectedDivision, selectedType, selectedAge],
    queryFn: async () => {
      const res = await axiosSecure(
        `/biodatas?type=${selectedType}&division=${selectedDivision}&age=${selectedAge}`
      );
      return res.data;
    },
  });
  // console.log(selectedAge);
  return (
    <div style={{ textAlign: "center", minHeight: "80vh", paddingInline: 5 }}>
      <Helmet>
        <title>Eternal Match | Biodatas</title>
      </Helmet>
      <Heading backgroundColor={"#cdb4db"} color={"#fff"} py={10}>
        Biodatas
      </Heading>

      <div id="filter" style={{ width: "100%" }}>
        <Slider
          onChange={setSelectedAge}
          min={18}
          max={70}
          defaultValue={[18, 70]}
          style={{ width: "150px" }}
          range
        ></Slider>

        <Select
          style={{ width: "150px" }}
          placeholder="Biodata Type"
          onChange={setSelectedType}
        >
          <Select.Option value="">All</Select.Option>
          <Select.Option value="Male">Male</Select.Option>
          <Select.Option value="Female">Female</Select.Option>
        </Select>
        <Select
          style={{ width: "150px" }}
          placeholder="Present Division"
          // size="large"
          onChange={setSelectedDivision}
        >
          <Select.Option value="">All</Select.Option>
          <Select.Option value="Dhaka">Dhaka</Select.Option>
          <Select.Option value="Chattagram">Chattagram</Select.Option>
          <Select.Option value="Rangpur">Rangpur</Select.Option>
          <Select.Option value="Barisal">Barisal</Select.Option>
          <Select.Option value="Khulna">Khulna</Select.Option>
          <Select.Option value="Maymansingh">Maymansingh</Select.Option>
          <Select.Option value="Sylhet">Sylhet</Select.Option>
        </Select>
      </div>
      <div id="biodatas">
        {Biodatas?.map((biodata) => (
          <DataCard key={biodata?._id} biodata={biodata} />
        ))}
      </div>
    </div>
  );
};

export default Biodatas;
