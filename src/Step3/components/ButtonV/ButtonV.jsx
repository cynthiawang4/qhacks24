import PropTypes from "prop-types";
import React from "react";
import "./styles.css";

export const ButtonV = ({ className, text = "Button", handleClick}) => {
  return (
    <button className={`button-v ${className}`} onClick={handleClick}>
      <div className="button">{text}</div>
    </button>
  );
};

ButtonV.propTypes = {
  text: PropTypes.string,
};