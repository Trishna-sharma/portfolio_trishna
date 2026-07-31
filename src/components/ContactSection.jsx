import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = ({ formCardVisible, theme }) => {
  return (
    <section
      id="contact"
      className="min-h-screen py-16 px-4 md:px-8 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* 1. Ambient Background Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[380px] h-[380px] bg-accent-teal/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-[280px] h-[280px] bg-highlight-orange/10 rounded-full blur-[100px]" />
      </div>

      <div className="flex items-center justify-center p-4 sm:p-8 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: formCardVisible ? 1 : 0, y: formCardVisible ? 0 : 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`form_card p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg w-full backdrop-blur-md transition-all duration-300 border ${
            formCardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          } ${
            theme === 'light' 
              ? 'bg-white/85 border-neutral-200/80 shadow-neutral-900/5' 
              : 'bg-neutral-dark/60 border-white/10 shadow-black/50'
          }`}
        >
          {/* Header Accent */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-accent-teal tracking-tight mb-2">
              Get In Touch
            </h2>
            <p className="text-xs sm:text-sm opacity-70">
              Have a project in mind? Let's build something awesome.
            </p>
          </div>

          <form action="https://formspree.io/f/xvgzezan" method="POST" className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="flex items-center gap-1.5 mb-2 text-xs font-semibold uppercase tracking-wider opacity-80">
                <span className="text-accent-teal font-mono">//</span> Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`text-sm rounded-xl block w-full p-3.5 outline-none transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-neutral-100/80 border border-neutral-300/80 text-neutral-dark focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/30 focus:bg-white placeholder:text-neutral-400'
                    : 'bg-primary-dark/40 border border-white/10 text-neutral-light focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/30 focus:bg-primary-dark/70 placeholder:text-neutral-500'
                }`}
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="flex items-center gap-1.5 mb-2 text-xs font-semibold uppercase tracking-wider opacity-80">
                <span className="text-accent-teal font-mono">//</span> Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`text-sm rounded-xl block w-full p-3.5 outline-none transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-neutral-100/80 border border-neutral-300/80 text-neutral-dark focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/30 focus:bg-white placeholder:text-neutral-400'
                    : 'bg-primary-dark/40 border border-white/10 text-neutral-light focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/30 focus:bg-primary-dark/70 placeholder:text-neutral-500'
                }`}
                placeholder="john.doe@example.com"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="flex items-center gap-1.5 mb-2 text-xs font-semibold uppercase tracking-wider opacity-80">
                <span className="text-accent-teal font-mono">//</span> Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className={`text-sm rounded-xl block w-full p-3.5 outline-none transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-neutral-100/80 border border-neutral-300/80 text-neutral-dark focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/30 focus:bg-white placeholder:text-neutral-400'
                    : 'bg-primary-dark/40 border border-white/10 text-neutral-light focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/30 focus:bg-primary-dark/70 placeholder:text-neutral-500'
                }`}
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            {/* Neon Glowy Button */}
            <button
              type="submit"
              className={`relative group overflow-hidden w-full font-semibold rounded-xl text-base px-6 py-3.5 text-center transition-all duration-500 ease-in-out focus:outline-none ${
                theme === 'light'
                  ? 'text-neutral-dark bg-highlight-orange hover:bg-highlight-orange/95 shadow-[0_0_12px_rgba(255,140,0,0.4)] hover:shadow-[0_0_25px_rgba(255,140,0,0.85)]'
                  : 'text-neutral-dark bg-highlight-orange hover:bg-highlight-orange/95 shadow-[0_0_15px_rgba(255,140,0,0.5)] hover:shadow-[0_0_30px_rgba(255,140,0,0.9)]'
              }`}
            >
              <span className="relative inline-block py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-full group-hover:after:w-full after:h-[2px] after:bg-neutral-dark after:transition-all after:duration-500 after:ease-out">
                Send Message
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;