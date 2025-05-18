import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectOverlay = ({ overlayVisible, handleCloseOverlay, projectDetailsContent, theme }) => {
  useEffect(() => {
    if (overlayVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [overlayVisible]);

  if (!projectDetailsContent && !overlayVisible) return null; // Don't render if no content and not set to be visible

  return (
    <AnimatePresence>
      {overlayVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 ${theme === 'light' ? 'bg-black/70' : 'bg-slate-900/80'} backdrop-blur-sm`}
          onClick={handleCloseOverlay} // Close on backdrop click
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative p-6 sm:p-8 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 text-slate-100'}`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
          >
            <button 
              onClick={handleCloseOverlay} 
              className={`absolute top-4 right-4 text-3xl transition-colors ${theme === 'light' ? 'text-slate-500 hover:text-blue-600' : 'text-slate-400 hover:text-blue-400'}`}
              aria-label="Close project details"
            >
              <FaTimes />
            </button>
            <div 
              className={`prose prose-sm sm:prose-base max-w-none ${theme === 'light' ? 'prose-slate' : 'prose-invert'} prose-headings:font-semibold prose-a:transition-colors ${theme === 'light' ? 'prose-headings:text-blue-600 prose-a:text-blue-500 hover:prose-a:text-blue-700' : 'prose-headings:text-blue-400 prose-a:text-blue-400 hover:prose-a:text-blue-300'}`}
            >
              {projectDetailsContent}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectOverlay; 