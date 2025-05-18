import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = ({ formCardVisible, theme }) => {
  return (
    <section
      id="contact"
      className={`min-h-screen py-16 px-4 md:px-8 flex flex-col items-center justify-center relative overflow-hidden`}
    >
      <div className="flex items-center justify-center p-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: formCardVisible ? 1 : 0, y: formCardVisible ? 0 : 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`form_card p-8 md:p-12 rounded-xl shadow-xl max-w-lg w-full ${formCardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} ${
            theme === 'light' ? 'bg-white text-neutral-dark' : 'bg-neutral-dark text-neutral-light'
          }`}
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-8 text-center text-accent-teal`}>Get In Touch</h2>
          <form action="https://formspree.io/f/xvgzezan" method="POST">
            <div className="mb-6">
              <label htmlFor="name" className={`block mb-2 text-sm font-medium`}>Your Name</label>
              <input type="text" id="name" name="name" className={`text-sm rounded-lg block w-full p-3 ${
                theme === 'light' 
                  ? 'bg-white border-neutral-dark/30 text-neutral-dark focus:ring-accent-teal focus:border-accent-teal placeholder:text-neutral-dark/50' 
                  : 'bg-primary-dark/50 border-neutral-light/30 text-neutral-light focus:ring-accent-teal focus:border-accent-teal placeholder:text-neutral-light/50'
              }`} placeholder="John Doe" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className={`block mb-2 text-sm font-medium`}>Your Email</label>
              <input type="email" id="email" name="email" className={`text-sm rounded-lg block w-full p-3 ${
                theme === 'light' 
                  ? 'bg-white border-neutral-dark/30 text-neutral-dark focus:ring-accent-teal focus:border-accent-teal placeholder:text-neutral-dark/50' 
                  : 'bg-primary-dark/50 border-neutral-light/30 text-neutral-light focus:ring-accent-teal focus:border-accent-teal placeholder:text-neutral-light/50'
              }`} placeholder="john.doe@example.com" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className={`block mb-2 text-sm font-medium`}>Message</label>
              <textarea id="message" name="message" rows="4" className={`text-sm rounded-lg block w-full p-3 ${
                theme === 'light' 
                  ? 'bg-white border-neutral-dark/30 text-neutral-dark focus:ring-accent-teal focus:border-accent-teal placeholder:text-neutral-dark/50' 
                  : 'bg-primary-dark/50 border-neutral-light/30 text-neutral-light focus:ring-accent-teal focus:border-accent-teal placeholder:text-neutral-light/50'
              }`} placeholder="Your message..." required></textarea>
            </div>
            <button 
              type="submit" 
              className={`w-full font-medium rounded-lg text-base px-6 py-3 text-center transition-colors duration-300 ease-in-out focus:ring-4 focus:outline-none ${
                theme === 'light' 
                  ? 'text-white bg-highlight-orange hover:bg-highlight-orange/90 focus:ring-highlight-orange focus:ring-offset-white' 
                  : 'text-neutral-dark bg-highlight-orange hover:bg-highlight-orange/90 focus:ring-highlight-orange focus:ring-offset-neutral-dark'
              }`}
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