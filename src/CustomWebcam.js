import React from "react";
import Webcam from "react-webcam";
//import { useRef } from "react"; 
import useStyles from "./CustomWebcamStyles"; // Import the styles from the separate file


const CustomWebcam = () => {
    const classes = useStyles();
    //const webcamRef = useRef(null); // create a webcam reference

    return (
        <div className={classes.container}>
            <div className={classes.webcam}>
                <Webcam height={600} width={600} />
            </div>
        </div>
    );
};

export default CustomWebcam;

