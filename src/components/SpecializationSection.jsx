import React from 'react';

function SpecializationSection({ coverImage2, myFieldVisible }) {
  return (
    <>
      {/* Parallax 2 Background */}
      <div 
        id="what I do " // Added ID for navigation, note the trailing space from original navItem
        className="relative w-full h-[170vh] bg-no-repeat bg-center bg-cover md:bg-fixed"
        style={{ backgroundImage: `url(${coverImage2})` }}
      >
        {/* Content can be empty as #my_field is fixed positioned */}
      </div>

      {/* Text for Parallax 2 - Fixed position, always in DOM, opacity controlled by state for transition */}
      <h1 
        id="my_field" 
        className={`fixed left-1/2 top-[40%] -translate-x-1/2 z-10 w-4/5 max-w-screen-lg text-center text-3xl sm:text-4xl font-bold text-white transition-opacity duration-1000 ease-in-out filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)] ${myFieldVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        I specialize in HTML,CSS,Javascript,Node.js,Mongo DB .
      </h1>
    </>
  );
}

export default SpecializationSection; 