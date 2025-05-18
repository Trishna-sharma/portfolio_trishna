import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

function MyWorkSection({ projects, subjectBoxesVisible, handleSubjectClick, theme }) {
  const projectKeys = Object.keys(projects);

  return (
    <section
      id="my-work"
      className={`min-h-screen py-16 px-4 md:px-8 flex flex-col items-center justify-center relative overflow-hidden text-center`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: subjectBoxesVisible ? 1 : 0, y: subjectBoxesVisible ? 0 : -50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`text-4xl sm:text-5xl font-bold mb-12`}
      >
        My Work
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: subjectBoxesVisible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projectKeys.map((key, index) => (
          <motion.div 
            key={key}
            onClick={() => handleSubjectClick(key)}
            className={`subject_box p-6 rounded-xl shadow-xl cursor-pointer transition-all duration-300 ease-out transform hover:scale-105 border ${
              theme === 'light'
                ? 'bg-neutral-light border-neutral-dark/20 hover:border-accent-teal hover:shadow-accent-teal/20'
                : 'bg-neutral-dark border-neutral-light/20 hover:border-accent-teal hover:shadow-accent-teal/30'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: subjectBoxesVisible ? 1 : 0, y: subjectBoxesVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: subjectBoxesVisible ? index * 0.1 + 0.3 : 0 }}
          >
            <h3 className={`text-xl font-semibold mb-3 min-h-[56px] flex items-center justify-center text-accent-teal`}>{projects[key].title}</h3> 
            <p className={`text-sm ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>Click to see details</p>
          </motion.div>
        ))}
      </motion.div>
      {Object.keys(projects).length > 10 && (
        <motion.p 
          className={`mt-8`}
          initial={{ opacity: 0 }}
          animate={{ opacity: subjectBoxesVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: subjectBoxesVisible ? projectKeys.length * 0.1 + 0.5 : 0}}
        >
          And many more... View all in my detailed project list or GitHub.
        </motion.p>
      )}
    </section>
  );
}

export default MyWorkSection; 