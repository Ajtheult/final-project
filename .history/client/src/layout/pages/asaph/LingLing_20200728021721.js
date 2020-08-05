import React from "react";
import asaph from "../imagesofinstruments/asaph.mp4";
import background7 from "../imagesofinstruments/background7.jpg";
import "../../../App.css";

export default function LingLing() {
  return (
    <div>
      <div className="bg-color">
        <img src={background7} className="bg" alt="bg" />
      </div>
      <iframe
        width="490"
        height="280"
        src={asaph}
        frameBorder="0"
        className="move_myself_up"
        title="Bohemian Rhapsody rendition"
      ></iframe>
    </div>
  );
}
