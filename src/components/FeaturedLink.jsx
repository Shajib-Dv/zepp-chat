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
  const [selectedOption, setSelectedOption] = useState(null);
  const { setOptional } = useChatContext();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSelection = () => {
    setOptional((prev) => {
      return { ...prev, [data]: true };
    });
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
          {opt5 && (
            <div
              className={`center option gap-3 justify-between ${
                selectedOption === "E" ? "active-option active-option-txt" : ""
              }`}
              onClick={() => handleOptionClick("E")}
            >
              <p className="center gap-3">
                <span className="option-txt">E</span> {opt5}
              </p>
              {selectedOption === "E" && <FaCheck />}
            </div>
          )}
          {opt6 && (
            <div
              className={`center option gap-3 justify-between ${
                selectedOption === "F" ? "active-option active-option-txt" : ""
              }`}
              onClick={() => handleOptionClick("F")}
            >
              <p className="center gap-3">
                <span className="option-txt">F</span> {opt6}
              </p>
              {selectedOption === "F" && <FaCheck />}
            </div>
          )}
          {opt7 && (
            <div
              className={`center option gap-3 justify-between ${
                selectedOption === "G" ? "active-option active-option-txt" : ""
              }`}
              onClick={() => handleOptionClick("G")}
            >
              <p className="center gap-3">
                <span className="option-txt">G</span> {opt7}
              </p>
              {selectedOption === "G" && <FaCheck />}
            </div>
          )}
          {opt8 && (
            <div
              className={`center option gap-3 justify-between ${
                selectedOption === "H" ? "active-option active-option-txt" : ""
              }`}
              onClick={() => handleOptionClick("H")}
            >
              <p className="center gap-3">
                <span className="option-txt">H</span> {opt8}
              </p>
              {selectedOption === "H" && <FaCheck />}
            </div>
          )}
          {opt9 && (
            <div
              className={`center option gap-3 justify-between ${
                selectedOption === "I" ? "active-option active-option-txt" : ""
              }`}
              onClick={() => handleOptionClick("I")}
            >
              <p className="center gap-3">
                <span className="option-txt">I</span> {opt9}
              </p>
              {selectedOption === "I" && <FaCheck />}
            </div>
          )}
          {opt10 && (
            <div
              className={`center option gap-3 justify-between ${
                selectedOption === "J" ? "active-option active-option-txt" : ""
              }`}
              onClick={() => handleOptionClick("J")}
            >
              <p className="center gap-3">
                <span className="option-txt">J</span> {opt10}
              </p>
              {selectedOption === "J" && <FaCheck />}
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
