/** @format */
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { IoIosWarning } from "react-icons/io";

const EmptyData = ({ message }) => {
  return (
    <div data-aos="fade-up" className="warning-btn">
      <IoIosWarning /> <p>{message}</p>
    </div>
  );
};

export default EmptyData;
