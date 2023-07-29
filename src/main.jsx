/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ChatSubmission from "./context/ChatSubmission.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChatSubmission>
      <App />
    </ChatSubmission>
  </React.StrictMode>
);
