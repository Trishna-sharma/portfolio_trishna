import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = ({ theme }) => {
  return (
    <footer className={`py-8 text-center ${theme === 'light' ? 'bg-gray-200 text-slate-700' : 'bg-slate-900 text-slate-400'}`}>
      <div className="container mx-auto px-4">
        <div className="social_icons flex justify-center space-x-6 mb-4">
          <a href="https://github.com/Trishna-sharma" target="_blank" rel="noopener noreferrer" className={`text-3xl ${theme === 'light' ? 'hover:text-blue-600' : 'hover:text-blue-400'} transition-colors`}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/trishna-sharma-fs/" target="_blank" rel="noopener noreferrer" className={`text-3xl ${theme === 'light' ? 'hover:text-blue-600' : 'hover:text-blue-400'} transition-colors`}>
            <FaLinkedin />
          </a>
          <a href="mailto:trishnasharma9871@gmail.com" className={`text-3xl ${theme === 'light' ? 'hover:text-blue-600' : 'hover:text-blue-400'} transition-colors`}>
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Trishna Sharma. All rights reserved.
        </p>
        <p className={`text-xs mt-2 ${theme === 'light' ? 'text-slate-500' : 'text-slate-500'}`}>
          Built with React & Tailwind CSS. 
        </p>
      </div>
    </footer>
  );
};

export default Footer; 