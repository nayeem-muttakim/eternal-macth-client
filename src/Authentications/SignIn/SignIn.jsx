import { Button, Card, Divider, Form, Input, Typography } from "antd";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

import Social from "../Social/Social";
import "./SignIn.css";
const { Title, Text } = Typography;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
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
    const toasted = toast.loading("Signing In");

    signIn(email, password)
      .then((res) => {
        toast.success("Signed in", { id: toasted });
        navigate(to);
      })
      .catch((err) => {
        toast.error("Invalid Email or Password", { id: toasted });
      });
  };

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "90vh",
      }}
    >
      <Card >
        <div
          id="form-container"
          style={{
            minHeight: "fit-content",
            paddingBlock: 50,
            borderRadius: 15,
            textAlign: "center",
          }}
        >
          <Title style={{ textAlign: "center" }} level={3}>
            Sign in to your account
          </Title>
          <Form
            id="form"
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
              <Input placeholder="E-mail" size="large" />
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
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>

            <Form.Item>
              <Button
                shape="round"
                style={{
                  width: "100%",
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
          <Link to="/SignUp">
            {" "}
            <Button
              id="button"
              shape="round"
              style={{
                width: "350px",
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
      </Card>
    </div>
  );
};
export default SignIn;
