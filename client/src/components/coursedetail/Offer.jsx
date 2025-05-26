
import OfferCard from './OfferCard';

const Offer = () => {
  return (
    <div className="px-4 sm:px-6 py-8 sm:py-10 flex flex-col items-center">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 w-full max-w-6xl">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-0">
          Top Education offers and deals are listed here
        </h2>
        <a 
          href="#" 
          className="text-[#3ccbc6] font-medium text-sm sm:text-base flex items-center hover:underline transition-all"
        >
          See all
          
          
        </a>
      </div>

      <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-16 lg:gap-20 justify-center w-full max-w-6xl">
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </div>
  );
};

export default Offer;
