/** @format */

import { useState } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import useChatContext from "../hooks/useChatContext";
const FeaturedLink = ({
  data,
  serial,
  title,
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
  const [selectedOption, setSelectedOption] = useState({});
  const [optionStore, setOptionStore] = useState({});
  const { setOptional, setInputDetails } = useChatContext();

  const handleOptionClick = (serial, option) => {
    setSelectedOption({ serial, option });
    setOptionStore({
      [serial]: option,
    });
  };

  const handleSelection = () => {
    setOptional((prev) => {
      return { ...prev, [data]: true };
    });
    if (selectedOption.serial) {
      setInputDetails((prev) => {
        return { ...prev, [data]: [optionStore] };
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
          {title}
        </h2>

        <div className="py-4">
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
          {opt5 && (
            <div
              className={`center option gap-3 justify-between ${
                selectedOption?.serial === "E"
                  ? "active-option active-option-txt"
                  : ""
              }`}
              onClick={() => handleOptionClick("E", opt5)}
            >
              <p className="center gap-3">
                <span className="option-txt">E</span> {opt5}
              </p>
              {selectedOption?.serial === "E" && <FaCheck />}
            </div>
          )}
          {opt6 && (
            <div
              className={`center option gap-3 justify-between ${
                selectedOption?.serial === "F"
                  ? "active-option active-option-txt"
                  : ""
              }`}
              onClick={() => handleOptionClick("F", opt6)}
            >
              <p className="center gap-3">
                <span className="option-txt">F</span> {opt6}
              </p>
              {selectedOption?.serial === "F" && <FaCheck />}
            </div>
          )}
          {opt7 && (
            <div
              className={`center option gap-3 justify-between ${
                selectedOption?.serial === "G"
                  ? "active-option active-option-txt"
                  : ""
              }`}
              onClick={() => handleOptionClick("G", opt7)}
            >
              <p className="center gap-3">
                <span className="option-txt">G</span> {opt7}
              </p>
              {selectedOption?.serial === "G" && <FaCheck />}
            </div>
          )}
          {opt8 && (
            <div
              className={`center option gap-3 justify-between ${
                selectedOption?.serial === "H"
                  ? "active-option active-option-txt"
                  : ""
              }`}
              onClick={() => handleOptionClick("H", opt8)}
            >
              <p className="center gap-3">
                <span className="option-txt">H</span> {opt8}
              </p>
              {selectedOption?.serial === "H" && <FaCheck />}
            </div>
          )}
          {opt9 && (
            <div
              className={`center option gap-3 justify-between ${
                selectedOption?.serial === "I"
                  ? "active-option active-option-txt"
                  : ""
              }`}
              onClick={() => handleOptionClick("I", opt9)}
            >
              <p className="center gap-3">
                <span className="option-txt">I</span> {opt9}
              </p>
              {selectedOption?.serial === "I" && <FaCheck />}
            </div>
          )}
          {opt10 && (
            <div
              className={`center option gap-3 justify-between ${
                selectedOption?.serial === "J"
                  ? "active-option active-option-txt"
                  : ""
              }`}
              onClick={() => handleOptionClick("J", opt10)}
            >
              <p className="center gap-3">
                <span className="option-txt">J</span> {opt10}
              </p>
              {selectedOption?.serial === "J" && <FaCheck />}
            </div>
          )}
        </div>

        <button onClick={handleSelection} className="ok-btn center gap-2">
          Ok <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default FeaturedLink;
