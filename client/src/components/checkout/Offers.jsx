import OfferCard from '../coursedetail/OfferCard';
import girl from '../../assets/image.png';
import zoom from '../../assets/laptop.png';
import ceo from '../../assets/ceo.png';

const offerData = [
  {
    discount: '50%',
    badgeColor: 'bg-[#49BBBD]',
    title: 'FOR INSTRUCTORS',
    description: 'TOTC\'s school management software helps traditional and online schools manage scheduling.',
    imageUrl: girl
  },
  {
    discount: '30%',
    badgeColor: 'bg-[#49BBBD]',
    title: 'FOR STUDENTS',
    description: 'Access premium learning content and improve your skills with our specialized student offers.',
    imageUrl: zoom
  },
  {
    discount: '25%',
    badgeColor: 'bg-[#49BBBD]',
    title: 'FOR DEVELOPERS',
    description: 'Level up your coding skills with our technical courses and real-world projects.',
    imageUrl: ceo
  }
];

const Offers = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 px-2 sm:px-6 lg:px-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-0">Top Education offers and deals are listed here</h2>
        <a href="#" className="text-[#49BBBD] font-medium hover:underline">See all</a>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 sm:gap-4 md:gap-6 lg:gap-8">
        {offerData.map((offer, index) => (
          <div key={index} className="mx-auto mb-6 sm:mb-0">
            <OfferCard 
              discount={offer.discount}
              badgeColor={offer.badgeColor}
              title={offer.title}
              description={offer.description}
              imageUrl={offer.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;