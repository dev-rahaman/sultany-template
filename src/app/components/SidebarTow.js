"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import OutsideClickHandler from "./OutsideClickHandler";
import { ActiveLink } from "./ActiveLink";

const SidebarTow = () => {
  const [showBars, setShowBars] = useState(true);
  const [showSidebar, setShowSidebar] = useState("-translate-x-full");

  const handleShowSidebar = () => {
    if (showSidebar) {
      setShowSidebar("");
    } else {
      setShowSidebar("-translate-x-full");
    }
  };

  const handleShowBars = () => {
    setShowBars(false);
  };

  const handleOutSideClick = () => {
    setShowSidebar("-translate-x-full");
    setShowBars(true);
  };

  return (
    <div>
      <OutsideClickHandler
        handleOutSideClick={handleOutSideClick}
        showBars={showBars}
      >
        {showBars && (
          <button
            onClick={() => {
              handleShowSidebar();
              handleShowBars();
            }}
            type="button"
            className="hover:text-gray-700-2 -ml-8 mt-2 inline-flex translate-x-full items-center rounded-lg p-2 text-sm text-gray-500 sm:hidden"
          >
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        )}

        <aside
          className={`${showSidebar} fixed left-0 z-40 h-full w-64 bg-[#16193a] pb-[50px] pt-0 transition-transform sm:translate-x-0`}
        >
          <div className=" bg-gray-50 px-3 py-4 dark:bg-[#16193a]">
            <div className="mt-2">
              <div className="flex items-center justify-center">
                <Image
                  className="h-20 w-20 rounded-full border-2 border-[#fff] object-cover"
                  src={"/aothor2.webp"}
                  height={100}
                  width={100}
                  alt="author"
                />
              </div>
              <div className="-mt-5 flex items-center justify-center">
                <Image
                  className="block h-20 w-20 rounded-full object-cover opacity-10"
                  src={"/signature.png"}
                  height={100}
                  width={100}
                  alt="author"
                />
              </div>
            </div>
            <ul className="mt-2 flex flex-col items-center justify-center font-medium">
              {/* {navLink.map((item) => (
                <>
                  <Link
                    href={`${item.href}`}
                    className={`group flex items-center rounded-lg p-2 text-gray-900 hover:text-gray-700 dark:text-white`}
                    onClick={handleOutSideClick}
                  >
                    {item.navName}
                  </Link>
                </>
              ))} */}
              <ActiveLink />
            </ul>
            <div className="socail mt-8">
              <ul className="flex justify-center">
                <li className="m-2 cursor-pointer rounded-full border p-2 hover:bg-gray-700">
                  <FaFacebook className="text-white" />
                </li>
                <li className="m-2 cursor-pointer rounded-full border p-2 hover:bg-gray-700">
                  <FaTwitter className="text-white" />
                </li>
                <li className="m-2 cursor-pointer rounded-full border p-2 hover:bg-gray-700">
                  <FaLinkedin className="text-white" />
                </li>
              </ul>
            </div>
            <footer className="mt-8 text-white">
              <p className="text-center">
                Copyright © 2023 Robert Elisc. All rights reserved.
              </p>
            </footer>
          </div>
        </aside>
      </OutsideClickHandler>
    </div>
  );
};

export default SidebarTow;
