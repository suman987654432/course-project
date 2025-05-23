import React from 'react';

const Cards = ({ image, badgeText, heading, description, large }) => {
  return (
    <div className={`flex ${large ? 'flex-col' : 'items-center flex-row'} bg-white p-4 w-full ${large ? 'max-w-full h-full' : 'max-w-4xl'} rounded-2xl mb-4 md:mb-0`}>
      <div className={`relative ${large ? 'w-full h-[200px] sm:h-[250px]' : 'w-28 sm:w-36 h-24 sm:h-28 min-w-[112px] sm:min-w-[144px]'} overflow-hidden rounded-2xl`}>
        <img
          src={image}
          alt="thumbnail"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute bottom-2 left-2 bg-[#3CCFCF] text-white text-xs font-semibold px-3 py-1 rounded-2xl">
          {badgeText}
        </div>
      </div>
      <div className={`${large ? 'mt-4' : 'ml-3 sm:ml-4'} flex flex-col justify-center overflow-hidden`}>
        <h2 className="text-[#202124] text-base md:text-xl font-semibold leading-snug line-clamp-2 overflow-hidden">
          {heading}
        </h2>
        <p className="text-[#5F6368] text-sm mt-2 line-clamp-2 overflow-hidden">{description}</p>
        {large && (
          <a href="#" className="text-[#473BF0] text-sm mt-4 inline-block">
            Read more
          </a>
        )}
      </div>
    </div>
  );
};

export default Cards;