import React from 'react';

const CourseButton = () => {
  const buttons = ["Overview", "Overview", "Overview", "Overview"];

  return (
    <div className="flex gap-4 flex-wrap">
      {buttons.map((label, index) => (
        <button
          key={index}
          className={`px-6 py-2 rounded-md font-semibold transition-all duration-200
            ${index === buttons.length - 1 
              ? 'bg-[#49BBBD] text-white' 
              : 'bg-gray-200 text-gray-700'}
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default CourseButton;
