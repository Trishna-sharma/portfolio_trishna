import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import MyWorkSection from './MyWorkSection';
import cvFile from '../assets/images/CV_QA.pdf';

const TabNavigation = ({ theme, projects, handleSubjectClick, subjectBoxesVisible }) => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <section className="py-4 w-full">
      {/* Tab Bar Container */}
      <div className={`flex flex-col md:flex-row items-center justify-between p-4 sm:p-5 rounded-2xl mb-8 border backdrop-blur-md transition-colors gap-4 ${
        theme === 'light' 
          ? 'bg-slate-100/80 border-slate-200' 
          : 'bg-slate-800/50 border-slate-700/60'
      }`}>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 text-center md:text-left">
          Switch tabs below to view my CV or explore my project portfolio.
        </p>

        {/* Controls Container with Wrapping */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 w-full md:w-auto">
          {/* Segmented Tab Controls */}
          <div className={`p-1 rounded-xl border flex items-center gap-1 relative ${
            theme === 'light' 
              ? 'bg-slate-200/70 border-slate-300/60' 
              : 'bg-slate-900/70 border-slate-700/50'
          }`}>
            <button
              onClick={() => setActiveTab('resume')}
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
              onClick={() => setActiveTab('projects')}
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

          {/* Download CV Button */}
          <a
            href={cvFile}
            download="Trishna_Sharma_QA_CV.pdf"
            className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
              theme === 'light'
                ? 'border-purple-300 bg-white text-purple-600 hover:bg-purple-50 shadow-sm'
                : 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
            }`}
          >
            <FaDownload className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>
      </div>

      {/* Render selected view */}
      <div>
        {activeTab === 'projects' ? (
          <MyWorkSection 
            projects={projects} 
            subjectBoxesVisible={subjectBoxesVisible} 
            handleSubjectClick={handleSubjectClick} 
            theme={theme} 
          />
        ) : (
          <div className="p-8 text-center border rounded-2xl border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold mb-2">Resume / CV Details</h3>
            <p className="text-slate-500">Resume overview details go here.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TabNavigation;