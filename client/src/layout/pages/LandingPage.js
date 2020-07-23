import React from "react";
import WOW from "wowjs";
import background from "../nav/background.jpg";

class LandingPage extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div>
        <div className="bg-color">
          <img src={background} className="bg" alt="bg" />
        </div>

        <h1 class="animate__animated  centered">Ling Ling 40 hours</h1>
      </div>
    );
  }
}

export default LandingPage;
