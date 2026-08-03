import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import HeroSection from './components/HeroSection';
import TabNavigation from './components/TabNavigation';
import ProjectOverlay from './components/ProjectOverlay';
import Footer from './components/Footer'; // 👈 1. Import Footer here
import GoToTopButton from './components/GoToTopButton';
import myLogo from './assets/images/My_logo.png';
import { projects } from './data/projects';

function App() {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [activeTab, setActiveTab] = useState('projects'); 
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [loadingSpinnerVisible, setLoadingSpinnerVisible] = useState(false);
  const [projectDetailsContent, setProjectDetailsContent] = useState(null);

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

  const handleSubjectClick = (subjectId) => {
    setLoadingSpinnerVisible(true);
    const project = projects[subjectId];
    setTimeout(() => {
      if (project) {
        setProjectDetailsContent(
          <>
            <h1>{project.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </>
        );
      } else {
        setProjectDetailsContent(<p>No details available for this subject.</p>);
      }
      setLoadingSpinnerVisible(false);
      setOverlayVisible(true);
    }, 900);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
    setTimeout(() => {
      setProjectDetailsContent(null);
    }, 300);
  };

  return (
    <div className={`min-h-screen w-full max-w-full overflow-x-hidden flex flex-col font-sans transition-colors duration-300 ${
      theme === 'light' ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'
    }`}>
      <Navbar myLogo={myLogo} theme={theme} toggleTheme={toggleTheme} />

      {loadingSpinnerVisible && <LoadingSpinner theme={theme} />}

      <ProjectOverlay
        overlayVisible={overlayVisible}
        handleCloseOverlay={handleCloseOverlay}
        projectDetailsContent={projectDetailsContent}
        theme={theme}
      />

      <main className="w-full max-w-full flex-grow pt-16 md:pt-20 overflow-x-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 py-4 flex flex-col items-stretch gap-4 transition-all duration-500">
          
          {/* Hero section toggle */}
          <AnimatePresence initial={false}>
            {activeTab === 'projects' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <HeroSection theme={theme} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="w-full max-w-full">
            <TabNavigation
              theme={theme}
              projects={projects}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              handleSubjectClick={handleSubjectClick}
            />
          </div>
        </div>
      </main>

      {/* 🔹 2. Add Shared Footer Here */}
      <Footer theme={theme} />

      <GoToTopButton theme={theme} />
    </div>
  );
}

export default App;