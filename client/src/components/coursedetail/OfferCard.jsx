import React from 'react';
import blogImage from '../../assets/Group 22.png';

const OfferCard = ({ discount = '50%', badgeColor = 'bg-red-600', title = 'FOR INSTRUCTORS', description, image, imageUrl }) => {
  // Use imageUrl prop if provided, otherwise use the default image
  const cardImage = imageUrl || blogImage;
  
  return (
    <div className="relative w-[280px] sm:w-[300px] lg:w-[320px] h-[300px] sm:h-[320px] lg:h-[340px] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={cardImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
     
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 ${badgeColor} text-white text-sm sm:text-base font-bold px-4 sm:px-6 py-6 sm:py-8 rounded-md`}>
        {discount}
      </div>
      
      <div className="absolute bottom-4 sm:bottom-6 left-3 sm:left-4 right-3 sm:right-4 text-white">
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{title}</h3>
        <p className="text-xs sm:text-sm leading-relaxed line-clamp-3">
          {description || "TOTC's school management software helps traditional and online schools manage scheduling"}
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
