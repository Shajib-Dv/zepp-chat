/** @format */

import { useState } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PressEnter from "./shared/PressEnter";

const PhoneNumbers = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOnChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <div className="center-section">
      <div className="md:w-3/5 mx-auto">
        <h2 className="text-2xl py-6 capitalize font-normal flex items-start gap-3">
          <span className="sub-title">
            6 <FaArrowRight className="text-sm" />
          </span>
          Phone number
        </h2>
        <PhoneInput
          country={"us"}
          value={phoneNumber}
          onChange={handleOnChange}
          inputProps={{
            name: "phoneNumber",
            required: true,
          }}
        />
        <div className="center gap-3 my-5">
          <button className="ok-btn center gap-2">
            Ok <FaCheck />
          </button>
          <PressEnter />
        </div>
      </div>
    </div>
  );
};

export default PhoneNumbers;
