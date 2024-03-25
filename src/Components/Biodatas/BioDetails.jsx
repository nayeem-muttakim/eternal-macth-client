import { useQuery } from "@tanstack/react-query";
import { Button, Descriptions, Popover } from "antd";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useParams } from "react-router-dom";
import { HeartTwoTone, PullRequestOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const BioDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { user } = useAuth();
  const { data: Biodata = {} } = useQuery({
    queryKey: ["Biodata"],
    queryFn: async () => {
      const res = await axiosSecure(`/biodata/${id}`);
      return res.data;
    },
  });

  const name = Biodata?.name;
  const bioId = Biodata?.id;
  const permanent_division = Biodata?.permanent_division;
  const invoice = Biodata?.invoice;
  const email = Biodata?.email;
  const occupation = Biodata?.occupation;
  const status = false;
  const favBio = {
    name,
    bioId,
    permanent_division,
    occupation,
    user: user?.email,
  };
  const addFav = () => {
    axiosSecure
      .post("/favourites", favBio)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Added To Favourites");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const reqInfos = {
    name,
    bioId,
    status,
    invoice,
    email,
    user: user?.email,
  };
  const reqInfo = () => {
    axiosSecure
      .post("/request-info", reqInfos)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Request Sent");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const items = [
    {
      label: "Biodata Type",
      children: Biodata?.type,
    },
    {
      label: "Name",
      children: Biodata?.name,
    },
    {
      label: "Date of birth",
      children: Biodata?.birthdate,
    },
    {
      label: "Height",
      children: Biodata?.height,
    },
    {
      label: "Weight",
      children: Biodata?.weight,
    },
    {
      label: "Age",
      children: Biodata?.age,
    },
    {
      label: "Occupation",
      children: Biodata?.occupation,
    },
    {
      label: "Race",
      children: Biodata?.race,
    },
    {
      label: "Father's Name",
      children: Biodata?.father,
    },
    {
      label: "Mother's Name",
      children: Biodata?.mother,
    },
    {
      label: "Permanent Division",
      children: Biodata?.permanent_division,
    },
    {
      label: "Present Division",
      children: Biodata?.present_division,
    },
    {
      label: "Expected Partner Age",
      children: Biodata?.partner_age,
    },
    {
      label: "Expected Partner Height",
      children: Biodata?.partner_height,
    },
    {
      label: "Expected Partner Weight",
      children: Biodata?.partner_weight,
    },
  ];
  return (
    <>
      <Helmet>
        <title>Eternal Match | Biodata</title>
      </Helmet>
      <Descriptions
        extra={
          <div style={{ display: "flex", gap: 8 }}>
            <Popover content="Add To Favourite">
              {" "}
              <Button
                onClick={addFav}
                icon={<HeartTwoTone twoToneColor="#eb2f96" />}
              />
            </Popover>

            <Button
              onClick={reqInfo}
              icon={<PullRequestOutlined style={{ color: "#eb2f96" }} />}
            >
              Request Contact Info
            </Button>
          </div>
        }
        style={{
          maxWidth: 700,
          marginInline: "auto",
          paddingInline: 5,
          marginBlock: 10,
        }}
        title={`BiodataId: ${Biodata?.id}`}
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
    </>
  );
};
export default BioDetails;
