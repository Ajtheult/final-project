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
          <div className="input-field col s12">
            <input id="fullname" type="text" className="validate" required />
            <label htmlFor="fullname">FullName</label>
          </div>
          <br />
          <br />
          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              className="validate"
              required
            />
            <label htmlFor="password">
              Password <i class="fas fa-key black"></i>
            </label>
          </div>
        </div>

        <button
          className="btn waves-effect waves-light black"
          type="submit"
          name="action"
        >
          Login
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
};

export default Login;
