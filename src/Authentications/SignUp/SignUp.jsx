import { Button, Card, Divider, Form, Input, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

import Social from "../Social/Social";
// import "./SignUp.css";
const { Title, Text, Link } = Typography;
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

const SignUp = () => {
  const { signUp } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const to = location?.state?.from?.pathname || "/";
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const name = values.name;
    const email = values.email;
    const password = values.password;
    const toasted = toast.loading("Signing Up");

    signUp(email, password)
      .then((res) => {
        toast.success("Signed up", { id: toasted });
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
     <Card>
     <div
        id="form-container"
        style={{
          minHeight: "fit-content",
        //   backgroundColor: "#ffe5ec",
          paddingBlock: 50,
          borderRadius: 15,
          textAlign: "center",
        }}
      >
        <Title style={{ textAlign: "center" }} level={3}>
          Sign up an account
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
          {/* <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please type your name!",
              },
            ]}
          >
            <Input placeholder="Name" size="large" />
          </Form.Item> */}
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
        <Link href="/SignIn" style={{ textDecoration: "none" }}>
          Sign in to your account
        </Link>
      </div>
     </Card>
    </div>
  );
};
export default SignUp;
