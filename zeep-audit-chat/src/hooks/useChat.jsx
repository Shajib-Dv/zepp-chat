/** @format */

import { useContext } from "react";
import { ChatSubmissionContext } from "../context/ChatContext";

const useChat = () => {
  const chatValue = useContext(ChatSubmissionContext);
  return chatValue;
};

export default useChat;
