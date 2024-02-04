/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Box = ({ divClassName, text = "TEXT", handleClick}) => {
  return (
    <div className="box">
        <button className="box" onClick={handleClick}>
          <span className={`TEXT ${divClassName}`}>{text}</span>
      </button>
    </div>
  );
};

Box.propTypes = {
  text: PropTypes.string,
};
