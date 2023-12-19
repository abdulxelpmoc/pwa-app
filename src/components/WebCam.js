import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const backCamConstraints = {
  facingMode: { exact: "environment" },
};

const frontCamConstraints = {
  facingMode: "user",
};

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [camToggle, setCamToggle] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <div>
      <Webcam
        width={300}
        height={300}
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={camToggle ? frontCamConstraints : backCamConstraints}
        minScreenshotWidth={180}
        minScreenshotHeight={180}
      />
      <button onClick={() => setCamToggle(!camToggle)}>SPIN CAM</button>
      <button onClick={capture}>Capture Photo</button>
      {imgSrc && <img src={imgSrc} alt="img" width={100} height={100} />}
    </div>
  );
};

export default WebcamCapture;
