import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import HeroSection from './components/HeroSection';
import TabNavigation from './components/TabNavigation';
import ProjectOverlay from './components/ProjectOverlay';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GoToTopButton from './components/GoToTopButton';
import myLogo from './assets/images/My_logo.png';
import { projects } from './data/projects';

function App() {
  // Theme state setup
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [formCardVisible, setFormCardVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [loadingSpinnerVisible, setLoadingSpinnerVisible] = useState(false);
  const [projectDetailsContent, setProjectDetailsContent] = useState(null);

  // Apply dark/light theme class to <html>
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle system preference changes
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

  // 🛠️ Simplified Scroll Listener: Removed showLongText and subjectBoxesVisible
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > (window.innerHeight * 1.2)) {
        if (!formCardVisible) setFormCardVisible(true);
      } else {
        if (formCardVisible) setFormCardVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
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
        {/* Hero Section (No glitchy props) */}
        <HeroSection theme={theme} />
        
        {/* Tab Navigation (Resume / Projects toggle) */}
        <TabNavigation 
          theme={theme} 
          projects={projects} 
          handleSubjectClick={handleSubjectClick} 
        />

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