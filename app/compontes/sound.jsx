import Image from "next/image";
import React from "react";

const Sound = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-purple-200 to-blue-200 w-full py-20">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <div
          className="max-w-7xl mx-auto text-center animate-fadeInUp"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            माऊली मंडप डेकोरेटर्स - आमच्याविषयी
          </h2>

          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-justify md:text-center mb-12">
            <strong className="text-purple-600">
              आपल्या कार्यक्रमासाठी आदर्श साऊंड अनुभव, माऊली मंडप डेकोरेटर्स
              ॲण्ड साऊंड सिस्टमसोबत!
            </strong>{" "}
            आपल्या खास कार्यक्रमांमध्ये योग्य साऊंड सिस्टमची महत्त्वपूर्ण भूमिका
            असते. माऊली मंडप डेकोरेटर्स ॲण्ड साऊंड सिस्टम आपल्या प्रत्येक
            कार्यक्रमासाठी उत्कृष्ट साऊंड अनुभव प्रदान करते. आमच्याकडे सर्व
            प्रकारच्या कार्यक्रमांसाठी उच्च दर्जाचे साऊंड उपकरणे आणि तज्ञ साऊंड
            इंजिनीअर्स उपलब्ध आहेत.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <Image
              src="https://www.kv2audio.com/files/kv2audio/images/news/1260x1260-1499686612-pass2.jpeg"
              alt="Sound System 1"
              className="w-full h-64 object-cover"
              width={400}
              height={256}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <Image
              src="https://cdn.culture.ru/images/da8dcf5f-2cdd-500b-ada6-1cb99aace278"
              alt="Sound System 2"
              className="w-full h-64 object-cover"
              width={400}
              height={256}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <Image
              src="https://muzdelo.ru/images/products/pages_page/0/839_cb26f362058e554d0e812313d91567c5.jpg"
              alt="Sound System 3"
              className="w-full h-64 object-cover"
              width={400}
              height={256}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/58d7bdf059cc68feaa4d88bc/1628442816429-WJF2FCJ4PH7XP1CFO787/hotoshoot39.jpg"
              alt="Sound System 4"
              className="w-full h-64 object-cover"
              width={400}
              height={256}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sound;
