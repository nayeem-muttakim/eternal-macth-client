import { Button, Divider, Form, Input, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import "./signup.css";
import Social from "../Social/Social";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 20,
    },
  },
  wrapperCol: {
    xs: {
      span: 20,
    },
  },
};
const SignUp = () => {
  const { Title, Text } = Typography;

  const { signUp, updateInfo } = useAuth();

  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const name = values.name;
    const email = values.email;
    const password = values.password;

    try {
      // create user
      const result = await signUp(email, password);
      // add name
      await updateInfo(name);
      const userInfo = {
        name: name,
        email: email,

        role: "user",
        membership: false,
      };
      await axiosPublic.post("/users", userInfo);
      toast.success("Signed up");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        marginBlock: 15,
        placeItems: "center",
        minHeight: "90vh",
      }}
    >
      <Helmet>
        <title>Eternal Match | Sign up</title>
      </Helmet>
      <div
        id="form-container"
        style={{
          minHeight: "fit-content",
          border: "1px solid grey",
          boxShadow:
            " 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.15)",
          borderRadius: 10,

          textAlign: "center",
        }}
      >
        <Title style={{ textAlign: "center" }} level={3}>
          Sign up an account
        </Title>
        <Form
          id="form2"
          form={form}
          {...formItemLayout}
          style={{
            display: "grid",
            gap: 5,
            marginTop: 40,
            paddingInline: 10,
          }}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please type your name!",
              },
            ]}
          >
            <Input className="item" placeholder="Name" size="large" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input className="item" placeholder="E-mail" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              className="item"
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              className="item"
              shape="round"
              style={{
                paddingTop: 15,
                paddingBottom: 35,
              }}
              type="primary"
              htmlType="submit"
            >
              <UserOutlined />
              Sign up
            </Button>
          </Form.Item>
        </Form>
        <Divider style={{ paddingInline: 60 }} plain>
          Or
        </Divider>
        <Social />

        <Text style={{ display: "block", marginTop: 15 }} level={5}>
          Have an existing account?
        </Text>
        <Link to="/signIn" style={{ textDecoration: "none" }}>
          Sign in to your account
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
