import React from 'react';
import OfferCard from './OfferCard';

const Offer = () => {
  return (
    <div className="px-6 py-10 flex flex-col items-center">
      <div className="flex justify-between items-center mb-8 w-full max-w-6xl">
        <h2 className="text-xl font-semibold">
          Top Education offers and deals are listed here
        </h2>
         <a href="#" className="text-[#3ccbc6] font-medium text-sm sm:text-base mr-0 sm:mr-2 md:mr-4 lg:mr-6">See all</a>
      </div>

      <div className="flex flex-wrap gap-20 justify-center w-full max-w-6xl">
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </div>
  );
};

export default Offer;
