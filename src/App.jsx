import React, { useState, useEffect } from 'react';
import './online_portfolio.css';
import myLogo from './assets/images/My logo.png'; // Import the logo

function App() {
  const [showLongText, setShowLongText] = useState(false);
  const [myFieldVisible, setMyFieldVisible] = useState(false);
  const [infoCardVisible, setInfoCardVisible] = useState(false);
  const [subjectBoxesVisible, setSubjectBoxesVisible] = useState(false);
  const [formCardVisible, setFormCardVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [loadingSpinnerVisible, setLoadingSpinnerVisible] = useState(false);
  const [projectDetailsContent, setProjectDetailsContent] = useState(null);

  // useEffect for scroll events and other logic will go here
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Handle short-text and long-text visibility
      // Original logic: if scrollPosition > 100, show long text, else show short.
      // Using a single state `showLongText` for this.
      if (scrollPosition > 100) {
        if (!showLongText) setShowLongText(true);
      } else {
        if (showLongText) setShowLongText(false);
      }

      // Handle visibility of my_field
      // Original logic: if scrollPosition > 1300, show my_field.
      if (scrollPosition > 1300) {
        if (!myFieldVisible) setMyFieldVisible(true);
      } else {
        if (myFieldVisible) setMyFieldVisible(false);
      }

      // Handle visibility of info_card
      // Original logic: if scrollPosition > 2500, add 'visible' class.
      if (scrollPosition > 2500) {
        if (!infoCardVisible) setInfoCardVisible(true);
      } else {
        if (infoCardVisible) setInfoCardVisible(false);
      }

      // Handle visibility of subject-boxes
      // Original logic: if window.scrollY >= 3000, make boxes visible if they are in viewport.
      // Simplified: make all subject boxes start appearing after scrollY >= 3000.
      // The individual box offset logic from original JS is complex for a direct translation here without direct DOM access.
      // For now, we make them all visible together based on a scroll threshold.
      // Your CSS will need to handle the staggered animation if desired based on the parent container getting a 'visible' class.
      if (window.scrollY >= 2800) { // Adjusted threshold slightly for earlier appearance before they are fully in view
        if (!subjectBoxesVisible) setSubjectBoxesVisible(true);
      } else {
        if (subjectBoxesVisible) setSubjectBoxesVisible(false);
      }
      
      // Handle visibility of formCard
      // Original logic: if scrollPosition > 4500, add 'visible' class.
      if (scrollPosition > 4000) { // Adjusted threshold slightly
        if(!formCardVisible) setFormCardVisible(true);
      } else {
        if(formCardVisible) setFormCardVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check in case the page loads scrolled
    handleScroll();

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showLongText, myFieldVisible, infoCardVisible, subjectBoxesVisible, formCardVisible]); // Dependencies for the effect

  // Project data - can be moved to a separate file later
  const projects = {
    subject1: {
      title: 'Code Lab-1',
      content: `
        <h4>Project 1: Skills Portfolio (C++)</h4>
        <p>Project 1 A wide ranged c++ exercises were executed </p>
        <a href="https://drive.google.com/drive/u/0/folders/1Ow_uhaZhgG6MBBPyF_gKsnp70x68eH_x" target="_blank" rel="noopener noreferrer">Go to Project</a>
        <h4>Project 2: Vending Machine (C++) </h4>
        <p>Project 2 A vending machine was designed with the learned c++ knowledge </p>
        <a href="https://drive.google.com/drive/u/0/folders/1jFChFkVsM7ka-O9LhParuqScDkpvXxvZ" target="_blank" rel="noopener noreferrer">Go to project</a>
      `,
    },
    subject2: {
      title: 'Digital Storytelling',
      content: `
        <h4>Project 1: Twine Interactive Story</h4>
        <p>Project 1: A Digital interactive story was created </p>
        <a href="https://drive.google.com/drive/u/0/folders/1oIh0350xUYH9MoWkFRiMmetASm6QLFun" target="_blank" rel="noopener noreferrer">Go to Project</a>
        <h4>Project 2: Digital Storytelling Portfolio</h4>
        <p>Project 2 A creative artifact was tried to be produced </p>
        <a href="https://sway.cloud.microsoft.com/ssY8ADCdBtU07EnF?ref=Link" target="_blank" rel="noopener noreferrer">Go to project</a>
      `,
    },
    subject3: {
      title: 'Experience Design',
      content: `
        <h4>Project 1: UX/UI Portfolio</h4>
        <p>Project 1: A complete portfolio Design of a UX/UI layout with Low and high fidelity structure and much more  </p>
        <a href="https://sway.cloud.microsoft.com/RIrm8pfMugobH0V4?ref=Link" target="_blank" rel="noopener noreferrer">Go to Project</a>
      `,
    },
    subject4: {
        title: 'Web Development',
        content: `
            <h4>Project 1: Skills Portfolio</h4>
            <p>Project 1: Created a exercises portfolio website using HTML, CSS, and JavaScript.</p>
            <a href="https://github.com/SkillsPortfolioWebDevelopment/skillsportfolioexercises-Trishna-sharma" target="_blank" rel="noopener noreferrer">Go to Project</a>
            <h4>Project 2: Online Portfolio(personal)</h4>
            <p>Project 2: Developed a small personal portfolio.</p>
            <a href="https://github.com/SkillsPortfolioWebDevelopment/skillsportfolioexercises-Trishna-sharma/tree/main/Assessment%202" target="_blank" rel="noopener noreferrer">Go to project</a>
        `,
    },
    subject5: {
        title: 'Code Lab-2',
        content: `
            <h4>Project 1: Skills Portfolio (Python)</h4>
            <p>Project 1: Worked on python exercises .</p>
            <a href="https://drive.google.com/drive/u/0/folders/18X6OdM6XVCodPvnbXmCXfjDSmIOsRKxA" target="_blank" rel="noopener noreferrer">Go to Project</a>
            <h4>Project 2: HUI app and Data Structures Implementation (Python)</h4>
            <p>Project 2: Implemented overall python learnings and libraries and gui interface to build the app.</p>
            <a href="https://drive.google.com/drive/u/0/folders/18ZZMFwRQYElgiSAM-TJNbTyuUKl80109" target="_blank" rel="noopener noreferrer">Go to project</a>
        `,
    },
    subject6: {
        title: 'Games Development',
        content: `
            <h4>Project 1: Reviewed a game </h4>
            <p>Project 1: Reviewed a game to understand how a game works and understood the basic criterias.</p>
            <a href="https://drive.google.com/drive/u/0/folders/18mCR9GVxic3E9XqjhT7aP2tRGFkH0jx8" target="_blank" rel="noopener noreferrer">Go to Project</a>
            <h4>Project 2: 2D game development </h4>
            <p>Project 2: Developed a 2D game using the Unity</p>
            <a href="https://drive.google.com/drive/u/0/folders/18y60FW04Iv4XtTNKne8oYjkuFtQLNqNF" target="_blank" rel="noopener noreferrer">Go to project</a>
        `,
    },
    subject7: {
        title: 'Responsive Web',
        content: `
            <h4>Project 1: Clone Task</h4>
            <p>Project 1: Executed 3 tasks to completely understand how the responsiveness worked</p>
            <a href="https://github.com/Trishna-sharma/clone-tasks" target="_blank" rel="noopener noreferrer">Go to Project</a>
            <h4>Project 2: Multi Device Application</h4>
            <p>Project 2: Implemented advanced media queries for responsive layouts and created a multi device website.</p>
            <a href="https://drive.google.com/drive/u/0/folders/1G7HGnatz35dQNl2sr78Q5ZTqijjSH0aG" target="_blank" rel="noopener noreferrer">Go to project</a>
        `,
    },
    subject8: {
        title: 'Creative Industry Challenge',
        content: `
            <h4>Project 1: Challange Portfolio</h4>
            <p>Project 1: Went to a Business holder and offered them a co-op service creation </p>
            <a href="https://drive.google.com/drive/u/0/folders/1RUpkYzdeKDdmzmXo1ntbda_OeIWZ-Vpx" target="_blank" rel="noopener noreferrer">Go to Project</a>
        `,
    },
    subject9: {
        title: 'Emerging Technologies',
        content: `
            <h4>Project 1: Visualization creation</h4>
            <p>Project 1: Created 5 visualization of data structures</p>
            <a href="https://drive.google.com/file/d/1gmE6iHSZeQiEeIF21Vi7OdkCQ9IkwYKv/view?usp=sharing" target="_blank" rel="noopener noreferrer">Go to Project</a>
            <h4>Project 2: Chatbot creation</h4>
            <p>Project 2: Built a Basic Chatbot.</p>
            <a href="https://drive.google.com/drive/u/0/folders/1q47w4R_SVUyaj5P6zpfL6CJppgSV3hse" target="_blank" rel="noopener noreferrer">Go to project</a>
        `,
    },
    subject10: {
        title: 'Smartphone Apps',
        content: `
            <h4>Project 1: App Review</h4>
            <p>Project 1: Reviewed an application to understand the core of the designs</p>
            <a href="https://drive.google.com/drive/u/0/folders/18Ttz-gg6CUZ0ncGQN2jh-UDcmmEeTOeH" target="_blank" rel="noopener noreferrer">Go to Project</a>
            <h4>Project 2: 2 Working Apps</h4>
            <p>Project 2: Built 2 full fledged working applications , using Android Studio</p>
            <a href="https://drive.google.com/drive/u/0/folders/18UGcr0w3Z3JXFMR5OPTeW_LQWz3MZyeH" target="_blank" rel="noopener noreferrer">Go to project</a>
        `,
    },
    subject11: {
        title: 'Machine Learning',
        content: `
            <h4>Project 1: Predictive Model for Stock Prices</h4>
            <p>Project 1: Developed a model to predict stock prices using machine learning algorithms.</p>
            <a href="https://drive.google.com/drive/u/0/folders/1_vVwAYjRPwvYNFjl3v9NtwA21kvIWXiN" target="_blank" rel="noopener noreferrer">Go to Project</a>
            <h4>Project 2: Classification of Customer Churn</h4>
            <p>Project 2: Built a classification model to predict customer churn in a subscription-based service.</p>
            <a href="https://drive.google.com/drive/u/0/folders/1y6uD6g0EG0wpitVOpix_H02vDP2gXLco" target="_blank" rel="noopener noreferrer">Go to project</a>
        `,
    },
    subject12: {
        title: 'Research Project',
        content: `
            <h4>Project 1: Data Cleaning for Customer Dataset</h4>
            <p>Project 1: Performed data cleaning and pre-processing for a customer dataset.</p>
            <a href="https://drive.google.com/drive/u/0/folders/1yTgiRf6fTa5-REoC_zLU_8a1kGV4xXnG" target="_blank" rel="noopener noreferrer">Go to Project</a>
            <h4>Project 2: Predictive Analysis for Retail Business</h4>
            <p>Project 2: Developed a predictive model for retail sales forecasting.</p>
            <a href="https://drive.google.com/drive/u/0/folders/1VXUUGYq-w8vwLfMNtSyfMZn-Qz8-f7rN" target="_blank" rel="noopener noreferrer">Go to project</a>
        `,
    },
    subject13: {
        title: 'Physical Computing',
        content: `
            <h4>Project 1: Physical computing portfolio</h4>
            <p>Project 1: Built a portfolio with 6 individual projects and 1 final group project</p>
            <a href=" " target="_blank" rel="noopener noreferrer">Go to Project</a>
        `,
    },
    subject14: {
        title: 'Cyber Security',
        content: `
            <h4>Project 1: Costed Plan</h4>
            <p>Project 1: Developed a document , understanding how cyber security worked in an organizatiion, with thorough interviewing officer.</p>
            <a href="https://docs.google.com/document/d/1i_6QcjswXQNagWtUNfwdBdj1VXaoNEfT/edit?usp=sharing&ouid=104017619782090653134&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Go to Project</a>
            <h4>Project 2: Forensic Investigation</h4>
            <p>Project 2: Analyzed and investigated a forensic file in order to understand how the investigation is done </p>
            <a href="https://docs.google.com/document/d/1WqeShfW48RceiiJTxCvDNfbwMYPYloj4/edit?usp=sharing&ouid=104017619782090653134&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Go to project</a>
        `,
    },
    subject15: {
        title: 'Creative incubator',
        content: `
            <h4>Project 1: Online Portfolio and CV </h4>
            <p>Project 1: Created a CV and documented all the skills learnt so far</p>
            <a href="" target="_blank" rel="noopener noreferrer">Go to Project</a>
            <h4>Project 2: Business proposal</h4>
            <p>Project 2: Worked in a group to create a product thats ready to launch digitally.</p>
            <a href="" target="_blank" rel="noopener noreferrer">Go to project</a>
        `,
    },
    subject16: {
        title: "Tommorow's web",
        content: `
            <h4>Project 1: A complete front end and back end website (Individual ) using Node.js and Mongo DB</h4>
            <p>Project 1: Developed a full-fledged front end and back end channel individually.</p>
            <a href=" " target="_blank" rel="noopener noreferrer">Go to Project</a>
        `,
    },
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
    setProjectDetailsContent(null); // Clear content when closing
  };

  return (
    <>
      <nav id="menu_bar">
        <img src={myLogo} width="100px" height="100px" alt="My Logo" />
        <ul>
          <li><a href="#intro">Intro</a></li>
          <li><a href="#what I do ">What I do</a></li>
          <li><a href="#who  I am ">Who I am</a></li>
          <li><a href="#My work">My Work</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>

      {loadingSpinnerVisible && <div id="loading-spinner" className="loading-spinner" style={{ display: 'block' }}></div>}

      <div className={`parallex1 ${showLongText ? 'long-text-active' : 'short-text-active'}`}>
        <div className="parallex1_container"></div>
        <div className="content1">
          <h1 id="dynamic-text">
            {!showLongText && <span className="short-text" style={{ display: 'inline', animation: showLongText === null ? '' : (showLongText ? 'fadeOut 0.5s ease-in-out forwards' : 'fadeIn 0.5s ease-in-out forwards') }}>Hey.</span>}
            {showLongText && <span className="long-text" style={{ display: 'inline', animation: showLongText === null ? '' : (showLongText ? 'fadeIn 0.5s ease-in-out forwards' : 'fadeOut 0.5s ease-in-out forwards') }}>I am Trishna Shil.</span>}
          </h1>
        </div>
      </div>

      <div className="parallex2">
        <div className="parallex2_container"></div>
        <div className="content2">
          <h1 id="my_field" style={{ display: myFieldVisible ? 'block' : 'none', animation: myFieldVisible === null ? '' : (myFieldVisible ? 'fadeIn 0.5s ease-in-out forwards' : 'fadeOut 0.5s ease-in-out forwards')}}>I specialize in HTML,CSS,Javascript,Node.js,Mongo DB .</h1>
        </div>
      </div>

      <div className="parallex3">
        <div className="parallex3_container"></div>
        <div className="content3">
          <div id="info_card" className={`info-card ${infoCardVisible ? 'visible' : ''}`}>
            <h1 id="my_information">
              I am a fresh graduate from Bath Spa University in Computer Science. I have always been fascinated by computers and how they perform so many intelligent tasks.
            </h1>
          </div>
        </div>
      </div>

      <div className="parallex4">
        <div className="parallex4_container"></div>
        <div className="content4">
          <h1 id="my_work">My Work</h1>
          <div className="subject-boxes">
            {Object.keys(projects).map((subjectKey, index) => (
                 <div 
                    key={subjectKey} 
                    className={`subject-box ${subjectBoxesVisible ? 'visible' : ''}`} 
                    id={subjectKey} 
                    onClick={() => handleSubjectClick(subjectKey)}
                 >
                    {projects[subjectKey].title.split(' ').slice(0,2).join(' ')} {/* Displaying a short version of title or ID */}
                 </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`overlay ${overlayVisible ? 'visible' : ''}`} id="overlay" style={{ display: overlayVisible ? 'flex' : 'none' }}>
          <div className="overlay-content">
            <button className="close-btn" id="close-btn" onClick={handleCloseOverlay}>Close</button>
            <div id="project-details">
              {projectDetailsContent}
            </div>
          </div>
        </div>

      <div className="parallax5">
        <div className="content5">
          <h1>Say Hello</h1>
        </div>
        <div className={`form-card ${formCardVisible ? 'visible' : ''}`} id="formCard">
          <form action="https://formspree.io/f/xvgzezan" method="POST">
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <textarea placeholder="Message" name="message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="parallex_footer">
        <div className="parallex_footer_container"></div>
        <div className="content_footer">
          <p>&copy; 2025 Trishna Sharma Mou. All rights reserved.</p>
          <div className="social_icons">
            <a href="https://github.com/Trishna-sharma"><i className="fa fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/trishna-sharma-7928b8214/"><i className="fa fa-linkedin-square"></i></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
