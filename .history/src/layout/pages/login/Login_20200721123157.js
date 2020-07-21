import React from "react";
import "../../../App.css";
import background5 from "../imagesofinstruments/background5.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="bg-color">
        <img src={background5} className="bg" alt="bg" />
      </div>
      <div className="my_login-box">
        <h1>Login</h1>
        <div className="my_textbox">
          <input type="text" placeholder="Username" name="true" required />

          <input type="password" placeholder="Password" name="true" required />
        </div>

        <input className="my_btn" type="button" name="" value="Sign in" />
        <Link to="/new-sign-up">
          <p className="sign">-Sign up</p>
        </Link>

        <Link to="/cart">
          <p className="sign">-Go to Cart</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
