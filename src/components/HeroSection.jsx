import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';
import resumePdf from '../assets/images/UAE CV (QA).pdf';

const HeroSection = ({ showLongText, theme }) => {
  // Roles to cycle through in the hero section animation
  const roles = [
    "Full-Stack Developer",
    "QA Engineer",
    "Web Developer"
  ];

  const [index, setIndex] = useState(0);

  // Timer to rotate titles every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [roles.length]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col justify-center items-start p-8 md:p-16 relative overflow-hidden ${
        theme === 'light' ? 'bg-gray-50 text-slate-800' : 'bg-slate-900 text-slate-100'
      }`}
    >
      <motion.div
        className="z-10 w-full max-w-4xl pl-[5%] sm:pl-[10%] md:pl-[15%]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          custom={0}
          variants={textVariants}
          className={`block text-5xl sm:text-6xl md:text-7xl font-bold mb-4 ${
            theme === 'light' ? 'text-slate-800' : 'text-slate-100'
          }`}
        >
          Hey.
        </motion.span>
        
        <motion.span
          custom={1}
          variants={textVariants}
          className={`block text-5xl sm:text-6xl md:text-7xl font-bold mb-4 ${
            theme === 'light' ? 'text-slate-800' : 'text-slate-100'
          }`}
        >
          I'm <span className={`${theme === 'light' ? 'text-purple-600' : 'text-blue-400'}`}>Trishna</span>,
        </motion.span>

        {showLongText && (
          <motion.div
            custom={2}
            variants={textVariants}
            className={`text-3xl sm:text-5xl md:text-6xl font-semibold mb-6 flex flex-wrap items-center gap-x-3 ${
              theme === 'light' ? 'text-slate-700' : 'text-slate-200'
            }`}
          >
            <span>a</span>
            
            <div className="relative overflow-hidden inline-block h-12 sm:h-16 md:h-20 flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`inline-block ${
                    theme === 'light' ? 'text-purple-600' : 'text-blue-400'
                  }`}
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        <motion.p
          custom={3}
          variants={textVariants}
          className={`text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}
        >
          I craft innovative and user-centric digital experiences, from concept to deployment. 
          Check out my latest full-stack project, JournalApp!
        </motion.p>

        <motion.div 
          custom={4}
          variants={buttonVariants}
          className="flex flex-col sm:flex-row sm:flex-wrap gap-4"
        >
          <a
            href="https://github.com/Trishna-sharma/Her"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm transition-colors ${
              theme === 'light'
                ? 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'
                : 'text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              theme === 'light' ? 'focus:ring-offset-gray-50' : 'focus:ring-offset-slate-900'
            }`}
          >
            <FaGithub className="mr-2 -ml-1 h-5 w-5" />
            Her By Mou Website on Github
          </a>

          <a
            href="https://her-by-mou-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md shadow-sm transition-colors ${
              theme === 'light'
                ? 'text-purple-600 border-purple-500 bg-white hover:bg-purple-50 focus:ring-purple-400'
                : 'text-blue-400 border-blue-400 bg-slate-800 hover:bg-slate-700 focus:ring-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              theme === 'light' ? 'focus:ring-offset-gray-50' : 'focus:ring-offset-slate-900'
            }`}
          >
            <FaExternalLinkAlt className="mr-2 -ml-1 h-5 w-5" />
            Her By Mou (Live)
          </a>

          <a
            href="https://github.com/Trishna-sharma/JournalApp"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm transition-colors ${
              theme === 'light'
                ? 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'
                : 'text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              theme === 'light' ? 'focus:ring-offset-gray-50' : 'focus:ring-offset-slate-900'
            }`}
          >
            <FaGithub className="mr-2 -ml-1 h-5 w-5" />
            JournalApp on GitHub
          </a>

          <a
            href="https://journal-app-lilac-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md shadow-sm transition-colors ${
              theme === 'light'
                ? 'text-purple-600 border-purple-500 bg-white hover:bg-purple-50 focus:ring-purple-400'
                : 'text-blue-400 border-blue-400 bg-slate-800 hover:bg-slate-700 focus:ring-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              theme === 'light' ? 'focus:ring-offset-gray-50' : 'focus:ring-offset-slate-900'
            }`}
          >
            <FaExternalLinkAlt className="mr-2 -ml-1 h-5 w-5" />
            View JournalApp (Live)
          </a>

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md shadow-sm transition-colors ${
              theme === 'light'
                ? 'text-purple-600 border-purple-500 bg-white hover:bg-purple-50 focus:ring-purple-400'
                : 'text-blue-400 border-blue-400 bg-slate-800 hover:bg-slate-700 focus:ring-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              theme === 'light' ? 'focus:ring-offset-gray-50' : 'focus:ring-offset-slate-900'
            }`}
          >
            <FaFilePdf className="mr-2 -ml-1 h-5 w-5" />
            View Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;