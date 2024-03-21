import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

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
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
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
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{
        maxWidth: 550,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
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
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder="Password" size="large" />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
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
          <LoginOutlined />
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SignIn;
