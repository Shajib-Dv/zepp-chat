/** @format */

import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const MultiOption = ({ option, serial }) => {
  const [select, setSelect] = useState(false);
  return (
    <div
      onClick={() => setSelect(!select)}
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
