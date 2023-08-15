/** @format */

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useChat from "../../hooks/useChat";

const PhoneNumbers = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { setInputDetails } = useChat();

  const handleOnChange = (value) => {
    setPhoneNumber(value);
  };

  const handlePhone = () => {
    setInputDetails((prev) => {
      return { ...prev, phone: phoneNumber };
    });
    setTimeout(() => {
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: "smooth",
      });
    }, 500);
  };

  return (
    <div className="center-section">
      <div className="md:w-3/5 mx-auto">
        <h2 className="text-2xl py-6 capitalize font-normal flex items-start gap-3">
          <span className="sub-title">
            3 <FaArrowRight className="text-sm" />
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
          <button onClick={handlePhone} className="ok-btn center gap-2">
            Ok <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumbers;
