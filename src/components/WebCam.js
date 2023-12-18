import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 640,
  height: 480,
  facingMode: "user",
};

const WebcamCapture = () => {
  const [camMode, setCamMode] = useState("user");
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <div>
      <Webcam
        width={100}
        height={100}
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ ...videoConstraints, facingMode: camMode }}
        minScreenshotWidth={180}
        minScreenshotHeight={180}
      />
      <button
        onClick={() => {
          setCamMode("environment");
        }}
      >
        Switch Camera
      </button>
      <button onClick={capture}>Capture Photo</button>
      {imgSrc && <img src={imgSrc} alt="img" width={100} height={100} />}
    </div>
  );
};

export default WebcamCapture;
