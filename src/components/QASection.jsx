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
  const [selectedOption, setSelectedOption] = useState({});
  const [optionStore, setOptionStore] = useState({});
  const { setQuestion, setOptional, setInputDetails } = useChatContext();

  const handleOptionClick = (serial, option) => {
    setSelectedOption({ serial, option });
    setOptionStore({
      [serial]: option,
    });
  };

  const handleOkButtonClick = () => {
    if (selectedOption.serial) {
      setInputDetails((prev) => {
        return { ...prev, [option]: [optionStore] };
      });
    }

    if ((!isRequired, selectedOption.serial)) {
      setOptional((prev) => {
        return { ...prev, [option]: true };
      });
    } else if (selectedOption.serial && isRequired) {
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
                selectedOption?.serial === "A"
                  ? "active-option active-option-txt"
                  : ""
              }`}
              onClick={() => handleOptionClick("A", opt1)}
            >
              <p className="center gap-3">
                <span className="option-txt">A</span> {opt1}
              </p>
              {selectedOption?.serial === "A" && <FaCheck />}
            </div>
          )}
          {opt2 && (
            <div
              className={`center option gap-3 justify-between ${
                selectedOption?.serial === "B"
                  ? "active-option active-option-txt"
                  : ""
              }`}
              onClick={() => handleOptionClick("B", opt2)}
            >
              <p className="center gap-3">
                <span className="option-txt">B</span> {opt2}
              </p>
              {selectedOption?.serial === "B" && <FaCheck />}
            </div>
          )}
          {opt3 && (
            <div
              className={`center option gap-3 justify-between ${
                selectedOption?.serial === "C"
                  ? "active-option active-option-txt"
                  : ""
              }`}
              onClick={() => handleOptionClick("C", opt3)}
            >
              <p className="center gap-3">
                <span className="option-txt">C</span> {opt3}
              </p>
              {selectedOption?.serial === "C" && <FaCheck />}
            </div>
          )}
          {opt4 && (
            <div
              className={`center option gap-3 justify-between ${
                selectedOption?.serial === "D"
                  ? "active-option active-option-txt"
                  : ""
              }`}
              onClick={() => handleOptionClick("D", opt4)}
            >
              <p className="center gap-3">
                <span className="option-txt">D</span> {opt4}
              </p>
              {selectedOption?.serial === "D" && <FaCheck />}
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
