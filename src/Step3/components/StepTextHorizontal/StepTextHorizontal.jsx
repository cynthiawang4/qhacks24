import PropTypes from "prop-types";
import React from "react";
import { StepSymbol1 } from "../../icons/StepSymbol1";
import { StepSymbol } from "../StepSymbol";
import "./styles.css";

export const StepTextHorizontal = ({
  leadingText,
  type,
  state,
  className,
  stepSymbolCircleClassName,
  stepSymbolTypeNumberedStateClassName,
  stepSymbolNumberClassName,
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
        <StepSymbol1
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
