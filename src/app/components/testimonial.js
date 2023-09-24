"use client";
import React, { useState } from "react";
import testimonialData from "./testimonialData";
import Image from "next/image";

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="mt-20 overflow-hidden bg-[#16193a] text-center text-white">
      <div className="mx-auto h-[550px] py-4 md:h-[400px] lg:h-[350px] lg:px-12 ">
        <div className="relative">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card absolute left-0 m-10 flex transform flex-col items-center justify-center transition-transform duration-300 ${
                index === activeIndex
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
              style={{
                visibility: index === activeIndex ? "visible" : "hidden",
              }}
            >
              <Image
                src={testimonial.client}
                width={200}
                height={200}
                alt="client -image"
                className="h-20 w-20 rounded-full object-cover"
              ></Image>
              <h1 className="text-4xl font-bold">{testimonial.name}</h1>
              <p className="my-2 text-[20px] font-bold">{testimonial.role}</p>
              <p>{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
        <div className="mt-0 flex justify-center space-x-2">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-4 w-4 rounded-full ${
                index === activeIndex ? "bg-[#2b618d]" : "bg-[#fff]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
