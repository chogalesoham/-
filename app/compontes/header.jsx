"use client";

import { useState } from "react";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="py-1 px-4 bg-gradient-to-t from-[#ff914d] to-[#8c52ff] shadow-lg transition-all ease-in-out duration-300">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-semibold">
          <Image
            src={Logo}
            width={250}
            height={40}
            alt="Logo"
            className=" w-48 object-cover"
          />
        </div>

        <div className="lg:flex hidden space-x-8 items-center">
          <Link href="/" className="text-white font-semibold text-xl">
            होम
          </Link>
          <Link href="/about" className="text-white font-semibold text-xl">
            अबाऊट
          </Link>
          <div className="relative">
            <button
              className="text-white font-semibold text-xl flex items-center "
              onClick={toggleDropdown}
            >
              मंडप डेकोरेशन
              <HiChevronDown
                className={` text-2xl mt-1 font-semibold transform ${
                  dropdownOpen ? "rotate-180" : ""
                } transition-transform`}
              />
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 text-white min-w-44 left-[-30px]  mt-2 bg-gradient-to-t from-[#ff914d] to-[#8c52ff]  rounded-md transition-all ease-in-out duration-200 opacity-100">
                <Link href="/option1" className="block px-4 py-2 text-nowrap">
                  ओपन एअर मंडप
                </Link>
                <Link href="/option2" className="block px-4 py-2 text-nowrap">
                  ट्रॅडिशनल मंडप
                </Link>
                <Link href="/option3" className="block px-4 py-2 text-nowrap">
                  लाईटिंग मंडप डेकोरेशन
                </Link>
                <Link href="/option3" className="block px-4 py-2 text-nowrap">
                  थीम बेस्ड मंडप डेकोरेशन
                </Link>
                <Link href="/option3" className="block px-4 py-2 text-nowrap">
                  फ्लोरल मंडप डेकोरेशन
                </Link>
              </div>
            )}
          </div>
          <Link href="/services" className="text-white font-semibold text-xl">
            साऊंड सिस्टीम
          </Link>
          <Link href="/services" className="text-white font-semibold text-xl">
            कॉन्टॅक्ट
          </Link>
        </div>
        <button onClick={toggleMenu} className="lg:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {menuOpen ? <hr className=" sm:hidden" /> : null}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden text-white space-y-4 p-4 mb-6 transition-all ease-in-out duration-300">
          <Link href="/" className="block py-1 ">
            होम
          </Link>
          <hr />
          <Link href="/about" className="block py-1 ">
            अबाऊट
          </Link>
          <hr />

          <div className="relative">
            <button
              className="w-full text-white py-2  flex items-center justify-between"
              onClick={toggleDropdown}
            >
              मंडप डेकोरेशन
              <HiChevronDown
                className={`ml-1 text-2xl transform ${
                  dropdownOpen ? "rotate-180" : ""
                } transition-transform`}
              />
            </button>
            {dropdownOpen && (
              <div className=" left-0 w-full text-white rounded-md mt-2 transition-all ease-in-out duration-200 opacity-100">
                <Link href="/option1" className="block px-4 py-2 text-nowrap">
                  ओपन एअर मंडप
                </Link>
                <Link href="/option2" className="block px-4 py-2 text-nowrap">
                  ट्रॅडिशनल मंडप
                </Link>
                <Link href="/option3" className="block px-4 py-2 text-nowrap">
                  लाईटिंग मंडप डेकोरेशन
                </Link>
                <Link href="/option3" className="block px-4 py-2 text-nowrap">
                  थीम बेस्ड मंडप डेकोरेशन
                </Link>
                <Link href="/option3" className="block px-4 py-2 text-nowrap">
                  फ्लोरल मंडप डेकोरेशन
                </Link>
              </div>
            )}
          </div>
          <hr />
          <Link href="/services" className="block py-1 ">
            साऊंड सिस्टीम
          </Link>
          <hr />
        </div>
      )}
    </nav>
  );
}
