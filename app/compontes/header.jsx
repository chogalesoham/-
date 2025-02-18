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
    <nav className=" bg-[#FEF9F2] bg-gradient-to-t from-[#ff914d] to-[#8c52ff] py-1 px-4 shadow-lg transition-all ease-in-out duration-300">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"} className="text-black text-lg font-semibold">
          <Image
            src={Logo}
            width={300}
            height={60}
            alt="Logo"
            className="w-64 h-auto object-cover"
          />
        </Link>

        <div className="lg:flex hidden space-x-8 items-center">
          <Link href="/" className="text-black font-semibold text-xl">
            होम
          </Link>
          <Link href="/about" className="text-black font-semibold text-xl">
            अबाऊट
          </Link>
          <div onClick={() => setMenuOpen(false)} className="relative">
            <Link
              href={"/mandap-decorations"}
              className="text-black font-semibold text-xl flex items-center "
            >
              मंडप डेकोरेशन
              <HiChevronDown
                onClick={toggleDropdown}
                className={` text-2xl mt-1 font-semibold transform ${
                  dropdownOpen ? "rotate-180" : ""
                } transition-transform`}
              />
            </Link>
            {dropdownOpen && (
              <div className="absolute z-10 text-black min-w-44 left-[-30px]  mt-2 bg-gradient-to-t from-[#ff914d] to-[#8c52ff]  rounded-md transition-all ease-in-out duration-200 opacity-100">
                <Link
                  href="/mandap-decorations"
                  className="block px-4 py-2 text-nowrap"
                >
                  ओपन एअर मंडप
                </Link>
                <Link
                  href="/mandap-decorations"
                  className="block px-4 py-2 text-nowrap"
                >
                  ट्रॅडिशनल मंडप
                </Link>
                <Link
                  href="/mandap-decorations"
                  className="block px-4 py-2 text-nowrap"
                >
                  लाईटिंग मंडप डेकोरेशन
                </Link>
                <Link
                  href="/mandap-decorations"
                  className="block px-4 py-2 text-nowrap"
                >
                  थीम बेस्ड मंडप डेकोरेशन
                </Link>
                <Link
                  href="/mandap-decorations"
                  className="block px-4 py-2 text-nowrap"
                >
                  फ्लोरल मंडप डेकोरेशन
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/sound-system"
            className="text-black font-semibold text-xl"
          >
            साऊंड सिस्टीम
          </Link>
          <Link href="/contact" className="text-black font-semibold text-xl">
            कॉन्टॅक्ट
          </Link>
        </div>
        <button onClick={toggleMenu} className="lg:hidden text-black">
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
        <div className="lg:hidden text-black space-y-4 p-4 mb-6 transition-all ease-in-out duration-300">
          <Link
            onClick={() => setMenuOpen(false)}
            href="/"
            className="block py-1 "
          >
            होम
          </Link>
          <hr />
          <Link
            onClick={() => setMenuOpen(false)}
            href="/about"
            className="block py-1 "
          >
            अबाऊट
          </Link>
          <hr />

          <div className="relative">
            <div className=" flex w-full">
              <Link
                onClick={() => setMenuOpen(false)}
                href={"/mandap-decorations"}
                className="w-full text-black py-2  flex items-center justify-between"
              >
                मंडप डेकोरेशन
              </Link>
              <HiChevronDown
                onClick={toggleDropdown}
                className={`ml-1 p-[2px] text-2xl rounded-lg bg-white text-black transform ${
                  dropdownOpen ? "rotate-180" : ""
                } transition-transform`}
              />
            </div>
            {dropdownOpen && (
              <div className=" left-0 w-full text-black rounded-md mt-2 transition-all ease-in-out duration-200 opacity-100">
                <Link
                  onClick={() => setMenuOpen(false)}
                  href="/mandap-decorations"
                  className="block px-4 py-2 text-nowrap"
                >
                  ओपन एअर मंडप
                </Link>
                <Link
                  onClick={() => setMenuOpen(false)}
                  href="/mandap-decorations"
                  className="block px-4 py-2 text-nowrap"
                >
                  ट्रॅडिशनल मंडप
                </Link>
                <Link
                  onClick={() => setMenuOpen(false)}
                  href="/mandap-decorations"
                  className="block px-4 py-2 text-nowrap"
                >
                  लाईटिंग मंडप डेकोरेशन
                </Link>
                <Link
                  onClick={() => setMenuOpen(false)}
                  href="/mandap-decorations"
                  className="block px-4 py-2 text-nowrap"
                >
                  थीम बेस्ड मंडप डेकोरेशन
                </Link>
                <Link
                  onClick={() => setMenuOpen(false)}
                  href="/mandap-decorations"
                  className="block px-4 py-2 text-nowrap"
                >
                  फ्लोरल मंडप डेकोरेशन
                </Link>
              </div>
            )}
          </div>
          <hr />
          <Link
            onClick={() => setMenuOpen(false)}
            href="/sound-system"
            className="block py-1 "
          >
            साऊंड सिस्टीम
          </Link>
          <hr />
          <Link
            onClick={() => setMenuOpen(false)}
            href="/contact"
            className="block py-1 "
          >
            कॉन्टॅक्ट
          </Link>
        </div>
      )}
    </nav>
  );
}
