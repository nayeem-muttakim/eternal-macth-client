import { Button, Card, Divider, Form, Input, Typography } from "antd";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import "./signin.css";
import Social from "../Social/Social";
const { Title, Text } = Typography;
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

const SignIn = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const to = location?.state?.from?.pathname || "/";
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const email = values.email;
    const password = values.password;

    signIn(email, password)
      .then((res) => {
        toast.success("Signed in");
        navigate(to);
      })
      .catch((err) => {
        toast.error("Invalid Email or Password");
      });
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
      <div
        id="form-container2"
        style={{
          minHeight: "fit-content",
          border: "1px solid grey",
          boxShadow:
            " 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.3)",
          borderRadius: 10,

          textAlign: "center",
        }}
      >
        <Title style={{ textAlign: "center" }} level={3}>
          Sign in to your account
        </Title>
        <Form
          {...formItemLayout}
          form={form}
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
              Sign in
            </Button>
          </Form.Item>
        </Form>
        <Divider style={{ paddingInline: 60 }} plain>
          Or
        </Divider>
        <Social />

        <Text style={{ display: "block", marginBlock: 15 }} level={5}>
          Don't have an account?
        </Text>
        <Link to="/signUp">
          {" "}
          <Button
            id="btn"
            shape="round"
            style={{
              paddingTop: 12,
              paddingBottom: 35,
              backgroundColor: "#09bc8a",
            }}
            type="primary"
            htmlType="submit"
          >
            <PlusOutlined />
            Sign Up Now
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default SignIn;
