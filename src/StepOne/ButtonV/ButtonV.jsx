/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./styles.css";

export const ButtonV = ({ className, text = "Button", handleClick }) => {
  return (
    <button className={`button-v ${className}`} onClick={handleClick}>
      <div className="button">{text}</div>
    </button>
  );
};

ButtonV.propTypes = {
  text: PropTypes.string,
};
