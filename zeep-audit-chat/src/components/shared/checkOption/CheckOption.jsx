/** @format */

import { useRef, useState } from "react";
import useChat from "../../../hooks/useChat";

const CheckOption = ({ title, data }) => {
  const { setSelectService } = useChat();
  const [select, setSelect] = useState(false);
  const checkRef = useRef(null);

  const handleCheck = () => {
    setSelect((prev) => !prev);

    if (checkRef.current?.checked) {
      setSelectService((prev) => {
        return { ...prev, [data]: true };
      });
    } else {
      setSelectService((prev) => {
        return { ...prev, [data]: false };
      });
    }
  };

  return (
    <div className="md:w-1/2 bg-base-200 shadow-xl rounded-md p-4 center justify-between font-semibold">
      <p>{title}</p>
      <input
        onChange={handleCheck}
        type="checkbox"
        checked={select}
        ref={checkRef}
        className="checkbox checkbox-primary"
      />
    </div>
  );
};

export default CheckOption;
