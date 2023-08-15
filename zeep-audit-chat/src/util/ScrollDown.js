/** @format */

const ScrollDown = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: "smooth",
    });
  }, 500);
};

export default ScrollDown;
