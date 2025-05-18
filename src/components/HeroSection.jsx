import React from 'react';

function HeroSection({ coverImage3, showLongText }) {
  return (
    <div 
      id="intro" // Added ID for navigation
      className="relative w-full h-[130vh] bg-no-repeat bg-center bg-cover box-border md:bg-fixed"
      style={{ backgroundImage: `url(${coverImage3})` }}
    >
      <div className="p-5 text-center relative z-[2]">
        <h1 
          className="text-[32px] sm:text-[48px] font-bold text-white fixed left-1/2 top-[20%] sm:top-[25%] -translate-x-1/2 z-[10] w-full px-4"
        >
          <span className={`inline transition-opacity duration-500 ease-in-out ${!showLongText ? 'opacity-100' : 'opacity-0'}`}>Hey.</span>
          <span className={`absolute left-1/2 -translate-x-1/2 top-0 transition-opacity duration-500 ease-in-out ${showLongText ? 'opacity-100' : 'opacity-0'}`}>I am Trishna Shil.</span>
        </h1>
      </div>
    </div>
  );
}

export default HeroSection; 