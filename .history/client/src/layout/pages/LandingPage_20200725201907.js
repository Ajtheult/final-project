import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import background from "../nav/background.jpg";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div className="bg-color">
        <img src={background} className="bg" alt="bg" />
      </div>
      <h1 class="centered">Ling Ling 40 hours</h1>
    </div>
  );
};

export default Home;
