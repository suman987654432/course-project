import React from "react";
import image from "../../assets/detailpage.png";
import { useNavigate } from "react-router-dom";

const CourseCard = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/membership");
  };

  return (
    <div className="w-[300px] rounded-lg border-[15px] border-white  overflow-hidden">
      <img
        src={image}
        alt="Course"
        className="w-full h-[170px] object-cover"
      />

      <div className="p-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">$49.65</span>
          <span className="text-gray-500 line-through text-sm">$99.99</span>
          <span className="text-sm text-gray-500">50% Off</span>
        </div>
        <p className="text-center text-sm text-cyan-600 mt-2">
          11 hour left at this price
        </p>
      </div>

      <div className="px-4 pb-4">
        <button
          className="w-full bg-[#49BBBD] text-white font-semibold py-2 rounded-md"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
