import React from "react";
import { FaStar, FaClock } from "react-icons/fa";
import girl from "../../assets/girl.png";

const CourseRating = () => {
  const stars = [5, 4, 3, 2, 1];
  const ratings = [80, 60, 50, 50, 70];
  return (
    <div className="bg-[#9DCCFF4D] p-4 sm:p-6 rounded-3xl w-full max-w-2xl mt-10 sm:mt-20 mx-auto sm:mr-20">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
       
        <div className="bg-white rounded-xl p-4 w-full md:w-1/3 flex flex-col items-start justify-center shadow">
          <p className="text-xl sm:text-2xl font-bold">4 out of 5</p>
          <div className="flex text-yellow-400 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} className="text-sm sm:text-base" />
            ))}
          </div>
          <p className="text-xs sm:text-sm mt-2 text-gray-500">Top Raiting</p>
        </div>

  
        <div className="flex-1">
          {stars.map((star, idx) => (
            <div key={star} className="flex items-center mb-2 gap-2 sm:gap-3">
              <div className="flex items-center w-16 sm:w-20">
                <span className="mr-1 text-sm sm:text-base">{star}</span>
                <div className="flex text-yellow-400 text-xs sm:text-sm">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i <= star ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="bg-gray-300 rounded-full w-full h-1.5 sm:h-2 overflow-hidden">
                <div
                  className="bg-[#49BBBD] h-full"
                  style={{ width: `${ratings[idx]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {[1, 2].map((item) => (
        <div key={item} className="mt-4 sm:mt-6 border-t pt-3 sm:pt-4">
          <div className="flex gap-3 sm:gap-4 items-start">
            <img
              src={girl}
              alt="Reviewer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-1 sm:gap-2">
                <p className="font-semibold text-sm sm:text-base">Lina</p>
                <div className="flex text-yellow-400 text-xs sm:text-sm">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
            </div>
            <div className="flex items-center text-xs sm:text-sm text-gray-400 gap-1 whitespace-nowrap">
              <FaClock className="text-xs" /> 3 Month
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseRating;
