import model from "../../assets/model.png";
import { Link } from "react-router-dom";
const creatorsData = [
  {
    id: 1,
    name: "Jane Cooper",
    image: model,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  },
  {
    id: 2,
    name: "Adam",
    image: model,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  },
  {
    id: 3,
    name: "Tamara",
    image: model,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  },
  {
    id: 4,
    name: "Jane Cooper",
    image: model,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  },
  {
    id: 5,
    name: "Jane Cooper",
    image: model,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  },
  {
    id: 6,
    name: "Jane Cooper",
    image: model,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  }
];

const CreatorCard = ({ creator }) => {
  return (
    <div className="flex justify-center items-center py-8 px-4">
      <div className="relative w-full">
     
        <div className="bg-white rounded-lg p-12 pt-[calc(30%+40px)] pb-6 w-full relative z-10 text-center"
             style={{ boxShadow: '0 10px 25px 0 rgba(0, 0, 0, 0.25)' }}>
          <h3 className="text-lg font-semibold text-[#1C1C4E] mb-2">{creator.name}</h3>
          <p className="text-sm text-gray-500">
            {creator.description}
          </p>
        </div>
        
       
        <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[60%] z-20 flex justify-center">
          <div className="overflow-hidden w-full">
            <img src={creator.image} alt={creator.name} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Creators = () => {
  return (
    <div className="py-10 px-4 md:px-8 lg:px-16 bg-white">
   
      <div className="flex justify-between items-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-20 text-[#1C1C4E]">Classes taught by real creators</h2>
        <Link to="/all-creators" className="text-teal-500 hover:text-teal-600 mb-20">See all</Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 max-w-7xl mx-auto">
        {creatorsData.map(creator => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
};

export default Creators;
