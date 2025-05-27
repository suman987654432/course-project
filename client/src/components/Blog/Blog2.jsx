import React from 'react'
import ui from "../../assets/ui.png";
import react from "../../assets/react.png";
import php from "../../assets/php.png";
import js from "../../assets/js.png";

const Blog2 = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Reading blog list</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
     
        <div className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer">
          <div className="h-64 w-full overflow-hidden">
            <img 
              src={ui} 
              alt="UX/UI Design" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="bg-white bg-opacity-80 px-6 py-2 rounded-full">
              <h3 className="text-xl font-medium text-gray-800">UX/UI</h3>
            </div>
          </div>
        </div>
        
        <div className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer">
          <div className="h-64 w-full overflow-hidden">
            <img 
              src={react} 
              alt="React" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="bg-white bg-opacity-80 px-6 py-2 rounded-full">
              <h3 className="text-xl font-medium text-gray-800">React</h3>
            </div>
          </div>
        </div>
        
        <div className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer">
          <div className="h-64 w-full overflow-hidden">
            <img 
              src={php} 
              alt="PHP" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="bg-white bg-opacity-80 px-6 py-2 rounded-full">
              <h3 className="text-xl font-medium text-gray-800">PHP</h3>
            </div>
          </div>
        </div>
        
        <div className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer">
          <div className="h-64 w-full overflow-hidden">
            <img 
              src={js} 
              alt="JavaScript" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="bg-white bg-opacity-80 px-6 py-2 rounded-full">
              <h3 className="text-xl font-medium text-gray-800">JavaScript</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog2