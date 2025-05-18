import React, { useState } from 'react';

function Navbar({ myLogo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#intro", label: "Intro" },
    { href: "#what I do ", label: "What I do" },
    { href: "#who  I am ", label: "Who I am" },
    { href: "#My work", label: "My Work" },
    { href: "#Contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white w-full fixed top-0 left-0 z-[999] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Container for consistent padding and max-width */}
        <div className="flex items-center justify-between h-16 md:h-20"> {/* Main flex container for logo and menu/hamburger */}
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#intro" className="flex items-center">
              <img src={myLogo} alt="My Logo" className="h-10 md:h-12 w-auto" />
            </a>
          </div>

          {/* Hamburger button - visible on mobile (screens smaller than md) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is open (X) vs closed (hamburger) */}
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu - hidden on mobile, visible on md and up */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
              {navItems.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Dropdown, shown/hidden based on isMobileMenuOpen state */} 
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg " id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on item click for SPA-like behavior
                  className="text-gray-600 hover:bg-gray-100 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ease-in-out"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 