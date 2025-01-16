import React from "react";

const ServicesSections = () => {
  return (
    <section className=" bg-gradient-to-r from-pink-100/50 via-purple-100/50 to-blue-100/50 w-full">
      <div className=" py-12 px-6 lg:px-20 container mx-auto " id="about-us">
        <div
          className="max-w-7xl mx-auto text-center animate-fadeInUp"
          data-aos="fade-up"
        >
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-justify md:text-center">
            <strong>माऊली मंडप डेकोरेटर्स ॲण्ड साऊंड सिस्टम</strong> अ‍ॅप "माऊली
            मंडप डेकोरेटर्स मध्ये, आम्ही तुमच्या विशेष प्रसंगी आकर्षक आणि
            अविस्मरणीय मंडप डेकोरेशन सेवा प्रदान करतो. आमच्या टीमकडून उच्च
            दर्जाची सेवा, आकर्षक डिझाईन्स आणि व्यक्तिचित्रित समाधान मिळवून
            तुमच्या कार्यक्रमाला खास बनवा. आम्ही विवाह, धार्मिक कार्यकम, सण, आणि
            अन्य प्रत्येक खास प्रसंगासाठी खास डेकोरेशन सेवा देतो."
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105"
            data-aos="zoom-in"
          >
            <img
              src="https://avatars.mds.yandex.net/i?id=db1da1a30aff48c35880ed74b807d25d_l-4438551-images-thumbs&ref=rim&n=13&w=1039&h=544"
              className=" h-52 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              विवाह डेकोरेशन
            </h3>
            <p className="text-gray-600">
              तुमच्या लग्नाचा दिवस खास बनवण्यासाठी आकर्षक आणि अभूतपूर्व मंडप
              डेकोरेशन.
            </p>
          </div>

          {/* Service Card 2 */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105"
            data-aos="zoom-in"
          >
            <img
              src="https://i.ytimg.com/vi/_jmSKgMbb9U/maxresdefault.jpg"
              className=" h-52 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              धार्मिक कार्यकम डेकोरेशन
            </h3>
            <p className="text-gray-600">
              धार्मिक कार्यक्रमांना भक्तिमय वातावरणासाठी सुशोभित मंडप सेटअप.
            </p>
          </div>

          {/* Service Card 3 */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105"
            data-aos="zoom-in"
          >
            <img
              src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/06/serene-mehndi-event.jpg"
              className=" h-52 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              सण आणि उत्सव डेकोरेशन
            </h3>
            <p className="text-gray-600">
              विविध सणांसाठी रंगीबेरंगी आणि पारंपारिक डेकोरेशन.
            </p>
          </div>

          {/* Service Card 4 */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105"
            data-aos="zoom-in"
          >
            <img
              src="https://4.bp.blogspot.com/-zxkiqh-CpRc/TfSeaIEKCWI/AAAAAAAAAHk/AML_CDTCdi0/s1600/DSC_1046.jpg"
              className=" h-52 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              कार्पोरेट इव्हेंट डेकोरेशन
            </h3>
            <p className="text-gray-600">
              ऑफिस किंवा संस्थांच्या कार्यक्रमांसाठी प्रोफेशनल आणि आकर्षक
              डेकोरेशन.
            </p>
          </div>

          {/* Service Card 5 */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105"
            data-aos="zoom-in"
          >
            <img
              src="https://i.pinimg.com/originals/d1/9c/a7/d19ca722da1bed83525dd8285168b8ce.jpg"
              className=" h-52 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              वैयक्तिक कार्यक्रम डेकोरेशन
            </h3>
            <p className="text-gray-600">
              बर्थडे, ऍनिव्हर्सरी आणि इतर खास प्रसंगांसाठी विशेष डेकोरेशन.
            </p>
          </div>

          {/* Service Card 5 */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105"
            data-aos="zoom-in"
          >
            <img
              src="https://i.pinimg.com/originals/9c/f0/c9/9cf0c931e5046991bf444be87064029f.jpg"
              className=" h-52 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              Customized डेकोरेशन
            </h3>
            <p className="text-gray-600">
              तुमच्या इच्छेनुसार खास, अनोखे आणि आकर्षक डेकोरेशन सेटअप.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSections;
