/** @format */

import FullAddress from "./components/FullAddress";
import NameSection from "./components/NameSection";
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
      <FullAddress />
      <QASection serial={8} title="Are you in Europe? *" opt1="OK" opt2="NO" />
      <QASection
        serial={9}
        title="Do you have a VAT Number?This question is required.*"
        opt1="OK"
        opt2="NO"
      />
    </>
  );
}

export default App;
