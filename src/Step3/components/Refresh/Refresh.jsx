import React from "react";
import "./styles.css";

export const Refresh = ({ className }) => {
  return (
    <div className={`refresh ${className}`}>
      <div className="overlap">
        <div className="group">
          <div className="overlap-group">
            <img className="vector" alt="Vector" />
            <img className="ellipse" alt="Ellipse" />
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-group">
            <img className="img" alt="Vector" />
            <img className="ellipse-2" alt="Ellipse" />
          </div>
        </div>
      </div>
    </div>
  );
};