import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = ({ formCardVisible, theme }) => {
  return (
    <section
      id="contact"
      className="min-h-screen py-16 px-4 md:px-8 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center p-8 w-full max-w-xl">
        
        {/* Glowy "Let's Connect!" Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-8 text-center"
        >
          <h3 className={`text-xl font-semibold mb-6 flex items-center gap-2 ${
            theme === 'light' ? 'text-neutral-dark' : 'text-neutral-light'
          }`}>
            Let's Connect! <span className="animate-bounce inline-block">👋</span>
          </h3>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            {/* Glowy Email Button */}
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ease-in-out bg-neutral-800 text-white border border-neutral-700/60 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:border-neutral-500 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>Email Me</span>
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-colors duration-200 ${
                theme === 'light'
                  ? 'text-neutral-dark/80 hover:text-neutral-dark'
                  : 'text-neutral-light/80 hover:text-neutral-light'
              }`}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Existing Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: formCardVisible ? 1 : 0, y: formCardVisible ? 0 : 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`form_card p-8 md:p-12 rounded-xl shadow-xl w-full ${formCardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} ${
            theme === 'light' ? 'bg-white text-neutral-dark' : 'bg-neutral-dark text-neutral-light'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-accent-teal">Get In Touch</h2>
          <form action="https://formspree.io/f/xvgzezan" method="POST">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className={`text-sm rounded-lg block w-full p-3 ${
                  theme === 'light' 
                    ? 'bg-white border-neutral-dark/30 text-neutral-dark focus:ring-accent-teal focus:border-accent-teal placeholder:text-neutral-dark/50' 
                    : 'bg-primary-dark/50 border-neutral-light/30 text-neutral-light focus:ring-accent-teal focus:border-accent-teal placeholder:text-neutral-light/50'
                }`} 
                placeholder="John Doe" 
                required 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className={`text-sm rounded-lg block w-full p-3 ${
                  theme === 'light' 
                    ? 'bg-white border-neutral-dark/30 text-neutral-dark focus:ring-accent-teal focus:border-accent-teal placeholder:text-neutral-dark/50' 
                    : 'bg-primary-dark/50 border-neutral-light/30 text-neutral-light focus:ring-accent-teal focus:border-accent-teal placeholder:text-neutral-light/50'
                }`} 
                placeholder="john.doe@example.com" 
                required 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                className={`text-sm rounded-lg block w-full p-3 ${
                  theme === 'light' 
                    ? 'bg-white border-neutral-dark/30 text-neutral-dark focus:ring-accent-teal focus:border-accent-teal placeholder:text-neutral-dark/50' 
                    : 'bg-primary-dark/50 border-neutral-light/30 text-neutral-light focus:ring-accent-teal focus:border-accent-teal placeholder:text-neutral-light/50'
                }`} 
                placeholder="Your message..." 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`w-full font-medium rounded-lg text-base px-6 py-3 text-center transition-colors duration-300 ease-in-out focus:ring-4 focus:outline-none ${
                theme === 'light' 
                  ? 'text-neutral-dark bg-highlight-orange hover:bg-highlight-orange/90 focus:ring-highlight-orange focus:ring-offset-white' 
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