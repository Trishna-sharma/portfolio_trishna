import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

function SpecializationSection({ coverImage2, myFieldVisible }) {
  return (
    <div 
      id="what I do " 
      className="relative w-full overflow-hidden" 
      style={{ height: '170vh' }} // Original height
    >
      <ParallaxBanner 
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        className="w-full h-full"
      >
        <ParallaxBannerLayer speed={-15}> {/* Slightly different speed */}
          <img 
            src={coverImage2} 
            alt="Specialization Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="absolute inset-0 flex items-center justify-center">
          {/* Text for Parallax 2 - Centered within this layer */}
          {/* The fixed positioning is removed, opacity still controlled by myFieldVisible */}
          <h1 
            id="my_field" 
            className={`text-center text-3xl sm:text-4xl font-bold text-white transition-opacity duration-1000 ease-in-out filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)] w-4/5 max-w-screen-lg ${myFieldVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            I specialize in HTML,CSS,Javascript,Node.js,Mongo DB .
          </h1>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}

export default SpecializationSection; 