/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { Button } from "../components/Multiple";
import ArrowToUp from "../components/ArrowToUp";

const Homes = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="flex rounded-lg p-4 dark:border-gray-700 lg:h-screen">
        <div className="justify-between lg:flex lg:items-center lg:px-10">
          <div>
            <h3 className="text-3xl font-bold lg:text-5xl">
              <span className="block">
                Hi, I'm <span className="text-[#2b618d]">Jeffrey!</span>
              </span>
              <span className="block leading-normal">Creative Programmer</span>
              Based in USA
            </h3>
            <p className="my-10 w-2/3">
              I`m a Florida based Programmer & full-stack developer with 10+
              years of experience
            </p>
            <Button buttonText={"GET A PROJECT"} />
            <Button buttonText={"LET'S TALK"} />
            <div className="-2 mt-6 border-s-4 border-yellow-400">
              <p className="ms-2 font-semibold">
                <a href="tel:+770224440505">+0123456789</a>
              </p>
              <p className="ms-2 font-semibold">
                <a href="mailto:support@elisc.com">support@gmail.com</a>
              </p>
              <p className="ms-2 font-semibold">Ave Street Avenue, New York</p>
            </div>
          </div>
          <div>
            <Image
              src={"/aothor2.webp"}
              width={450}
              height={450}
              alt="author2"
            />
          </div>
          <ArrowToUp />
        </div>
      </div>
    </div>
  );
};

export default Homes;
