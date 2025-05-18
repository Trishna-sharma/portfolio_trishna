import React from 'react';
import profilePicture from '../assets/images/profile_picture.jpg'; // Assuming this path and filename
import { motion } from 'framer-motion';

const AboutMeSection = ({ infoCardVisible, theme }) => {
  return (
    <section
      id="about-me"
      className={`min-h-screen py-16 px-4 md:px-8 flex flex-col items-center justify-center relative overflow-hidden ${theme === 'light' ? 'bg-gray-50 text-slate-800' : 'bg-slate-900 text-slate-100'}`}
    >
      <div className="flex items-center justify-center p-8 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: infoCardVisible ? 1 : 0, scale: infoCardVisible ? 1 : 0.8 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`info_card p-8 md:p-12 rounded-xl shadow-xl max-w-2xl w-full flex flex-col items-center ${infoCardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} ${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 bg-opacity-90 text-slate-100'}`}
        >
          <img 
            src={profilePicture} 
            alt="Trishna Shil" 
            className={`rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover mb-8 border-4 shadow-lg ${theme === 'light' ? 'border-purple-500' : 'border-blue-400'}`}
          />
          <h2 className={`text-3xl sm:text-4xl font-bold mb-6 text-center ${theme === 'light' ? 'text-purple-600' : 'text-blue-400'}`}>About Me</h2>
          <div className={`text-center sm:text-left ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Hello! I'm Trishna, a versatile developer and designer with a keen eye for detail and a love for creating seamless user experiences. My journey in the tech world has equipped me with a robust skill set spanning front-end and back-end development, UI/UX principles, and emerging technologies.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              I thrive on challenges and am constantly exploring new tools and techniques to bring innovative ideas to life. Whether it's crafting an intuitive mobile app, developing a dynamic website, or diving into the world of machine learning, I approach every project with dedication and a collaborative spirit.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection; 