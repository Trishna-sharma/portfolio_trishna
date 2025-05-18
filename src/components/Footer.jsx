import React from 'react';

function Footer() {
  return (
    <footer 
      className="relative w-full bg-gray-800 text-gray-100 px-5 py-12 text-center z-[3]"
    >
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
          Trishna Shil
        </h3>
        <p className="text-base leading-relaxed mb-6">
          Thank you for visiting my portfolio. Let's connect!
        </p>
        <div className="social_icons mb-6">
          {/* Replace with actual links and potentially icons from a library like react-icons */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-green-500 mx-2 sm:mx-3 text-2xl transition-colors duration-300 ease-in-out">GH</a> 
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-green-500 mx-2 sm:mx-3 text-2xl transition-colors duration-300 ease-in-out">LI</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-green-500 mx-2 sm:mx-3 text-2xl transition-colors duration-300 ease-in-out">EM</a>
        </div>
        <p className="copyright text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Trishna Shil. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer; 