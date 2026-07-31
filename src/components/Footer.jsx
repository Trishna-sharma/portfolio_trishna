import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-10 text-center transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-gray-100 text-slate-700 border-t border-slate-200'
          : 'bg-slate-900 text-slate-300 border-t border-slate-800'
      }`}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* Glowy Social Icons */}
        <div className="social_icons flex justify-center space-x-7 mb-5">
          {/* GitHub */}
          <a
            href="https://github.com/Trishna-sharma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={`text-3xl transition-all duration-300 transform hover:-translate-y-1 ${
              theme === 'light'
                ? 'text-slate-700 hover:text-purple-600 drop-shadow-[0_0_8px_rgba(147,51,234,0.3)] hover:drop-shadow-[0_0_16px_rgba(147,51,234,0.7)]'
                : 'text-slate-300 hover:text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)] hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.85)]'
            }`}
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/trishna-sharma-fs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={`text-3xl transition-all duration-300 transform hover:-translate-y-1 ${
              theme === 'light'
                ? 'text-slate-700 hover:text-purple-600 drop-shadow-[0_0_8px_rgba(147,51,234,0.3)] hover:drop-shadow-[0_0_16px_rgba(147,51,234,0.7)]'
                : 'text-slate-300 hover:text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)] hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.85)]'
            }`}
          >
            <FaLinkedin />
          </a>

          {/* Email */}
          <a
            href="mailto:trishnasharma9871@gmail.com"
            aria-label="Email Me"
            className={`text-3xl transition-all duration-300 transform hover:-translate-y-1 ${
              theme === 'light'
                ? 'text-slate-700 hover:text-purple-600 drop-shadow-[0_0_8px_rgba(147,51,234,0.3)] hover:drop-shadow-[0_0_16px_rgba(147,51,234,0.7)]'
                : 'text-slate-300 hover:text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)] hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.85)]'
            }`}
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Glowing Copyright Text */}
        <p
          className={`text-sm font-medium tracking-wide transition-all duration-300 ${
            theme === 'light'
              ? 'text-slate-700'
              : 'text-slate-300 [text-shadow:0_0_10px_rgba(255,255,255,0.2)] hover:[text-shadow:0_0_15px_rgba(255,255,255,0.5)]'
          }`}
        >
          &copy; {currentYear} Trishna Sharma. All rights reserved.
        </p>

        {/* Built With Line */}
        <p
          className={`text-xs mt-2 transition-all duration-300 ${
            theme === 'light'
              ? 'text-slate-500'
              : 'text-slate-400/80 [text-shadow:0_0_8px_rgba(255,255,255,0.15)]'
          }`}
        >
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;