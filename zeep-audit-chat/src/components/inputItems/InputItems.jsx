/** @format */

import { FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import useChat from "../../hooks/useChat";
import EmptyData from "../shared/EmptyData";
import PressEnter from "../shared/PressEnter";
import ScrollDown from "../../util/ScrollDown";
import isValidEmail from "../../util/isValidEmail";
import isValidUrl from "../../util/isValidUrl";

const InputItems = ({
  data,
  serial,
  title,
  type,
  placeholder,
  isRequired,
  subTitle,
}) => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [goNext, setGoNext] = useState(false);
  const [showTypeErr, setShowTypeErr] = useState(false);
  const inputRef = useRef(null);
  const { setInputDetails } = useChat();

  const handleStateValue = (e) => {
    setName(e.target.value);
    setShowTypeErr(true);
  };

  const setTypeForError = () => {
    setGoNext(true);
    setShowTypeErr(false);
  };

  const handleNameSubmit = () => {
    if (!isRequired) {
      setGoNext(false);
      setInputDetails((prev) => {
        return { ...prev, [data]: name };
      });
    }

    if (isRequired && name === "") {
      setGoNext(true);
      return;
    } else if (inputRef.current?.type === "email" && !isValidEmail(name)) {
      setErrorMessage("Invalid email !");
      setTypeForError();
      return;
    } else if (inputRef.current?.type === "url" && !isValidUrl(name)) {
      setErrorMessage("Invalid url !");
      setTypeForError();
      return;
    } else if (name) {
      setGoNext(false);
      setInputDetails((prev) => {
        return { ...prev, [data]: name };
      });
    }
    ScrollDown();
  };

  const handleKeyPress = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      handleNameSubmit();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            inputRef.current.focus();
          }
        });
      },
      { threshold: 1 }
    );

    if (inputRef.current) {
      observer.observe(inputRef.current);
    }

    return () => {
      if (inputRef.current) {
        observer.unobserve(inputRef.current);
      }
    };
  }, []);

  return (
    <div className="center-section">
      <div className="md:w-3/5 mx-auto">
        <h2 className="text-2xl capitalize font-normal flex items-start gap-3">
          <span className="sub-title">
            {serial} <FaArrowRight className="text-sm" />
          </span>
          {title}
        </h2>
        {subTitle && <p className="md:pl-14">{subTitle}</p>}
        <div className="my-4 ml-4">
          <input
            type={type || "text"}
            ref={inputRef}
            onChange={handleStateValue}
            onKeyUp={handleKeyPress}
            placeholder={placeholder || "Type your answer here..."}
            className="input"
          />
        </div>
        <div className="ml-4 center gap-3">
          <div className="center gap-2">
            {goNext && !name ? (
              <EmptyData message={"Please fill this in"} />
            ) : goNext && !showTypeErr && inputRef.current?.type !== "text" ? (
              <EmptyData message={errorMessage} />
            ) : (
              <span className="center gap-3">
                <span
                  onClick={handleNameSubmit}
                  className="ok-btn center gap-2"
                >
                  Ok <FaArrowRight />
                </span>
                <PressEnter />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputItems;
