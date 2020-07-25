import React from "react";
import background from "../nav/background.jpg";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-color">
          <img src={background} className="bg" alt="bg" />
        </div>

        <h1 class="centered">Ling Ling 40 hours</h1>
      </div>
    );
  }
}

export default LandingPage;
