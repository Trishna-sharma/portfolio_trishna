import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import HeroSection from './components/HeroSection';
import TabNavigation from './components/TabNavigation';
import ProjectOverlay from './components/ProjectOverlay';
import ContactSection from './components/ContactSection';
import GoToTopButton from './components/GoToTopButton';
import myLogo from './assets/images/My_logo.png';
import { projects } from './data/projects';

function App() {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [formCardVisible, setFormCardVisible] = useState(false);
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
    const handleScroll = () => {
      if (window.scrollY > (window.innerHeight * 0.8)) {
        if (!formCardVisible) setFormCardVisible(true);
      } else {
        if (formCardVisible) setFormCardVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [formCardVisible]);

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
    setTimeout(() => setProjectDetailsContent(null), 300);
  };

  return (
    /* overflow-x-hidden prevents ANY side scrolling across the whole app */
    <div className={`min-h-screen w-full overflow-x-hidden flex flex-col font-sans ${theme === 'light' ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'}`}>
      <Navbar myLogo={myLogo} theme={theme} toggleTheme={toggleTheme} />
      
      {loadingSpinnerVisible && <LoadingSpinner theme={theme} />}
      
      <ProjectOverlay 
        overlayVisible={overlayVisible} 
        handleCloseOverlay={handleCloseOverlay} 
        projectDetailsContent={projectDetailsContent} 
        theme={theme}
      />
      
      <main className="w-full flex-grow pt-16 md:pt-20 overflow-x-hidden">
        {/* Main Content Container with controlled widths */}
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-4 flex flex-col items-center gap-4">
          <HeroSection theme={theme} />
          
          <div className="w-full max-w-full overflow-hidden">
            <TabNavigation 
              theme={theme} 
              projects={projects} 
              handleSubjectClick={handleSubjectClick} 
            />
          </div>
        </div>

        <ContactSection formCardVisible={formCardVisible} theme={theme} />
      </main>
      
      <GoToTopButton theme={theme} />
    </div>
  );
}

export default App;