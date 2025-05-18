import React, { useState } from 'react';
import { FaHome, FaCog, FaUser, FaBriefcase, FaEnvelope, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ myLogo, theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", icon: FaHome },
    { href: "#specialization", label: "Specialization", icon: FaCog },
    { href: "#about-me", label: "About Me", icon: FaUser },
    { href: "#my-work", label: "My Work", icon: FaBriefcase },
    { href: "#contact", label: "Contact", icon: FaEnvelope },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 shadow-lg transition-all duration-300 ${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-900 text-slate-300'} h-20 md:h-24`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img className="h-12 md:h-14 w-auto" src={myLogo} alt="Logo" />
            </a>
          </div>

          {/* Desktop Menu & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex items-center space-x-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 ${theme === 'light' ? 'hover:bg-gray-100 hover:text-purple-600' : 'hover:bg-slate-700 hover:text-blue-400'} transition-colors`}
                    >
                      <IconComponent className={`h-5 w-5 ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md ${theme === 'light' ? 'hover:bg-gray-100 text-purple-600' : 'hover:bg-slate-700 text-yellow-400'} transition-colors`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FaMoon className="h-6 w-6" /> : <FaSun className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md mr-2 ${theme === 'light' ? 'hover:bg-gray-100 text-purple-600' : 'hover:bg-slate-700 text-yellow-400'} transition-colors`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FaMoon className="h-6 w-6" /> : <FaSun className="h-6 w-6" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${theme === 'light' ? 'hover:bg-gray-100 text-slate-700' : 'hover:bg-slate-700 text-slate-300'} transition-colors`}
              aria-label="Open main menu"
            >
              {isMobileMenuOpen ? <FaTimes className="h-7 w-7" /> : <FaBars className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */} 
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-20 md:top-24 left-0 right-0 shadow-lg py-2 ${theme === 'light' ? 'bg-white border-t border-gray-200' : 'bg-slate-900 border-t border-slate-700'}`}>
          <ul className="flex flex-col space-y-1 px-2 pt-2 pb-3">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-3 rounded-md text-lg font-medium flex items-center space-x-3 ${theme === 'light' ? 'text-slate-700 hover:bg-gray-100 hover:text-purple-600' : 'text-slate-300 hover:bg-slate-700 hover:text-blue-400'} transition-colors`}
                  >
                    <IconComponent className={`h-6 w-6 ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 