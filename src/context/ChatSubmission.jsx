/** @format */

import { createContext, useState } from "react";

export const ChatContext = createContext({});
const ChatSubmission = ({ children }) => {
  const [inputDetails, setInputDetails] = useState({});
  const [optional, setOptional] = useState({});

  const chatValue = { inputDetails, setInputDetails, optional, setOptional };

  return (
    <ChatContext.Provider value={chatValue}>{children}</ChatContext.Provider>
  );
};

export default ChatSubmission;
