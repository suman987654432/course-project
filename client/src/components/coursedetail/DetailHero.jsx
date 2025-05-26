import React from 'react'
import image from "../../assets/detailpage.png";
import CourseCard from './CourseCard';
import CourseButton from './CourseButton';
import CourseIncludedShare from './courseIncluded';
import CourseRating from './CourseRating';

const DetailHero = () => {
  return (
    <div className="w-full bg-white pt-16 md:pt-19">
      <div className="w-full relative">
        <div className="w-full overflow-hidden">
          <img
            src={image}
            alt="course"
            className="w-full h-[70vh] object-cover"
          />
        </div>
        
        {/* Course info section with price card */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="lg:w-2/3">
             
              
              <div className="mt-20">
                <CourseButton />
              </div>
              <div className="mt-8">
                <CourseRating />
              </div>
            </div>
            
            <div className="lg:w-1/3 flex justify-end">
              <div className="mt-8 lg:-mt-32 z-10">
                <CourseCard />
                <CourseIncludedShare/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHero;
