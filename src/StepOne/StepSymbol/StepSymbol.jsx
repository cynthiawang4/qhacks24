/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconPersonal1 } from "../icons/IconPersonal1/IconPersonal1";
import { StepSymbol2 } from "../icons/StepSymbol2/StepSymbol2";
import "./styles.css";

export const StepSymbol = ({
  text = "01",
  type,
  state,
  typeNumberedStateClassName,
  numberClassName,
  circleClassName,
}) => {
  return (
    <>
      {["bullet", "icon", "numbered"].includes(type) && (
        <div className={`step-symbol ${typeNumberedStateClassName}`}>
          <div className={`number ${state} ${type} ${numberClassName}`}>
            {["bullet", "numbered"].includes(type) && (
              <div className={`element ${circleClassName}`}>
                {state === "default" && type === "numbered" && <>{text}</>}

                {state === "active" && type === "numbered" && <>01</>}
              </div>
            )}

            {type === "icon" && (
              <IconPersonal1
                className={`${state === "active" ? "class" : "class-2"}`}
                color={state === "active" ? "#0162DD" : "#242E39"}
              />
            )}
          </div>
        </div>
      )}

      {type === "checked" && (
        <StepSymbol2 className="type-checked-state" color={state === "active" ? "#0162DD" : "#A1AEBE"} />
      )}
    </>
  );
};

StepSymbol.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(["numbered", "bullet", "icon", "checked"]),
  state: PropTypes.oneOf(["active", "default"]),
};
