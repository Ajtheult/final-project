import React from "react";
import asaph from "../imagesofinstruments/asaph.mp4";

export default function LingLing() {
  return (
    <div>
      <div class="video-container">
        <iframe
          width="500px"
          height="480px"
          src={asaph}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
