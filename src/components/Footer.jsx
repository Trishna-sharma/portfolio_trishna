import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = ({ theme }) => {
  return (
    <footer className={`w-full py-8 px-4 mt-auto border-t transition-colors duration-300 ${
      theme === 'light' 
        ? 'bg-slate-50 border-slate-200 text-slate-700' 
        : 'bg-slate-900/90 border-slate-800 text-slate-300'
    }`}>
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        
        {/* Title */}
        <h3 className="text-base font-bold flex items-center gap-2 text-slate-900 dark:text-white">
          Let's Connect! <span className="text-lg">👋</span>
        </h3>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
          
          {/* Email Button */}
          <a
            href="mailto:Trishnasharma2002@gmail.com"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
              theme === 'light'
                ? 'bg-white border-slate-200 hover:border-purple-400 hover:text-purple-600 shadow-sm'
                : 'bg-slate-800/80 border-slate-700 hover:border-purple-500/60 hover:text-purple-400'
            }`}
          >
            <FaEnvelope className="text-purple-500 w-4 h-4" />
            <span>Email Me</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com" 
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
              theme === 'light'
                ? 'bg-white border-slate-200 hover:border-purple-400 hover:text-purple-600 shadow-sm'
                : 'bg-slate-800/80 border-slate-700 hover:border-purple-500/60 hover:text-purple-400'
            }`}
          >
            <FaLinkedin className="text-purple-500 w-4 h-4" />
            <span>Connect on LinkedIn</span>
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;