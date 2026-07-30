import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = ({ theme }) => {
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
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
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
      className={`min-h-[75vh] flex flex-col justify-center items-start px-6 md:px-16 py-12 relative overflow-hidden transition-colors ${
        theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-900 text-slate-100'
      }`}
    >
      <motion.div
        className="z-10 w-full max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Line 1: Hey. */}
        <motion.span
          custom={0}
          variants={textVariants}
          className={`block text-4xl sm:text-6xl md:text-7xl font-bold mb-2 ${
            theme === 'light' ? 'text-slate-800' : 'text-slate-100'
          }`}
        >
          Hey.
        </motion.span>
        
        {/* Line 2: I'm Trishna, */}
        <motion.span
          custom={1}
          variants={textVariants}
          className={`block text-4xl sm:text-6xl md:text-7xl font-bold mb-4 ${
            theme === 'light' ? 'text-slate-800' : 'text-slate-100'
          }`}
        >
          I'm <span className={theme === 'light' ? 'text-purple-600' : 'text-purple-400'}>Trishna</span>,
        </motion.span>

        {/* Line 3: Animated Rotating Titles */}
        <motion.div
          custom={2}
          variants={textVariants}
          className={`text-2xl sm:text-4xl md:text-5xl font-semibold mb-6 flex flex-wrap items-center gap-x-3 ${
            theme === 'light' ? 'text-slate-700' : 'text-slate-200'
          }`}
        >
          <span>a</span>
          
          <div className="relative overflow-hidden inline-block h-10 sm:h-14 md:h-16 flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`inline-block ${
                  theme === 'light' ? 'text-purple-600' : 'text-purple-400'
                }`}
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Line 4: Brief Intro Paragraph */}
        <motion.p
          custom={3}
          variants={textVariants}
          className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}
        >
          I craft innovative and user-centric digital experiences, from concept to deployment. 
          Check out my latest full-stack project, JournalApp!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;