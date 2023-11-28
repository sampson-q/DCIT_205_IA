// Lab.js
import React from "react";
import PropTypes from "prop-types";
import "../styles/Lab.css";

function Lab({ image, title, description }) {
  return (
    <div className="lab-container">
      <img className="lab-image" src={image} alt={`Lab ${title}`} />
      <div className="lab-content">
        <h2 className="lab-title">{title}</h2>
        <p className="lab-description">{description}</p>
      </div>
    </div>
  );
}

Lab.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Lab;