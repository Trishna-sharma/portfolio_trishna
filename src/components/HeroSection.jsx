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
        delay: i * 0.12,
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
      className={`min-h-[80vh] flex flex-col justify-center items-start px-5 sm:px-12 md:px-16 py-10 sm:py-16 md:py-20 relative overflow-hidden transition-colors ${
        theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-900 text-slate-100'
      }`}
    >
      <motion.div
        className="z-10 w-full max-w-4xl mx-auto flex flex-col items-start justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Tag to Anchor Top Space */}
        <motion.div
          custom={0}
          variants={textVariants}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 border ${
            theme === 'light'
              ? 'bg-purple-50 border-purple-200 text-purple-700'
              : 'bg-purple-950/40 border-purple-500/30 text-purple-300'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for New Projects</span>
        </motion.div>

        {/* Line 1: Hey. */}
        <motion.span
          custom={1}
          variants={textVariants}
          className={`block text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-1 ${
            theme === 'light' ? 'text-slate-800' : 'text-slate-100'
          }`}
        >
          Hey.
        </motion.span>
        
        {/* Line 2: I'm Trishna, */}
        <motion.span
          custom={2}
          variants={textVariants}
          className={`block text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-3 ${
            theme === 'light' ? 'text-slate-800' : 'text-slate-100'
          }`}
        >
          I'm <span className={theme === 'light' ? 'text-purple-600' : 'text-purple-400'}>Trishna</span>,
        </motion.span>

        {/* Line 3: Animated Rotating Titles */}
        <motion.div
          custom={3}
          variants={textVariants}
          className={`text-2xl sm:text-4xl md:text-5xl font-semibold mb-5 flex flex-wrap items-center gap-x-2.5 ${
            theme === 'light' ? 'text-slate-700' : 'text-slate-200'
          }`}
        >
          <span>a</span>
          
          <div className="relative overflow-hidden inline-flex items-center h-9 sm:h-12 md:h-14">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`inline-block font-bold ${
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
          custom={4}
          variants={textVariants}
          className={`text-sm sm:text-base md:text-lg leading-relaxed max-w-xl ${
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