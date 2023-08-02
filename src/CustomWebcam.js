import React from "react";
import Webcam from "react-webcam";
import { useRef } from "react"; // import useRef

import useStyles from "./CustomWebcamStyles"; // Import the styles from the separate file


const CustomWebcam = () => {
    const webcamRef = useRef(null); // create a webcam reference
    const classes = useStyles(); // Use the styles

    return (
        <div className={classes.container}>
            <div className={classes.webcam}>
                <webcam height={400} width={600} ref={webcamRef} />
            </div>
        </div>
    );
};

export default CustomWebcam;

