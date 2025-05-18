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
import myLogo from '../public/My_logo.png';

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
      if (scrollPosition > (window.innerHeight * 1.8)) { // My Work
        if (!subjectBoxesVisible) setSubjectBoxesVisible(true);
      } else {
        if (subjectBoxesVisible) setSubjectBoxesVisible(false);
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

  const projects = {
    subject1: { title: 'Code Lab-1', content: `<h4>Project 1: Skills Portfolio (C++)</h4><p>Project 1 A wide ranged c++ exercises were executed </p><a href="https://drive.google.com/drive/u/0/folders/1Ow_uhaZhgG6MBBPyF_gKsnp70x68eH_x" target="_blank" rel="noopener noreferrer">Go to Project</a><h4>Project 2: Vending Machine (C++) </h4><p>Project 2 A vending machine was designed with the learned c++ knowledge </p><a href="https://drive.google.com/drive/u/0/folders/1jFChFkVsM7ka-O9LhParuqScDkpvXxvZ" target="_blank" rel="noopener noreferrer">Go to project</a>`},
    subject2: { title: 'Digital Storytelling', content: `<h4>Project 1: Twine Interactive Story</h4><p>Project 1: A Digital interactive story was created </p><a href="https://drive.google.com/drive/u/0/folders/1oIh0350xUYH9MoWkFRiMmetASm6QLFun" target="_blank" rel="noopener noreferrer">Go to Project</a><h4>Project 2: Digital Storytelling Portfolio</h4><p>Project 2 A creative artifact was tried to be produced </p><a href="https://sway.cloud.microsoft.com/ssY8ADCdBtU07EnF?ref=Link" target="_blank" rel="noopener noreferrer">Go to project</a>`},
    subject3: { title: 'Experience Design', content: `<h4>Project 1: UX/UI Portfolio</h4><p>Project 1: A complete portfolio Design of a UX/UI layout with Low and high fidelity structure and much more  </p><a href="https://sway.cloud.microsoft.com/RIrm8pfMugobH0V4?ref=Link" target="_blank" rel="noopener noreferrer">Go to Project</a>`},
    subject4: { title: 'Web Development', content: `<h4>Project 1: Skills Portfolio</h4><p>Project 1: Created a exercises portfolio website using HTML, CSS, and JavaScript.</p><a href="https://github.com/SkillsPortfolioWebDevelopment/skillsportfolioexercises-Trishna-sharma" target="_blank" rel="noopener noreferrer">Go to Project</a><h4>Project 2: Online Portfolio(personal)</h4><p>Project 2: Developed a small personal portfolio.</p><a href="https://github.com/SkillsPortfolioWebDevelopment/skillsportfolioexercises-Trishna-sharma/tree/main/Assessment%202" target="_blank" rel="noopener noreferrer">Go to project</a>`},
    subject5: { title: 'Code Lab-2', content: `<h4>Project 1: Skills Portfolio (Python)</h4><p>Project 1: Worked on python exercises .</p><a href="https://drive.google.com/drive/u/0/folders/18X6OdM6XVCodPvnbXmCXfjDSmIOsRKxA" target="_blank" rel="noopener noreferrer">Go to Project</a><h4>Project 2: HUI app and Data Structures Implementation (Python)</h4><p>Project 2: Implemented overall python learnings and libraries and gui interface to build the app.</p><a href="https://drive.google.com/drive/u/0/folders/18ZZMFwRQYElgiSAM-TJNbTyuUKl80109" target="_blank" rel="noopener noreferrer">Go to project</a>`},
    subject6: { title: 'Games Development', content: `<h4>Project 1: Reviewed a game </h4><p>Project 1: Reviewed a game to understand how a game works and understood the basic criterias.</p><a href="https://drive.google.com/drive/u/0/folders/18mCR9GVxic3E9XqjhT7aP2tRGFkH0jx8" target="_blank" rel="noopener noreferrer">Go to Project</a><h4>Project 2: 2D game development </h4><p>Project 2: Developed a 2D game using the Unity</p><a href="https://drive.google.com/drive/u/0/folders/18y60FW04Iv4XtTNKne8oYjkuFtQLNqNF" target="_blank" rel="noopener noreferrer">Go to project</a>`},
    subject7: { title: 'Responsive Web', content: `<h4>Project 1: Clone Task</h4><p>Project 1: Executed 3 tasks to completely understand how the responsiveness worked</p><a href="https://github.com/Trishna-sharma/clone-tasks" target="_blank" rel="noopener noreferrer">Go to Project</a><h4>Project 2: Multi Device Application</h4><p>Project 2: Implemented advanced media queries for responsive layouts and created a multi device website.</p><a href="https://drive.google.com/drive/u/0/folders/1G7HGnatz35dQNl2sr78Q5ZTqijjSH0aG" target="_blank" rel="noopener noreferrer">Go to project</a>`},
    subject8: { title: 'Creative Industry Challenge', content: `<h4>Project 1: Challange Portfolio</h4><p>Project 1: Went to a Business holder and offered them a co-op service creation </p><a href="https://drive.google.com/drive/u/0/folders/1RUpkYzdeKDdmzmXo1ntbda_OeIWZ-Vpx" target="_blank" rel="noopener noreferrer">Go to Project</a>`},
    subject9: { title: 'Emerging Technologies', content: `<h4>Project 1: Visualization creation</h4><p>Project 1: Created 5 visualization of data structures</p><a href="https://drive.google.com/file/d/1gmE6iHSZeQiEeIF21Vi7OdkCQ9IkwYKv/view?usp=sharing" target="_blank" rel="noopener noreferrer">Go to Project</a><h4>Project 2: Chatbot creation</h4><p>Project 2: Built a Basic Chatbot.</p><a href="https://drive.google.com/drive/u/0/folders/1q47w4R_SVUyaj5P6zpfL6CJppgSV3hse" target="_blank" rel="noopener noreferrer">Go to project</a>`},
    subject10: { title: 'Smartphone Apps', content: `<h4>Project 1: App Review</h4><p>Project 1: Reviewed an application to understand the core of the designs</p><a href="https://drive.google.com/drive/u/0/folders/18Ttz-gg6CUZ0ncGQN2jh-UDcmmEeTOeH" target="_blank" rel="noopener noreferrer">Go to Project</a><h4>Project 2: 2 Working Apps</h4><p>Project 2: Built 2 full fledged working applications , using Android Studio</p><a href="https://drive.gathub.com/drive/u/0/folders/18UGcr0w3Z3JXFMR5OPTeW_LQWz3MZyeH" target="_blank" rel="noopener noreferrer">Go to project</a>`},
    subject11: { title: 'Machine Learning', content: `<h4>Project 1: Predictive Model for Stock Prices</h4><p>Project 1: Developed a model to predict stock prices using machine learning algorithms.</p><a href="https://drive.google.com/drive/u/0/folders/1_vVwAYjRPwvYNFjl3v9NtwA21kvIWXiN" target="_blank" rel="noopener noreferrer">Go to Project</a><h4>Project 2: Classification of Customer Churn</h4><p>Project 2: Built a classification model to predict customer churn in a subscription-based service.</p><a href="https://drive.google.com/drive/u/0/folders/1y6uD6g0EG0wpitVOpix_H02vDP2gXLco" target="_blank" rel="noopener noreferrer">Go to project</a>`},
    subject12: { title: 'Research Project', content: `<h4>Project 1: Data Cleaning for Customer Dataset</h4><p>Project 1: Performed data cleaning and pre-processing for a customer dataset.</p><a href="https://drive.google.com/drive/u/0/folders/1yTgiRf6fTa5-REoC_zLU_8a1kGV4xXnG" target="_blank" rel="noopener noreferrer">Go to Project</a><h4>Project 2: Predictive Analysis for Retail Business</h4><p>Project 2: Developed a predictive model for retail sales forecasting.</p><a href="https://drive.google.com/drive/u/0/folders/1VXUUGYq-w8vwLfMNtSyfMZn-Qz8-f7rN" target="_blank" rel="noopener noreferrer">Go to project</a>`},
    subject13: { title: 'Physical Computing', content: `<h4>Project 1: Physical computing portfolio</h4><p>Project 1: Built a portfolio with 6 individual projects and 1 final group project</p><a href=" " target="_blank" rel="noopener noreferrer">Go to Project</a>`},
    subject14: { title: 'Cyber Security', content: `<h4>Project 1: Costed Plan</h4><p>Project 1: Developed a document , understanding how cyber security worked in an organizatiion, with thorough interviewing officer.</p><a href="https://docs.google.com/document/d/1i_6QcjswXQNagWtUNfwdBdj1VXaoNEfT/edit?usp=sharing&ouid=104017619782090653134&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Go to Project</a><h4>Project 2: Forensic Investigation</h4><p>Project 2: Analyzed and investigated a forensic file in order to understand how the investigation is done </p><a href="https://docs.google.com/document/d/1WqeShfW48RceiiJTxCvDNfbwMYPYloj4/edit?usp=sharing&ouid=104017619782090653134&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Go to project</a>`},
    subject15: { title: 'Creative incubator', content: `<h4>Project 1: Online Portfolio and CV </h4><p>Project 1: Created a CV and documented all the skills learnt so far</p><a href="" target="_blank" rel="noopener noreferrer">Go to Project</a><h4>Project 2: Business proposal</h4><p>Project 2: Worked in a group to create a product thats ready to launch digitally.</p><a href="" target="_blank" rel="noopener noreferrer">Go to project</a>`},
    subject16: { title: "Tommorow's web", content: `<h4>Project 1: A complete front end and back end website (Individual ) using Node.js and Mongo DB</h4><p>Project 1: Developed a full-fledged front end and back end channel individually.</p><a href=" " target="_blank" rel="noopener noreferrer">Go to Project</a>`},
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
