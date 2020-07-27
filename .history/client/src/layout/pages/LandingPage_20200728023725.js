import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import background from "../nav/background.jpg";

const Home = () => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };

  return (
    <div className="grid-2">
      <div className="bg-color">
        <img src={background} className="bg" alt="bg" />
      </div>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
      <h1 className="centered">Ling Ling 40 hours</h1>
    </div>
  );
};

export default Home;

const authContext = useContext(AuthContext);

const { logout } = authContext;
