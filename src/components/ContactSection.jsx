import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = ({ formCardVisible, theme }) => {
  return (
    <section
      id="contact"
      className={`min-h-screen py-16 px-4 md:px-8 flex flex-col items-center justify-center relative overflow-hidden ${theme === 'light' ? 'bg-gray-50 text-slate-800' : 'bg-slate-900 text-slate-100'}`}
    >
      <div className="flex items-center justify-center p-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: formCardVisible ? 1 : 0, y: formCardVisible ? 0 : 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`form_card p-8 md:p-12 rounded-xl shadow-xl max-w-lg w-full ${formCardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} ${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 bg-opacity-90 text-slate-100'}`}
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-8 text-center ${theme === 'light' ? 'text-purple-600' : 'text-blue-400'}`}>Get In Touch</h2>
          <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
            <div className="mb-6">
              <label htmlFor="name" className={`block mb-2 text-sm font-medium ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>Your Name</label>
              <input type="text" id="name" name="name" className={`text-sm rounded-lg block w-full p-3 ${theme === 'light' ? 'bg-gray-100 border-gray-300 text-slate-900 focus:ring-purple-500 focus:border-purple-500' : 'bg-slate-700 border-slate-600 text-slate-100 focus:ring-blue-500 focus:border-blue-500'}`} placeholder="John Doe" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className={`block mb-2 text-sm font-medium ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>Your Email</label>
              <input type="email" id="email" name="email" className={`text-sm rounded-lg block w-full p-3 ${theme === 'light' ? 'bg-gray-100 border-gray-300 text-slate-900 focus:ring-purple-500 focus:border-purple-500' : 'bg-slate-700 border-slate-600 text-slate-100 focus:ring-blue-500 focus:border-blue-500'}`} placeholder="john.doe@example.com" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className={`block mb-2 text-sm font-medium ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>Message</label>
              <textarea id="message" name="message" rows="4" className={`text-sm rounded-lg block w-full p-3 ${theme === 'light' ? 'bg-gray-100 border-gray-300 text-slate-900 focus:ring-purple-500 focus:border-purple-500' : 'bg-slate-700 border-slate-600 text-slate-100 focus:ring-blue-500 focus:border-blue-500'}`} placeholder="Your message..." required></textarea>
            </div>
            <button 
              type="submit" 
              className={`w-full font-medium rounded-lg text-base px-6 py-3 text-center transition-colors duration-300 ease-in-out ${theme === 'light' ? 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-400' : 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800'}`}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 