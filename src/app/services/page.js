"use client";
import React, { useState } from "react";
import ServicesModal from "../components/ServicesModal";
import { Title } from "../components/Multiple";

const Services = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleOutSideClick = () => {
    setOpenModal(false);
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="rounded-lg p-4 dark:border-gray-700">
        <div id="services" className="pt-20">
          <div className="ms-10">
            <Title title={"-SERVICES"} heading={"My Services"}></Title>
          </div>
          <div className="flex flex-wrap justify-around gap-y-5">
            <div
              onClick={handleOpenModal}
              className="max-w-md rounded border border-gray-200 bg-white p-5"
            >
              <h2 className="font-bold text-yellow-500 ">-EXPERIENCE</h2>
              <h2 className="my-2 text-2xl font-bold text-[#0f172a]">
                Web Developer
              </h2>
              <p>
                Elisc is a leading web design agency with an award-winning
                design team that creates innovative, effective websites that
                capture your brand, improve your conversion rates, and maximize
                your revenue to help grow your business and achieve your goals.
              </p>
            </div>
            <div
              className="max-w-md rounded border border-gray-200 bg-white p-5"
              onClick={handleOpenModal}
            >
              <h2 className="font-bold text-yellow-500 ">-EXPERIENCE</h2>
              <h2 className="my-2 text-2xl font-bold text-[#0f172a]">
                Web Developer
              </h2>
              <p>
                Elisc is a leading web design agency with an award-winning
                design team that creates innovative, effective websites that
                capture your brand, improve your conversion rates, and maximize
                your revenue to help grow your business and achieve your goals.
              </p>
            </div>
            <div
              onClick={handleOpenModal}
              className="max-w-md rounded border border-gray-200 bg-white p-5"
            >
              <h2 className="font-bold text-yellow-500 ">-EXPERIENCE</h2>
              <h2 className="my-2 text-2xl font-bold text-[#0f172a]">
                Web Developer
              </h2>
              <p>
                Elisc is a leading web design agency with an award-winning
                design team that creates innovative, effective websites that
                capture your brand, improve your conversion rates, and maximize
                your revenue to help grow your business and achieve your goals.
              </p>
            </div>
            <div
              onClick={handleOpenModal}
              className="max-w-md rounded border border-gray-200 bg-white p-5"
            >
              <h2 className="font-bold text-yellow-500 ">-EXPERIENCE</h2>
              <h2 className="my-2 text-2xl font-bold text-[#0f172a]">
                Web Developer
              </h2>
              <p>
                Elisc is a leading web design agency with an award-winning
                design team that creates innovative, effective websites that
                capture your brand, improve your conversion rates, and maximize
                your revenue to help grow your business and achieve your goals.
              </p>
            </div>
          </div>{" "}
          {/* <div className="flex justify-around flex-wrap ">
            <div class="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div class="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div class="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div class="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div> */}
          <iframe
            className="h-[300px] w-full lg:h-[450px]"
            src="https://www.youtube.com/embed/bmixiVwtDso"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          {openModal && (
            <ServicesModal
              openModal={openModal}
              handleOutSideClick={handleOutSideClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
