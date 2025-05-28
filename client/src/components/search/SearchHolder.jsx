import image from '../../assets/search.png';
import { useState, useEffect } from 'react';

const SearchHolder = () => {
    const [placeholder, setPlaceholder] = useState("Search courses");

    useEffect(() => {
        const updatePlaceholder = () => {
            if (window.innerWidth < 480) {
                setPlaceholder("Search");
            } else if (window.innerWidth < 640) {
                setPlaceholder("Search courses");
            } else {
                setPlaceholder("Search your favourite course");
            }
        };

        updatePlaceholder();
        window.addEventListener('resize', updatePlaceholder);
        return () => window.removeEventListener('resize', updatePlaceholder);
    }, []);

    return (
        <div
            className="w-full bg-cover bg-center py-8 sm:py-12 md:py-16 px-2 sm:px-4 relative mt-[67px]"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="bg-white rounded-full shadow-xl flex flex-col sm:flex-row items-center px-3 sm:px-4 py-2 sm:py-4 mb-4 sm:mb-6 md:mb-8 hover:shadow-2xl transition-shadow duration-300 border-2 border-[#3AB5B0] border-opacity-30">
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="w-full sm:flex-grow text-gray-700 text-xs sm:text-sm md:text-md focus:outline-none px-2 py-2 sm:py-0 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base placeholder:text-gray-500"
                    />
                    <button className="w-full sm:w-auto mt-2 sm:mt-0 sm:ml-4 bg-[#3AB5B0] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full flex items-center justify-center hover:bg-[#349d98] transition-colors duration-300 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Search
                    </button>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                    {['Subject', 'Partner', 'Program', 'Language', 'Availability', 'Learning Type'].map((item, idx) => (
                        <select
                            key={idx}
                            className="bg-white bg-opacity-90 text-xs sm:text-sm text-black-1000 border border-gray-300 rounded-full px-2 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-2.5 shadow-lg focus:outline-none hover:border-[#3AB5B0] transition-all duration-300 mb-1 sm:mb-0 w-[calc(50%-0.5rem)] sm:w-auto"
                        >
                            <option>{item}</option>
                            <option>{item} 1</option>
                            <option>{item} 2</option>
                        </select>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchHolder;
