import "@/design/style/login.scss";
import React from "react";
import LoginForm from "../../components/LoginForm";

const Login: React.FC = () => {

  return (
    <div className="login">
      <div className="login-box">
        <div className="login-box__main">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
