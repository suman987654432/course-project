
import { FaCheckCircle, FaCamera, FaFileAlt, FaChartBar } from "react-icons/fa";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

const CourseIncludedShare = () => {
  return (
    <div className="space-y-4 text-sm text-gray-600 p-4 max-w-sm ml-5">
      <div className="border-t border-gray-400 pt-4 ">
        <h2 className="text-lg font-bold mb-4 text-black">This Course included</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#49BBBD]" />
            <span>Money Back Guarantee</span>
          </li>
          <li className="flex items-center gap-2">
            <FaCamera className="text-[#49BBBD]" />
            <span>Access on all devices</span>
          </li>
          <li className="flex items-center gap-2">
            <FaFileAlt className="text-[#49BBBD]" />
            <span>Certification of completion</span>
          </li>
          <li className="flex items-center gap-2">
            <FaChartBar className="text-[#49BBBD]" />
            <span>32 Moduls</span>
          </li>
        </ul>
      </div>

      <div className="border-t border-gray-300 pt-4">
        <h2 className="text-lg font-bold text-black mb-1">Training 5 or more people</h2>
        <p className="text-sm text-gray-500">
          Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively…
        </p>
      </div>

      <div className="border-t border-gray-300 pt-4">
        <h2 className="text-lg font-bold text-black mb-2">Share this course</h2>
        <div className="flex gap-4 text-xl">
          <FaTwitter className="text-[#444] hover:text-[#1DA1F2] cursor-pointer" />
          <FaFacebookF className="text-[#444] hover:text-[#4267B2] cursor-pointer" />
          <FaYoutube className="text-[#444] hover:text-[#FF0000] cursor-pointer" />
          <FaInstagram className="text-[#444] hover:text-[#C13584] cursor-pointer" />
          <FaTelegram className="text-[#444] hover:text-[#0088cc] cursor-pointer" />
          <FaWhatsapp className="text-[#444] hover:text-[#25D366] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CourseIncludedShare;
