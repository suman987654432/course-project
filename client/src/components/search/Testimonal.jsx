import review from "../../assets/review.png";
import model from "../../assets/model.png";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="bg-[#EAF6FF] py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-left text-[#252641] max-w-7xl mx-auto">
        What our students have to say
      </h2>
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between shadow-lg max-w-7xl mx-auto">
        <div className="relative w-full sm:w-2/5 flex justify-center mb-6 sm:mb-0">
          <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden z-10">
            <img
              src={review}
              alt="review"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#1C1C4E] mb-1">
              Savannah Nguyen
            </h3>
            <p className="text-md text-[#49BBBD] mb-6">
              tanya.hill@example.com
            </p>
            <p className="text-sm text-[#696984] leading-relaxed mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <p className="text-sm text-[#696984] leading-relaxed mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <p className="text-sm text-[#696984] leading-relaxed mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>

          <div className="flex gap-3 mt-4 sm:mt-6">
            <a
              href="#"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#49BBBD] flex items-center justify-center text-white"
            >
              <FaTwitter size={14} className="sm:text-base" />
            </a>
            <a
              href="#"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#49BBBD] flex items-center justify-center text-white"
            >
              <FaFacebook size={14} className="sm:text-base" />
            </a>
            <a
              href="#"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#49BBBD] flex items-center justify-center text-white"
            >
              <FaInstagram size={14} className="sm:text-base" />
            </a>
          </div>
        </div>

        {/* Side reviewer avatars - hidden on mobile, visible from sm breakpoint */}
        <div className="hidden sm:flex flex-col gap-3 md:gap-4 ml-4 md:ml-6 lg:ml-8">
          {[1, 2, 3, 4].map((_, idx) => (
            <div
              key={idx}
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full ${
                idx === 0
                  ? "border-2 border-[#49BBBD]"
                  : "border border-gray-200"
              } overflow-hidden`}
            >
              <img
                src={model}
                alt="review person"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile dots navigation */}
      <div className="flex justify-center gap-2 mt-4 sm:hidden">
        {[1, 2, 3, 4].map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === 0 ? "bg-[#49BBBD]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
