import React from 'react';
import { FaLinkedin, FaGithub, FaSun, FaMoon } from 'react-icons/fa';

function Navbar({ myLogo, theme, toggleTheme, setActiveTab, activeTab = 'projects' }) {

  // Logo click: Scroll to top while remaining on the current tab (Resume or Projects)
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll handler for links on the Projects tab
  const handleScroll = (id) => (e) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors ${
      theme === 'light' 
        ? 'bg-white/80 border-slate-200/80 text-slate-800' 
        : 'bg-slate-900/80 border-slate-800 text-slate-100'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* LOGO - Scrolls to top while staying on current tab */}
        <button 
          onClick={handleLogoClick} 
          className="flex-shrink-0 flex items-center py-2 cursor-pointer focus:outline-none"
        >
          <img 
            src={myLogo} 
            alt="Trishna Mou Logo" 
            className="h-12 sm:h-14 md:h-16 w-auto object-contain rounded-lg transition-transform hover:scale-105" 
          />
        </button>

        {/* NAVIGATION LINKS — Hidden when on the resume tab */}
        {activeTab !== 'resume' && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a 
              href="#home" 
              onClick={handleScroll('top')} 
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
            >
              Home
            </a>
            <a 
              href="#projects-section" 
              onClick={handleScroll('projects-section')} 
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }} 
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
            >
              Contact
            </a>
          </nav>
        )}

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