import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GoToTopButton = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2
            ${theme === 'light' 
              ? 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500 focus:ring-offset-gray-100' 
              : 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400 focus:ring-offset-slate-800'
            }`}
          aria-label="Go to top"
        >
          <FaArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default GoToTopButton; 