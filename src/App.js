import React from "react";
import WebcamCapture from "./components/WebCam";
import Video from "./components/Video";
import SOSCall from "./components/SOScall";
export default function App() {
  return (
    <div>
      <WebcamCapture />
      <Video />
      <SOSCall />
    </div>
  );
}
