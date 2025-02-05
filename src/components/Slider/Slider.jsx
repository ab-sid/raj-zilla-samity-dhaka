"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressCircle.current) {
      const circumference = 40 * Math.PI; // Full circumference of the circle
      progressCircle.current.style.strokeDasharray = circumference;
      progressCircle.current.style.strokeDashoffset = circumference * progress;
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="relative max-w-[1100px] mx-auto w-[96%] lg:w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {[...Array(7)].map((_, i) => (
          <SwiperSlide key={i}>
            <Image
              src={`/assets/slide/${i + 1}.jpeg`}
              width={400}
              height={450}
              alt={`slide${i + 1}`}
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}

        {/* Progress Indicator  */}
        <div className="autoplay-progress absolute bottom-0 right-4 bg-black/50 p-2 rounded-full flex items-center justify-center w-12 h-12 text-white text-sm">
          <svg
            className="absolute top-0 left-0 w-full h-full z-50"
            viewBox="0 0 48 48"
          >
            <circle
              ref={progressCircle}
              cx="24"
              cy="24"
              r="20"
              stroke="white"
              strokeWidth="4"
              fill="none"
              strokeDasharray="126"
              strokeDashoffset="126"
              strokeLinecap="round"
            />
          </svg>
          <span
            ref={progressContent}
            className="relative z-10 font-bold"
          ></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
