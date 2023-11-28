// InformationComponent.js

import React from "react";
import "../styles/InformationComponent.css";

function InformationComponent({image, title, body, event}) {
    return (
        <div className="information-container">
            <div className="information-content">
                <img src={image} alt="Information Image" className="info-image" />
                <div className="info-text">
                    <h2 className="info-title">{title}</h2>
                    <p className="info-body">{body}</p>

                    {
                        event ?
                        <a href="/events" className="info-link">View upcoming and ongoing events</a>
                        : <></>
                    }
                </div>
            </div>
        </div>
    );
}

export default InformationComponent;