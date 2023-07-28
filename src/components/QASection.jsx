/** @format */

import { useState } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const QASection = ({ serial, title, subTitle, opt1, opt2, opt3, opt4 }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleOkButtonClick = () => {
    if (selectedOption) {
      console.log(selectedOption);
    } else {
      alert("Please select an option before clicking Ok."); //TODO
    }
  };

  return (
    <div className="center-section">
      <div className="md:w-3/5 mx-auto">
        <h2 className="text-2xl capitalize font-normal center gap-3">
          <span className="sub-title">
            {serial} <FaArrowRight className="text-sm" />
          </span>
          {title}
        </h2>
        {opt1 && (
          <div
            className={`center justify-between option gap-3 ${
              selectedOption === "A" ? "active-option active-option-txt" : ""
            }`}
            onClick={() => handleOptionClick("A")}
          >
            <p className="center gap-3">
              <span className="option-txt">A</span> {opt1}
            </p>
            {selectedOption === "A" && <FaCheck />}
          </div>
        )}
        {opt2 && (
          <div
            className={`center option gap-3 ${
              selectedOption === "B" ? "active-option active-option-txt" : ""
            }`}
            onClick={() => handleOptionClick("B")}
          >
            <p className="center gap-3">
              <span className="option-txt">B</span> {opt2}
            </p>
            {selectedOption === "B" && <FaCheck />}
          </div>
        )}
        {opt3 && (
          <div
            className={`center option gap-3 ${
              selectedOption === "C" ? "active-option active-option-txt" : ""
            }`}
            onClick={() => handleOptionClick("C")}
          >
            <p className="center gap-3">
              <span className="option-txt">C</span> {opt3}
            </p>
            {selectedOption === "C" && <FaCheck />}
          </div>
        )}
        {opt4 && (
          <div
            className={`center option gap-3 ${
              selectedOption === "D" ? "active-option active-option-txt" : ""
            }`}
            onClick={() => handleOptionClick("D")}
          >
            <p className="center gap-3">
              <span className="option-txt">D</span> {opt4}
            </p>
            {selectedOption === "D" && <FaCheck />}
          </div>
        )}
        <button className="ok-btn center gap-2" onClick={handleOkButtonClick}>
          Ok <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default QASection;
