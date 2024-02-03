import React from "react";
import {useEffect, useState} from "react";
import { ButtonV } from "./components/ButtonV";
import { StepSymbol } from "./components/StepSymbol";
import { StepTextHorizontal } from "./components/StepTextHorizontal";
import "./styles.css";
import {useLocation, useNavigate} from 'react-router-dom';
import {getResponse} from "../chatgpt/OpenAiControls";

export const Step3 = () => {

    const location = useLocation();

    const [fullConvo, setFullConvo] = useState([]);
    const [done, setDone] = useState(true);

    useEffect(() => {

        let ignore = false;

        async function checkDate() {
            if (!ignore) {
                setDone(false);
                const cpyAnswer = await getResponse(location.state.prompt, fullConvo, 15);
                setFullConvo(cpyAnswer);
                setDone(true);
            }
          };
        
          checkDate()
          return () => {
            ignore = true;
          }
    }, [fullConvo, location.state.prompt])

    async function handleRefresh() {
        setDone(false);
        const cpyAnswer = await getResponse("Try again", fullConvo, 15);
        setFullConvo(cpyAnswer);
        setDone(true);
    }
    
    const navigate = useNavigate();
    function handleBack() {
        navigate("/prompt");
    }

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
              <ButtonV className="refresh-2" text="Refresh" handleClick={() => handleRefresh()}/>
            </div>
            <ButtonV className="button-v-1" text="Back" handleClick={() => handleBack()}/>
          </div>
          <p className="p">{fullConvo.length > 0 && done? fullConvo[fullConvo.length - 1].content: "Loading"}</p>
        </div>
      </div>
    </div>
  );
};
