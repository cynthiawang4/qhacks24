import React from "react";
import { useState } from "react";
import { Box } from "../../Box";
import { ButtonV } from "../../ButtonV";
import { PropertyFrameWrapper } from "../../PropertyFrameWrapper";
import { StepSymbol } from "../../StepSymbol";
import { StepTextHorizontal } from "../../StepTextHorizontal";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";

export const StepAcronym = () => {

  const [choice, setChoice] = useState("ACRONYM")
  const [maxLength, setMaxLength] = useState(15);

  const navigate = useNavigate();

  const samples  ={
    ACRONYM: "King Henry Drinks Chocolate Milk",
    RHYME: "Red Bed Fred",
    PHRASE: "Filler phrase",
    STORY: "Great Story!"
  }

  function handleOptionClick(type) {
    setChoice(type);
  }

  function handleNext() {
    navigate("/prompt", {state:{choice: choice, maxLength: maxLength}})
  }

  return (
    <div className="step-acronym">
      <div className="div-2">
        <div className="overlap">
          <div className="frame">
            <div className="frame-2">
              <div className="text-wrapper-2">{choice}</div>
              <div className="frame-3">
                <div className="frame-4">
                  <div className="text-wrapper-3">{"Max Text Length: " + maxLength} </div>
                  <input type="range" id="points" name="points" min="1" max="75" value={maxLength} onChange={(e) => setMaxLength(e.target.value)}></input>
                </div>
                <div className="frame-4">
                  <div className="text-wrapper-3">Sample:</div>
                  <p className="p">{samples[choice]}</p>
                </div>
              </div>
            </div>        
              <ButtonV className="button-v-1" text="Next" handleClick={() => handleNext()}/>
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
          <Link to="/">
            <PropertyFrameWrapper
              className="button-v-3"
              property1="frame-1870"
              text="Back to Homepage"
              vuesaxLinearArrow="https://c.animaapp.com/tLweR9GB/img/vuesax-linear-arrow-left-1.svg"
            />
          </Link>          
          <div className="frame-9">
            <div className="frame-10">
              <div className="text-wrapper-5">Choose a Mnemonic Option</div>
              <p className="text-wrapper-6">Reference the sample at the side</p>
            </div>
            <div className="frame-11">
              <div className="frame-12">
                <Box divClassName="box-instance" text="ACRONYM" handleClick={() => handleOptionClick("ACRONYM")}/>
                <Box divClassName="box-2" text="RHYME" handleClick={() => handleOptionClick("RHYME")}/>
              </div>
              <div className="frame-12">
                <Box divClassName="box-3" text="PHRASE" handleClick={() => handleOptionClick("PHRASE")}/>
                <Box divClassName="box-4" text="STORY" handleClick={() => handleOptionClick("STORY")}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
