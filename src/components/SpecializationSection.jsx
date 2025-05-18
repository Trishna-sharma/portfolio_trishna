import React from 'react';
import { FaReact, FaNodeJs, FaFigma, FaAndroid, FaBrain, FaPython, FaCss3Alt, FaPalette, FaUnity, FaHtml5, FaJsSquare, FaGitAlt, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';
import { TbBrandCSharp, TbBrandVscode } from 'react-icons/tb';
import { motion } from 'framer-motion';

function SpecializationSection({ myFieldVisible, theme }) {
  const specializations = [
    {
      name: "Frontend Development",
      details: "Crafting responsive and dynamic user interfaces with modern frameworks.",
      icons: [FaReact, FaHtml5, FaCss3Alt, FaJsSquare],
      iconColors: ['text-sky-400', 'text-orange-500', theme === 'light' ? 'text-purple-500' : 'text-blue-500', 'text-yellow-400']
    },
    {
      name: "UI/UX Design",
      details: "Figma, Adobe XD",
      icons: [FaFigma, FaPalette],
      iconColors: ['text-pink-500', theme === 'light' ? 'text-purple-500' : 'text-indigo-500']
    },
    {
      name: "Mobile App Development",
      details: "React Native, Android Studio",
      icons: [FaReact, FaAndroid],
      iconColors: ['text-sky-400', 'text-lime-500']
    },
    {
      name: "Game Development",
      details: "Unity, C#",
      icons: [FaUnity, TbBrandCSharp],
      iconColors: [theme === 'light' ? 'text-slate-700' : 'text-slate-300', 'text-purple-400']
    },
    {
      name: "Machine Learning",
      details: "Python, Scikit-learn",
      icons: [FaPython, FaBrain],
      iconColors: ['text-yellow-400', 'text-rose-400']
    },
    {
      name: "Styling & Frameworks",
      details: "Tailwind CSS, CSS3",
      icons: [FaCss3Alt, FaCss3Alt],
      iconColors: ['text-teal-500', theme === 'light' ? 'text-purple-500' : 'text-blue-500']
    },
    {
      name: "Server Development",
      details: "Node.js, Express",
      icons: [FaNodeJs, FaServer],
      iconColors: ['text-green-400', theme === 'light' ? 'text-gray-700' : 'text-gray-400']
    },
    {
      name: "Database Management",
      details: "MongoDB, PostgreSQL",
      icons: [FaDatabase, FaDatabase], 
      iconColors: ['text-green-500', theme === 'light' ? 'text-purple-600' : 'text-blue-600']
    },
    {
      name: "Cloud Services",
      details: "AWS, Google Cloud",
      icons: [FaCloud, FaCloud],
      iconColors: ['text-orange-400', theme === 'light' ? 'text-purple-500' : 'text-blue-500']
    }
  ];

  return (
    <section
      id="specialization"
      className={`min-h-screen py-16 px-4 md:px-8 flex flex-col items-center justify-center relative overflow-hidden ${theme === 'light' ? 'bg-gray-100 text-slate-800' : 'bg-slate-900 text-slate-100'}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: myFieldVisible ? 1 : 0, y: myFieldVisible ? 0 : -50 }}
        transition={{duration: 0.7, ease: "easeOut"}}
        className={`text-4xl sm:text-5xl font-bold mb-12 md:mb-16 ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}
      >
        My Specializations
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {specializations.map((spec, index) => (
          <div 
            key={spec.name} 
            className={`p-6 rounded-xl shadow-xl transition-all duration-300 ease-out transform hover:scale-105 border ${myFieldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${theme === 'light' ? 'bg-white hover:shadow-purple-500/20 border-gray-200 hover:border-purple-400' : 'bg-slate-800 bg-opacity-90 hover:shadow-blue-500/30 border-transparent hover:border-blue-500'}`}
            style={{ transitionDelay: `${myFieldVisible ? index * 150 : 0}ms` }}
          >
            <div className="flex justify-center items-center space-x-4 text-5xl sm:text-6xl mb-6">
              {spec.icons.map((IconComponent, i) => (
                <IconComponent key={i} className={spec.iconColors[i] || (theme === 'light' ? 'text-slate-700' : 'text-slate-100')} />
              ))}
            </div>
            <h3 className={`text-2xl font-semibold mb-3 ${theme === 'light' ? 'text-purple-600' : 'text-blue-400'}`}>{spec.name}</h3>
            <p className={`text-base min-h-[40px] ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>{spec.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecializationSection; 