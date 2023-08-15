/** @format */

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import InputItems from "./components/inputItems/InputItems";
import useChat from "./hooks/useChat";
import ProgressBar from "react-scroll-progress-bar";
import PhoneNumbers from "./components/phone/PhoneNumbers";
import WebAuditQA from "./components/webAudits/WebAuditQA";
import CheckField from "./components/checkField/CheckField";

function App() {
  const { inputDetails, webAudits } = useChat();
  const handleScrollUp = () => {
    window.scrollTo({
      top: window.scrollY - window.innerHeight,
      behavior: "smooth",
    });
  };
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ProgressBar />
      <div className="bg-[#5492f576] w-full h-1 fixed top-0"></div>
      <div className="px-10 md:px-0">
        <InputItems
          data="fullName"
          serial={1}
          title="Enter your full name*"
          type="text"
          placeholder="Type your answer here"
          isRequired={true}
        />

        {inputDetails?.fullName && (
          <InputItems
            data="email"
            serial={2}
            title="Work email*"
            type="email"
            placeholder="Type your answer here"
            isRequired={true}
          />
        )}

        {inputDetails?.email && <PhoneNumbers />}

        {inputDetails?.phone && (
          <InputItems
            data="webURL"
            isRequired={true}
            serial={4}
            title="Website url"
            type="url"
          />
        )}
        {inputDetails?.webURL && (
          <WebAuditQA
            serial={5}
            data="auditQA1"
            title="How extensive do you want your Website Audit Report to be?"
          />
        )}

        {webAudits?.auditQA1 && (
          <CheckField
            serial={6}
            title="What's your Goal towards your Website?"
          />
        )}
      </div>
      <div className="center fixed right-0 bottom-10 bg-[#0445AF] rounded-md">
        <button onClick={handleScrollUp} className="p-2 border-r ok-btn">
          <FaAngleUp />
        </button>
        <button onClick={handleScrollDown} className="p-2 ok-btn">
          <FaAngleDown />
        </button>
      </div>
    </>
  );
}

export default App;
