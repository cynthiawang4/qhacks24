import React from "react";
import { Box } from "../../Box";
import { ButtonV } from "../../ButtonV";
import { PropertyFrameWrapper } from "../../PropertyFrameWrapper";
import { Select } from "../../Select";
import { StepSymbol } from "../../StepSymbol";
import { StepTextHorizontal } from "../../StepTextHorizontal";
import "./style.css";
import { Link } from "react-router-dom";

export const StepAcronym = () => {
  return (
    <div className="step-acronym">
      <div className="div-2">
        <div className="overlap">
          <div className="frame">
            <div className="frame-2">
              <div className="text-wrapper-2">Acronym</div>
              <div className="frame-3">
                <div className="frame-4">
                  <div className="text-wrapper-3">Text Length</div>
                  <div className="frame-5">
                    <div className="group">
                      <div className="control">
                        <div className="bounds" />
                        <div className="dragger" />
                      </div>
                    </div>
                    <div className="text-wrapper-4">10 Words</div>
                  </div>
                </div>
                <div className="frame-4">
                  <div className="text-wrapper-3">Word Options</div>
                  <div className="frame-4">
                    <div className="frame-6">
                      <Select className="select-instance" property1="rectangle-10" />
                      <p className="p">Ensure Acronym is Relevant to Topic?</p>
                    </div>
                  </div>
                </div>
                <div className="frame-4">
                  <div className="text-wrapper-3">Sample:</div>
                  <p className="p">King Henry Drinks Chocolate Milk</p>
                </div>
              </div>
            </div>
            <Link to="/prompt">
                <ButtonV className="button-v-1" text="Next" />
            </Link>
          </div>
        </div>
        <div className="component">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="frame-7">
              <StepTextHorizontal
                className="step-text-horizontal-instance"
                leadingText={false}
                state="default"
                stepSymbolCircleClassName="step-text-horizontal-2"
                stepSymbolNumberClassName="design-component-instance-node"
                stepSymbolTypeNumberedStateClassName="design-component-instance-node-2"
                type="numbered"
              />
              <div className="rect" />
              <StepSymbol
                circleClassName="step-symbol-3"
                numberClassName="step-symbol-2"
                state="default"
                text="02"
                type="numbered"
                typeNumberedStateClassName="design-component-instance-node-2"
              />
              <div className="rect" />
              <StepSymbol
                circleClassName="step-symbol-3"
                numberClassName="step-symbol-5"
                state="default"
                text="03"
                type="numbered"
                typeNumberedStateClassName="step-symbol-4"
              />
            </div>
          </div>
        </div>
        <div className="frame-8">
          <PropertyFrameWrapper
            className="button-v-3"
            property1="frame-1870"
            text="Back to Homepage"
            vuesaxLinearArrow="https://c.animaapp.com/tLweR9GB/img/vuesax-linear-arrow-left-1.svg"
          />
          <div className="frame-9">
            <div className="frame-10">
              <div className="text-wrapper-5">Choose a Mnemonic Option</div>
              <p className="text-wrapper-6">Reference the sample at the side</p>
            </div>
            <div className="frame-11">
              <div className="frame-12">
                <Box divClassName="box-instance" text="ACRONYM" />
                <Box divClassName="box-2" text="RHYME" />
              </div>
              <div className="frame-12">
                <Box divClassName="box-3" text="PHRASE" />
                <Box divClassName="box-4" text="STORY" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
