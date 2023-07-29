/** @format */

import { createContext } from "react";

export const ChatContext = createContext({});
const ChatSubmission = ({ children }) => {
  const chatValue = {};

  return (
    <ChatContext.Provider value={chatValue}>{children}</ChatContext.Provider>
  );
};

export default ChatSubmission;
