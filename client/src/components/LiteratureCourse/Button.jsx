import React from 'react';

const Button = () => {
  const buttons = ["About", "Course", "Notes", "Project", "Podcast", "Book", "Review"];

  return (
    <div className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap justify-center mx-auto my-4 max-w-4xl px-4">
      {buttons.map((label, index) => (
        <button
          key={index}
          className={`px-3 py-1.5 sm:px-4 md:px-6 sm:py-2 text-xs sm:text-sm md:text-base rounded-md font-medium sm:font-semibold transition-all duration-200
            ${index === buttons.length - 2 
              ? 'bg-[#49BBBD] text-white hover:bg-[#3da7a9]' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Button;
