/** @format */

import { FaArrowRight, FaCheck } from "react-icons/fa";
import MultiOption from "./shared/MultiOption";
import useChatContext from "../hooks/useChatContext";
import { useState } from "react";

const MultiChoice = ({
  isRequired,
  data,
  serial,
  tittle,
  opt1,
  opt2,
  opt3,
  opt4,
  opt5,
  opt6,
  opt7,
  opt8,
  opt9,
  opt10,
}) => {
  const { setMultiChoice, setOptional } = useChatContext();
  const [selected, setSelected] = useState(false);

  const handleSelection = () => {
    if (isRequired && selected) {
      setMultiChoice((prev) => {
        return { ...prev, [data]: true };
      });
    } else {
      setOptional((prev) => {
        return { ...prev, [data]: true };
      });
    }
  };

  return (
    <div className="center-section">
      <div className="md:w-3/5 mx-auto pb-10">
        <h2 className="text-2xl capitalize font-normal center gap-3">
          <span className="sub-title">
            {serial} <FaArrowRight className="text-sm" />
          </span>
          {tittle}
        </h2>
        <p className="txt-primary pt-6">Chose as many as you like</p>

        {opt1 && (
          <MultiOption setSelected={setSelected} option={opt1} serial="A" />
        )}
        {opt2 && (
          <MultiOption setSelected={setSelected} option={opt2} serial="B" />
        )}
        {opt3 && (
          <MultiOption setSelected={setSelected} option={opt3} serial="C" />
        )}
        {opt4 && (
          <MultiOption setSelected={setSelected} option={opt4} serial="D" />
        )}
        {opt5 && (
          <MultiOption setSelected={setSelected} option={opt5} serial="E" />
        )}
        {opt6 && (
          <MultiOption setSelected={setSelected} option={opt6} serial="F" />
        )}
        {opt7 && (
          <MultiOption setSelected={setSelected} option={opt7} serial="G" />
        )}
        {opt8 && (
          <MultiOption setSelected={setSelected} option={opt8} serial="G" />
        )}
        {opt9 && (
          <MultiOption setSelected={setSelected} option={opt9} serial="I" />
        )}
        {opt10 && (
          <MultiOption setSelected={setSelected} option={opt10} serial="J" />
        )}
        <button onClick={handleSelection} className="ok-btn center gap-2">
          Ok <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default MultiChoice;
