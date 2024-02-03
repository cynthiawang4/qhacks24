/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconPersonal1 = ({ color = "#242E39", className }) => {
  return (
    <svg
      className={`icon-personal-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.0003 6.00001C10.3436 6.00001 9.00011 7.34286 9.00011 9.00022C9.00011 10.6576 10.3436 12.0004 12.0003 12.0004C13.657 12.0004 15.0005 10.6569 15.0005 9.00022C15.0005 7.34349 13.6577 6.00001 12.0003 6.00001ZM12.0003 13.4059C9.74747 13.4059 5.25 14.5368 5.25 16.7808V18.6558H18.75V16.7808C18.75 14.5368 14.2532 13.4059 11.9997 13.4059H12.0003Z"
        fill={color}
      />
    </svg>
  );
};

IconPersonal1.propTypes = {
  color: PropTypes.string,
};
