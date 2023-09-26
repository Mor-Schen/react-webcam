import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";

const CustomWebcam = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoURL, setVideoURL] = useState(null);

  const handleStartCaptureClick = () => {
    setRecordedChunks([]);
    const stream = webcamRef.current.video.srcObject;
    mediaRecorderRef.current = new MediaRecorder(stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.ondataavailable = (e) => {
      if (e.data.size > 0) {
        setRecordedChunks((prev) => [...prev, e.data]);
      }
    };
    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      setVideoURL(url);
    };
    mediaRecorderRef.current.start();
    setCapturing(true);
  };

  const handleStopCaptureClick = () => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  };

  useEffect(() => {
    if (videoURL) {
      // You can now do something with the recorded video, like sending it to ChatGPT for text conversion.
      console.log("Video URL:", videoURL);
    }
  }, [videoURL]);

  return (
    <div className="container">
      <Webcam ref={webcamRef} height={600} width={600} />
      <div>
        {capturing ? (
          <button onClick={handleStopCaptureClick}>Stop Capture</button>
        ) : (
          <button onClick={handleStartCaptureClick}>Start Capture</button>
        )}
      </div>
      {videoURL && (
        <div>
          <video controls autoPlay src={videoURL} width={600} height={400} />
        </div>
      )}
    </div>
  );
};

export default CustomWebcam;
