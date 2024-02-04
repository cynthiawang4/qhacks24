import React from "react";
import { useState } from 'react';
import { ButtonV } from "../../components/ButtonV";
import { StepSymbol } from "../../components/StepSymbol";
import { StepTextHorizontal } from "../../components/StepTextHorizontal";
import "./style.css";
import { Link } from "react-router-dom";

export const Prompt = () => {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="step">
      <div className="div">
        <div className="component">
          <div className="overlap-group">
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
              <div className="rect-2" />
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
        <div className="frame-2">
          <div className="frame-3">
            <div className="frame-4">
              <div className="text-wrapper-2">Your Text</div>
              <p className="p">What do you want to memorize today?</p>
            </div>
            <div className="rectangle-2" >
            <textarea
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter prompt here" rows="12" style={{ width: '100%', fontSize: '32px' }}>
            <textarea onChange={(e) => setPrompt(e.target.value)} 
              placeholder="Enter prompt here" rows="6">
            </textarea>
            </div>
          </div>
          <div className="frame-5">

            <ButtonV className="button-v-1" text="Back" pathname = "/"/>
            {prompt? <ButtonV className="button-v-1" text="Next" pathname= "/results" data={prompt}/>:
            <></>}

          </div>
        </div>
      </div>
    </div>
  );
};