import React from 'react';

const LoadingSpinner = ({ theme }) => {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-opacity-50 backdrop-blur-sm bg-slate-900">
      <div 
        className={`animate-spin rounded-full h-16 w-16 border-4 ${theme === 'light' ? 'border-gray-300 border-t-purple-500' : 'border-slate-700 border-t-blue-500'}`}
      ></div>
    </div>
  );
};

export default LoadingSpinner; 