import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaCode, 
  FaCheckCircle, 
  FaGlobe, 
  FaTools, 
  FaBug,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaPaperPlane
} from 'react-icons/fa';

const ResumeSection = ({ theme }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All', 
    'Specializations', 
    'Tech Stack', 
    'Experience', 
    'Skills', 
    'Education'
  ];

  const showSection = (sectionName) => {
    return activeFilter === 'All' || activeFilter === sectionName;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col gap-6 text-left"
    >
      {/* 🔹 TOP CV HERO HEADER CARD */}
      <div className={`p-6 sm:p-8 rounded-2xl border ${
        theme === 'light' 
          ? 'bg-slate-50 border-slate-200' 
          : 'bg-slate-800/40 border-slate-700/60'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Trishna Sharma
            </h1>
            <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm sm:text-base mt-1">
              QA Automation Tester & Front-End Developer
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 text-xs">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${
              theme === 'light' ? 'bg-white border-slate-200 text-slate-600 shadow-sm' : 'bg-slate-900/60 border-slate-700 text-slate-300'
            }`}>
              <FaMapMarkerAlt className="text-purple-500" /> Ras-al-Khaimah, UAE
            </span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${
              theme === 'light' ? 'bg-white border-slate-200 text-slate-600 shadow-sm' : 'bg-slate-900/60 border-slate-700 text-slate-300'
            }`}>
              <FaEnvelope className="text-purple-500" /> Trishnasharma2002@gmail.com
            </span>
            <a 
              href="https://trishna-shil-mou.vercel.app/" 
              target="_blank" 
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border hover:border-purple-500 transition-colors ${
                theme === 'light' ? 'bg-white border-slate-200 text-slate-600 shadow-sm' : 'bg-slate-900/60 border-slate-700 text-slate-300'
              }`}
            >
              <FaGlobeAmericas className="text-purple-500" /> Portfolio
            </a>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
          Reliable and thorough QA tester specializing in web and mobile application testing. Combines strong manual testing skills with basic automation experience to deliver fast, accurate bug reports. Focused on helping clients launch smooth, user-friendly software on time.
        </p>
      </div>

      {/* 🔹 Filter Navigation Pills */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pb-2">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                  : theme === 'light'
                  ? 'bg-slate-200/70 text-slate-600 hover:bg-slate-300/70'
                  : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700/80'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* 🔹 Main Even 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex flex-col gap-6">
          
          {/* WORK EXPERIENCE */}
          {(showSection('Experience') || activeFilter === 'All') && (
            <motion.div 
              layout 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 10 }}
              className={`p-6 rounded-2xl border ${
                theme === 'light' 
                  ? 'bg-slate-50 border-slate-200' 
                  : 'bg-slate-800/40 border-slate-700/60'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <FaBriefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Work Experience</h3>
              </div>

              <div className="flex flex-col gap-6 border-l-2 border-purple-500/30 pl-4 ml-3">
                {/* Job 1 */}
                <div className="relative">
                  <span className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-purple-600 ring-4 ring-purple-500/20" />
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h4 className="font-bold text-base text-slate-900 dark:text-white">QA Automation Tester</h4>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      2025 - Present
                    </span>
                  </div>
                  <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">AM Tech | Ras-al-Khaimah, UAE</p>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 flex flex-col gap-1.5 list-disc list-inside">
                    <li>Executing security procedures, policy adherence, and test design strategies.</li>
                    <li>Leading line management, staff evaluation, client communication, and time monitoring.</li>
                    <li>Mentoring team members and implementing software testing best practices.</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="relative">
                  <span className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-purple-600 ring-4 ring-purple-500/20" />
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h4 className="font-bold text-base text-slate-900 dark:text-white">Functional Tester</h4>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      2023 - 2025
                    </span>
                  </div>
                  <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">Al Nasr Building Maintenance | Ras-al-Khaimah, UAE</p>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 flex flex-col gap-1.5 list-disc list-inside">
                    <li>Managed workflow integration, project management, and feedback cycles.</li>
                    <li>Conducted performance evaluations and functional test execution.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* EDUCATION */}
          {(showSection('Education') || activeFilter === 'All') && (
            <motion.div 
              layout 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 10 }}
              className={`p-6 rounded-2xl border ${
                theme === 'light' 
                  ? 'bg-slate-50 border-slate-200' 
                  : 'bg-slate-800/40 border-slate-700/60'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <FaGraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>

              <div className="border-l-2 border-purple-500/30 pl-4 ml-3 relative">
                <span className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-purple-600 ring-4 ring-purple-500/20" />
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    Bachelor of Science (Honours, Computer Science)
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    Graduated June 2025
                  </span>
                </div>
                <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">Bath Spa University</p>
                <ul className="text-xs text-slate-600 dark:text-slate-300 flex flex-col gap-1.5 list-disc list-inside">
                  <li>Comprehensive knowledge in Computer Science & software engineering principles.</li>
                  <li>Emphasizing project optimization and data-driven QA automation strategies.</li>
                </ul>
              </div>
            </motion.div>
          )}

          {/* 🔹 LET'S CONNECT CARD (NO FORM) */}
          {(activeFilter === 'All' || activeFilter === 'Experience' || activeFilter === 'Education' || activeFilter === 'Skills') && (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className={`p-6 rounded-2xl border flex flex-col gap-4 ${
                theme === 'light' 
                  ? 'bg-gradient-to-br from-purple-50/60 to-slate-50 border-purple-200/80' 
                  : 'bg-gradient-to-br from-purple-900/20 to-slate-800/40 border-purple-500/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <FaPaperPlane className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Let's Connect</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Get in touch for QA Testing or Web Development projects.</p>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 text-xs pt-2">
                <a 
                  href="mailto:Trishnasharma2002@gmail.com" 
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    theme === 'light' 
                      ? 'bg-white border-slate-200 hover:border-purple-300 shadow-sm' 
                      : 'bg-slate-900/60 border-slate-700/80 hover:border-purple-500/50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <FaEnvelope className="text-purple-500 w-4 h-4" />
                    <span className="font-medium text-slate-700 dark:text-slate-200">Trishnasharma2002@gmail.com</span>
                  </div>
                  <span className="text-[11px] font-semibold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md">
                    Email Me
                  </span>
                </a>

                <a 
                  href="https://trishna-shil-mou.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    theme === 'light' 
                      ? 'bg-white border-slate-200 hover:border-purple-300 shadow-sm' 
                      : 'bg-slate-900/60 border-slate-700/80 hover:border-purple-500/50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <FaGlobeAmericas className="text-purple-500 w-4 h-4" />
                    <span className="font-medium text-slate-700 dark:text-slate-200">trishna-shil-mou.vercel.app</span>
                  </div>
                  <span className="text-[11px] font-semibold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md">
                    Visit Portfolio
                  </span>
                </a>
              </div>
            </motion.div>
          )}

        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="flex flex-col gap-6">
          
          {/* SPECIALIZATIONS */}
          {(showSection('Specializations') || activeFilter === 'All') && (
            <motion.div 
              layout 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 10 }}
              className={`p-6 rounded-2xl border ${
                theme === 'light' 
                  ? 'bg-slate-50 border-slate-200' 
                  : 'bg-slate-800/40 border-slate-700/60'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <FaBug className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Specializations</h3>
              </div>

              <ul className="text-xs text-slate-600 dark:text-slate-300 flex flex-col gap-2.5">
                {[
                  'Creating customized test plans, test strategies, test cases, and bug reports',
                  'Covering testing types: Smoke, Sanity, Exploratory, Functional, System, Regression',
                  'Manual testing with tools such as Jira and Azure DevOps',
                  'Working with databases: PostgreSQL',
                  'Implementing automation with Playwright and BDD frameworks',
                  'Conducting Load/Performance Testing using JMeter & API Testing with Postman'
                ].map((spec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="w-3.5 h-3.5 text-purple-500 mt-0.5 shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* TECH STACK */}
          {(showSection('Tech Stack') || activeFilter === 'All') && (
            <motion.div 
              layout 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 10 }}
              className={`p-6 rounded-2xl border ${
                theme === 'light' 
                  ? 'bg-slate-50 border-slate-200' 
                  : 'bg-slate-800/40 border-slate-700/60'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <FaCode className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Tech Stack</h3>
              </div>

              <div className="flex flex-col gap-3 text-xs">
                <div>
                  <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Languages</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['JavaScript', 'TypeScript'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-300 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Testing Frameworks</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Playwright (Node.js)', 'Cypress (Node.js)', 'WebdriverIO', 'Lighthouse'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-300 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Tools & DevOps</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Git', 'Jenkins', 'Bash', 'Postman', 'Docker', 'Azure DevOps', 'Jira', 'JMeter'].map((tech) => (
                      <span key={tech} className={`px-2.5 py-1 rounded-lg font-medium ${
                        theme === 'light' ? 'bg-slate-200 text-slate-700' : 'bg-slate-700/60 text-slate-200'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SKILLS */}
          {(showSection('Skills') || activeFilter === 'All') && (
            <motion.div 
              layout 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 10 }}
              className={`p-6 rounded-2xl border ${
                theme === 'light' 
                  ? 'bg-slate-50 border-slate-200' 
                  : 'bg-slate-800/40 border-slate-700/60'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <FaTools className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Skills</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  'Functional Testing', 'Mobile Testing', 'Regression Testing', 
                  'Performance Testing', 'Load / Stress Testing (JMeter)', 
                  'Test Plans & Test Cases', 'WCAG Accessibility', 'Cross-Browser Testing', 
                  'Integration Testing', 'Usability Testing', 'Security Testing', 
                  'API Testing', 'CI/CD Fundamentals', 'Agile / SCRUM'
                ].map((skill) => (
                  <span 
                    key={skill} 
                    className={`px-3 py-1 rounded-xl text-xs font-medium border ${
                      theme === 'light' 
                        ? 'bg-white border-slate-200 text-slate-700 shadow-sm' 
                        : 'bg-slate-900/60 border-slate-700/80 text-slate-300'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* LANGUAGES */}
          {(activeFilter === 'All') && (
            <motion.div 
              layout 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 10 }}
              className={`p-6 rounded-2xl border ${
                theme === 'light' 
                  ? 'bg-slate-50 border-slate-200' 
                  : 'bg-slate-800/40 border-slate-700/60'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <FaGlobe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Languages</h3>
              </div>

              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900 dark:text-white">English:</span>
                  <span className="text-purple-600 dark:text-purple-400 font-medium">Proficient (C1)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900 dark:text-white">Bangla:</span>
                  <span className="text-purple-600 dark:text-purple-400 font-medium">Native</span>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </motion.div>
  );
};

export default ResumeSection;