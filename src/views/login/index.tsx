import "@/design/style/login.scss";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const Login: React.FC = () => {
  // state
  const [registerFlag, handlerRegisterFlag] = useState(false);
  const [username, onUsernameChange] = useState("");
  const [password, onPasswordChange] = useState("");

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onUserRegister = () => {
    handlerRegisterFlag(!registerFlag);
    onUsernameChange("12311");
    onPasswordChange("");
    console.log(username);
    console.log(password);
  };

  return (
    <div className="login">
      <div className="login-box">
        <div className="login-box__main">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <p className="title">
              Template :) {registerFlag ? "Sign up" : "Log in"}
            </p>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                value={username}
                onChange={(event) => onUsernameChange(event.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                value={password}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onChange={(event) => onPasswordChange(event.target.value)}
              />
            </Form.Item>
            {registerFlag && (
              <Form.Item
                name="duplicatePassword"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  value={password}
                  placeholder="duplicate password"
                  onChange={(event) => onPasswordChange(event.target.value)}
                />
              </Form.Item>
            )}
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                {registerFlag ? "Sign up" : "Log in"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                className="login-form-button"
                onClick={() => onUserRegister()}
              >
                {registerFlag ? "Log in" : "Sign up"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
