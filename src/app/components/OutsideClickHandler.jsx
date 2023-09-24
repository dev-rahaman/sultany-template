import React, { useRef, useEffect } from "react";

const OutsideClickHandler = ({ handleOutSideClick, children, showBars }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handleOutSideClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleOutSideClick]);

  useEffect(() => {
    if (showBars) {
      document.documentElement.classList.remove("bg-gray-500");
    } else {
      document.documentElement.classList.add("bg-gray-500");
    }
  }, [showBars]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickHandler;
