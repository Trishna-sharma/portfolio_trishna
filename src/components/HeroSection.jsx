import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

function HeroSection({ coverImage3, showLongText }) {
  return (
    <div id="intro" className="relative w-full overflow-hidden" style={{ height: '100vh' }}>
      <ParallaxBanner 
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        className="w-full h-full"
      >
        <ParallaxBannerLayer speed={-15}>
          <img 
            src={coverImage3} 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer 
          className="absolute inset-0 flex items-center justify-start pl-[10%] sm:pl-[15%] md:pl-[20%]"
        >
          <div className="text-left">
            <h1 
              className="text-[32px] sm:text-[48px] font-bold text-white filter drop-shadow-lg"
            >
              <span 
                className={`block transition-opacity duration-500 ease-in-out ${!showLongText ? 'opacity-100' : 'opacity-0'}`}
                style={{ display: !showLongText ? 'block' : 'none' }}
              >
                Hey.
              </span>
              <span 
                className={`block transition-opacity duration-500 ease-in-out ${showLongText ? 'opacity-100' : 'opacity-0'}`}
                style={{ display: showLongText ? 'block' : 'none' }}
              >
                I am Trishna Shil.
              </span>
            </h1>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}

export default HeroSection; 