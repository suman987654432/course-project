import React from 'react'
import image from "../../assets/detailpage.png";
import girl from "../../assets/girl.png"

const Hero = () => {
  return (
    <>
    <div className="w-full bg-white pt-16 md:pt-19">
      <div className="w-full relative">
        <div className="w-full overflow-hidden">
          <img
            src={image}
            alt="course"
            className="w-full h-[70vh] object-cover"
          />
        </div>
      </div>
    </div>
    <div className="w-full bg-white pt-16 md:pt-19">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
       
        <h1 className="text-xl md:text-4xl lg:text-3xl font-semibold text-indigo-800 mb-6">
          Why Swift UI Should Be on the Radar of Every Mobile Developer
        </h1>
    
        <div className="my-8">
          <p className="text-gray-700 mb-6">
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
          </p>
          <p className="text-gray-700 mb-6">
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
          </p>
          <p className="text-gray-700 mb-6">
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
            TOTC is a platform
          </p>
          <p className="text-gray-700 mb-6">
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 my-6 ">
          <span className="px-4 py-1 bg-green-50 text-green-700 rounded-full text-sm cursor-pointer">affordable</span>
          <span className="px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm cursor-pointer">Stunning</span>
          <span className="px-4 py-1 bg-green-50 text-green-700 rounded-full text-sm cursor-pointer">making</span>
          <span className="px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm cursor-pointer">madbrwns</span>
        </div>
        
        <div className="flex items-center justify-between border-t pt-6 mt-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
              <img src={girl} alt="Author" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Written by</p>
              <p className="font-medium">Lina</p>
            </div>
          </div>
          <button className="border-[2px] border-[#49BBBD] text-teal-700 px-7 py-3 rounded-lg transition-colors">

            Follow
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
