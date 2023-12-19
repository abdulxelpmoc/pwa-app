import React, { useState } from "react";
import WebcamCapture from "./components/WebCam";
import Video from "./components/Video";
export default function App() {
  const [camToggle, setCamToggle] = useState(true);

  return (
    <div>
      <button onClick={() => setCamToggle(!camToggle)}>SPIN CAM</button>
      <WebcamCapture camToggle={camToggle} />
      <Video camToggle={camToggle} />
    </div>
  );
}
