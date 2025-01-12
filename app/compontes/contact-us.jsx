import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100/50 via-purple-100/50 to-blue-100/50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-12">
          माऊली मंडप डेकोरेटर्स - संपर्क साधा
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          {/* Image Section */}
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <img
                  src="https://i.pinimg.com/736x/30/2c/c3/302cc3ad940c7bf7f1102ea6b99f6906.jpg"
                  alt="ContactUs"
                  className="w-full  lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 h-[400px]  md:h-[500px]"
                />

                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg block  shadow-xl">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60870.34728189115!2d73.48182265987262!3d17.536289488381744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2062c95f6f0ff%3A0x55c667ba59237eed!2sChiplun%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1736605603600!5m2!1sen!2sin"
                      className=" w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl h-[490px] md:h-[500px] shadow-2xl border">
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-300 focus:outline-none pl-4 mb-10"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-300 focus:outline-none pl-4 mb-10"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-300 focus:outline-none pl-4 mb-10"
              placeholder="Phone"
            />
            <textarea
              rows={3}
              className="w-full  text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-lg border border-gray-300 focus:outline-none pl-4 mb-10"
              placeholder="Message"
            ></textarea>
            <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:opacity-60 bg-gradient-to-t from-[#ff914d] to-[#8c52ff] shadow-sm">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
