import { Button, DatePicker, Form, Input, Select } from "antd";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const EditBio = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const onFinish = (values) => {
    const toasted = toast.loading("Publishing Biodata");
    const biodata = { id: 1, ...values };
    // console.log({ ...values, id: 1 });
    axiosSecure
      .post("/biodatas", biodata)
      .then((res) => {
        if (res.data.insertedId) {
          console.log(res.data);
          toast.success("Biodata Published", { id: toasted });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
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
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
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
          <Select.Option value="30kg">30kg</Select.Option>
          <Select.Option value="30kg">30kg</Select.Option>
          <Select.Option value="30kg">30kg</Select.Option>
          <Select.Option value="30kg">30kg</Select.Option>
          <Select.Option value="30kg">30kg</Select.Option>
          <Select.Option value="30kg">30kg</Select.Option>
          <Select.Option value="30kg">30kg</Select.Option>
          <Select.Option value="30kg">30kg</Select.Option>
          <Select.Option value="30kg">30kg</Select.Option>
          <Select.Option value="30kg">30kg</Select.Option>
          <Select.Option value="30kg">30kg</Select.Option>
          <Select.Option value="30kg">30kg</Select.Option>
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
          ><Select.Option value="30kg">30kg</Select.Option>
          <Select.Option value="30kg">30kg</Select.Option>
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
          <Select.Option value="30kg">30kg</Select.Option>
          <Select.Option value="30kg">30kg</Select.Option>
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
          <Select.Option value="30kg">30kg</Select.Option>
          <Select.Option value="30kg">30kg</Select.Option>
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
        <Input variant="filled" type="number" />
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
        <Select variant="filled">
          <Select.Option value="below 4 ft">Below 4 ft </Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
        </Select>
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
        <Select variant="filled">
          <Select.Option value="below 40 kg">Below 30 kg </Select.Option>
          <Select.Option value="30 kg">30 kg</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
          <Select.Option value="4'">4'</Select.Option>
        </Select>
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

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Save and Publish
        </Button>
      </Form.Item>
    </Form>
  );
};
export default EditBio;
