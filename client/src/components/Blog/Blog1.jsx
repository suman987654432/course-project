import React from 'react';
import laptop from '../../assets/laptop.png'; 

const Blog1 = () => {
  return (
    <div className="bg-[#F5F7FF] py-12 md:py-16 px-4 md:px-6 lg:px-8 mt-16 md:mt-13">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">By</span>
              <span className="font-medium">Themadbrains</span>
              <span className="text-gray-600">in</span>
              <span className="text-[#3CCFCF] font-medium">Inspiration</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold text-[#353B87] leading-tight">
            Why Swift UI Should Be on the <br /> Radar of Every Mobile  <br />Developer
          </h1>
          
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          
          <button className="bg-[#3CCFCF] hover:bg-[#32bebe] text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
            Start learning now
          </button>
        </div>
        
        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img 
            src={laptop} 
            alt="Laptop showing video conference" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog1;