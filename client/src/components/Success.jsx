import React from 'react';

const Success = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Our Success</h2>
        <p className="text-gray-500 font-semibold mb-5 max-w-3xl mx-auto text-sm sm:text-base">
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida.
          Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-12 lg:gap-20 py-4 sm:py-6 w-full">
          <div className="p-3 sm:p-4 md:p-6 lg:p-8">
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#136CB5]">15K+</p>
            <p className="text-gray-800 font-bold mt-4">Students</p>
          </div>
          <div className="p-3 sm:p-4 md:p-6 lg:p-8">
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#136CB5]">75%</p>
            <p className="text-gray-800 font-bold mt-4">Total success</p>
          </div>
          <div className="p-3 sm:p-4 md:p-6 lg:p-8">
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#136CB5]">35</p>
            <p className="text-gray-800 font-bold mt-4 whitespace-nowrap">Main questions</p>
          </div>
          <div className="p-3 sm:p-4 md:p-6 lg:p-8">
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#136CB5]">26</p>
            <p className="text-gray-800 font-bold mt-4">Chief experts</p>
          </div>
          <div className="p-3 sm:p-4 md:p-6 lg:p-8">
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#136CB5]">16</p>
            <p className="text-gray-800 font-bold mt-4 whitespace-nowrap">Years of experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
