/** @format */

import { FaArrowRight, FaCheck } from "react-icons/fa";
import PressEnter from "./shared/PressEnter";
import { useState } from "react";
import EmptyData from "./shared/EmptyData";

const NameSection = ({ serial, title, type, placeholder, isRequired }) => {
  const [name, setName] = useState("");
  const [goNext, setGoNext] = useState(false);
  const handleNameSubmit = () => {
    if (isRequired && name === "") {
      setGoNext(true);
    } else if (name) {
      setGoNext(false);
      console.log(name);
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
        <div className="my-4 ml-4">
          <input
            type={type}
            onChange={(e) => setName(e.target.value)}
            placeholder={placeholder}
            className="input"
          />
        </div>
        <div className="ml-4 center gap-3">
          <button onClick={handleNameSubmit} className="center gap-2">
            {goNext && !name ? (
              <EmptyData message="Please fill this in" />
            ) : (
              <span className="center gap-3">
                <span className="ok-btn center gap-2">
                  Ok <FaCheck />
                </span>
                <PressEnter />
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameSection;