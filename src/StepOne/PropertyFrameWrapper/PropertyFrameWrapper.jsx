/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const PropertyFrameWrapper = ({
  property1,
  className,
  vuesaxLinearArrow = "https://c.animaapp.com/tLweR9GB/img/vuesax-linear-arrow-left.svg",
  text = "Button",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-1870",
  });

  return (
    <button
      className={`property-frame-wrapper ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <img
        className="vuesax-linear-arrow"
        alt="Vuesax linear arrow"
        src={
          state.property1 === "frame-1871"
            ? "https://c.animaapp.com/tLweR9GB/img/vuesax-linear-arrow-left-2.svg"
            : vuesaxLinearArrow
        }
      />
      <div className="div">{text}</div>
    </button>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "frame-1871",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "frame-1870",
      };
  }

  return state;
}

PropertyFrameWrapper.propTypes = {
  property1: PropTypes.oneOf(["frame-1871", "frame-1870"]),
  vuesaxLinearArrow: PropTypes.string,
  text: PropTypes.string,
};
