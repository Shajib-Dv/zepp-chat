/** @format */

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import MultiChoice from "./components/MultiChoice";
import NameSection from "./components/NameSection";
import PhoneNumbers from "./components/PhoneNumbers";
import QASection from "./components/QASection";
import useChatContext from "./hooks/useChatContext";
import ProgressBar from "react-scroll-progress-bar";

function App() {
  const auditTitle =
    "How extensive do you want your Website Audit Report to be?";
  const { inputDetails, optional, multiChoice } = useChatContext();
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
        <NameSection
          data="fullName"
          serial={1}
          title="Inter your full name*"
          type="text"
          placeholder="Type your answer here"
          isRequired={true}
        />

        {inputDetails?.fullName && (
          <NameSection
            data="email"
            serial={2}
            title="Work email*"
            type="email"
            placeholder="Type your answer here"
            isRequired={true}
          />
        )}

        {inputDetails?.email && <PhoneNumbers />}

        {optional?.phoneNum && (
          <NameSection
            data="webURL"
            isRequired={true}
            serial={4}
            title="Website url"
            type="url"
          />
        )}

        {inputDetails?.webURL && (
          <QASection
            option="onPage"
            isRequired={true}
            serial={5}
            title={auditTitle}
            subTitle="On page.*"
            opt1="YES"
            opt2="NO"
          />
        )}
        {inputDetails?.onPage && (
          <QASection
            option="offPage"
            isRequired={true}
            serial={6}
            title={auditTitle}
            subTitle="Off page.*"
            opt1="YES"
            opt2="NO"
          />
        )}
        {inputDetails?.offPage && (
          <QASection
            option="backlinks"
            isRequired={true}
            serial={7}
            title={auditTitle}
            subTitle="Back links.*"
            opt1="YES"
            opt2="NO"
          />
        )}
        {inputDetails?.backlinks && (
          <QASection
            option="contentAudit"
            isRequired={true}
            serial={8}
            title={auditTitle}
            subTitle="Content audit.*"
            opt1="YES"
            opt2="NO"
          />
        )}
        {inputDetails?.contentAudit && (
          <QASection
            option="websiteSpeed"
            isRequired={true}
            serial={9}
            title={auditTitle}
            subTitle="Website speed.*"
            opt1="YES"
            opt2="NO"
          />
        )}
        {inputDetails?.websiteSpeed && (
          <QASection
            option="mobileCompatibility"
            isRequired={true}
            serial={10}
            title={auditTitle}
            subTitle="Mobile Compatibility.*"
            opt1="YES"
            opt2="NO"
          />
        )}
        {inputDetails?.mobileCompatibility && (
          <QASection
            option="sitemap"
            isRequired={true}
            serial={11}
            title={auditTitle}
            subTitle="Sitemap.*"
            opt1="YES"
            opt2="NO"
          />
        )}
        {inputDetails?.sitemap && (
          <QASection
            option="daPa"
            isRequired={true}
            serial={12}
            title={auditTitle}
            subTitle="DA / PA.*"
            opt1="YES"
            opt2="NO"
          />
        )}
        {inputDetails?.daPa && (
          <QASection
            option="spamScore"
            isRequired={true}
            serial={13}
            title={auditTitle}
            subTitle="Spam score.*"
            opt1="YES"
            opt2="NO"
          />
        )}
        {inputDetails?.spamScore && (
          <QASection
            option="inHouseTeam"
            isRequired={true}
            serial={14}
            title="Do you have an in-house digital marketing team? *"
            opt1="YES"
            opt2="NO"
          />
        )}

        {inputDetails?.inHouseTeam && (
          <MultiChoice
            data="websiteGoal"
            serial={15}
            tittle="What's your Goal towards your Website? *"
            opt1="Increase Organic Traffic"
            opt2="Improved Backlinks "
            opt3="Better On-page / Off-page "
            opt4="Better Keywords ranking"
            opt5="Website Speed Optimisation "
            opt6="Blog writing"
            opt7="Marking Consultancy"
            opt8="SEO's next 6-month plan"
            isRequired={true}
          />
        )}
        {multiChoice?.websiteGoal && (
          <NameSection
            data="feedback"
            serial={16}
            title="Since you chose Others in the previous question, please add the details below,This question is required.*"
            isRequired={true}
            isSubmit={true}
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
