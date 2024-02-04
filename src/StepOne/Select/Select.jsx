/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Select = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "rectangle-10",
  });

  return (
    <div
      className={`select ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    />
  );
};

function reducer(state, action) {
  if (state.property1 === "rectangle-10") {
    switch (action) {
      case "click":
        return {
          property1: "rectangle-12",
        };
    }
  }

  if (state.property1 === "rectangle-12") {
    switch (action) {
      case "click":
        return {
          property1: "rectangle-10",
        };
    }
  }

  return state;
}

Select.propTypes = {
  property1: PropTypes.oneOf(["rectangle-12", "rectangle-10"]),
};
