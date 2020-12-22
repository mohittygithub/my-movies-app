import React, { useState } from "react";
import "./signin-signup.styles.css";

const SigninSignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [signUp, setSignUp] = useState(false);
  // const handleClick = (e) => {
  //   e.preventDefault();

  //   if (e.target.name === "signup") {
  //     setSignUp(true);
  //   } else {
  //     setSignUp(false);
  //   }
  // };
  return !signUp ? (
    <div className="main">
      <form className={`signin-form  offset-4 col-4`}>
        <h1 className="mb-4">Sign in</h1>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text ">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="checkbox" />
          <label className="form-check-label">Remember Me</label>
        </div>
        <div className="button-div mt-2">
          <button type="submit" className="btn btn-success" name="signin">
            Sign In
          </button>
          <button
            type="submit"
            className="btn btn-warning"
            name="signup"
            onClick={() => setSignUp(true)}
          >
            Not Registered yet?
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="main">
      <form className={`signup-form  offset-4 col-4`}>
        <h1 className="mb-4">Sign Up</h1>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name..."
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text ">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <label>Retype-Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Retype Password"
            required
          />
        </div>
        <div className="button-div mt-2">
          <button type="submit" className="btn btn-success" name="signup">
            Sign Up
          </button>
          <button
            type="submit"
            name="already"
            className="btn btn-warning"
            onClick={() => setSignUp(false)}
          >
            Already Registered?
          </button>
        </div>
      </form>
    </div>
  );
};
export default SigninSignupPage;
