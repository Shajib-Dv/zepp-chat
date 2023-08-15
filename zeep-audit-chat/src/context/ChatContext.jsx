/** @format */
import { createContext, useState } from "react";

export const ChatSubmissionContext = createContext({});
const ChatContext = ({ children }) => {
  const [inputDetails, setInputDetails] = useState({});
  const [selectAnOption, setSelectAnOption] = useState({});
  const [selectService, setSelectService] = useState({});
  const [webAudits, setWebAudits] = useState({});

  const chatValue = {
    inputDetails,
    setInputDetails,
    selectAnOption,
    setSelectAnOption,
    webAudits,
    setWebAudits,
    selectService,
    setSelectService,
  };

  return (
    <ChatSubmissionContext.Provider value={chatValue}>
      {children}
    </ChatSubmissionContext.Provider>
  );
};

export default ChatContext;
