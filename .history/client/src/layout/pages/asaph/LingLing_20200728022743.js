import React, { Component } from "react";
import asaph from "../imagesofinstruments/asaph.mp4";
import background7 from "../imagesofinstruments/background7.jpg";
import "../../../App.css";

export class LingLing extends Component {
  render() {
    return (
      <div>
        <div className="bg-color">
          <img src={background7} className="bg" alt="bg" />
        </div>
        <a id="menu" class="waves-effect waves-light btn btn-floating">
          <i class="material-icons">menu</i>
        </a>
        <iframe
          width="495"
          height="280"
          src={asaph}
          frameBorder="0"
          className="move_myself_up"
          title="Bohemian Rhapsody rendition"
        ></iframe>

        <div class="tap-target" data-target="menu">
          <div class="tap-target-content">
            <h5>Title</h5>
            <p>A bunch of text</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LingLing;
