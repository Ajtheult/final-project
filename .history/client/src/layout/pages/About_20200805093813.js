import React from "react";
import background1 from "./imagesofinstruments/background1.jpg";

import { Parallax } from "react-parallax";

const About = () => {
  return (
    <div className="colour_of_about_text">
      <Parallax bgImage={background1} strength={1000}>
        <div style={{ height: 720 }}>
          <div className="about">About us</div>
        </div>
      </Parallax>
      {/* Information on About page-Start */}
      <div className="container">
        <h3 className="questions">Why did we start the business?</h3>
        <p>
          I wanted to spread my love for music as a whole. For this reason I
          decided to create a site where people can buy instruments and find
          themselves through music. The creation of this site was inspired by,
          TwoSet Violin.
        </p>
      </div>
      <br />

      <div className="container">
        <h3 className="questions">Who is Ling Ling?</h3>
        <p>
          Ling Ling is a fictional and genderless character created by
          TwoSetViolin and is portrayed to be the best violinist in the world.
          They practice 40 hours a day, which is the equivalent of approximately
          11.667 days a week. This has become a meme and is used frequently
          around the TwoSet fandom. They even named their subreddit,
          LingLing40hrs.The people that are appart of it are called "Ling Ling
          Wannabes"
        </p>
      </div>
      {/* Information on About page-End */}
      <div style={{ height: "10vh" }}></div>
      <footer style={{ fontFamily: "Times" }} className="page-footer white">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h3 className="black-text">Contact</h3>
              <div className="black-text text-lighten-4">
                <h4>Staff</h4>
                <ul>
                  <li>Jimmy Galvan: (711) 265-9193 </li>
                  <li>Gene Samuels: (675) 844-7400</li>
                  <li>Donna Escobar: (995) 565-4039.</li>
                  <li>Bonita Wardle: (620) 454-1799.</li>
                </ul>
              </div>
            </div>
            <div className="col l6 s12" style={{ marginTop: "80px" }}>
              <div className="black-text text-lighten-4">
                <h4>Office</h4>
                <ul className="">
                  <li>Desk number:(266) 855-0710</li>
                  <li>Instrument repair: (514) 531-8471</li>
                  <li>Instrument tuning: (966) 291-5045</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container black-text">40 hours</div>
        </div>
      </footer>
    </div>
  );
};

export default About;
