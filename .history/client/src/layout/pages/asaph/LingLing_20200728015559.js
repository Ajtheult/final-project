import React from "react";
import asaph from "../imagesofinstruments/asaph.mp4";

export default function LingLing() {
  return (
    <div>
      <div class="video-container">
        <iframe
          width="853"
          height="480"
          src={asaph}
          frameborder="0"
          allowfullscreen
          className="move_myself_up"
        ></iframe>
      </div>
    </div>
  );
}
