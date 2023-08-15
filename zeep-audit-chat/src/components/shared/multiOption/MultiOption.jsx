/** @format */

import useChat from "../../../hooks/useChat";

const MultiOption = ({ opt1 = "YES", opt2 = "NO", title, data }) => {
  const { setSelectAnOption } = useChat();

  const handleOptionClick = (value) => {
    setSelectAnOption((prev) => {
      return { ...prev, [data]: value };
    });
  };
  return (
    <div className="md:w-3/4 center justify-between bg-base-200 rounded-md shadow-xl p-4 font-semibold">
      <div>
        <h2>{title}</h2>
      </div>
      <div className="center gap-6">
        <span className="center gap-2">
          {opt1}
          <input
            onChange={() => handleOptionClick(opt1)}
            type="radio"
            name={data}
            className="radio radio-primary"
          />
        </span>
        <span className="center gap-2">
          {opt2}
          <input
            onChange={() => handleOptionClick(opt2)}
            type="radio"
            name={data}
            className="radio radio-primary"
          />
        </span>
      </div>
    </div>
  );
};

export default MultiOption;
