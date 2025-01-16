import Image from "next/image";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-12">
        माऊली मंडप डेकोरेटर्स - आमच्या सेवा
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Service 1 */}
        <div className="max-w-xs w-full bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/a0/5a/c7/a05ac797c8a98d26c6c7178a841a7d24--indian-wedding-decorations-indian-weddings.jpg"
              width={300}
              height={400}
              alt="name"
              className="w-full h-[215px]  object-cover p-3"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ओपन एअर मंडप
            </h3>
            <p className="text-gray-600 text-base mb-3">
              आम्ही तुमच्या कार्यक्रमासाठी ओपन एअर मंडप डेकोरेशनची उत्कृष्ट सेवा
              प्रदान करतो.
            </p>
            <Link
              href={"/mandap-decorations"}
              className="px-4 py-2 bg-gradient-to-t from-[#ff914d] to-[#8c52ff] text-white font-semibold rounded-lg hover:opacity-70 transition-all"
            >
              More About
            </Link>
          </div>
        </div>

        {/* Service 2 */}
        <div className="max-w-xs w-full bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img
              src={
                "https://i.pinimg.com/736x/d7/b4/e9/d7b4e9791da37e9b542aae337b10a527--wedding-mc-wedding-mandap.jpg"
              }
              width={300}
              height={400}
              alt="name"
              className="w-full h-[215px]  object-cover p-3"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ट्रॅडिशनल मंडप
            </h3>
            <p className="text-gray-600 text-base mb-3 line-clamp-2">
              आम्ही तुमच्या खास कार्यक्रमांसाठी पारंपारिक आणि भव्य ट्रॅडिशनल
              मंडप डेकोरेशन सेवा प्रदान करतो.
            </p>
            <Link
              href={"/mandap-decorations"}
              className="px-4 py-2 bg-gradient-to-t from-[#ff914d] to-[#8c52ff] text-white font-semibold rounded-lg hover:opacity-70 transition-all"
            >
              More About
            </Link>
          </div>
        </div>

        {/* Service 3 */}
        <div className="max-w-xs w-full bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/cf/e3/10/cfe310b101745d96f254ab0712bf6dd7.jpg"
              width={300}
              height={400}
              alt="name"
              className="w-full h-[215px]  object-cover p-3"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              लाईटिंग मंडप डेकोरेशन
            </h3>
            <p className="text-gray-600 text-base mb-3">
              आम्ही तुमच्या कार्यक्रमांसाठी आकर्षक लाईटिंग मंडप डेकोरेशन सेवा
              प्रदान करतो
            </p>
            <Link
              href={"/mandap-decorations"}
              className="px-4 py-2 bg-gradient-to-t from-[#ff914d] to-[#8c52ff] text-white font-semibold rounded-lg hover:opacity-70 transition-all"
            >
              More About
            </Link>
          </div>
        </div>
        {/* Service 3 */}
        <div className="max-w-xs w-full bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img
              src="https://i.pinimg.com/originals/16/41/27/16412737df2b522afa17fe2d4487edad.jpg"
              width={300}
              height={400}
              alt="name"
              className="w-full h-[215px]  object-cover p-3"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              थीम बेस्ड मंडप डेकोरेशन
            </h3>
            <p className="text-gray-600 text-base mb-3 line-clamp-2">
              आम्ही तुमच्या कार्यक्रमासाठी खास थीम बेस्ड मंडप डेकोरेशन तयार
              करतो, ज्यामध्ये विविध थीम्सच्या अनुरूप डिझाईन्स, रंगसंगती आणि
              सजावट यांचा वापर केला जातो.
            </p>
            <Link
              href={"/mandap-decorations"}
              className="px-4 py-2 bg-gradient-to-t from-[#ff914d] to-[#8c52ff] text-white font-semibold rounded-lg hover:opacity-70 transition-all"
            >
              More About
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
