/** @format */

import { useContext } from "react";
import { ChatContext } from "../context/ChatSubmission";

const useChatContext = () => {
  const chatValue = useContext(ChatContext);
  return chatValue;
};

export default useChatContext;
