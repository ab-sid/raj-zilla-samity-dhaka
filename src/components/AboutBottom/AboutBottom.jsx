"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import Map from "../Map/Map";

// map

const AboutBottom = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto w-[96%] lg:w-full">
      {/* gallery */}
      <div>
        <div className="min-h-9 flex items-center bg-[#00b46c]">
          <h2 className="pl-5 py-[5px] text-lg text-white">ছবিঘর</h2>
        </div>
        <div className="w-[80%] mx-auto mt-4">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/cards/1.jpeg"
                  width={328}
                  height={191}
                  alt="card1"
                  className="w-full"
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/cards/2.jpeg"
                  width={328}
                  height={191}
                  alt="card2"
                  className="w-full"
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/cards/3.jpeg"
                  width={328}
                  height={191}
                  alt="card3"
                  className="w-full"
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/cards/4.jpeg"
                  width={328}
                  height={191}
                  alt="card4"
                  className="w-full"
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/cards/5.jpeg"
                  width={328}
                  height={191}
                  alt="card5"
                  className="w-full"
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/cards/6.jpeg"
                  width={328}
                  height={191}
                  alt="card6"
                  className="w-full"
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/cards/7.jpeg"
                  width={328}
                  height={191}
                  alt="card7"
                  className="w-full"
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/cards/8.jpeg"
                  width={328}
                  height={191}
                  alt="card8"
                  className="w-full"
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/assets/cards/9.jpeg"
                  width={328}
                  height={191}
                  alt="card9"
                  className="w-full"
                ></Image>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* map */}
      <div>
        <div className="min-h-9 flex items-center bg-[#00b46c]">
          <h2 className="pl-5 py-[5px] text-lg text-white">অবস্থান মানচিত্র</h2>
        </div>
        {/* map div will be here */}
        <Map></Map>
      </div>
      {/* prsident */}
      <div className="bg-[#F9EEDD]">
        {/* title */}
        <div
          className="min-h-9 flex items-center bg-[#00b46c]"
          style={{
            background: `url("/assets/bg_news.gif") no-repeat center center`,
            backgroundSize: "cover", // This will ensure the image covers the entire container
            // Adjust height as needed, or set a specific height
          }}
        >
          <h2 className="pl-5 py-[5px] text-lg text-white">কমিটি</h2>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/person/person1.jpg"
              width={105}
              height={119}
              alt="president"
            ></Image>
            <div className="text-center">
              <h5 className="text-[13px] text-[#00b46c]">
                মোহাম্মদ শাহাব উদ্দিন
              </h5>
              <p className="text-[11px] text-[#333f7c]">সভাপতি</p>
              <p className="text-[11px] text-[#333f7c]">01754279383</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/person/person2.jpg"
              width={105}
              height={119}
              alt="president"
            ></Image>
            <div className="text-center">
              <h5 className="text-[13px] text-[#00b46c]">
                ড: মোহাম্মদ সামসুল হক
              </h5>
              <p className="text-[11px] text-[#333f7c]">সাধারন সম্পাদক</p>
              <p className="text-[11px] text-[#333f7c]">01754279380</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBottom;
