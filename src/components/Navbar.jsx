import React from 'react';
import { FaLinkedin, FaGithub, FaSun, FaMoon } from 'react-icons/fa';

function Navbar({ myLogo, theme, toggleTheme }) {
  return (
    <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors ${
      theme === 'light' 
        ? 'bg-white/80 border-slate-200/80 text-slate-800' 
        : 'bg-slate-900/80 border-slate-800 text-slate-100'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo Container - flex-shrink-0 prevents logo from shrinking */}
        <a href="#home" className="flex-shrink-0 flex items-center">
          <img 
            src={myLogo} 
            alt="Trishna Mou Logo" 
            className="h-10 sm:h-12 w-auto object-contain" 
          />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Home
          </a>
          <a href="#my-work" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Action Icons (Socials + Theme Switcher) */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Divider line */}
          <div className="hidden sm:block h-5 w-[1px] bg-slate-300 dark:bg-slate-700"></div>

          {/* LinkedIn Link */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-purple-600 dark:text-purple-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <FaMoon className="w-4 h-4" />
            ) : (
              <FaSun className="w-4 h-4" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;