import React from 'react';
import Marquee from 'react-fast-marquee';

const services: string[] = ['RESIDENTIAL SERVICE', 'COMMERCIAL SERVICE', 'INDUSTRIAL SERVICE'];

const FastMarquee: React.FC = () => {
  return (
    <div className=" bg-ctmred py-8 mt-12 lg:mt-16">
      <Marquee
        speed={50}                // Speed of the scroll (higher = faster)
        pauseOnHover={true}       // Pause when mouse hovers
        gradient={false}   
        autoFill={true}       // No fading edges
        className="text-ctmaccent text-2xl font-bold"
      >
        {services.map((item, index) => (
          <span key={index} className="mx-8">
            {item}
          </span>
        ))}
      </Marquee>    
    </div>
  );
};

export default FastMarquee;
