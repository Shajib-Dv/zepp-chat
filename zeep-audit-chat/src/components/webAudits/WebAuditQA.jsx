/** @format */

import { FaArrowRight } from "react-icons/fa";
import MultiOption from "../shared/multiOption/MultiOption";
import useChat from "../../hooks/useChat";
import { useRef, useState } from "react";
import EmptyData from "../shared/EmptyData";
import ScrollDown from "../../util/ScrollDown";

const WebAuditQA = ({ serial, title, data = "webQA" }) => {
  const optionRef = useRef();
  const { selectAnOption, setWebAudits } = useChat();
  const [err, setErr] = useState(false);

  let optionLength = optionRef.current?.children?.length || 0;
  let objLength = Object.keys(selectAnOption).length || 1;

  const handleOptionSelection = () => {
    if (objLength !== optionLength) {
      return setErr(true);
    } else {
      setErr(false);
      setWebAudits((prev) => {
        return { ...prev, [data]: true };
      });
      ScrollDown();
    }
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
        <div ref={optionRef} className="space-y-6 ml-4">
          <MultiOption title="On-page" data="onPage" />
          <MultiOption title="Off-page" data="offPage" />
          <MultiOption title="Back Links" data="backLinks" />
          <MultiOption title="Content Audit" data="contentAudit" />
          <MultiOption title="Website Speed" data="websiteSpeed" />
          <MultiOption
            title="Mobile Compatibility"
            data="mobileCompatibility"
          />
          <MultiOption title="Sitemap" data="sitemap" />
          <MultiOption title="DA / PA" data="DAPA" />
          <MultiOption title="Spam Score" data="spamScore" />
          <MultiOption
            title="Do you have an in-house digital marketing team?"
            data="inHouseTeam"
          />
        </div>
        <div className="center gap-4 m-4">
          <button
            onClick={handleOptionSelection}
            className="ok-btn center gap-2"
          >
            Ok <FaArrowRight />
          </button>
          {err && <EmptyData message="You missed some options" />}
        </div>
      </div>
    </div>
  );
};

export default WebAuditQA;
