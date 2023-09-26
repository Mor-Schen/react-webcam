import React from "react";
import Webcam from "react-webcam";
import { useRef } from "react";

const CustomWebcam = () => {
  const webcamRef = useRef(null);

  return (
    <div className="container">
      <Webcam height={600} width={600} />
    </div>
  );
};

export default CustomWebcam;
