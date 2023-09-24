"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ArrowToUp = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 z-50 animate-bounce ${
        showButton ? "visible" : "invisible"
      }`}
    >
      <Link href={"#home"}>
        <MdKeyboardDoubleArrowUp className="cursor-pointer   text-3xl text-[#6d28d9] dark:text-[#16193a]" />
      </Link>
    </button>
  );
};

export default ArrowToUp;
