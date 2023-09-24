"use client";
import Image from "next/image";
import Testimonial from "../components/testimonial";
import { Title } from "../components/Multiple";

const Portfolio = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="rounded-lg p-4 dark:border-gray-700">
        <div id="portfolio" className="pt-20 ">
          <div className="ms-10">
            <Title title={"-CLIENTS"} heading={"Customers & clients"}></Title>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 ">
            <div className="flex h-[150px] max-w-[250px] cursor-pointer items-center justify-center border border-l-0 border-t-0">
              <Image
                src={"/sponsor1.png"}
                width={100}
                height={100}
                alt="sponsor1"
              ></Image>
            </div>
            <div className="flex h-[150px] max-w-[250px] cursor-pointer items-center justify-center border border-l-0 border-t-0">
              <Image
                src={"/sponsor2.png"}
                width={100}
                height={100}
                alt="sponsor1"
              ></Image>
            </div>
            <div className="max-w-[250px]h-[150px] flex cursor-pointer items-center justify-center border border-l-0 border-t-0">
              <Image
                src={"/sponsor3.png"}
                width={100}
                height={100}
                alt="sponsor1"
              ></Image>
            </div>
            <div className="flex h-[150px] max-w-[250px]  cursor-pointer  items-center justify-center border border-e-0 border-l-0 border-t-0">
              <Image
                src={"/sponsor4.png"}
                width={100}
                height={100}
                alt="sponsor1"
              ></Image>
            </div>
            <div className="max-w-[250px]h-[150px] flex cursor-pointer items-center justify-center border border-b-0 border-l-0">
              <Image
                src={"/sponsor5.png"}
                width={100}
                height={100}
                alt="sponsor1"
              ></Image>
            </div>
            <div className="max-w-[250px]h-[150px] flex cursor-pointer items-center justify-center border border-b-0 border-l-0">
              <Image
                src={"/sponsor6.png"}
                width={100}
                height={100}
                alt="sponsor1"
              ></Image>
            </div>
            <div className="max-w-[250px]h-[150px] flex cursor-pointer items-center justify-center border border-b-0 border-l-0">
              <Image
                src={"/sponsor7.png"}
                width={100}
                height={100}
                alt="sponsor1"
              ></Image>
            </div>
            <div className="flex h-[150px] max-w-[250px]  cursor-pointer items-center justify-center border border-b-0 border-e-0 border-l-0">
              <Image
                src={"/sponsor8.png"}
                width={100}
                height={100}
                alt="sponsor1"
              ></Image>
            </div>
          </div>
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
