import React from "react";
import asaph from "../imagesofinstruments/asaph.mp4";
import background7 from "../imagesofinstruments/background2.jpg";
import "../../../App.css";
export default function LingLing() {
  return (
    <div>
      <div className="bg-color">
        <img src={background7} className="bg" alt="bg" />
      </div>

      <iframe
        width="533"
        height="480"
        src={asaph}
        frameborder="0"
        allowfullscreen
        className="move_myself_up"
      ></iframe>
    </div>
  );
}
