import React from "react";
import VideoRenderer from "../Components/videoRenderer/videoRenderer";

export default function VideoRenderPage(props) {
  return (
    <VideoRenderer
      skill={props.match.params.skill}
      subject={props.match.params.subject}
      code={props.match.params.code}
    />
  );
}
