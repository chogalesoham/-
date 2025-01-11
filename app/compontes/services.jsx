import Image from "next/image";

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
              src="https://i.pinimg.com/originals/90/33/c1/9033c121180cae5dc7103bb750c849d8.jpg"
              width={300}
              height={400}
              alt="name"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              मंडप डेकोरेशन
            </h3>
            <p className="text-gray-600 text-base mb-6">
              विवाह, धार्मिक समारंभ, वर्धापन दिन आणि इतर महत्त्वाच्या
              समारंभांसाठी खास सजावट.
            </p>
            <button className="px-4 py-2 bg-gradient-to-t from-[#ff914d] to-[#8c52ff] text-white font-semibold rounded-lg hover:opacity-70 transition-all">
              More About
            </button>
          </div>
        </div>

        {/* Service 2 */}
        <div className="max-w-xs w-full bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img
              src={
                "https://i.pinimg.com/originals/90/33/c1/9033c121180cae5dc7103bb750c849d8.jpg"
              }
              width={300}
              height={400}
              alt="name"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              मंडप डेकोरेशन
            </h3>
            <p className="text-gray-600 text-base mb-6">
              विवाह, धार्मिक समारंभ, वर्धापन दिन आणि इतर महत्त्वाच्या
              समारंभांसाठी खास सजावट.
            </p>
            <button className="px-4 py-2 bg-gradient-to-t from-[#ff914d] to-[#8c52ff] text-white font-semibold rounded-lg hover:opacity-70 transition-all">
              More About
            </button>
          </div>
        </div>

        {/* Service 3 */}
        <div className="max-w-xs w-full bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img
              src="https://i.pinimg.com/originals/90/33/c1/9033c121180cae5dc7103bb750c849d8.jpg"
              width={300}
              height={400}
              alt="name"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              मंडप डेकोरेशन
            </h3>
            <p className="text-gray-600 text-base mb-6">
              विवाह, धार्मिक समारंभ, वर्धापन दिन आणि इतर महत्त्वाच्या
              समारंभांसाठी खास सजावट.
            </p>
            <button className="px-4 py-2 bg-gradient-to-t from-[#ff914d] to-[#8c52ff] text-white font-semibold rounded-lg hover:opacity-70 transition-all">
              More About
            </button>
          </div>
        </div>
        {/* Service 3 */}
        <div className="max-w-xs w-full bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img
              src="https://i.pinimg.com/originals/90/33/c1/9033c121180cae5dc7103bb750c849d8.jpg"
              width={300}
              height={400}
              alt="name"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              मंडप डेकोरेशन
            </h3>
            <p className="text-gray-600 text-base mb-6">
              विवाह, धार्मिक समारंभ, वर्धापन दिन आणि इतर महत्त्वाच्या
              समारंभांसाठी खास सजावट.
            </p>
            <button className="px-4 py-2 bg-gradient-to-t from-[#ff914d] to-[#8c52ff] text-white font-semibold rounded-lg hover:opacity-70 transition-all">
              More About
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
