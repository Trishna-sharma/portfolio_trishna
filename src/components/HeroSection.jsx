import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = ({ theme }) => {
  const roles = [
    "Full-Stack Developer",
    "QA Engineer",
    "Web Developer"
  ];

  const [index, setIndex] = useState(0);

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

  return (
    <section id="home" className="w-full max-w-full py-4 relative overflow-hidden">
      <motion.div
        className="w-full flex flex-col items-start justify-center"
        initial="hidden"
        animate="visible"
      >
        {/* Status Tag */}
        <motion.div
          custom={0}
          variants={textVariants}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 border ${
            theme === 'light'
              ? 'bg-purple-50 border-purple-200 text-purple-700'
              : 'bg-purple-950/40 border-purple-500/30 text-purple-300'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for New Projects</span>
        </motion.div>

        {/* Headline */}
        <motion.span
          custom={1}
          variants={textVariants}
          className="block text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-1"
        >
          Hey.
        </motion.span>
        
        <motion.span
          custom={2}
          variants={textVariants}
          className="block text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2"
        >
          I'm <span className={theme === 'light' ? 'text-purple-600' : 'text-purple-400'}>Trishna</span>,
        </motion.span>

        {/* Animated Role */}
        <motion.div
          custom={3}
          variants={textVariants}
          className="text-xl sm:text-3xl md:text-4xl font-semibold mb-3 flex flex-wrap items-center gap-x-2"
        >
          <span>a</span>
          <div className="relative overflow-hidden inline-flex items-center h-8 sm:h-10">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`inline-block font-bold ${
                  theme === 'light' ? 'text-purple-600' : 'text-purple-400'
                }`}
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Intro Text */}
        <motion.p
          custom={4}
          variants={textVariants}
          className={`text-xs sm:text-base leading-relaxed max-w-xl ${
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