import React from "react";
import "../../../App.css";

const Login = () => {
  return (
    <div className="my_login-box">
      <h1>Login</h1>
      <div className="my_textbox">
        <input type="text" placeholder="Username" name="true" required />

        <input type="password" placeholder="Password" name="true" required />
      </div>

      <input className="my_btn" type="button" name="" value="Sign in" />
      <p className="sign">
        <a href="/new-sign-up">-Sign up</a>
      </p>
      <p className="sign">
        <a href="/cart">-Go to Cart</a>
      </p>
    </div>
  );
};

export default Login;
