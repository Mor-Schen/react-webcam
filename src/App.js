import React from "react";
import Webcam from "react-webcam";
import "./App.css";
import CustomWebcam from "./CustomWebcam";

const App = () => {
  return (
    <div className="App">
      <CustomWebcam />
      <Webcam audio={true} />
    </div>
  );
};

export default App;
