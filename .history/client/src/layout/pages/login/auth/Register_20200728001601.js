import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../../../context/alert/alertContext";
import AuthContext from "../../../../context/auth/authContext";
import background4 from "../../imagesofinstruments/background4.jpg";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
      // Ask for help with this
    }

    if (error === "User already exists") {
      setAlert(error, "red");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="container">
      <div className="container_width_register">
        <div className="bg-color">
          <img src={background4} className="bg" alt="bg" />
        </div>
        <h1 className="register_title">Account Register</h1>
        <form onSubmit={onSubmit}>
          <div action="form-group">
            <h5 className="change_register_text_colour" htmlFor="name">
              Name
            </h5>
            <input
              className="white"
              type="text"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div action="form-group">
            <h5 className="change_register_text_colour" htmlFor="email">
              Email Address
            </h5>
            <input
              className="white"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div action="form-group">
            <h5 className="change_register_text_colour" htmlFor="password">
              Password
            </h5>
            <input
              className="white"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              minLength="6"
            />
          </div>
          <div action="form-group">
            <h5 className="change_register_text_colour" htmlFor="password2">
              Confirm Password
            </h5>
            <input
              className="white"
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              minLength="6"
            />
          </div>
          <input type="submit" value="Register" className="btn red center" />
        </form>
      </div>
    </div>
  );
};

export default Register;
