// VideoBackground.js

import React from "react";
import "../styles/VideoBackground.css"; // Import your CSS file
import backgroundVideo from "../assets/video-bg.mp4";

function VideoBackground() {
    return (
        <div className="video-background">
            
            <video autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
            </video>

            <div className="overlay"></div>

            <div className="text-overlay">
                <h1>YOUR GATEWAY TO WORLD CLASS COMPUTER SCIENCE EDUCATION</h1>
            </div>
        </div>
    );
}

export default VideoBackground;
