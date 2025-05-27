import React, { useState, useRef, useEffect } from 'react';
import studentImage from '../../assets/girl.png'; // Adjust the path as necessary

const testimonials = [
  {
    id: 1,
    name: 'Bulkin Simons',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    image: studentImage,
  },
  {
    id: 2,
    name: 'Bulkin Simons',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    image: studentImage,
  },
  {
    id: 3,
    name: 'Bulkin Simons',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    image: studentImage,
  },
  {
    id: 4,
    name: 'Bulkin Simons',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    image: studentImage,
  },
  {
    id: 5,
    name: 'Bulkin Simons',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    image: studentImage,
  },
  {
    id: 6,
    name: 'Bulkin Simons',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    image: studentImage,
  },
];

const Students = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const maxIndex = Math.max(0, testimonials.length - slidesPerView);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 bg-[#EDF7FA]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-10 text-center md:text-left">
          What our students have to say
        </h2>
        
        <div className="relative px-4 md:px-0">
    
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={`w-full px-2`}
                  style={{ minWidth: `${100/slidesPerView}%` }}
                >
                  <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md h-full flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{testimonial.name}</h3>
                    <p className="text-center text-gray-600 text-xs sm:text-sm">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          

          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 -left-2 sm:-left-4 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#49BBBD] text-white shadow-md ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#3da7a9]'}`}
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute top-1/2 -right-2 sm:-right-4 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#49BBBD] text-white shadow-md ${currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#3da7a9]'}`}
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Students;