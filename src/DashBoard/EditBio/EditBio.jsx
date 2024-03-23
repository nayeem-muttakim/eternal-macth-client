import { Button, Form, Input, Select, Slider } from "antd";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const EditBio = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: myBiodata = {}, refetch } = useQuery({
    queryKey: ["myBiodata"],
    queryFn: async () => {
      const res = await axiosSecure(`/biodata/mine?email=${user?.email}`);
      return res.data;
    },
  });

  const onFinish = (values) => {
    const toasted = toast.loading("Publishing Biodata");
    const biodata = { id: 1, ...values };
    // console.log({ ...values, id: 1 });
    if (myBiodata) {
      axiosSecure
        .patch("/biodatas", biodata)
        .then((res) => {
          if (res.data.insertedId) {
            console.log(res.data);
            toast.success("Biodata Published", { id: toasted });
            refetch();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axiosSecure
        .post("/biodatas", biodata)
        .then((res) => {
          if (res.data.insertedId) {
            console.log(res.data);
            toast.success("Biodata Published", { id: toasted });
            refetch();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      style={{ maxWidth: 500 }}
      name="basic"
      initialValues={{
        remember: true,
        email: user?.email,
      }}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {/* biodata type */}
      <Form.Item
        name="type"
        label="Biodata Type"
        rules={[
          {
            required: true,
            message: "Please Select your gender",
          },
        ]}
      >
        <Select variant="filled">
          <Select.Option value="Male">Male</Select.Option>
          <Select.Option value="Female">Female</Select.Option>
        </Select>
      </Form.Item>
      {/* name */}
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input variant="filled" />
      </Form.Item>
      {/* birthdate */}
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please Select your date if birth!",
          },
        ]}
        name={"birthdate"}
        label="Date of Birth"
      >
        <Input type="date" variant="filled" />
      </Form.Item>
      {/* height */}
      <Form.Item
        name="height"
        label="Height"
        rules={[
          {
            required: true,
            message: "Please Select your Height",
          },
        ]}
      >
        <Select variant="filled">
          <Select.Option value="below 4 ft">Below 4 ft </Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'1">4'1"</Select.Option>
          <Select.Option value="4'2">4'2"</Select.Option>
          <Select.Option value="4'3">4'3"</Select.Option>
          <Select.Option value="4'4">4'4"</Select.Option>
          <Select.Option value="4'5">4'5"</Select.Option>
          <Select.Option value="4'6">4'6"</Select.Option>
          <Select.Option value="4'7">4'7"</Select.Option>
          <Select.Option value="4'8">4'8"</Select.Option>
          <Select.Option value="4'9">4'9"</Select.Option>
          <Select.Option value="4'10">4'10"</Select.Option>
          <Select.Option value="4'11">4'11"</Select.Option>
          <Select.Option value="5'">5'</Select.Option>
          <Select.Option value="5'1">5'1"</Select.Option>
          <Select.Option value="5'2">5'2"</Select.Option>
          <Select.Option value="5'3">5'3"</Select.Option>
          <Select.Option value="5'4">5'4"</Select.Option>
          <Select.Option value="5'5">5'5"</Select.Option>
          <Select.Option value="5'6">5'6"</Select.Option>
          <Select.Option value="5'7">5'7"</Select.Option>
          <Select.Option value="5'9">5'9"</Select.Option>
          <Select.Option value="5'10">5'10"</Select.Option>
          <Select.Option value="5'11">5'11"</Select.Option>
          <Select.Option value="6'">6'</Select.Option>
          <Select.Option value="6'1">6'1"</Select.Option>
          <Select.Option value="6'2">6'2"</Select.Option>
          <Select.Option value="6'3">6'3"</Select.Option>
          <Select.Option value="6'4">6'4"</Select.Option>
          <Select.Option value="6'5">6'5"</Select.Option>
          <Select.Option value="6'6">6'6"</Select.Option>
          <Select.Option value="6'7">6'7"</Select.Option>
          <Select.Option value="6'8">6'8"</Select.Option>
          <Select.Option value="6'9">6'9"</Select.Option>
          <Select.Option value="6'10">6'10"</Select.Option>
          <Select.Option value="6'11">6'11"</Select.Option>
          <Select.Option value="7'">7'</Select.Option>
          <Select.Option value="Over 7 ft">Over 7 ft</Select.Option>
        </Select>
      </Form.Item>
      {/* weight */}
      <Form.Item
        name="weight"
        label="Weight"
        rules={[
          {
            required: true,
            message: "Please Select your weight",
          },
        ]}
      >
        <Select variant="filled">
          <Select.Option value="below 30 kg">Below 30 kg </Select.Option>
          <Select.Option value="31kg">31kg</Select.Option>
          <Select.Option value="32kg">32kg</Select.Option>
          <Select.Option value="33kg">33kg</Select.Option>
          <Select.Option value="34kg">34kg</Select.Option>
          <Select.Option value="35kg">35kg</Select.Option>
          <Select.Option value="36kg">36kg</Select.Option>
          <Select.Option value="37kg">37kg</Select.Option>
          <Select.Option value="38kg">38kg</Select.Option>
          <Select.Option value="39kg">39kg</Select.Option>
          <Select.Option value="40kg">40kg</Select.Option>
          <Select.Option value="41kg">41kg</Select.Option>
          <Select.Option value="42kg">42kg</Select.Option>
          <Select.Option value="43kg">43kg</Select.Option>
          <Select.Option value="44kg">44kg</Select.Option>
          <Select.Option value="45kg">45kg</Select.Option>
          <Select.Option value="46kg">46kg</Select.Option>
          <Select.Option value="47kg">47kg</Select.Option>
          <Select.Option value="48kg">48kg</Select.Option>
          <Select.Option value="49kg">49kg</Select.Option>
          <Select.Option value="50kg">50kg</Select.Option>
          <Select.Option value="51kg">51kg</Select.Option>
          <Select.Option value="52kg">52kg</Select.Option>
          <Select.Option value="53kg">53kg</Select.Option>
          <Select.Option value="54kg">54kg</Select.Option>
          <Select.Option value="55kg">55kg</Select.Option>
          <Select.Option value="56kg">56kg</Select.Option>
          <Select.Option value="57kg">57kg</Select.Option>
          <Select.Option value="58kg">58kg</Select.Option>
          <Select.Option value="59kg">59kg</Select.Option>
          <Select.Option value="60kg">60kg</Select.Option>
          <Select.Option value="61kg">61kg</Select.Option>
          <Select.Option value="62kg">62kg</Select.Option>
          <Select.Option value="63kg">63kg</Select.Option>
          <Select.Option value="64kg">64kg</Select.Option>
          <Select.Option value="65kg">65kg</Select.Option>
          <Select.Option value="66kg">66kg</Select.Option>
          <Select.Option value="67kg">67kg</Select.Option>
          <Select.Option value="68kg">68kg</Select.Option>
          <Select.Option value="69kg">69kg</Select.Option>
          <Select.Option value="70kg">70kg</Select.Option>
          <Select.Option value="71kg">71kg</Select.Option>
          <Select.Option value="72kg">72kg</Select.Option>
          <Select.Option value="73kg">73kg</Select.Option>
          <Select.Option value="74kg">74kg</Select.Option>
          <Select.Option value="75kg">75kg</Select.Option>
          <Select.Option value="76kg">76kg</Select.Option>
          <Select.Option value="77kg">77kg</Select.Option>
          <Select.Option value="78kg">78kg</Select.Option>
          <Select.Option value="79kg">79kg</Select.Option>
          <Select.Option value="80kg">80kg</Select.Option>
          <Select.Option value="81kg">81kg</Select.Option>
          <Select.Option value="82kg">82kg</Select.Option>
          <Select.Option value="83kg">83kg</Select.Option>
          <Select.Option value="84kg">84kg</Select.Option>
          <Select.Option value="85kg">85kg</Select.Option>
          <Select.Option value="86kg">86kg</Select.Option>
          <Select.Option value="87kg">87kg</Select.Option>
          <Select.Option value="88kg">88kg</Select.Option>
          <Select.Option value="89kg">89kg</Select.Option>
          <Select.Option value="90kg">90kg</Select.Option>
          <Select.Option value="91kg">91kg</Select.Option>
          <Select.Option value="92kg">92kg</Select.Option>
          <Select.Option value="93kg">93kg</Select.Option>
          <Select.Option value="94kg">94kg</Select.Option>
          <Select.Option value="95kg">95kg</Select.Option>
          <Select.Option value="96kg">96kg</Select.Option>
          <Select.Option value="97kg">97kg</Select.Option>
          <Select.Option value="98kg">98kg</Select.Option>
          <Select.Option value="99kg">99kg</Select.Option>
          <Select.Option value="100kg">100kg</Select.Option>
          <Select.Option value="Over 100kg">Over 100kg</Select.Option>
        </Select>
      </Form.Item>
      {/* age */}
      <Form.Item
        label="Age"
        name="age"
        rules={[
          {
            required: true,
            message: "Please type your age!",
          },
        ]}
      >
        <Input variant="filled" type="number" />
      </Form.Item>
      {/* occupation */}
      <Form.Item
        name="occupation"
        label="Occupation"
        rules={[
          {
            required: true,
            message: "Please Select your Occupation",
          },
        ]}
      >
        <Select variant="filled">
          <Select.Option value="Teacher">Teacher</Select.Option>
          <Select.Option value="Doctor">Doctor</Select.Option>
          <Select.Option value="Engineer">Engineer</Select.Option>
          <Select.Option value="Businessman">Businessman</Select.Option>
          <Select.Option value="Government job">Government job</Select.Option>
          <Select.Option value="Private job">Private job</Select.Option>
          <Select.Option value="Freelancer">Freelancer</Select.Option>
          <Select.Option value="Student">Student</Select.Option>
          <Select.Option value="Immigrant">Immigrant</Select.Option>
          <Select.Option value="Others">Others</Select.Option>
          <Select.Option value="No Occupation">No Occupation</Select.Option>
        </Select>
      </Form.Item>
      {/* race */}
      <Form.Item
        name="race"
        label="Race"
        rules={[
          {
            required: true,
            message: "Please Select your race",
          },
        ]}
      >
        <Select variant="filled">
          <Select.Option value="Black">Black</Select.Option>
          <Select.Option value="Brown">Brown</Select.Option>
          <Select.Option value="White">White</Select.Option>
        </Select>
      </Form.Item>
      {/* father name */}
      <Form.Item
        label="Father's name"
        name="father"
        rules={[
          {
            required: true,
            message: "Please input your father's name!",
          },
        ]}
      >
        <Input variant="filled" />
      </Form.Item>
      {/* mother name */}
      <Form.Item
        label="Mother's name"
        name="mother"
        rules={[
          {
            required: true,
            message: "Please input your mother's name!",
          },
        ]}
      >
        <Input variant="filled" />
      </Form.Item>
      {/* permanent division */}
      <Form.Item
        name="permanent-division"
        label="Permanent Division"
        rules={[
          {
            required: true,
            message: "Please Select your permanent division",
          },
        ]}
      >
        <Select variant="filled">
          <Select.Option value="Dhaka">Dhaka</Select.Option>
          <Select.Option value="Chattagram">Chattagram</Select.Option>
          <Select.Option value="Rangpur">Rangpur</Select.Option>
          <Select.Option value="Barisal">Barisal</Select.Option>
          <Select.Option value="Khulna">Khulna</Select.Option>
          <Select.Option value="Maymansingh">Maymansingh</Select.Option>
          <Select.Option value="Sylhet">Sylhet</Select.Option>
        </Select>
      </Form.Item>
      {/* present division */}
      <Form.Item
        name="present-division"
        label="Present Division"
        rules={[
          {
            required: true,
            message: "Please Select your present division",
          },
        ]}
      >
        <Select variant="filled">
          <Select.Option value="Dhaka">Dhaka</Select.Option>
          <Select.Option value="Chattagram">Chattagram</Select.Option>
          <Select.Option value="Rangpur">Rangpur</Select.Option>
          <Select.Option value="Barisal">Barisal</Select.Option>
          <Select.Option value="Khulna">Khulna</Select.Option>
          <Select.Option value="Maymansingh">Maymansingh</Select.Option>
          <Select.Option value="Sylhet">Sylhet</Select.Option>
        </Select>
      </Form.Item>
      {/* partner age */}
      <Form.Item
        label="Expected Partner Age"
        name="partner-age"
        rules={[
          {
            required: true,
            message: "Please type your expected partner age!",
          },
        ]}
      >
        <Slider range min={18} max={70} defaultValue={[18, 70]} />
      </Form.Item>
      {/*partner height */}
      <Form.Item
        name="partner-height"
        label="Expected Partner Height"
        rules={[
          {
            required: true,
            message: "Please Select your Expected Partner Height",
          },
        ]}
      >
        <Input variant="filled" placeholder="5'1''- 5'10''" />
      </Form.Item>
      {/*partner weight */}
      <Form.Item
        name="partner-weight"
        label="Expected Partner Weight"
        rules={[
          {
            required: true,
            message: "Please Select your Expected Partner Weight",
          },
        ]}
      >
        <Input variant="filled" placeholder="30kg - 40kg" />
      </Form.Item>
      {/* contact email */}
      <Form.Item label="Contact Email" name="email" required>
        <Input variant="filled" disabled />
      </Form.Item>
      {/* mobile number */}
      <Form.Item
        label="Mobile Number"
        rules={[
          {
            required: true,
            message: "Please type your mobile number",
          },
        ]}
        name="invoice"
        required
      >
        <Input variant="filled" type="text" />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          style={{ marginInline: "17%" }}
          htmlType="submit"
        >
          Save and Publish
        </Button>
      </Form.Item>
    </Form>
  );
};
export default EditBio;
