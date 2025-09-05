"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  MessageCircle,
  MapPin,
  Eye
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Abdelrahman-7z7/",
    color: "hover:text-[#4A9782]"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abdelrahman-elorabi-2a726a216/",
    color: "hover:text-[#4A9782]"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/abdelrahman_7zz?igsh=MW1rNzJid3BwYTFlag%3D%3D&utm_source=qr",
    color: "hover:text-[#4A9782]"
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/237612345678",
    color: "hover:text-[#4A9782]"
  }
];

export default function Hero() {
  const [viewCount, setViewCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Get stored view count from localStorage or start with a base number
    const storedCount = localStorage.getItem('profileViewCount');
    const baseCount = storedCount ? parseInt(storedCount) : 1234;
    
    // Increment view count for this session
    const newCount = baseCount + 1;
    localStorage.setItem('profileViewCount', newCount.toString());
    
    // Animate the count up
    const timer = setTimeout(() => {
      setViewCount(newCount);
      setIsVisible(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleViewProjects = () => {
    // TODO: Implement view projects functionality
    console.log("View Projects clicked");
  };

  const handleGetInTouch = () => {
    // TODO: Implement get in touch functionality
    console.log("Get In Touch clicked");
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 py-8 pt-20 relative"
      aria-label="Hero section"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side - Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            {/* Availability Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A9782]/20 backdrop-blur-sm border border-[#4A9782]/30 rounded-full text-[#FFF9E5] text-sm font-medium"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Available for Freelance & Full-Time Jobs
            </motion.div>

            {/* Name - Typewriter Effect */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFF9E5] leading-tight"
            >
              Abdelrahman Reyad Elorabi
            </motion.h1>

            {/* Title/Specialist */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-[#FFF9E5]/90 font-medium"
            >
              Backend Engineer | Fullstack Developer | Database Specialist
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-[#FFF9E5]/80"
            >
              <MapPin className="w-5 h-5" />
              <span>Istanbul, Turkey</span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href= "#projects"
                onClick={handleViewProjects}
                className="px-8 py-4 bg-[#4A9782] hover:bg-[#4A9782]/80 text-[#FFF9E5] font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                whileHover={{ y: -5 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href= "#contact"
                onClick={handleGetInTouch}
                className="px-8 py-4 border-2 border-[#4A9782] text-[#4A9782] hover:bg-[#4A9782] hover:text-[#FFF9E5] font-semibold rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                whileHover={{ y: -5 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center lg:justify-start gap-6 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/5 backdrop-blur-sm border border-[#DCD0A8]/20 rounded-full text-[#FFF9E5] transition-all duration-300 hover:scale-105 hover:bg-white/10 ${social.color}`}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Viewer Counter */}
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-2 text-[#FFF9E5]/60 text-sm pt-4"
              >
                <Eye className="w-4 h-4" />
                <span>{viewCount.toLocaleString()} profile views</span>
              </motion.div>
            )}
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative">
              {/* Circular Image Container */}
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A9782]/20 to-[#DCD0A8]/20 rounded-full blur-2xl"></div>
                
                {/* Main Image Container */}
                <div className="relative w-full h-full bg-gradient-to-br from-[#4A9782]/10 to-[#DCD0A8]/10 backdrop-blur-sm border border-[#DCD0A8]/30 rounded-full overflow-hidden shadow-2xl">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 md:w-40 md:h-40 bg-[#4A9782]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl md:text-6xl text-[#FFF9E5]/60">👨‍💻</span>
                      </div>
                      <p className="text-[#FFF9E5]/60 text-sm">Your Photo Here</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-[#4A9782]/30 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#DCD0A8]/30 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 