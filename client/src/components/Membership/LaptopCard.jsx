import React from 'react'

const LaptopCard = ({ image, title, description, buttonText }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md transition-all hover:shadow-lg">
      <div className="mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-8">
        {description}
      </p>
      <div className="flex justify-start">
        <button className="bg-[#49BBBD] hover:bg-[#3da7a9] text-white font-medium py-3 px-6 rounded-md transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default LaptopCard