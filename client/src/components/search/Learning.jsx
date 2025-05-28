import rightimage from '../../assets/rightimage.png';
import { useNavigate } from 'react-router-dom';

const Learning = () => {
  const navigate = useNavigate();
  const handleStartLearning = () => {
    navigate('/courses');
  };
  return (
    <div className="mx-auto max-w-7xl bg-[#F4F9FD] py-10 px-4 md:py-16 rounded-xl my-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
       
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2D3748] mb-6">
              Know about learning<br />
              learning platform
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 rounded-full bg-[#55EFC4] mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Free E-book, video & consolation</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 rounded-full bg-[#55EFC4] mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Top instructors from around world</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 rounded-full bg-[#55EFC4] mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Top courses from your team</span>
              </li>
            </ul>

            <button 
              onClick={handleStartLearning}
              className="mt-8 bg-[#49BBBD] text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              Start learning now
            </button>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative">
              <div className="rounded-lg p-3 relative z-10">
                <img 
                  src={rightimage} 
                  alt="Learning platform" 
                  className="rounded-lg w-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;