import React from 'react';
import { FaLinkedin, FaGithub, FaSun, FaMoon } from 'react-icons/fa';

function Navbar({ myLogo, theme, toggleTheme, setActiveTab }) {

  const handleNavClick = (targetTab, scrollToId) => (e) => {
    e.preventDefault();

    // 1. Switch active tab back to 'projects' if currently on 'resume'
    if (setActiveTab && targetTab) {
      setActiveTab(targetTab);
    }

    // 2. Wait for React to mount HeroSection into the DOM, then scroll
    setTimeout(() => {
      if (scrollToId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(scrollToId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 100);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors ${
      theme === 'light' 
        ? 'bg-white/80 border-slate-200/80 text-slate-800' 
        : 'bg-slate-900/80 border-slate-800 text-slate-100'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* LOGO LINK */}
        <a 
          href="#home" 
          onClick={handleNavClick('projects', 'top')} 
          className="flex-shrink-0 flex items-center py-2 cursor-pointer"
        >
          <img 
            src={myLogo} 
            alt="Trishna Mou Logo" 
            className="h-12 sm:h-14 md:h-16 w-auto object-contain rounded-lg transition-transform hover:scale-105" 
          />
        </a>

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {/* HOME */}
          <a 
            href="#home" 
            onClick={handleNavClick('projects', 'top')} 
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
          >
            Home
          </a>

          {/* PROJECTS */}
          <a 
            href="#projects-section" 
            onClick={handleNavClick('projects', 'projects-section')} 
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
          >
            Projects
          </a>

          {/* CONTACT */}
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              const contactElem = document.getElementById('contact');
              if (contactElem) {
                contactElem.scrollIntoView({ behavior: 'smooth' });
              }
            }} 
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
          >
            Contact
          </a>
        </nav>

        {/* RIGHT ACTION ICONS */}
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="hidden sm:block h-5 w-[1px] bg-slate-300 dark:bg-slate-700"></div>

          <a
            href="https://www.linkedin.com/in/trishna-sharma-fs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          <a
            href="https://github.com/Trishna-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>

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