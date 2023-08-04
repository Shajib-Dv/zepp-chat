/** @format */

import { createContext, useState } from "react";

export const ChatContext = createContext({});
const ChatSubmission = ({ children }) => {
  const [inputDetails, setInputDetails] = useState({});
  const [optional, setOptional] = useState({});
  const [multiChoice, setMultiChoice] = useState({});
  const [storeMultiChose, setStoreMultiChose] = useState({});

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const chatValue = {
    inputDetails,
    setInputDetails,
    optional,
    setOptional,
    multiChoice,
    setMultiChoice,
    storeMultiChose,
    setStoreMultiChose,
    isValidEmail,
  };

  return (
    <ChatContext.Provider value={chatValue}>{children}</ChatContext.Provider>
  );
};

export default ChatSubmission;
