import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = ({ myLogo, theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Clean nav items (Removed Specialization)
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      // Hide navbar if scrolling down past 200px, show if scrolling up or at top
      if (window.scrollY > lastScrollY && window.scrollY > 200) { 
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 shadow-md backdrop-blur-md transition-transform duration-300 ease-in-out ${
        theme === 'light' ? 'bg-white/80 text-slate-800' : 'bg-slate-900/80 text-slate-100'
      } h-20 md:h-24 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img className="h-14 md:h-18 w-auto" src={myLogo} alt="Trishna Mou Logo" />
            </a>
          </div>

          {/* Desktop Menu & Right Actions */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Nav Links - Pure, clean typography without icon clutter */}
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`text-base font-medium transition-colors ${
                      theme === 'light' 
                        ? 'hover:text-purple-600 text-slate-700' 
                        : 'hover:text-blue-400 text-slate-300'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Icons & Theme Toggle */}
            <div className="flex items-center space-x-3 border-l pl-6 border-slate-300 dark:border-slate-700">
              <a 
                href="https://linkedin.com/in/your-linkedin" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
                className={`p-2 rounded-md transition-colors ${
                  theme === 'light' ? 'hover:text-purple-600 text-slate-600' : 'hover:text-blue-400 text-slate-300'
                }`}
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              <a 
                href="https://github.com/Trishna-sharma" 
                target="_blank" 
                rel="noreferrer"
                aria-label="GitHub"
                className={`p-2 rounded-md transition-colors ${
                  theme === 'light' ? 'hover:text-purple-600 text-slate-600' : 'hover:text-blue-400 text-slate-300'
                }`}
              >
                <FaGithub className="h-5 w-5" />
              </a>

              {/* Day / Night Switch */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'light' ? 'hover:bg-gray-100 text-purple-600' : 'hover:bg-slate-800 text-yellow-400'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <FaMoon className="h-5 w-5" /> : <FaSun className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Actions Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md ${
                theme === 'light' ? 'text-purple-600' : 'text-yellow-400'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FaMoon className="h-6 w-6" /> : <FaSun className="h-6 w-6" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                theme === 'light' ? 'text-slate-700' : 'text-slate-300'
              }`}
              aria-label="Open main menu"
            >
              {isMobileMenuOpen ? <FaTimes className="h-7 w-7" /> : <FaBars className="h-7 w-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div 
          className={`md:hidden absolute top-20 left-0 right-0 shadow-xl py-4 transition-colors ${
            theme === 'light' 
              ? 'bg-white/95 border-t border-gray-200' 
              : 'bg-slate-900/95 border-t border-slate-800'
          }`}
        >
          <ul className="flex flex-col space-y-2 px-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setShowNavbar(true); 
                  }}
                  className={`block py-2 text-lg font-medium ${
                    theme === 'light' ? 'text-slate-700 hover:text-purple-600' : 'text-slate-200 hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Social Bar */}
          <div className="flex items-center space-x-6 px-6 pt-4 mt-2 border-t border-slate-200 dark:border-slate-800">
            <a 
              href="https://linkedin.com/in/your-linkedin" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300"
            >
              <FaLinkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a 
              href="https://github.com/Trishna-sharma" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300"
            >
              <FaGithub className="h-5 w-5" /> GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;