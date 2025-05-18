import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

function AboutMeSection({ coverImage7, infoCardVisible }) {
  return (
    <div 
      id="who  I am " 
      className="relative w-full overflow-hidden flex items-center justify-center" // flex behavior moved to outer div
      style={{ height: '170vh' }} // Original height
    >
      <ParallaxBanner 
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        className="w-full h-full"
      >
        <ParallaxBannerLayer speed={-10}> {/* Different speed */}
          <img 
            src={coverImage7} 
            alt="About Me Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="absolute inset-0 flex items-center justify-center">
          {/* Info Card */}
          <div 
            id="info_card" 
            className={`bg-white bg-opacity-85 rounded-xl p-8 w-[70%] max-w-[800px] shadow-xl text-center transition-opacity duration-700 ease-out z-[4] ${infoCardVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <h1 id="my_information" className="text-xl font-normal leading-relaxed text-gray-800 sm:text-lg md:text-base">
              I am a fresh graduate from Bath Spa University in Computer Science. I have always been fascinated by computers and how they perform so many intelligent tasks.
            </h1>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}

export default AboutMeSection; 