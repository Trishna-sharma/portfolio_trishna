import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

function ContactSection({ coverImage9, formCardVisible }) {
  return (
    <div 
      id="Contact" 
      className="relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ minHeight: '100vh' }}
    >
      <ParallaxBanner 
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        className="w-full h-full"
      >
        <ParallaxBannerLayer speed={-10}>
          <img 
            src={coverImage9} 
            alt="Contact Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="absolute inset-0 flex flex-col items-center justify-center py-16 md:py-24 px-4">
          <div className="text-center text-white mb-8 md:mb-12 z-[2]">
            <h1 className="text-4xl sm:text-5xl font-bold filter drop-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]">
              Contact Me
            </h1>
          </div>

          <div 
            id="form-card" 
            className={`bg-white bg-opacity-90 shadow-2xl rounded-lg w-11/12 max-w-2xl p-6 sm:p-8 text-center transition-all duration-500 ease-in-out z-[5] ${formCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
          >
            <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-md text-base placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-md text-base placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>
              <textarea 
                name="message" 
                placeholder="Your Message" 
                required 
                className="w-full min-h-[150px] sm:min-h-[200px] p-3 sm:p-4 border border-gray-300 rounded-md text-base resize-y placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 sm:py-4 px-5 rounded-md text-base transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}

export default ContactSection; 