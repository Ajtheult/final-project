import React from "react";
import background from "../nav/background.jpg";

const Home = () => {
  return (
    <div className="grid-2">
      <div className="bg-color">
        <img src={background} className="bg" alt="bg" />
      </div>
      <h1 className="centered">Ling Ling 40 hours</h1>
    </div>
  );
};

export default Home;
