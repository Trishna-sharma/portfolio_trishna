import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import UpworkHeroSection from '../components/upwork/UpworkHeroSection';
import UpworkTabNavigation from '../components/upwork/UpworkTabNavigation';
import Footer from '../components/Footer';
import GoToTopButton from '../components/GoToTopButton';
import myLogo from '../assets/images/My_logo.png';

function UpworkView() {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [activeTab, setActiveTab] = useState('projects');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <div className={`min-h-screen w-full max-w-full overflow-x-hidden flex flex-col font-sans transition-colors duration-300 ${
      theme === 'light' ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'
    }`}>
      <Navbar 
        myLogo={myLogo} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        setActiveTab={setActiveTab} 
        activeTab={activeTab} 
      />

      <main className="w-full max-w-full flex-grow pt-16 md:pt-20 overflow-x-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 py-4 flex flex-col items-stretch gap-4 transition-all duration-500">
          
          {/* Smoothly collapse and hide HeroSection when activeTab === 'resume' */}
          <AnimatePresence initial={false}>
            {activeTab === 'projects' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <UpworkHeroSection theme={theme} />
              </motion.div>
            )}
          </AnimatePresence>

          <div id="projects-section" className="w-full max-w-full scroll-mt-24">
            <UpworkTabNavigation
              theme={theme}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
      </main>

      <Footer theme={theme} />
      <GoToTopButton theme={theme} />
    </div>
  );
}

export default UpworkView;
