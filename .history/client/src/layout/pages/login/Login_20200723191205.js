import React from "react";
import "../../../App.css";
import background5 from "../imagesofinstruments/background5.jpg";

const Login = () => {
  return (
    <div>
      <div className="bg-color">
        <img src={background5} className="bg" alt="bg" />
      </div>
      <div className="my_login-box">
        <h1>Login</h1>
        <div className="my_textbox">
          <input id="fullname" type="fullname" className="validate" required />
          <label htmlFor="fullname">Fullname</label>
          <br />
          <input id="password" type="password" className="validate" required />
          <label htmlFor="password">Password</label>
        </div>

        <input className="my_btn" type="submit" name="action" value="Sign in" />
      </div>
    </div>
  );
};

export default Login;
