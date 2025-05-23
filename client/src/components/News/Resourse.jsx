// Resourse.jsx
import React from 'react';
import Cards from './Cards';
import laptop from '../../assets/laptop.png';
import girl from '../../assets/image.png';
import zoom from '../../assets/image.png';
import ceo from '../../assets/image.png';

const Resourse = () => {
  return (
    <section className="px-4 py-12 overflow-hidden">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#2F327D] mb-2">
        Lastest News and Resources
      </h2>
      <p className="text-center text-[#6B7280] text-sm mb-6 sm:mb-10">
        See the developments that have occurred to TOTC in the world
      </p>

      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
       
        <div className="md:w-[45%] mb-6 md:mb-0">
          <Cards
            image={laptop}
            badgeText="NEWS"
            heading="Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution"
            description="Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
            large
          />
        </div>

        <div className="md:w-[50%] flex flex-col gap-4">
          <Cards
            image={girl}
            badgeText="PRESS RELEASE"
            heading="Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand"
            description="Class Technologies Inc., the company that created Class,..."
          />
          <Cards
            image={zoom}
            badgeText="NEWS"
            heading="Zoom's earliest investors are betting millions on a better Zoom for schools"
            description="Zoom was never created to be a consumer product. Nonetheless, the..."
          />
          <Cards
            image={ceo}
            badgeText="NEWS"
            heading="Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms"
            description="This year, investors have reaped big financial returns from betting on Zoom..."
          />
        </div>
      </div>
    </section>
  );
};

export default Resourse;
