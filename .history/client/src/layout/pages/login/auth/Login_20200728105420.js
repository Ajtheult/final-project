import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../../../context/auth/authContext";
import AlertContext from "../../../../context/alert/alertContext";
import background5 from "../../imagesofinstruments/background5.jpg";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/catalogue");
    }

    if (error === "Invalid Credentials") {
      setAlert(error, "red");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "red");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div className="container width_of_login_container">
      <div className="bg-color">
        <img src={background5} className="bg" alt="bg" />
      </div>
      <h1 className="login_title">Account Login</h1>
      <form onSubmit={onSubmit}>
        <div action="form-group">
          <h6 htmlFor="email">Email Address</h6>
          <input
            className="white"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div action="form-group">
          <h6 htmlFor="password">Password</h6>
          <input
            className="white"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <input type="submit" value="Login" className="btn red center" />
      </form>
    </div>
  );
};

export default Login;
