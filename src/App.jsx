import React, { useState, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax'; // Import ParallaxProvider
// import './online_portfolio.css'; // CSS import removed
import Navbar from './components/Navbar'; // Updated import path
import LoadingSpinner from './components/LoadingSpinner'; // Import LoadingSpinner
import HeroSection from './components/HeroSection'; // Import HeroSection
import SpecializationSection from './components/SpecializationSection'; // Import SpecializationSection
import AboutMeSection from './components/AboutMeSection'; // Import AboutMeSection
import MyWorkSection from './components/MyWorkSection'; // Import MyWorkSection
import ProjectOverlay from './components/ProjectOverlay'; // Import ProjectOverlay
import ContactSection from './components/ContactSection'; // Import ContactSection
import Footer from './components/Footer'; // Import Footer
import myLogo from './assets/images/My logo.png';

// Import background images
import coverImage3 from './assets/images/cover_image3.jpg';
import coverImage2 from './assets/images/cover_image2.jpg';
import coverImage7 from './assets/images/cover_image7.jpg';
import coverImage8 from './assets/images/cover_image8.jpg';
import coverImage9 from './assets/images/cover_image9.jpg';
// Note: Your CSS for .parallex_footer did not specify an image, but had background-color. 
// If it needs an image, it should be imported here too.

function App() {
  const [showLongText, setShowLongText] = useState(false);
  const [myFieldVisible, setMyFieldVisible] = useState(false);
  const [infoCardVisible, setInfoCardVisible] = useState(false);
  const [subjectBoxesVisible, setSubjectBoxesVisible] = useState(false);
  const [formCardVisible, setFormCardVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [loadingSpinnerVisible, setLoadingSpinnerVisible] = useState(false);
  const [projectDetailsContent, setProjectDetailsContent] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjusted scroll trigger points based on typical section heights and desired effect
      // These might need fine-tuning based on actual content and layout flow
      if (scrollPosition > (window.innerHeight * 0.2)) { // Hero text transition
        if (!showLongText) setShowLongText(true);
      } else {
        if (showLongText) setShowLongText(false);
      }
      // Assuming HeroSection is ~130vh, Specialization text appears during/after it.
      if (scrollPosition > (window.innerHeight * 0.7)) { // Specialization text
        if (!myFieldVisible) setMyFieldVisible(true);
      } else {
        if (myFieldVisible) setMyFieldVisible(false);
      }
      // Assuming SpecializationSection is ~170vh after Hero.
      // Info card (AboutMe) appears after scrolling through a significant portion of previous sections.
      // Let's try a more relative trigger, or a larger absolute value.
      // Roughly: Hero (130vh) + Specialization (170vh) = 300vh. Let info card appear around 200-250vh.
      // Original was 2500px.
      if (scrollPosition > (window.innerHeight * 2.0)) { // Info card
        if (!infoCardVisible) setInfoCardVisible(true);
      } else {
        if (infoCardVisible) setInfoCardVisible(false);
      }
      // MyWork subject boxes. Original was 2800px.
      // Approx: Hero (130) + Spec (170) + About (170) = 470vh. Let MyWork boxes appear around 300-350vh.
      if (scrollPosition > (window.innerHeight * 3.0)) { // Subject boxes
        if (!subjectBoxesVisible) setSubjectBoxesVisible(true);
      } else {
        if (subjectBoxesVisible) setSubjectBoxesVisible(false);
      }
      // Contact Form. Original was 4000px.
      // Approx: Hero (130) + Spec (170) + About (170) + MyWork (170) = 640vh.
      // Let Contact form appear around 450-500vh.
      if (scrollPosition > (window.innerHeight * 4.5)) { // Form card
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
    <ParallaxProvider> {/** Wrap the app with ParallaxProvider */}
      <>
        <Navbar myLogo={myLogo} /> {/* Use the Navbar component */}

        {loadingSpinnerVisible && <LoadingSpinner />} {/* Use LoadingSpinner component */}
        
        <ProjectOverlay 
          overlayVisible={overlayVisible} 
          handleCloseOverlay={handleCloseOverlay} 
          projectDetailsContent={projectDetailsContent} 
        /> {/* Use ProjectOverlay component - moved it here so it's on top of main content */}
        
        {/* General wrapper for sections to apply common top padding */}
        <main className=""> {/* User must manually update this if previous attempts failed */}

          <HeroSection coverImage3={coverImage3} showLongText={showLongText} /> {/* Use HeroSection component */}
          
          <SpecializationSection coverImage2={coverImage2} myFieldVisible={myFieldVisible} /> {/* Use SpecializationSection component */}

          <AboutMeSection coverImage7={coverImage7} infoCardVisible={infoCardVisible} /> {/* Use AboutMeSection component */}

          <MyWorkSection 
            coverImage8={coverImage8} 
            projects={projects} 
            subjectBoxesVisible={subjectBoxesVisible} 
            handleSubjectClick={handleSubjectClick} 
          /> {/* Use MyWorkSection component */}

          <ContactSection coverImage9={coverImage9} formCardVisible={formCardVisible} /> {/* Use ContactSection component */}

          <Footer /> {/* Use Footer component */}

        </main>
      </>
    </ParallaxProvider>
  );
}

export default App;
