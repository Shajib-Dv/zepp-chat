/** @format */

import { FaArrowRight, FaPaperPlane } from "react-icons/fa";
import CheckOption from "../shared/checkOption/CheckOption";
import useChat from "../../hooks/useChat";
import Swal from "sweetalert2";
import { useState } from "react";

const CheckField = ({ title, serial }) => {
  const [sending, setSending] = useState(false);
  const { inputDetails, selectAnOption, selectService } = useChat();
  const auditDetail = { inputDetails, selectAnOption, selectService };

  const handleSubmit = () => {
    setSending(true);
    fetch("https://zeppstr-server.vercel.app/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(auditDetail),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.insertedId) {
          setSending(false);
          Swal.fire(
            "Congratulations",
            "You have completed successfully",
            "success"
          );
          window.location.reload();
        }
      })
      .catch((err) => setSending(false));
  };

  return (
    <div className="center-section py-20">
      <div className="md:w-3/5 mx-auto">
        <h2 className="text-2xl capitalize pb-6 font-normal flex items-start gap-3">
          <span className="sub-title">
            {serial} <FaArrowRight className="text-sm" />
          </span>
          {title}
        </h2>
        <div className="space-y-6 ml-4">
          <CheckOption title="Increase Organic Traffic" data="organicTraffic" />
          <CheckOption title="Improved Back Links " data="backLinks" />
          <CheckOption title="Better On-page / Off-page " data="betterPage" />
          <CheckOption title="Better Keywords ranking" data="betterKeyword" />
          <CheckOption title="Website Speed Optimization" data="webSpeed" />
          <CheckOption title="Blog writing" data="blogWrite" />
          <CheckOption title="Marking Consultancy" data="consultancy" />
          <CheckOption title="SEO's next 6-month plan" data="nextPlan" />
        </div>
        <button
          disabled={sending}
          onClick={handleSubmit}
          className="ok-btn m-4 center gap-2 disabled:bg-opacity-40 disabled:cursor-not-allowed"
        >
          Submit
          {sending ? (
            <span className="loading text-[#f23668]"></span>
          ) : (
            <FaPaperPlane />
          )}
        </button>
      </div>
    </div>
  );
};

export default CheckField;
