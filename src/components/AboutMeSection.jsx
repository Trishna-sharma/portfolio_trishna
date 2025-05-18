import React from 'react';

function AboutMeSection({ coverImage7, infoCardVisible }) {
  return (
    <div 
      id="who  I am " // Added ID for navigation, note the double space from original navItem
      className="relative w-full h-[170vh] bg-no-repeat bg-center bg-cover md:bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${coverImage7})` }}
    >
      <div 
        id="info_card" 
        className={`bg-white bg-opacity-85 rounded-xl p-8 w-[70%] max-w-[800px] shadow-xl text-center transition-opacity duration-700 ease-out z-[4] ${infoCardVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 id="my_information" className="text-xl font-normal leading-relaxed text-gray-800 sm:text-lg md:text-base">
          I am a fresh graduate from Bath Spa University in Computer Science. I have always been fascinated by computers and how they perform so many intelligent tasks.
        </h1>
      </div>
    </div>
  );
}

export default AboutMeSection; 