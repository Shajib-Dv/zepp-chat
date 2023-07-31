/** @format */

import { useState } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import useChatContext from "../hooks/useChatContext";

const QASection = ({
  isRequired,
  option,
  serial,
  title,
  subTitle,
  opt1,
  opt2,
  opt3,
  opt4,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { setQuestion, setOptional } = useChatContext();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleOkButtonClick = () => {
    if ((!isRequired, selectedOption)) {
      setOptional((prev) => {
        return { ...prev, [option]: true };
      });
    } else if (selectedOption && isRequired) {
      setQuestion((prev) => {
        return { ...prev, [option]: true };
      });
    }
  };

  return (
    <div className="center-section">
      <div className="md:w-3/5 mx-auto">
        <h2 className="text-2xl capitalize font-normal flex items-start gap-3">
          <span className="sub-title">
            {serial} <FaArrowRight className="text-sm" />
          </span>
          {title}
        </h2>
        <div className="py-4">
          {subTitle && <p>{subTitle}</p>}
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
              className={`center option gap-3 justify-between ${
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
              className={`center option gap-3 justify-between ${
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
              className={`center option gap-3 justify-between ${
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
        </div>
        <button className="ok-btn center gap-2" onClick={handleOkButtonClick}>
          Ok <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default QASection;
