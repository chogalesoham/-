import React from "react";
import { IoIosHome } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="flex w-full container mx-auto items-center justify-center py-16 px-6 gap-6 flex-col lg:flex-row my-4">
      {/* Address Card */}
      <div className="flex flex-col items-center justify-start gap-4 border-2 border-orange-500 rounded-lg p-6 bg-gradient-to-r from-orange-50 via-white to-orange-50 shadow-lg transition-transform transform hover:scale-105 w-full md:w-[30%]">
        <IoIosHome className="text-6xl text-orange-500" />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Address</h2>
          <p className="text-gray-600">
            4671 Sugar Camp Road, Owatonna, Minnesota, 55060
          </p>
        </div>
      </div>

      {/* Phone Card */}
      <div className="flex flex-col items-center justify-start gap-4 border-2 border-orange-500 rounded-lg p-6 bg-gradient-to-r from-orange-50 via-white to-orange-50 shadow-lg transition-transform transform hover:scale-105 w-full md:w-[30%]">
        <FaSquarePhone className="text-5xl text-orange-500" />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Phone No</h2>
          <p className="text-gray-600">+91 25325 25352</p>
          <p className="text-gray-600">+91 25325 25352</p>
        </div>
      </div>

      {/* Email Card */}
      <div className="flex flex-col items-center justify-start gap-4 border-2 border-orange-500 rounded-lg p-6 bg-gradient-to-r from-orange-50 via-white to-orange-50 shadow-lg transition-transform transform hover:scale-105 w-full md:w-[30%]">
        <MdEmail className="text-5xl text-orange-500" />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Email Id</h2>
          <p className="text-gray-600">chogaleswapnil04@gmail.com</p>
          <p className="text-gray-600">maulimandap@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
