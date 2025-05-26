import React from 'react'
import image from '../../assets/laptop.png'
import LaptopCard from './LaptopCard'

const Laptop = () => {
  
  const teacherCard = {
    image: image,
    title: "Become a Teacher",
    description: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    buttonText: "Apply a Teacher"
  };
  
  const coursectorCard = {
    image: image,
    title: "Become a Coursector",
    description: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    buttonText: "Apply a Coursector"
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <LaptopCard {...teacherCard} />
          <LaptopCard {...coursectorCard} />
        </div>
      </div>
    </div>
  );
}

export default Laptop