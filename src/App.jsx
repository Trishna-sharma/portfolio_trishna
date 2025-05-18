import React, { useState, useEffect } from 'react';
// ParallaxProvider import removed
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import HeroSection from './components/HeroSection';
import SpecializationSection from './components/SpecializationSection';
import AboutMeSection from './components/AboutMeSection';
import MyWorkSection from './components/MyWorkSection';
import ProjectOverlay from './components/ProjectOverlay';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GoToTopButton from './components/GoToTopButton';
import myLogo from './assets/images/My_logo.png';
import { projects } from './data/projects';
// Background styling will be handled by the main App div and section padding

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
  const [myFieldVisible, setMyFieldVisible] = useState(false);
  const [infoCardVisible, setInfoCardVisible] = useState(false);
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
      // Only update if no theme is manually set in localStorage
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
      localStorage.setItem('theme', newTheme); // Explicitly set theme on toggle
      return newTheme;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const workThreshold = window.innerHeight * 1.8;
      // Scroll trigger points might need adjustment based on new non-parallax layout
      // For now, keeping them as window.innerHeight percentages
      if (scrollPosition > (window.innerHeight * 0.1)) { // Earlier trigger for hero text
        if (!showLongText) setShowLongText(true);
      } else {
        if (showLongText) setShowLongText(false);
      }
      if (scrollPosition > (window.innerHeight * 0.5)) { // Specialization 
        if (!myFieldVisible) setMyFieldVisible(true);
      } else {
        if (myFieldVisible) setMyFieldVisible(false);
      }
      if (scrollPosition > (window.innerHeight * 1.2)) { // About Me (after Hero ~70-80vh + padding)
        if (!infoCardVisible) setInfoCardVisible(true);
      } else {
        if (infoCardVisible) setInfoCardVisible(false);
      }
      if (scrollPosition > workThreshold) { // My Work
        if (!subjectBoxesVisible) setSubjectBoxesVisible(true);
      } else {
        if (subjectBoxesVisible) {
            setSubjectBoxesVisible(false);
        }
      }
      if (scrollPosition > (window.innerHeight * 2.5)) { // Contact
        if(!formCardVisible) setFormCardVisible(true);
      } else {
        if(formCardVisible) setFormCardVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showLongText, myFieldVisible, infoCardVisible, subjectBoxesVisible, formCardVisible]);

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
        setProjectDetailsContent(<p>No details available for this subject.</p>)
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
      {/* pt-20 md:pt-24 ensures content starts below the fixed navbar */}
      <main className="w-full flex-grow pt-20 md:pt-24">
        <HeroSection showLongText={showLongText} theme={theme} />
        <SpecializationSection myFieldVisible={myFieldVisible} theme={theme} />
        <AboutMeSection infoCardVisible={infoCardVisible} theme={theme} />
        <MyWorkSection 
          projects={projects} 
          subjectBoxesVisible={subjectBoxesVisible} 
          handleSubjectClick={handleSubjectClick} 
          theme={theme}
        />
        <ContactSection formCardVisible={formCardVisible} theme={theme} />
        <Footer theme={theme} />
      </main>
      <GoToTopButton theme={theme} />
    </div>
  );
}

export default App;
