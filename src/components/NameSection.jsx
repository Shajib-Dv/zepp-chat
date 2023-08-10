/** @format */

import { FaArrowRight, FaCheck } from "react-icons/fa";
import PressEnter from "./shared/PressEnter";
import { useEffect, useRef, useState } from "react";
import EmptyData from "./shared/EmptyData";
import useChatContext from "../hooks/useChatContext";
import Swal from "sweetalert2";

const NameSection = ({
  data,
  serial,
  title,
  type,
  placeholder,
  isRequired,
  isSubmit,
  subTitle,
}) => {
  const [name, setName] = useState("");
  const [goNext, setGoNext] = useState(false);
  const inputRef = useRef(null);
  const { setInputDetails, setOptional, inputDetails, isValidEmail } =
    useChatContext();

  const handleNameSubmit = () => {
    if (!isRequired) {
      setOptional((prev) => {
        return { ...prev, [data]: true };
      });
      setInputDetails((prevInputDetails) => {
        return { ...prevInputDetails, [data]: name };
      });
    }

    if (isRequired && name === "") {
      setGoNext(true);
    } else if (inputRef.current?.type === "email" && !isValidEmail(name)) {
      return setGoNext(true);
    } else if (name) {
      setGoNext(false);
      setInputDetails((prevInputDetails) => {
        return { ...prevInputDetails, [data]: name };
      });
    }
    setTimeout(() => {
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: "smooth",
      });
    }, 500);
  };

  const handleKeyPress = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      if (isSubmit) {
        handleDataToStore();
      } else {
        handleNameSubmit();
      }
    }
  };

  const handleDataToStore = () => {
    setInputDetails((prevInputDetails) => {
      return { ...prevInputDetails, [data]: name || null };
    });
    if (name) {
      fetch("https://zeppstr-server.vercel.app/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(inputDetails),
      })
        .then((res) => res.json())
        .then((resData) => {
          if (resData.insertedId) {
            Swal.fire(
              "Congratulations",
              "You have completed successfully",
              "success"
            );
            window.location.reload();
          }
        });
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
            onChange={(e) => setName(e.target.value)}
            onKeyUp={handleKeyPress}
            placeholder={placeholder || "Type your answer here..."}
            className="input"
          />
        </div>
        <div className="ml-4 center gap-3">
          <div className="center gap-2">
            {goNext && (inputRef.current.type === "email" || !name) ? (
              <EmptyData
                message={
                  inputRef.current.type === "email"
                    ? "invalid email !"
                    : "Please fill this in"
                }
              />
            ) : (
              <span className="center gap-3">
                {isSubmit ? (
                  <span
                    onClick={handleDataToStore}
                    className="ok-btn center gap-2"
                  >
                    Submit
                  </span>
                ) : (
                  <span
                    onClick={handleNameSubmit}
                    className="ok-btn center gap-2"
                  >
                    Ok <FaCheck />
                  </span>
                )}
                <PressEnter />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameSection;
