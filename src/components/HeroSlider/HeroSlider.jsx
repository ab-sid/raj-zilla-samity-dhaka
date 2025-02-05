"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
const HeroSlider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/assets/slide/1.jpeg"
            width={400}
            height={450}
            alt="slide1"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/slide/2.jpeg"
            width={400}
            height={450}
            alt="slide2"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/slide/3.jpeg"
            width={400}
            height={450}
            alt="slide3"
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/slide/4.jpeg"
            width={400}
            height={450}
            alt="slide4"
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/slide/5.jpeg"
            width={400}
            height={450}
            alt="slide5"
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/slide/6.jpeg"
            width={400}
            height={450}
            alt="slide6"
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/slide/7.jpeg"
            width={400}
            height={450}
            alt="slide7"
            className="w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
