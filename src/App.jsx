/** @format */

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import FeaturedLink from "./components/FeaturedLink";
import FullAddress from "./components/FullAddress";
import MultiChoice from "./components/MultiChoice";
import NameSection from "./components/NameSection";
import PhoneNumbers from "./components/PhoneNumbers";
import QASection from "./components/QASection";
import useChatContext from "./hooks/useChatContext";
import ProgressBar from "react-scroll-progress-bar";

function App() {
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
          data="firstName"
          serial={1}
          title="What's your first name?*"
          type="text"
          placeholder="Type your answer here"
          isRequired={true}
        />
        {inputDetails?.firstName && (
          <NameSection
            data="lastName"
            serial={2}
            title="Last name?*"
            type="text"
            placeholder="Type your answer here"
            isRequired={true}
          />
        )}
        {inputDetails?.lastName && (
          <NameSection
            data="email"
            serial={3}
            title="Email*"
            type="email"
            placeholder="Type your answer here"
            isRequired={true}
          />
        )}
        {inputDetails?.email && (
          <NameSection
            data="title"
            serial={4}
            title="Title"
            type="text"
            placeholder="Type your answer here"
          />
        )}
        {optional?.title && (
          <NameSection
            data="companyName"
            serial={5}
            title="Company name"
            type="text"
            placeholder="Type your answer here"
          />
        )}
        {optional?.companyName && <PhoneNumbers />}
        {optional?.phoneNum && <FullAddress />}
        {inputDetails?.fullAddress?.address && (
          <QASection
            isRequired={true}
            option="opt8"
            serial={8}
            title="Are you in Europe? *"
            opt1="YES"
            opt2="NO"
          />
        )}
        {optional?.opt8 && (
          <QASection
            option="opt9"
            isRequired={true}
            serial={9}
            title="Do you have a VAT Number?This question is required.*"
            opt1="YES"
            opt2="NO"
          />
        )}
        {optional?.opt9 && (
          <NameSection
            data="vatNumber"
            serial={10}
            title="Your VAT number*"
            type="text"
            placeholder="Type your answer here"
            isRequired={true}
          />
        )}
        {inputDetails?.vatNumber && (
          <QASection
            isRequired={true}
            option="opt11"
            serial={11}
            title="Is your company a B2B Lead Generation Agency?*"
            opt1="YES"
            opt2="NO"
          />
        )}
        {optional?.opt11 && (
          <QASection
            isRequired={true}
            option="opt12"
            serial={12}
            title="Which product do you want to buy?This question is required.*"
            subTitle="LinkedIn AI Avatar (AIA) Classic : $47 per month
LinkedIn ID-Ready AI Avatars (AIA) Premium : $77 per month
AIA for Emails : $11 per inbox per month"
            opt1="LinkedIn AI Avatar (AIA) Classic"
            opt2="LinkedIn ID-Ready AI Avatars (AIA) Premium"
            opt3="AIA for Emails"
          />
        )}
        {optional?.opt12 && (
          <MultiChoice
            data="multiChose1"
            serial={13}
            tittle="What LinkedIn Automation tool are you currently using?"
            opt1="LIA"
            opt2="Expandi"
            opt3="Zopto"
            opt4="Skylead"
            opt5="Salesflow"
            opt6="Buzz"
            opt7="We - Connect"
            opt8="Other"
            opt9="None"
          />
        )}
        {optional?.multiChose1 && (
          <NameSection
            data="avatarCount"
            isRequired={true}
            serial={14}
            title="How many Avatars do you want to purchase?*"
            type="number"
            placeholder="Type your answer here..."
          />
        )}
        {inputDetails?.avatarCount && (
          <QASection
            isRequired={true}
            option="opt15"
            serial={15}
            title="Since you purchased multiple Avatars, what gender(s) do you want them to be?"
            opt1="All Male"
            opt2="All Female"
            opt3="Mix of both"
          />
        )}
        {optional?.opt15 && (
          <NameSection
            data="sampleURL"
            placeholder="https://"
            title="Sample LinkedIn URL you want your Avatar(s) to look like"
            serial={16}
            type="url"
          />
        )}
        {optional?.sampleURL && (
          <QASection
            option="opt17"
            serial={17}
            title="Do you have a LinkedIn Banner for your Avatar?"
            opt1="Yes, I have a custom one"
            opt2="No, I don't need a banner"
            opt3="Please add a generic banner to the profile"
          />
        )}
        {optional?.opt17 && (
          <NameSection
            data="avatarRegion"
            serial={18}
            title="Do you have any preferences for the Profile Pictures of the Avatars"
            subTitle="Example: Blonde, Asian, Indian, etc."
          />
        )}
        {optional?.avatarRegion && (
          <QASection
            option="opt19"
            serial={19}
            title='Do you have a custom "About" (biography) for your Avatar'
            opt1="Yes"
            opt2="No, please add a AI generated one"
          />
        )}
        {optional?.opt19 && (
          <QASection
            option="opt20"
            serial={20}
            title="Do you have a custom headline?"
            opt1="Yes"
            opt2="No"
          />
        )}
        {optional?.opt20 && (
          <NameSection
            data="customHeadline"
            serial={21}
            title="Your custom headline."
          />
        )}
        {optional?.customHeadline && (
          <NameSection
            data="avatarLocal"
            serial={22}
            title="What Location (City, State, Country) do you want the Avatar to be in?"
            subTitle="(eg: Dallas, TX, USA)"
          />
        )}
        {optional?.avatarLocal && (
          <FeaturedLink
            data="link1"
            serial={23}
            title={'"Featured Links" for your Avatar'}
            opt1="Post"
            opt2="Article"
            opt3="Link"
            opt4="Media"
            opt5="Blog"
            opt6="YouTube Video"
            opt7="White Paper"
            opt8="Don't add"
          />
        )}
        {optional?.link1 && (
          <NameSection
            data="prevFeaturedLink"
            serial={24}
            title={
              'Please add content or the link to the "Featured Link" selected in the previous answer'
            }
          />
        )}
        {optional?.prevFeaturedLink && (
          <NameSection
            data="linkedInCompany"
            serial={25}
            title="LinkedIn Company Page URL you want the Avatar to be connected with"
            type={"url"}
          />
        )}
        {optional?.linkedInCompany && (
          <FeaturedLink
            data="link2"
            title="Title for your Avatar"
            serial={26}
            opt1="Growth Manager"
            opt2="Director of Business Development"
            opt3="Sales Development Representative"
            opt4="Business Development Representative"
            opt5="Marketing Manager"
            opt6="Account Executive"
            opt7="Other"
          />
        )}
        {optional?.link2 && (
          <QASection
            option="opt27"
            serial={27}
            title="Do you want your Avatar to have any previous industry experiences?"
            opt1="yes"
            opt2="No"
          />
        )}
        {optional?.opt27 && (
          <NameSection
            data="avatarInCompany"
            serial={28}
            title="List up to 3 Companies or Industries you want the Avatar to have worked at before joining your company along with their positions"
            subTitle={`Example 1: Global Supply Chain Manager at Apple`}
          />
        )}
        {optional?.avatarInCompany && (
          <NameSection
            data="avatarReceiveMail"
            serial={29}
            title="LinkedIn may send you OTPs (One-time Passwords) or PINs for your Avatars. To which email address do you to enable auto-forwarding so you receive them?"
            placeholder="Your email"
            type="email"
          />
        )}
        {optional?.avatarReceiveMail && (
          <NameSection
            data="additionalRequest"
            serial={30}
            title="Any additional comments or special requests."
          />
        )}
        {optional?.additionalRequest && (
          <MultiChoice
            data="multiChose2"
            serial={31}
            tittle="From where did you hear about usThis question is required.*"
            opt1="Google Search"
            opt2="Facebook Group"
            opt3="Blog/Article"
            opt4="Referral"
            opt5="Others"
            isRequired={true}
          />
        )}
        {multiChoice?.multiChose2 && (
          <NameSection
            data="feedback"
            serial={32}
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
