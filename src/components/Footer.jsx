import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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
        <div className="social_icons mb-6 flex justify-center space-x-4 sm:space-x-6">
          {/* Replace with actual links */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-green-500 text-2xl transition-colors duration-300 ease-in-out">
            <FaGithub />
          </a> 
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-green-500 text-2xl transition-colors duration-300 ease-in-out">
            <FaLinkedin />
          </a>
          <a href="mailto:your-email@example.com" className="text-gray-100 hover:text-green-500 text-2xl transition-colors duration-300 ease-in-out">
            <FaEnvelope />
          </a>
        </div>
        <p className="copyright text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Trishna Shil. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer; 