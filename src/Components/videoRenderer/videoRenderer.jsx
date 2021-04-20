import React from "react";
import ReactPlayer from "react-player";
import IvaraNavbar from "../navbar/navbar";

import "./videoRenderer.css";

export default function VideoRenderer(props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <IvaraNavbar />
      <div className="row">
        <div className="col-12 col-lg-10 videoContainer">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="85%"
          />
          <h2 className="mt-3">Lesson Title</h2>
        </div>
        <div className="col-12 col-lg-2">World</div>
      </div>
    </div>
  );
}
