import React from "react";
import logo from "@/public/images/logo.png";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#FEF9F2] bg-gradient-to-t from-[#ff914d] to-[#8c52ff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-around py-10 flex-wrap">
          <div className="mb-4 md:mb-0 mx-auto md:mx-0">
            <img
              className="w-60 md:w-80 object-contain mx-auto md:mx-0"
              src={logo.src}
              alt="logo"
            />
          </div>
          <ul className="py-4 flex items-start justify-start gap-2 sm:gap-4 text-start flex-col">
            <li className=" text-white font-semibold">होम</li>
            <li className=" text-white font-semibold">अबाऊट</li>
            <li className=" text-white font-semibold">मंडप डेकोरेशन</li>
            <li className=" text-white font-semibold">साऊंड सिस्टीम</li>
            <li className=" text-white font-semibold">कॉन्टॅक्ट</li>
          </ul>

          <ul className="py-4 w-full md:w-auto flex items-end md:items-start justify-end gap-2 sm:gap-4 text-start flex-col">
            <li className=" text-white font-semibold">ट्रॅडिशनल मंडप </li>
            <li className=" text-white font-semibold">ओपन एअर मंडप</li>
            <li className=" text-white font-semibold">लाईटिंग मंडप डेकोरेशन</li>
            <li className=" text-white font-semibold">
              थीम बेस्ड मंडप डेकोरेशन
            </li>
            <li className=" text-white font-semibold">फ्लोरल मंडप डेकोरेशन</li>
          </ul>

          <ul className="py-4 flex items-start justify-start gap-2 sm:gap-4 text-start flex-col">
            <li className=" text-white font-semibold flex items-center gap-2">
              <GrLocation /> Mumbai Maharashtra
            </li>
            <li className=" text-white font-semibold flex items-center gap-2">
              <HiOutlineMailOpen /> swapnilchogale@gmail.com
            </li>
            <li className=" text-white font-semibold flex items-center gap-2">
              <FaPhone /> +91 902 251 3064
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200" />
        <div className="flex flex-col md:flex-row items-center justify-around py-5 gap-4 md:gap-0">
          <div className="flex items-center justify-center gap-4 mb-4 md:mb-0">
            <FaXTwitter className="text-xl sm:text-2xl bg-white p-2 h-8 w-8 sm:h-10 sm:w-10 rounded-lg" />
            <FaLinkedinIn className="text-xl sm:text-2xl bg-white p-2 h-8 w-8 sm:h-10 sm:w-10 rounded-lg" />
            <FaInstagram className="text-xl sm:text-2xl bg-white p-2 h-8 w-8 sm:h-10 sm:w-10 rounded-lg" />
            <FaYoutube className="text-xl sm:text-2xl bg-white p-2 h-8 w-8 sm:h-10 sm:w-10 rounded-lg" />
          </div>
          <p className="text-center text-sm sm:text-lg">
            CopyRight ©️ Chogale Soham
          </p>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=9022513064&text="
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-3 right-3 w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:bg-green-600 animate-bounce"
        >
          <BsWhatsapp className=" text-3xl font-bold" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
