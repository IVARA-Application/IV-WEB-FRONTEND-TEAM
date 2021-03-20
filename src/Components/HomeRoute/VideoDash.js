import ReactPlayer from "react-player";
import React from "react";

//Documentation - https://www.npmjs.com/package/react-player

function VideoApp() {
  return (
    <div className="d-flex col">
      <div className="col">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=S2FGp3deHYE"
          controls
          width="100%"
          height="100%"
        />
      </div>
      <div className="space-y-2">
        <div className="">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=S2FGp3deHYE"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=S2FGp3deHYE"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=S2FGp3deHYE"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=S2FGp3deHYE"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=S2FGp3deHYE"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=S2FGp3deHYE"
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoApp;
