/** @format */

import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const MultiOption = ({ option, serial, setSelected }) => {
  const [select, setSelect] = useState(false);
  const handleSelect = () => {
    setSelect(!select);
    setSelected(true);
  };
  return (
    <div
      onClick={handleSelect}
      className={`center justify-between option gap-3 ${
        select ? "active-option active-option-txt" : ""
      }`}
    >
      <p className="center gap-3">
        <span className="option-txt">{serial}</span> {option}
      </p>
      {select && <FaCheck />}
    </div>
  );
};

export default MultiOption;
