import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import resumePdf from '../assets/images/UAE CV (QA).pdf';

// Import your actual view components here!
import ProjectsGrid from './ProjectsGrid';
import ResumeView from './ResumeView';

const TabNavigation = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' or 'resume'

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      {/* Tab Controls Bar */}
      <div className={`flex flex-col sm:flex-row items-center justify-between p-4 rounded-2xl mb-8 border backdrop-blur-md transition-colors ${
        theme === 'light' 
          ? 'bg-slate-100/80 border-slate-200' 
          : 'bg-slate-800/50 border-slate-700/60'
      }`}>
        {/* Left Subtitle */}
        <p className="text-sm font-medium text-slate-500 mb-4 sm:mb-0">
          Switch tabs below to view my CV or explore my project portfolio.
        </p>

        {/* Right Actions: Segmented Pill Switcher + Download Button */}
        <div className="flex items-center gap-4">
          {/* Segmented Control Pill Container */}
          <div className={`p-1.5 rounded-xl border flex items-center gap-1 relative ${
            theme === 'light' 
              ? 'bg-slate-200/70 border-slate-300/60' 
              : 'bg-slate-900/70 border-slate-700/50'
          }`}>
            {/* Resume / CV Tab Button */}
            <button
              onClick={() => setActiveTab('resume')}
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors z-10 ${
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

            {/* Projects Tab Button */}
            <button
              onClick={() => setActiveTab('projects')}
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors z-10 ${
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

          {/* Direct Download CV Button */}
          <a
            href={resumePdf}
            download="Trishna_Sharma_CV.pdf"
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
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

      {/* Dynamic Tab Content Area */}
      <div className="transition-all duration-300">
        {activeTab === 'projects' ? (
          <ProjectsGrid theme={theme} />
        ) : (
          <ResumeView theme={theme} />
        )}
      </div>
    </section>
  );
};

export default TabNavigation;