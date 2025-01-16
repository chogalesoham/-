import React from "react";

const AboutUs = () => {
  return (
    <section className=" bg-gradient-to-r from-pink-100/50 via-purple-100/50 to-blue-100/50 w-full">
      <div className=" py-12 px-6 lg:px-20 container mx-auto " id="about-us">
        <div
          className="max-w-7xl mx-auto text-center animate-fadeInUp"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-12">
            माऊली मंडप डेकोरेटर्स - आमच्याविषयी
          </h2>

          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-justify md:text-center">
            <strong>माऊली मंडप डेकोरेटर्स ॲण्ड साऊंड सिस्टम</strong> अ‍ॅप
            तुम्हाला तुमच्या खास प्रसंगांसाठी परिपूर्ण डेकोरेशन आणि साऊंड
            सिस्टीम सेवा बुक करण्याची सुविधा देते. आमच्या अ‍ॅपद्वारे तुम्ही
            विविध प्रकारच्या मंडप सजावट, साऊंड सिस्टीम, लाईटिंग आणि इव्हेंट
            प्लॅनिंग सेवांबद्दल माहिती मिळवू शकता. तुमच्या बजेटनुसार व गरजेनुसार
            सेवा निवडून सोप्या पद्धतीने बुकिंग करा आणि तुमच्या कार्यक्रमाला खास
            बनवा!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105"
            data-aos="zoom-in"
          >
            <img
              src="https://i.pinimg.com/originals/3b/8e/b9/3b8eb9f2e21505c3efa7614f0294f246.jpg"
              className=" h-52 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              मंडप सजावट
            </h3>
            <p className="text-gray-600">
              पारंपरिक व आधुनिक डिझाईन्समध्ये तुमच्या कार्यक्रमासाठी सुंदर मंडप
              सजावट करा.
            </p>
          </div>

          {/* Service Card 2 */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105"
            data-aos="zoom-in"
          >
            <img
              src="https://pr6.zoon.ru/9uw7ihi591hK1-431VomHg/1067x800,q85/m1Jq9eebe_hDXUnqSCJ7ej_JWpzJc28jiOkrSaHC6gmmidhTHLKM8Y92Vew32CQNOhMiAXlmsBUMHwxP8xU5PNWnJdUSssRCNNqrRtM2IiA"
              className=" h-52 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              साऊंड सिस्टीम
            </h3>
            <p className="text-gray-600">
              उच्च-गुणवत्तेची साऊंड सिस्टीम आपल्या संगीत कार्यक्रमांना जीवंत
              बनवा.
            </p>
          </div>

          {/* Service Card 3 */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105"
            data-aos="zoom-in"
          >
            <img
              src="https://i.ytimg.com/vi/u77JAyHczt0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AG-B4AC0AWKAgwIABABGFsgKSh_MA8=&amp;rs=AOn4CLBQ2CywY99jCY5s84etdn1zb9m85A"
              className=" h-52 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              लाईटिंग आणि इव्हेंट प्लॅनिंग
            </h3>
            <p className="text-gray-600">
              आकर्षक लाईटिंग आणि इव्हेंट प्लॅनिंगसह तुमच्या प्रसंगाला वळण द्या.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
