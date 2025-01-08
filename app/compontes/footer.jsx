import React from "react";
import logo from "@/public/images/logo.png";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#FEF9F2] bg-gradient-to-r from-[#F9CEB7] to-[#ADD1F2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-around py-10 flex-wrap">
          <div className="mb-6 md:mb-0">
            <img
              className="w-40 md:w-80 object-contain mx-auto md:mx-0"
              src={logo.src}
              alt="logo"
            />
          </div>
          <ul className="py-4 flex items-start justify-start gap-2 sm:gap-4 text-start flex-col">
            <li>Search Engine Optimization</li>
            <li>Digital marketing in your city </li>
            <li>Paid Media</li>
            <li>Influencer Marketing</li>
            <li>SEO Analyzer Extension</li>
          </ul>
          <ul className="py-4 w-full md:w-auto flex items-end justify-end gap-2 sm:gap-4 text-start flex-col">
            <li>Content Marketing</li>
            <li>SEO services in your city </li>
            <li>Social Media Marketing</li>
            <li>Sitemap</li>
          </ul>
          <ul className="py-4 flex items-start justify-start gap-2 sm:gap-4 text-start flex-col">
            <li>Blog</li>
            <li>About us</li>
            <li>Web Stories</li>
            <li>Resources</li>
            <li>Testimonials</li>
            <li>Digital Marketing Trends 2024</li>
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
            Google Partner Facebook Partner © 2024 AdLift. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
