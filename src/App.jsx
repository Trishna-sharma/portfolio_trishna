import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import HeroSection from './components/HeroSection';
import TabNavigation from './components/TabNavigation'; // 👈 1. Imported TabNavigation
import MyWorkSection from './components/MyWorkSection';
import ProjectOverlay from './components/ProjectOverlay';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GoToTopButton from './components/GoToTopButton';
import myLogo from './assets/images/My_logo.png';
import { projects } from './data/projects';

function App() {
  // Function to get initial theme based on system preference or localStorage
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [showLongText, setShowLongText] = useState(false);
  const [subjectBoxesVisible, setSubjectBoxesVisible] = useState(false);
  const [formCardVisible, setFormCardVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [loadingSpinnerVisible, setLoadingSpinnerVisible] = useState(false);
  const [projectDetailsContent, setProjectDetailsContent] = useState(null);

  useEffect(() => {
    // Apply theme class to HTML element and store preference
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Listen for changes in system preference
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const workThreshold = window.innerHeight * 0.8;

      if (scrollPosition > (window.innerHeight * 0.1)) {
        if (!showLongText) setShowLongText(true);
      } else {
        if (showLongText) setShowLongText(false);
      }

      if (scrollPosition > workThreshold) {
        if (!subjectBoxesVisible) setSubjectBoxesVisible(true);
      } else {
        if (subjectBoxesVisible) {
          setSubjectBoxesVisible(false);
        }
      }

      if (scrollPosition > (window.innerHeight * 1.5)) {
        if(!formCardVisible) setFormCardVisible(true);
      } else {
        if(formCardVisible) setFormCardVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showLongText, subjectBoxesVisible, formCardVisible]);

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
    <div className={`min-h-screen flex flex-col font-sans ${theme === 'light' ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'}`}>
      <Navbar myLogo={myLogo} theme={theme} toggleTheme={toggleTheme} />
      {loadingSpinnerVisible && <LoadingSpinner theme={theme} />}
      <ProjectOverlay 
        overlayVisible={overlayVisible} 
        handleCloseOverlay={handleCloseOverlay} 
        projectDetailsContent={projectDetailsContent} 
        theme={theme}
      />
      
      <main className="w-full flex-grow pt-20 md:pt-24">
        {/* Hero Section */}
        <HeroSection showLongText={showLongText} theme={theme} />
        
        {/* 👈 2. Tab Navigation Bar (CV / Projects Toggle) */}
        <TabNavigation theme={theme} />

        {/* Contact Section */}
        <ContactSection formCardVisible={formCardVisible} theme={theme} />
        
        {/* Footer */}
        <Footer theme={theme} />
      </main>
      
      <GoToTopButton theme={theme} />
    </div>
  );
}

export default App;