// InformationComponent.js

import React from "react";
import "../styles/InformationComponent.css";
import deptImg from "../assets/departmentalevents.jpg";

function InformationComponent() {
  return (
    <div className="information-container">
      <div className="information-content">
        <img src={deptImg} alt="Information Image" className="info-image" />
        <div className="info-text">
          <h2 className="info-title">Departmental Events</h2>
          <p className="info-body">
            {/* Body content for the information */}
            Programmes, seminars and events organized by the department
          </p>
          <a href="/events" className="info-link">
          View upcoming and ongoing events
          </a>
        </div>
      </div>
    </div>
  );
}

export default InformationComponent;
