/** @format */

import FeaturedLink from "./components/FeaturedLink";
import FullAddress from "./components/FullAddress";
import MultiChoice from "./components/MultiChoice";
import NameSection from "./components/NameSection";
import PhoneNumbers from "./components/PhoneNumbers";
import QASection from "./components/QASection";

function App() {
  return (
    <>
      <NameSection
        serial={1}
        title="What's your first name?*"
        type="text"
        placeholder="Type your answer here"
        isRequired={true}
      />
      <NameSection
        serial={2}
        title="Last name?*"
        type="text"
        placeholder="Type your answer here"
        isRequired={true}
      />
      <NameSection
        serial={3}
        title="Email*"
        type="email"
        placeholder="Type your answer here"
        isRequired={true}
      />
      <NameSection
        serial={4}
        title="Title"
        type="text"
        placeholder="Type your answer here"
      />
      <NameSection
        serial={5}
        title="Company name"
        type="text"
        placeholder="Type your answer here"
      />
      <PhoneNumbers />
      <FullAddress />
      <QASection serial={8} title="Are you in Europe? *" opt1="YES" opt2="NO" />
      <QASection
        serial={9}
        title="Do you have a VAT Number?This question is required.*"
        opt1="YES"
        opt2="NO"
      />
      <NameSection
        serial={10}
        title="Your VAT number*"
        type="text"
        placeholder="Type your answer here"
        isRequired={true}
      />
      <QASection
        serial={11}
        title="Is your company a B2B Lead Generation Agency?*"
        opt1="YES"
        opt2="NO"
      />
      <QASection
        serial={12}
        title="Which product do you want to buy?This question is required.*"
        subTitle="LinkedIn AI Avatar (AIA) Classic : $47 per month
LinkedIn ID-Ready AI Avatars (AIA) Premium : $77 per month
AIA for Emails : $11 per inbox per month"
        opt1="LinkedIn AI Avatar (AIA) Classic"
        opt2="LinkedIn ID-Ready AI Avatars (AIA) Premium"
        opt3="AIA for Emails"
      />
      <MultiChoice
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
      <NameSection
        isRequired={true}
        serial={14}
        title="How many Avatars do you want to purchase?*"
        type="number"
        placeholder="Type your answer here..."
      />
      <QASection
        serial={15}
        title="Since you purchased multiple Avatars, what gender(s) do you want them to be?"
        opt1="All Male"
        opt2="All Female"
        opt3="Mix of both"
      />
      <NameSection
        placeholder="https://"
        title="Sample LinkedIn URL you want your Avatar(s) to look like"
        serial={16}
        type="url"
      />
      <QASection
        serial={17}
        title="Do you have a LinkedIn Banner for your Avatar?"
        opt1="Yes, I have a custom one"
        opt2="No, I don't need a banner"
        opt3="Please add a generic banner to the profile"
      />
      <NameSection
        serial={18}
        title="Do you have any preferences for the Profile Pictures of the Avatars"
        subTitle="Example: Blonde, Asian, Indian, etc."
      />
      <QASection
        serial={19}
        title='Do you have a custom "About" (biography) for your Avatar'
        opt1="Yes"
        opt2="No, please add a AI generated one"
      />
      <QASection
        serial={20}
        title="Do you have a custom headline?"
        opt1="Yes"
        opt2="No"
      />
      <NameSection serial={21} title="Your custom headline." />
      <NameSection
        serial={22}
        title="What Location (City, State, Country) do you want the Avatar to be in?"
        subTitle="(eg: Dallas, TX, USA)"
      />
      <FeaturedLink
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
      <NameSection
        serial={24}
        title={
          'Please add content or the link to the "Featured Link" selected in the previous answer'
        }
      />
      <NameSection
        serial={25}
        title="LinkedIn Company Page URL you want the Avatar to be connected with"
        type={"url"}
      />
      <FeaturedLink
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
      <QASection
        serial={27}
        title="Do you want your Avatar to have any previous industry experiences?"
        opt1="yes"
        opt2="No"
      />
      <NameSection
        serial={28}
        title="List up to 3 Companies or Industries you want the Avatar to have worked at before joining your company along with their positions"
        subTitle={`Example 1: Global Supply Chain Manager at Apple`}
      />
      <NameSection
        serial={29}
        title="LinkedIn may send you OTPs (One-time Passwords) or PINs for your Avatars. To which email address do you to enable auto-forwarding so you receive them?"
      />
      <NameSection
        serial={30}
        title="Any additional comments or special requests."
      />
      <MultiChoice
        serial={31}
        tittle="From where did you hear about usThis question is required.*"
        opt1="Google Search"
        opt2="Facebook Group"
        opt3="Blog/Article"
        opt4="Referral"
        opt5="Others"
        isRequired={true}
      />
      <NameSection
        serial={32}
        title="Since you chose Others in the previous question, please add the details below,This question is required.*"
        isRequired={true}
        isSubmit={true}
      />
    </>
  );
}

export default App;
