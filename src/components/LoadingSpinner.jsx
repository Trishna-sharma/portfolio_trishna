import React from 'react';

function LoadingSpinner() {
  return (
    <div 
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001] w-[50px] h-[50px] border-[5px] border-solid border-gray-200 border-t-[5px] border-t-[#3498db] rounded-full animate-spin"
    ></div>
  );
}

export default LoadingSpinner; 