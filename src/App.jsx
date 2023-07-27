/** @format */

import NameSection from "./components/NameSection";

function App() {
  return (
    <>
      <NameSection
        serial={1}
        title="What's your first name?*"
        type="text"
        placeholder="Type your answer here"
      />
      <NameSection
        serial={2}
        title="Last name?*"
        type="text"
        placeholder="Type your answer here"
      />
      <NameSection
        serial={3}
        title="Email*"
        type="email"
        placeholder="Type your answer here"
      />
    </>
  );
}

export default App;
