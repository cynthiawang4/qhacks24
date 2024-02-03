import PropTypes from "prop-types";
import React from "react";

export const StepSymbol1 = ({ color = "#0162DD", className }) => {
  return (
    <svg
      className={`step-symbol-1 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_2_88)">
        <circle className="circle" cx="16" cy="16" fill={color} r="15" stroke={color} strokeWidth="2" />
      </g>
      <path
        className="path"
        d="M12.578 19.642L22.22 10L23.5002 11.2802L12.578 22.2025L7.49975 17.1257L8.78 15.8455L12.578 19.642Z"
        fill="white"
      />
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_2_88">
          <rect className="rect-2" fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};

StepSymbol1.propTypes = {
  color: PropTypes.string,
};
