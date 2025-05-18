import React from 'react';

function ProjectOverlay({ overlayVisible, handleCloseOverlay, projectDetailsContent }) {
  if (!overlayVisible && !projectDetailsContent) return null; // Render nothing if not visible or no content to prevent flash of empty box

  return (
    <div 
      id="overlay" 
      className={`fixed inset-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 ease-in-out ${overlayVisible ? 'opacity-100 z-[1000]' : 'opacity-0 z-[-1] pointer-events-none'}`}
      onClick={handleCloseOverlay} // Close overlay if backdrop is clicked
    >
      <div 
        className="bg-white rounded-lg p-6 sm:p-8 w-11/12 max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl transform transition-all duration-300 ease-in-out ${overlayVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}"
        onClick={(e) => e.stopPropagation()} // Prevent click inside content from closing overlay
      >
        <button 
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-lg font-bold leading-none cursor-pointer transition-colors duration-300 ease-in-out hover:bg-red-700 z-10"
          id="close-btn" 
          onClick={handleCloseOverlay}
          aria-label="Close project details"
        >
          &times;
        </button>
        <div id="project-details" className="prose lg:prose-xl max-w-none pt-8 sm:pt-0">
          {/* Added pt-8 sm:pt-0 to give space from close button if content is short */}
          {projectDetailsContent}
        </div>
      </div>
    </div>
  );
}

export default ProjectOverlay; 