import React from 'react';
import blogImage from '../../assets/Group 22.png';

const OfferCard = () => {
  return (
    <div className="relative w-[320px] h-[340px] bg-white rounded-xl overflow-hidden ">
      <img
        src={blogImage}
        alt="Instructor"
        className="absolute inset-0 w-full h-full object-cover"
      />
     
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      +
      <div className="absolute top-4 left-4 bg-red-600 text-white text-base font-bold px-6 py-8 rounded-md">
        50%
      </div>
      
     
      <div className="absolute bottom-6 left-4 right-4 text-white">
        <h3 className="text-xl font-bold mb-3">FOR INSTRUCTORS</h3>
        <p className="text-sm leading-relaxed">
          TOTC’s school management software helps traditional and online schools manage scheduling,
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
