import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

function MyWorkSection({ coverImage8, projects, subjectBoxesVisible, handleSubjectClick }) {
  return (
    <div 
      id="My work" 
      className="relative w-full overflow-hidden flex flex-col items-center justify-center" // flex behavior moved to outer div
      style={{ minHeight: '170vh' }} // Original minHeight
    >
      <ParallaxBanner 
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        className="w-full h-full"
      >
        <ParallaxBannerLayer speed={-20}> {/* Speed adjusted */}
          <img 
            src={coverImage8} 
            alt="My Work Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="absolute inset-0 flex flex-col items-center justify-center py-16 md:py-24"> {/* Added padding here */}
          <h1 id="my_work" className="text-4xl sm:text-5xl font-bold text-white filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] mb-10 sm:mb-16">
            My Work
          </h1>
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-11/12 max-w-6xl p-5"
          >
            {Object.keys(projects).map((subjectKey, index) => (
              <div 
                key={subjectKey} 
                className={`bg-white bg-opacity-20 text-white border border-white border-opacity-30 rounded-lg h-28 sm:h-32 flex items-center justify-center text-center text-sm sm:text-base font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-opacity-40 hover:-translate-y-1 shadow-md ${subjectBoxesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                id={subjectKey} 
                onClick={() => handleSubjectClick(subjectKey)}
                style={{ transitionDelay: subjectBoxesVisible ? `${index * 100}ms` : '0ms' }}
              >
                {projects[subjectKey].title.split(' ').slice(0,2).join(' ')} 
              </div>
            ))}
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}

export default MyWorkSection; 