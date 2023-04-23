import React, { useState } from "react";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  if (visible === true)
    return (
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="fixed p-2 text-base font-bold text-white bg-blue-600 rounded-full shadow-md shadow-blue-950 border- bottom-12 right-11 hover:p-3 "
      >
        Go to Top
      </button>
    );
};

export default ScrollUp;
