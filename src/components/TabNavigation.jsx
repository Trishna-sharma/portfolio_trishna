import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import MyWorkSection from './MyWorkSection';
import ResumeSection from './ResumeSection';
import cvFile from '../assets/images/CV_QA.pdf';

const TabNavigation = ({ theme, projects, activeTab, setActiveTab, handleSubjectClick, subjectBoxesVisible }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownload = () => {
    if (isDownloading) return;
    
    setIsDownloading(true);

    // Trigger file download programmatically
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Trishna_Sharma_QA_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Keep loading state visible for feedback
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <section className="py-2 w-full">
      {/* Tab Bar Container */}
      <div className={`flex flex-col md:flex-row items-center justify-between p-4 sm:p-5 rounded-2xl mb-6 border backdrop-blur-md transition-colors gap-4 ${
        theme === 'light' 
          ? 'bg-slate-100/80 border-slate-200' 
          : 'bg-slate-800/50 border-slate-700/60'
      }`}>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 text-center md:text-left">
          Switch tabs below to view my CV or explore my project portfolio.
        </p>

        {/* Controls Container */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 w-full md:w-auto">
          {/* Segmented Tab Controls */}
          <div className={`p-1 rounded-xl border flex items-center gap-1 relative ${
            theme === 'light' 
              ? 'bg-slate-200/70 border-slate-300/60' 
              : 'bg-slate-900/70 border-slate-700/50'
          }`}>
            <button
              onClick={() => handleTabChange('resume')}
              className={`relative px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors z-10 ${
                activeTab === 'resume' 
                  ? 'text-purple-600 dark:text-blue-400' 
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              Resume / CV
              {activeTab === 'resume' && (
                <motion.div
                  layoutId="activeTabBackground"
                  className={`absolute inset-0 rounded-lg shadow-sm -z-10 ${
                    theme === 'light' ? 'bg-white' : 'bg-slate-800'
                  }`}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>

            <button
              onClick={() => handleTabChange('projects')}
              className={`relative px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors z-10 ${
                activeTab === 'projects' 
                  ? 'text-purple-600 dark:text-blue-400' 
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              Projects
              {activeTab === 'projects' && (
                <motion.div
                  layoutId="activeTabBackground"
                  className={`absolute inset-0 rounded-lg shadow-sm -z-10 ${
                    theme === 'light' ? 'bg-white' : 'bg-slate-800'
                  }`}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          </div>

          {/* Download CV Button Container */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                theme === 'light'
                  ? 'border-purple-300 bg-white text-purple-600 hover:bg-purple-50 shadow-sm'
                  : 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
              } ${isDownloading ? 'opacity-80 cursor-not-allowed' : ''}`}
            >
              <FaDownload className={`w-3.5 h-3.5 ${isDownloading ? 'animate-bounce' : ''}`} />
              <span>{isDownloading ? 'Downloading...' : 'Download CV'}</span>
            </button>

            {/* Loading Animation Bar Beneath Button */}
            {isDownloading && (
              <div className="w-full h-1 mt-1 bg-purple-900/30 rounded-full overflow-hidden border border-purple-500/20">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.1,
                    ease: 'easeInOut',
                  }}
                  className="w-1/2 h-full bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* View Switcher */}
      <div>
        {activeTab === 'projects' ? (
          <MyWorkSection 
            projects={projects} 
            subjectBoxesVisible={subjectBoxesVisible} 
            handleSubjectClick={handleSubjectClick} 
            theme={theme} 
          />
        ) : (
          <ResumeSection theme={theme} />
        )}
      </div>
    </section>
  );
};

export default TabNavigation;