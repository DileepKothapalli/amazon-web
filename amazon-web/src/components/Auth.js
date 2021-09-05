import React from "react";

import "./Auth.css";
import logo from "../images/black.png";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="logo">
        <Link to="/">
          <img className="image" src={logo} alt="BigCo Inc. logo" />
        </Link>
      </div>
      <div className="authform">
        <form action="">
          {/* <div className="AuthForm"> */}
          <h1>Create Account</h1>
          <h3>Your name</h3>
          <input />

          <h3>Mobile Number</h3>
          <input />

          <h3>email</h3>
          <input />

          <h3>password</h3>
          <input />
          {/* </div> */}
          <p className="sendtext">
            We will send you a text to verify your phone. Message and Data rates
            may apply.
          </p>
          <div className="continue">
            <button type="submit">continue</button>
          </div>
          <hr />
          <p>
            Already have an account?
            <Link className="link">Sign in</Link>
          </p>
          <p>
            Buying for work?
            <Link className="link">Create a free business account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
