import { useQuery } from "@tanstack/react-query";
import { Descriptions } from "antd";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const ViewBio = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: myBiodata = {} } = useQuery({
    queryKey: ["myBiodata", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/biodata/mine/${user?.email}`);
      return res.data;
    },
  });
  const items = [
    {
      label: "Biodata Type",
      children: myBiodata?.type,
    },
    {
      label: "Name",
      children: myBiodata?.name,
    },
    {
      label: "Date of birth",
      children: myBiodata?.birthdate,
    },
    {
      label: "Height",
      children: myBiodata?.height,
    },
    {
      label: "Weight",
      children: myBiodata?.weight,
    },
    {
      label: "Age",
      children: myBiodata?.age,
    },
    {
      label: "Occupation",
      children: myBiodata?.occupation,
    },
    {
      label: "Race",
      children: myBiodata?.race,
    },
    {
      label: "Father's Name",
      children: myBiodata?.father,
    },
    {
      label: "Mother's Name",
      children: myBiodata?.mother,
    },
    {
      label: "Permanent Division",
      children: myBiodata?.permanent_division,
    },
    {
      label: "Present Division",
      children: myBiodata?.present_division,
    },
    {
      label: "Expected Partner Age",
      children: myBiodata?.partner_age,
    },
    {
      label: "Expected Partner Height",
      children: myBiodata?.partner_height,
    },
    {
      label: "Expected Partner Weight",
      children: myBiodata?.partner_weight,
    },
    {
      label: "Contact Email",
      children: myBiodata?.email,
    },
    {
      label: "Mobile Number",
      children: myBiodata?.invoice,
    },
  ];
  return (
    <Descriptions
      style={{ maxWidth: 700, marginInline: "auto" }}
      title="My Biodata"
      bordered
      column={{
        xs: 1,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1,
        xxl: 1,
      }}
      items={items}
    />
  );
};
export default ViewBio;
