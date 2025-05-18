import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ showLongText, theme }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col justify-center items-start p-8 md:p-16 relative overflow-hidden ${theme === 'light' ? 'bg-gray-50 text-slate-800' : 'bg-slate-900 text-slate-100'}`}
    >
      <motion.div
        className="z-10 w-full max-w-4xl pl-[5%] sm:pl-[10%] md:pl-[15%]"
      >
        <motion.span
          className={`block text-5xl sm:text-6xl md:text-7xl font-bold mb-4 ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}
        >
          Hey.
        </motion.span>
        <motion.span
          className={`block text-5xl sm:text-6xl md:text-7xl font-bold mb-4 ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}
        >
          I'm <span className={`text-blue-500 dark:text-blue-400`}>Trishna</span>,
        </motion.span>
        {showLongText && (
          <motion.span
            className={`block text-4xl sm:text-5xl md:text-6xl font-semibold mb-8 ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}
          >
            a <span className={`text-blue-500 dark:text-blue-400`}>Software Engineer</span>.
          </motion.span>
        )}
        <motion.p
            className={`text-lg sm:text-xl md:text-2xl leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}
        >
            I craft digital experiences that are innovative, engaging, and user-centric.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;