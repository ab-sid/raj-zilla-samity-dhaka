import Image from "next/image";
import Link from "next/link";
import React from "react";

const SamityAbout = () => {
  return (
    <section className="grid grid-cols-12 gap-5 my-4">
      <div className="col-span-12 lg:col-span-8">
        {/* left column */}
        <h2 className="text-[22px] text-[#251c5d] pb-2">
          স্বাগতম রাজশাহী জেলা সমিতি, ঢাকা
        </h2>
        <div>
          <Image
            src="/assets/person/person1.jpg"
            width={105}
            height={119}
            alt="president img"
            className="mr-5 float-left"
          ></Image>

          <p className="text-[13px] text-justify">
            রাজশাহী জেলা বাংলাদেশের উত্তরাঞ্চলের একটি জেলা। এই জেলাটি রাজশাহী
            বিভাগের অন্তর্গত। অবস্থানগত কারণে এটি বাংলাদেশের একটি বিশেষ
            শ্রেণীভুক্ত জেলা।রাজশাহী জেলার উত্তরে নওগাঁ জেলা, দক্ষিণে ভারতের
            পশ্চিমবঙ্গ রাজ্য, কুষ্টিয়া জেলা ও পদ্মা নদী, পূর্বে নাটোর জেলা,
            পশ্চিমে চাঁপাইনবাবগঞ্জ জেলা। দেশের প্রধানতম নদী পদ্মা এই জেলার
            সীমান্ত দিয়ে ভারত থেকে বাংলাদেশে প্রবেশ করেছে। এই জেলার মোট আয়তন
            ২৪০৭.০১ বর্গকিলোমিটার।এই জেলার নামকরণ নিয়ে প্রচুর মতপার্থক্য
            রয়েছে। তবে ঐতিহাসিক অক্ষয় কুমার মৈত্রেয়র মতে রাজশাহী রাণী ভবানীর
            দেয়া নাম। অবশ্য মিঃ গ্রান্ট লিখেছেন যে, রাণী ভবানীর জমিদারীকেই
            রাজশাহী বলা হতো এবং এই চাকলার বন্দোবস্তের কালে রাজশাহী নামের উল্লেখ
            পাওয়া যায়। পদ্মার উত্তরাঞ্চল বিস্তীর্ন এলাকা নিয়ে পাবনা পেরিয়ে
            ঢাকা পর্যন্ত এমনকি নদীয়া, যশোর, বর্ধমান, বীরভূম নিয়ে এই এলাকা
            রাজশাহী চাকলা নামে অভিহিত হয়। <br /> <br />
          </p>
          <p className="text-[13px] text-justify">
            রাজশাহীতে একটি সরকারি বিশ্ববিদ্যালয়, একটি প্রকৌশল বিশ্ববিদ্যালয়,
            একটি মেডিকেল বিশ্ববিদ্যালয়, একাধিক ঐতিহ্যবাহী কলেজ (রাজশাহী কলেজ,
            রাজশাহী নিউ গভঃ ডিগ্রী কলেজ, রাজশাহী সরকারি সিটি কলেজ, রাজশাহী
            সরকারি মহিলা কলেজ), কারিগরী মহাবিদ্যালয়,একটি টিচার্স ট্রেনিং
            ইনস্টিটিউট,একটি ক্যাডেট কলেজ,দুইটি সরকারী পলিটেকনিক ইনস্টিটিউট সহ
            আরও অসংখ্য সরকারি ও বেসরকারি শিক্ষা প্রতিষ্ঠান রয়েছে।
          </p>
        </div>
      </div>

      {/* right column */}
      <div className="col-span-12 lg:col-span-4 bg-[#f9eedd]">
        <div
          style={{
            background: `url("/assets/bg_news.gif") no-repeat center center`,
            backgroundSize: "cover", // This will ensure the image covers the entire container
            // Adjust height as needed, or set a specific height
          }}
          className="flex items-center min-h-9"
        >
          <h2 className="pl-5 py-[6px] text-white text-[17px]">বিজ্ঞপ্তি</h2>
        </div>
        <div className="py-3 px-5">
          <Link href="#" className="group">
            <div className="border-b mb-3 group-hover:text-blue-800">
              <h3 className="text-lg text-[#903] mb-1 group-hover:text-blue-800">
                {" "}
                ০৪ জানুয়ারি ২০২৫{" "}
              </h3>
              <p className="text-[14px] text-justify">
                {" "}
                রেজিষ্ট্রেশন এর শুভ উদ্বোধন রাজশাহী উৎসব ২০২৫{" "}
              </p>
            </div>
          </Link>
          <Link href="#" className="group">
            <div className="border-b mb-3 group-hover:text-blue-800">
              <h3 className="text-lg text-[#903] mb-1 group-hover:text-blue-800">
                {" "}
                ০৪ জানুয়ারি ২০২৫{" "}
              </h3>
              <p className="text-[14px] text-justify"> বই মেলা ২০২৫ </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SamityAbout;
