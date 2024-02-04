import React from "react";
import { ButtonV } from "./components/ButtonV";
import { Question } from "./components/Question";
import { Refresh } from "./components/Refresh";
import { StepSymbol } from "./components/StepSymbol";
import { StepTextHorizontal } from "./components/StepTextHorizontal";
import "./styles.css";

export const Step3 = () => {
  return (
    <div className="index">
      <div className="div">
        <div className="component">
          <div className="overlap-group-2">
            <div className="rectangle" />
            <div className="frame">
              <StepTextHorizontal
                className="step-text-horizontal-instance"
                leadingText={false}
                state="default"
                stepSymbolCircleClassName="design-component-instance-node"
                stepSymbolNumberClassName="design-component-instance-node-3"
                stepSymbolTypeNumberedStateClassName="design-component-instance-node-2"
                type="numbered"
              />
              <div className="rect" />
              <StepSymbol
                circleClassName="step-symbol-2"
                numberClassName="design-component-instance-node-3"
                state="default"
                text="02"
                type="numbered"
                typeNumberedStateClassName="design-component-instance-node-2"
              />
              <div className="rect" />
              <StepSymbol
                circleClassName="step-symbol-2"
                numberClassName="step-symbol-4"
                state="default"
                text="03"
                type="numbered"
                typeNumberedStateClassName="step-symbol-3"
              />
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="frame-2">
            <div className="frame-3">
              <div className="div-wrapper">
                <div className="text-wrapper-2">Your phrase</div>
              </div>
              <div className="ellipse-3" />
              <Refresh className="refresh-2" />
            </div>
            <ButtonV className="button-v-1" text="Back" />
          </div>
          <p className="p">My Very Educated Mother Just Served Us Noodles My Very Educated Mother Just Served Us Noodles My Very Educated Mother Just Served Us Noodles My Very Educated Mother Just Served Us Noodles</p>
        </div>
      </div>
    </div>
  );
};
