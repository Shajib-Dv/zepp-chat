/** @format */

import { FaArrowRight, FaCheck } from "react-icons/fa";
import MultiOption from "./shared/MultiOption";

const MultiChoice = () => {
  return (
    <div className="center-section">
      <div className="md:w-3/5 mx-auto pb-10">
        <h2 className="text-2xl capitalize font-normal center gap-3">
          <span className="sub-title">
            13 <FaArrowRight className="text-sm" />
          </span>
          What LinkedIn Automation tool are you currently using?
        </h2>
        <p className="txt-primary pt-6">Chose as many as you like</p>

        <MultiOption option="LIA" serial="A" />
        <MultiOption option="Expandi" serial="B" />
        <MultiOption option="Zopto" serial="C" />
        <MultiOption option="Skylead" serial="D" />
        <MultiOption option="Salesflow" serial="E" />
        <MultiOption option="Buzz" serial="F" />
        <MultiOption option="We-Connect" serial="G" />
        <MultiOption option="Other" serial="G" />
        <MultiOption option="None" serial="I" />
        <button className="ok-btn center gap-2">
          Ok <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default MultiChoice;
