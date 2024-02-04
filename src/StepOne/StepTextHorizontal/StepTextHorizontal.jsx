/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StepSymbol2 } from "../icons/StepSymbol2/StepSymbol2";
import { StepSymbol } from "../StepSymbol";
import "./style.css";

export const StepTextHorizontal = ({
  leadingText,
  type,
  state,
  className,
  stepSymbolNumberClassName,
  stepSymbolTypeNumberedStateClassName,
  stepSymbolCircleClassName,
}) => {
  return (
    <div className={`step-text-horizontal leading-text-${leadingText} ${className}`}>
      {leadingText && ["bullet", "icon", "numbered"].includes(type) && (
        <StepSymbol
          state={state === "active" ? "active" : "default"}
          text={state === "default" && type === "numbered" ? "01" : undefined}
          type={type === "icon" ? "icon" : type === "bullet" ? "bullet" : "numbered"}
          typeNumberedStateClassName="step-symbol-instance"
        />
      )}

      {type === "checked" && (
        <StepSymbol2
          className={`${!leadingText ? "class-3" : "class-4"}`}
          color={state === "active" ? "#0162DD" : "#A1AEBE"}
        />
      )}

      {leadingText && <div className={`text-wrapper state-0-${state}`}>Text</div>}

      {!leadingText && ["bullet", "icon", "numbered"].includes(type) && (
        <StepSymbol
          circleClassName={stepSymbolCircleClassName}
          numberClassName={stepSymbolNumberClassName}
          state={state === "active" ? "active" : "default"}
          text={state === "default" && type === "numbered" ? "01" : undefined}
          type={type === "icon" ? "icon" : type === "bullet" ? "bullet" : "numbered"}
          typeNumberedStateClassName={stepSymbolTypeNumberedStateClassName}
        />
      )}
    </div>
  );
};

StepTextHorizontal.propTypes = {
  leadingText: PropTypes.bool,
  type: PropTypes.oneOf(["numbered", "bullet", "icon", "checked"]),
  state: PropTypes.oneOf(["active", "default"]),
};
