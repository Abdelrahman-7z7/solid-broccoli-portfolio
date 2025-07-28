"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ArrowUp } from "lucide-react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(1204);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Get stored visitor count or use default
    const storedCount = localStorage.getItem('footerVisitorCount');
    const baseCount = storedCount ? parseInt(storedCount) : 1204;
    
    // Increment for this session
    const newCount = baseCount + 1;
    localStorage.setItem('footerVisitorCount', newCount.toString());
    setVisitorCount(newCount);

    // Handle scroll to top button visibility
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button when scrolled down, but hide when near footer
      const isNearFooter = scrollY + windowHeight > documentHeight - 100;
      setShowScrollTop(scrollY > 500 && !isNearFooter);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-[#4A9782] text-[#FFF9E5] rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.footer
        className="w-full bg-[#0c0c0c] border-t border-[#DCD0A8]/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-full px-4 py-4">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between max-w-6xl mx-auto">
            {/* Left - Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[#FFF9E5]/70 text-sm"
            >
              © 2025 Abdelrahman Reyad Elorabi. All rights reserved.
            </motion.div>

            {/* Right - Visitor Counter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-[#FFF9E5]/70 text-sm"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-1"
              >
                <Eye className="w-4 h-4" />
                <span>{visitorCount.toLocaleString()} visitors</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-3 text-center max-w-6xl mx-auto">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[#FFF9E5]/70 text-sm"
            >
              © 2025 Abdelrahman Reyad Elorabi. All rights reserved.
            </motion.div>

            {/* Visitor Counter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 text-[#FFF9E5]/70 text-sm"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-1"
              >
                <Eye className="w-4 h-4" />
                <span>{visitorCount.toLocaleString()} visitors</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </>
  );
} 