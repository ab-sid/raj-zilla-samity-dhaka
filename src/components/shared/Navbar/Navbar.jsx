"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <div className="max-w-[1100px] mx-auto w-[96%] lg:w-full">
      {/* for mobile */}
      <div className="lg:hidden flex justify-between items-center py-3">
        <div className="relative z-50">
          {/* Toggle Button */}
          <button onClick={() => setIsOpen(true)} className="">
            <CiMenuFries size={24} />
          </button>

          {/* Black Overlay (Shown When Sidebar is Open) */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-10 transition-opacity"
              onClick={() => setIsOpen(false)} // Clicking outside closes the sidebar
            ></div>
          )}

          {/* Sidebar Menu */}
          <div
            className={`fixed top-0 left-0 h-auto w-[66%] bg-[#fff] shadow-lg transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-2 border rounded-full text-gray-700"
            >
              <IoClose size={24} />
            </button>

            {/* Menu Items */}
            {/* <ul className="mt-12">
              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C]">
                <Link href="#" className="text-base">
                  প্রথম পাতা
                </Link>
              </li>
              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C] relative group">
                <Link href="#" className="text-base">
                  রাজশাহী জেলা
                </Link>
                <ul className="absolute left-0 -top-96 p-0 m-0 z-50 opacity-100 bg-[#00B46C] w-[180px] group-hover:top-10 group-hover:duration-500">
                  <li className="px-[17px] py-2 duration-75 hover:bg-[#251C5D]">
                    <Link href="#" className="text-base text-white">
                      এক নজরে
                    </Link>
                  </li>
                  <li className="px-[17px] py-2 duration-300 hover:bg-[#251C5D]">
                    <Link href="#" className="text-base text-white">
                      ইতিহাস ও ঐতিহ্য
                    </Link>
                  </li>
                  <li className="px-[17px] py-2 duration-700 hover:bg-[#251C5D]">
                    <Link href="#" className="text-base text-white">
                      প্রখ্যাত ব্যাক্তিত্ব
                    </Link>
                  </li>
                  <li className="px-[17px] py-2 duration-700 hover:bg-[#251C5D]">
                    <Link href="#" className="text-base text-white">
                      পেশাজীবী
                    </Link>
                  </li>
                  <li className="px-[17px] py-2 duration-700 hover:bg-[#251C5D]">
                    <Link href="#" className="text-base text-white">
                      মুক্তিযোদ্ধা তালিকা
                    </Link>
                  </li>
                  <li className="px-[17px] py-2 duration-700 hover:bg-[#251C5D]">
                    <Link href="#" className="text-base text-white">
                      দর্শনীয় স্থান{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C]">
                <Link href="#" className="text-base">
                  সমিতির ইতিহাস
                </Link>
              </li>
              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C]">
                <Link href="#" className="text-base">
                  {" "}
                  সংবিধান
                </Link>
              </li>
              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C] relative group">
                <Link href="#" className="text-base">
                  {" "}
                  বক্তব্য
                </Link>
                <ul className="absolute left-0 -top-96 p-0 m-0 z-50 opacity-100 bg-[#00B46C] w-[180px] group-hover:top-10 group-hover:duration-500">
                  <li className="px-[17px] py-2 duration-75 hover:bg-[#251C5D]">
                    <Link href="#" className="text-base text-white">
                      সভাপতি
                    </Link>
                  </li>
                  <li className="px-[17px] py-2 duration-300 hover:bg-[#251C5D]">
                    <Link href="#" className="text-base text-white">
                      সাধারণ সম্পাদক
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="bg-[#251C5D] group text-white px-[17px] py-2 hover:bg-[#00B46C] relative group">
                <Link href="#" className="text-base">
                  {" "}
                  সদস্য
                </Link>
                <ul className="absolute left-0 -top-96 p-0 m-0 z-50 opacity-100 bg-[#00B46C] w-[180px] group-hover:top-10 group-hover:duration-500">
                  <li className="px-[17px] py-2 duration-75 hover:bg-blue-900">
                    <Link href="#" className="text-base text-white">
                      আজীবন সদস্য
                    </Link>
                  </li>
                  <li className="px-[17px] py-2 duration-75 hover:bg-blue-900">
                    <Link href="#" className="text-base text-white">
                      আজীবন সদস্য ফর্ম
                    </Link>
                  </li>
                  <li className="px-[17px] py-2 duration-75 hover:bg-blue-900">
                    <Link href="#" className="text-base text-white">
                      সাধারণ সদস্য ফর্ম
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C] relative group">
                <Link href="#" className="text-base">
                  {" "}
                  রাজশাহীর উৎসব
                </Link>
                <ul className="absolute left-0 -top-96 p-0 m-0 z-50 opacity-100 bg-[#00B46C] w-[180px] group-hover:top-10 group-hover:duration-500">
                  <li className="px-[17px] py-2 duration-75 hover:bg-[#251C5D]">
                    <Link href="#" className="text-base text-white">
                      উৎসব ২০২৫
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C]">
                <Link href="#" className="text-base">
                  কমিটি
                </Link>
              </li>
              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C]">
                <Link href="#" className="text-base">
                  ছবিঘর
                </Link>
              </li>
              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C]">
                <Link href="#" className="text-base">
                  যোগাযোগ
                </Link>
              </li>
            </ul> */}
            <ul className="mt-12">
              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C]">
                <Link href="#" className="text-base">
                  প্রথম পাতা
                </Link>
              </li>

              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C] relative">
                <button
                  onClick={() => toggleDropdown(1)}
                  className="w-full text-left text-base"
                >
                  রাজশাহী জেলা
                </button>
                {openDropdown === 1 && (
                  <ul className="absolute left-0 top-full bg-[#00B46C] w-[180px] z-50">
                    <li className="px-[17px] py-2 hover:bg-[#251C5D]">
                      <Link href="#" className="text-white">
                        এক নজরে
                      </Link>
                    </li>
                    <li className="px-[17px] py-2 hover:bg-[#251C5D]">
                      <Link href="#" className="text-white">
                        ইতিহাস ও ঐতিহ্য
                      </Link>
                    </li>
                    <li className="px-[17px] py-2 hover:bg-[#251C5D]">
                      <Link href="#" className="text-white">
                        প্রখ্যাত ব্যাক্তিত্ব
                      </Link>
                    </li>
                    <li className="px-[17px] py-2 hover:bg-[#251C5D]">
                      <Link href="#" className="text-white">
                        পেশাজীবী
                      </Link>
                    </li>
                    <li className="px-[17px] py-2 hover:bg-[#251C5D]">
                      <Link href="#" className="text-white">
                        মুক্তিযোদ্ধা তালিকা
                      </Link>
                    </li>
                    <li className="px-[17px] py-2 hover:bg-[#251C5D]">
                      <Link href="#" className="text-white">
                        দর্শনীয় স্থান
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C]">
                <Link href="#" className="text-base">
                  সমিতির ইতিহাস
                </Link>
              </li>
              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C]">
                <Link href="#" className="text-base">
                  সংবিধান
                </Link>
              </li>

              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C] relative">
                <button
                  onClick={() => toggleDropdown(2)}
                  className="w-full text-left text-base"
                >
                  বক্তব্য
                </button>
                {openDropdown === 2 && (
                  <ul className="absolute left-0 top-full bg-[#00B46C] w-[180px] z-50">
                    <li className="px-[17px] py-2 hover:bg-[#251C5D]">
                      <Link href="#" className="text-white">
                        সভাপতি
                      </Link>
                    </li>
                    <li className="px-[17px] py-2 hover:bg-[#251C5D]">
                      <Link href="#" className="text-white">
                        সাধারণ সম্পাদক
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C] relative">
                <button
                  onClick={() => toggleDropdown(3)}
                  className="w-full text-left text-base"
                >
                  সদস্য
                </button>
                {openDropdown === 3 && (
                  <ul className="absolute left-0 top-full bg-[#00B46C] w-[180px] z-50">
                    <li className="px-[17px] py-2 hover:bg-blue-900">
                      <Link href="#" className="text-white">
                        আজীবন সদস্য
                      </Link>
                    </li>
                    <li className="px-[17px] py-2 hover:bg-blue-900">
                      <Link href="#" className="text-white">
                        আজীবন সদস্য ফর্ম
                      </Link>
                    </li>
                    <li className="px-[17px] py-2 hover:bg-blue-900">
                      <Link href="#" className="text-white">
                        সাধারণ সদস্য ফর্ম
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C] relative">
                <button
                  onClick={() => toggleDropdown(4)}
                  className="w-full text-left text-base"
                >
                  রাজশাহীর উৎসব
                </button>
                {openDropdown === 4 && (
                  <ul className="absolute left-0 top-full bg-[#00B46C] w-[180px] z-50">
                    <li className="px-[17px] py-2 hover:bg-[#251C5D]">
                      <Link href="#" className="text-white">
                        উৎসব ২০২৫
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C]">
                <Link href="#" className="text-base">
                  কমিটি
                </Link>
              </li>
              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C]">
                <Link href="#" className="text-base">
                  ছবিঘর
                </Link>
              </li>
              <li className="bg-[#251C5D] text-white px-[17px] py-2 hover:bg-[#00B46C]">
                <Link href="#" className="text-base">
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Image
            src="/assets/logo.png"
            width={120}
            height={80}
            alt="logo"
          ></Image>
        </div>

        <div className="flex items-center">
          <div className="flex justify-center items-center gap-[5px]">
            <Link href="/">
              <Image
                src="/assets/social/fb.png"
                width={30}
                height={30}
                alt="facebook"
              ></Image>
            </Link>
            <Link href="/">
              <Image
                src="/assets/social/t.png"
                width={30}
                height={30}
                alt="facebook"
              ></Image>
            </Link>
            <Link href="/" className="mb-[5px]">
              <Image
                src="/assets/social/y.png"
                width={30}
                height={30}
                alt="facebook"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
      {/* for mobile end*/}

      {/* nav top */}
      <div className="hidden lg:flex justify-between items-center py-2">
        {/* logo */}
        <div>
          <Image
            src="/assets/logo.png"
            width={357}
            height={80}
            alt="logo"
          ></Image>
        </div>

        {/* social icon */}
        <div className="flex items-center">
          <h4 className="mr-2 text-[13px] text-[#a37d33] font-bold">
            Find Us :
          </h4>
          <div className="flex items-center gap-[5px]">
            <Link href="/">
              <Image
                src="/assets/social/fb.png"
                width={33}
                height={36}
                alt="facebook"
              ></Image>
            </Link>
            <Link href="/">
              <Image
                src="/assets/social/t.png"
                width={33}
                height={36}
                alt="facebook"
              ></Image>
            </Link>
            <Link href="/">
              <Image
                src="/assets/social/y.png"
                width={33}
                height={36}
                alt="facebook"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
      {/* nav top end */}

      {/* nav bottom */}
      <div className="hidden lg:block">
        <ul className="flex bg-[#251C5D]">
          <li className="bg-[#251C5D] text-white border-r px-[17px] py-2 hover:bg-[#00B46C]">
            <Link href="#" className="text-base">
              প্রথম পাতা
            </Link>
          </li>
          <li className="bg-[#251C5D] text-white border-r px-[17px] py-2 hover:bg-[#00B46C] relative group">
            <Link href="#" className="text-base">
              রাজশাহী জেলা
            </Link>
            <ul className="absolute left-0 -top-96 p-0 m-0 z-50 opacity-90 bg-[#00B46C] w-[180px] group-hover:top-10 group-hover:duration-500">
              <li className="px-[17px] py-2 duration-75 hover:bg-[#251C5D]">
                <Link href="#" className="text-base text-white">
                  এক নজরে
                </Link>
              </li>
              <li className="px-[17px] py-2 duration-300 hover:bg-[#251C5D]">
                <Link href="#" className="text-base text-white">
                  ইতিহাস ও ঐতিহ্য
                </Link>
              </li>
              <li className="px-[17px] py-2 duration-700 hover:bg-[#251C5D]">
                <Link href="#" className="text-base text-white">
                  প্রখ্যাত ব্যাক্তিত্ব
                </Link>
              </li>
              <li className="px-[17px] py-2 duration-700 hover:bg-[#251C5D]">
                <Link href="#" className="text-base text-white">
                  পেশাজীবী
                </Link>
              </li>
              <li className="px-[17px] py-2 duration-700 hover:bg-[#251C5D]">
                <Link href="#" className="text-base text-white">
                  মুক্তিযোদ্ধা তালিকা
                </Link>
              </li>
              <li className="px-[17px] py-2 duration-700 hover:bg-[#251C5D]">
                <Link href="#" className="text-base text-white">
                  দর্শনীয় স্থান{" "}
                </Link>
              </li>
            </ul>
          </li>
          <li className="bg-[#251C5D] text-white border-r px-[17px] py-2 hover:bg-[#00B46C]">
            <Link href="#" className="text-base">
              সমিতির ইতিহাস
            </Link>
          </li>
          <li className="bg-[#251C5D] text-white border-r px-[17px] py-2 hover:bg-[#00B46C]">
            <Link href="#" className="text-base">
              {" "}
              সংবিধান
            </Link>
          </li>
          <li className="bg-[#251C5D] text-white border-r px-[17px] py-2 hover:bg-[#00B46C] relative group">
            <Link href="#" className="text-base">
              {" "}
              বক্তব্য
            </Link>
            <ul className="absolute left-0 -top-96 p-0 m-0 z-50 opacity-90 bg-[#00B46C] w-[180px] group-hover:top-10 group-hover:duration-500">
              <li className="px-[17px] py-2 duration-75 hover:bg-[#251C5D]">
                <Link href="#" className="text-base text-white">
                  সভাপতি
                </Link>
              </li>
              <li className="px-[17px] py-2 duration-300 hover:bg-[#251C5D]">
                <Link href="#" className="text-base text-white">
                  সাধারণ সম্পাদক
                </Link>
              </li>
            </ul>
          </li>
          <li className="bg-[#251C5D] group text-white border-r px-[17px] py-2 hover:bg-[#00B46C] relative group">
            <Link href="#" className="text-base">
              {" "}
              সদস্য
            </Link>
            <ul className="absolute left-0 -top-96 p-0 m-0 z-50 opacity-90 bg-[#00B46C] w-[180px] group-hover:top-10 group-hover:duration-500">
              <li className="px-[17px] py-2 duration-75 hover:bg-blue-900">
                <Link href="#" className="text-base text-white">
                  আজীবন সদস্য
                </Link>
              </li>
              <li className="px-[17px] py-2 duration-75 hover:bg-blue-900">
                <Link href="#" className="text-base text-white">
                  আজীবন সদস্য ফর্ম
                </Link>
              </li>
              <li className="px-[17px] py-2 duration-75 hover:bg-blue-900">
                <Link href="#" className="text-base text-white">
                  সাধারণ সদস্য ফর্ম
                </Link>
              </li>
            </ul>
          </li>
          <li className="bg-[#251C5D] text-white border-r px-[17px] py-2 hover:bg-[#00B46C] relative group">
            <Link href="#" className="text-base">
              {" "}
              রাজশাহীর উৎসব
            </Link>
            <ul className="absolute left-0 -top-96 p-0 m-0 z-50 opacity-90 bg-[#00B46C] w-[180px] group-hover:top-10 group-hover:duration-500">
              <li className="px-[17px] py-2 duration-75 hover:bg-[#251C5D]">
                <Link href="#" className="text-base text-white">
                  উৎসব ২০২৫
                </Link>
              </li>
            </ul>
          </li>
          <li className="bg-[#251C5D] text-white border-r px-[17px] py-2 hover:bg-[#00B46C]">
            <Link href="#" className="text-base">
              কমিটি
            </Link>
          </li>
          <li className="bg-[#251C5D] text-white border-r px-[17px] py-2 hover:bg-[#00B46C]">
            <Link href="#" className="text-base">
              ছবিঘর
            </Link>
          </li>
          <li className="bg-[#251C5D] text-white border-r px-[17px] py-2 hover:bg-[#00B46C]">
            <Link href="#" className="text-base">
              যোগাযোগ
            </Link>
          </li>
        </ul>
      </div>
      {/* nav bottom end */}
    </div>
  );
};

export default Navbar;
