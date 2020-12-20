import React from "react";
import "./login-signup.styles.css";
import FormInput from "../../components/form-input/form-input.component";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1 className="heading">Sign In Here...</h1>
      <div className="login">
        <div className="labels">
          <label className="label">Email:</label>
          <label className="label">Password:</label>
          <label className="label">Remember Me:</label>
        </div>
        <div className="controls">
          <FormInput type="email" placeholder="enter your email here ..." />

          <FormInput
            type="password"
            placeholder="enter your password here ..."
          />
          <FormInput type="checkbox" />
          <FormInput type="button" value="Sign In" />
        </div>
      </div>
      <div className="signup"></div>
    </div>
  );
};
export default LoginPage;
