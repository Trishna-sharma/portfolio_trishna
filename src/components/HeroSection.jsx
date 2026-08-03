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
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section
      id="home"
      className={`w-full py-6 relative overflow-hidden transition-colors ${
        theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-900 text-slate-100'
      }`}
    >
      <motion.div
        /* Updated width & padding to match MyWorkSection layout */
        className="z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-start justify-center text-left"
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
          className={`block text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-1 ${
            theme === 'light' ? 'text-slate-900' : 'text-slate-100'
          }`}
        >
          Hey.
        </motion.span>
        
        {/* Line 2: I'm Trishna, */}
        <motion.span
          custom={2}
          variants={textVariants}
          className={`block text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-2 ${
            theme === 'light' ? 'text-slate-900' : 'text-slate-100'
          }`}
        >
          I'm <span className={theme === 'light' ? 'text-purple-600' : 'text-purple-400'}>Trishna</span>,
        </motion.span>

        {/* Line 3: Animated Rotating Titles */}
        <motion.div
          custom={3}
          variants={textVariants}
          className={`text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 flex flex-wrap items-center gap-x-2 ${
            theme === 'light' ? 'text-slate-800' : 'text-slate-200'
          }`}
        >
          <span>a</span>
          
          <div className="relative overflow-hidden inline-flex items-center h-8 sm:h-12">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`inline-block font-extrabold ${
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
          className={`text-xs sm:text-base leading-relaxed max-w-2xl ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}
        >
          I craft innovative and user-centric digital experiences, from concept to deployment. 
          Let me know if you have a project in mind!!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;