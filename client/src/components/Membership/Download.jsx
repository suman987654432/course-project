import React from 'react';
import { FaAndroid, FaApple } from 'react-icons/fa';

const Download = () => {
  return (
    <div className="bg-[#232344] rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row justify-between items-center text-white max-w-6xl mx-auto mt-12 mx-4 sm:mx-auto">
      <p className="text-base sm:text-lg font-semibold mb-6 md:mb-0 text-center md:text-left">
        APP is available for free
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          href="#"
          className="flex items-center justify-center gap-2 bg-[#2EC6F3] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-sm font-medium hover:bg-[#29bde6] transition"
        >
          <FaAndroid className="text-white text-lg" />
          Android APP
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-2 bg-[#45C3C3] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-sm font-medium hover:bg-[#3bb6b6] transition"
        >
          <FaApple className="text-white text-lg" />
          IOS APP
        </a>
      </div>
    </div>
  );
};

export default Download;
